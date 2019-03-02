import React, { Component } from "react";
import { Grid, Row } from "react-styled-flexboxgrid";
import AceEditor from "react-ace";
import GithubCorner from "react-github-corner";
import styled from "styled-components";

import { Typography } from "@material-ui/core";
import "brace/mode/json";
import "brace/theme/monokai";

import ResumeForm from "../components/ResumeForm";

import ResumeTemplate from "../resume-template";
import ClioResumeJson from "../clio-resume.json";

const Button = styled.button`
  background: #1e90ff;
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #fff;
  border-radius: 3px;
`;

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resumeJson: JSON.stringify(
        props.resume ? props.resume : ResumeTemplate,
        null,
        2
      )
    };

    window.loadJson = async (resume, themeColor) => {
      this.setState({ resume: resume });
      this.props.updateResumeJson(resume, true, themeColor);
      this.props.history.push("/resume");
      this.forceUpdate();
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateClioResume = this.generateClioResume.bind(this);
  }

  generateClioResume() {
    this.props.updateResumeJson(ClioResumeJson);
    this.props.history.push("/resume");
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
    this.props.updateResumeJson(json);
    this.props.history.push("/resume");
  }

  render() {
    return (
      <Grid>
        <GithubCorner
          href="https://github.com/harpe116/resume"
          bannerColor="rgb(30, 144, 255)"
        />
        <Row style={{ margin: "2rem" }} center="xs">
          <Typography align="center" variant="h1">
            Hi there!
          </Typography>
        </Row>
        <Row center="xs">
          <Typography variant="h3">I'm Clio</Typography>
        </Row>
        <Row center="xs" style={{ margin: "2rem" }}>
          <Typography variant="h6">
            I decided to host my resume on the web and it's turned into a tool
            to help you create yours just as easily. You can click "See my
            resume example" to take a look at my resume, or create your own
            following the template I've started you out with below.
          </Typography>
        </Row>
        <ResumeForm />
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
    );
  }
}

export default Index;
