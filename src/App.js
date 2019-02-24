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
            <Col xs={12} md={6}>
              <NameContainer>
                <NameBorder>
                  <Name>Clio</Name>
                  <Name style={{ color: "rgb(30, 144, 255)" }}>Harper</Name>
                </NameBorder>
              </NameContainer>
            </Col>
            <GeneralSection
              address="1209 1/2 W 27th St, Los Angeles, CA"
              phoneNumber="512-788-4342"
              email="clioharp@usc.edu"
              github="https://github.com/harpe116"
            />
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Row>
                <EducationSection />
                <WorkHistorySection />
                <LanguagesSection
                  languages={[
                    { language: "English", level: "Native" },
                    { language: "Spanish", level: "Full" },
                    { language: "French", level: "Limited" }
                  ]}
                />
              </Row>
            </Col>

            <Col xs={12} md={5} mdOffset={1}>
              <Row>
                <TechnicalSection />
                <HobbiesSection
                  hobbies={[
                    { name: "Certified Flight Instructor", icon: Airplane },
                    { name: "3D Printing", icon: Printer }
                  ]}
                />
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
