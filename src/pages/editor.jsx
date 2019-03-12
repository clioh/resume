import React, { Component } from "react";
import { Grid, Row } from "react-styled-flexboxgrid";
import AceEditor from "react-ace";
import { Button } from "@material-ui/core";

import "brace/mode/json";
import "brace/theme/monokai";

import ResumeTemplate from "../resume-template";
import ClioResumeJson from "../clio-resume.json";
import withNavigation from "../components/hocs/withNavigation";

class Editor extends Component {
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

export default withNavigation(Editor);
