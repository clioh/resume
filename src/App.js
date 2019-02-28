import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import GithubCorner from "react-github-corner";

import EducationSection from "./components/EducationSection";
import GeneralSection from "./components/GeneralSection";
import WorkHistorySection from "./components/WorkHistorySection";
import TechnicalSection from "./components/TechnicalSection";
import HobbiesSection from "./components/HobbiesSection";
import LanguagesSection from "./components/LanguagesSection";
import Footer from "./components/Footer";
import "./App.css";

import Printer from "./icons/3d-printer.svg";
import Airplane from "./icons/airplane.svg";

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <GithubCorner
          href="https://github.com/harpe116/resume"
          bannerColor="rgb(30, 144, 255)"
        />
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
        <Footer />
      </div>
    );
  }
}

export default App;
