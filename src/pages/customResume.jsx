import React, { Component } from "react";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import axios from "axios";

import EducationSection from "../components/EducationSection";
import GeneralSection from "../components/GeneralSection";
import WorkHistorySection from "../components/WorkHistorySection";
import TechnicalSection from "../components/TechnicalSection";
import HobbiesSection from "../components/HobbiesSection";
import LanguagesSection from "../components/LanguagesSection";
import Footer from "../components/Footer";

const NameBorder = styled.div`
  border: 3px solid ${props => props.themeColor};
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

class CustomResume extends Component {
  constructor(props) {
    super(props);
    const pathname = props.location.pathname.slice(1);
    this.getResumeJson(pathname);

    this.state = {
      resume: null,
      error: null,
      loading: true
    };
  }

  async getResumeJson(slug) {
    const { data, error } = await axios.get(
      `http://localhost:3000/resume?slug=${slug}`
    );

    if (data.statusCode === 404) {
      this.setState({ loading: false, error: "Resume not found" });
      return;
    }
    this.setState({
      loading: false,
      resume: data
    });
  }

  render() {
    const { resume, loading, error } = this.state;
    if (error) {
      return <Typography variant="h1">{error}</Typography>;
    }
    if (loading) {
      return <Typography variant="h1">Loading...</Typography>;
    }
    const {
      general,
      workHistory,
      education,
      languages,
      hobbies,
      technicalSkills,
      themeColor
    } = resume;
    const { firstName, lastName, ...rest } = general;

    return (
      <Grid>
        <Row middle="xs">
          <Col xs={12} sm={6}>
            <NameContainer>
              <NameBorder themeColor={themeColor}>
                <Name>{firstName}</Name>
                <Name style={{ color: themeColor }}>{lastName}</Name>
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
              <WorkHistorySection
                workHistory={workHistory}
                themeColor={themeColor}
              />
              <LanguagesSection languages={languages} themeColor={themeColor} />
            </Row>
          </Col>

          <Col xs={12} md={5} mdOffset={1}>
            <Row>
              <TechnicalSection
                puppeteer={false}
                themeColor={themeColor}
                technicalSkills={technicalSkills}
              />
              <HobbiesSection hobbies={hobbies} themeColor={themeColor} />
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default CustomResume;
