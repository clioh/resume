import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import GithubCorner from "react-github-corner";
import ReactGA from "react-ga";
import { Typography } from "@material-ui/core";
import axios from "axios";

import AceEditor from "react-ace";

import "brace/mode/json";
import "brace/theme/monokai";

import EducationSection from "./components/EducationSection";
import GeneralSection from "./components/GeneralSection";
import WorkHistorySection from "./components/WorkHistorySection";
import TechnicalSection from "./components/TechnicalSection";
import HobbiesSection from "./components/HobbiesSection";
import LanguagesSection from "./components/LanguagesSection";
import Footer from "./components/Footer";
import ResumeTemplate from "./resume-template";
import ClioResumeJson from "./clio-resume.json";
import "./App.css";

const NameBorder = styled.div`
  border: 3px solid #1e90ff;
  padding: 10px 20px;
  display: inline-block;
  left: 50%;
`;

const NameContainer = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
`;

const Name = styled.h1`
  text-transform: uppercase;
  text-align: center;
  line-height: 1.1;
  font-size: 4rem;
  margin: 0;
`;

const Button = styled.button`
  background: #1e90ff;
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #fff;
  border-radius: 3px;
`;

function initializeReactGA() {
  ReactGA.initialize("UA-135192995-1");
  ReactGA.pageview("/");
}

class App extends Component {
  constructor(props) {
    super(props);
    initializeReactGA();

    this.state = { resumeJson: JSON.stringify(ResumeTemplate, null, 2) };
    window.loadJson = async resume => {
      this.setState({ resume, loading: false, puppeteer: true });
      this.forceUpdate();
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.generatePDF = this.generatePDF.bind(this);
    this.generateClioResume = this.generateClioResume.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let json;
    try {
      json = JSON.parse(this.state.resumeJson);
    } catch (e) {
      this.setState({ error: e.message });
      return;
    }
    this.setState({ resume: json });
  }

  generateClioResume() {
    this.setState({ resume: ClioResumeJson });
  }

  async generatePDF() {
    const { resume } = this.state;
    this.setState({ generatingPDF: true });
    const response = await axios({
      method: "post",
      url: "https://resumeserver.herokuapp.com/",
      data: {
        resume
      },
      responseType: "arraybuffer",
      headers: {
        Accept: "application/pdf"
      }
    });
    const blob = new Blob([response.data], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `resume.pdf`;
    link.click();
    this.setState({ generatingPDF: false });
  }

  render() {
    const { resume, puppeteer, generatingPDF } = this.state;

    if (generatingPDF) {
      return (
        <Grid>
          <Row center="xs">Generating your PDF...</Row>
        </Grid>
      );
    }
    if (!resume) {
      return (
        <div className="App">
          <GithubCorner
            href="https://github.com/harpe116/resume"
            bannerColor="rgb(30, 144, 255)"
          />
          <Grid>
            <Row center="xs">
              <Typography variant="h1">Hi there! 👋</Typography>
            </Row>
            <Row center="xs">
              <Typography variant="h3">I'm Clio</Typography>
            </Row>
            <Row center="xs" style={{ margin: "2rem" }}>
              <Typography variant="h6">
                I decided to host my resume on the web and it's turned into a
                tool to help you create yours just as easily. You can click "See
                my resume example" to take a look at my resume, or create your
                own following the template I've started you out with below.
              </Typography>
            </Row>

            {this.state.error ? this.state.error : null}
            <form onSubmit={this.handleSubmit}>
              <Row center="xs">
                <AceEditor
                  onChange={newValue => this.setState({ resumeJson: newValue })}
                  value={this.state.resumeJson}
                  mode="json"
                  theme="monokai"
                  type="text"
                  name="resumeJson"
                  editorProps={{ $blockScrolling: true }}
                />
              </Row>
              <Row center="xs">
                <Button type="submit" value="Submit">
                  Generate resume
                </Button>
              </Row>
            </form>
            <Row center="xs">
              <Button onClick={this.generateClioResume}>
                See my example resume
              </Button>
            </Row>
          </Grid>
        </div>
      );
    }

    const {
      general,
      workHistory,
      education,
      languages,
      hobbies,
      technicalSkills
    } = resume;
    const { firstName, lastName, ...rest } = general;

    return (
      <div className="App">
        {!puppeteer && (
          <Fragment>
            <GithubCorner
              href="https://github.com/harpe116/resume"
              bannerColor="rgb(30, 144, 255)"
            />
            <Button onClick={this.generatePDF}>
              Generate and download PDF version
            </Button>
            <Button onClick={() => this.setState({ resume: null })}>
              Back to the editor
            </Button>
          </Fragment>
        )}
        <Grid>
          <Row middle="xs">
            <Col xs={12} sm={6}>
              <NameContainer>
                <NameBorder>
                  <Name>{firstName}</Name>
                  <Name style={{ color: "rgb(30, 144, 255)" }}>{lastName}</Name>
                </NameBorder>
              </NameContainer>
            </Col>
            <Col xs={12} sm={6}>
              <GeneralSection generalInfo={rest} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Row>
                <EducationSection education={education} />
                <WorkHistorySection workHistory={workHistory} />
                <LanguagesSection languages={languages} />
              </Row>
            </Col>

            <Col xs={12} md={5} mdOffset={1}>
              <Row>
                <TechnicalSection
                  puppeteer={puppeteer}
                  technicalSkills={technicalSkills}
                />
                <HobbiesSection hobbies={hobbies} />
              </Row>
            </Col>
          </Row>
        </Grid>
        {!puppeteer && <Footer />}
      </div>
    );
  }
}

export default App;
