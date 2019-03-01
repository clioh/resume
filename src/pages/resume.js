import React, { Component, Fragment } from "react";
import GithubCorner from "react-github-corner";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { saveAs } from "file-saver";

import ResumeContext from "../ResumeContext";

import EducationSection from "../components/EducationSection";
import GeneralSection from "../components/GeneralSection";
import WorkHistorySection from "../components/WorkHistorySection";
import TechnicalSection from "../components/TechnicalSection";
import HobbiesSection from "../components/HobbiesSection";
import LanguagesSection from "../components/LanguagesSection";
import Footer from "../components/Footer";

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

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = { puppeteer: false, generatingPDF: false };
    this.generatePDF = this.generatePDF.bind(this);
  }

  async generatePDF(resume) {
    this.setState({ generatingPDF: true });
    const response = await axios({
      method: "post",
      url: "https://resumeserver.herokuapp.com/",
      data: {
        resume,
        websiteUrl: "https://hire.clioharper.xyz/",
        margin: {
          left: "0.5 in",
          right: "0.5in"
        }
      },
      responseType: "arraybuffer",
      headers: {
        Accept: "application/pdf"
      }
    });
    const blob = new Blob([response.data], { type: "application/pdf" });
    saveAs(blob, "resume.pdf");
    this.setState({ generatingPDF: false });
  }

  render() {
    const { generatingPDF } = this.state;

    if (generatingPDF) {
      return (
        <Grid>
          <Row middle="xs" center="xs">
            Generating your PDF...
          </Row>
        </Grid>
      );
    }

    return (
      <ResumeContext.Consumer>
        {context => {
          const { puppeteer, resume } = context;
          if (!resume) {
            return <Redirect to="/" />;
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
                  <Button onClick={() => this.generatePDF(resume)}>
                    Generate and download PDF version
                  </Button>
                  <Link to="/">
                    <Button>Back to the editor</Button>
                  </Link>
                </Fragment>
              )}
              <Grid>
                <Row middle="xs">
                  <Col xs={12} sm={6}>
                    <NameContainer>
                      <NameBorder>
                        <Name>{firstName}</Name>
                        <Name style={{ color: "rgb(30, 144, 255)" }}>
                          {lastName}
                        </Name>
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
        }}
      </ResumeContext.Consumer>
    );
  }
}

export default Resume;
