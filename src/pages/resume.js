import React, { Component, Fragment } from "react";
import GithubCorner from "react-github-corner";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { saveAs } from "file-saver";
import { ChromePicker } from "react-color";
import Modal from "react-modal";
import { Elements } from "react-stripe-elements";
import ReactGA from "react-ga";

import ResumeContext from "../ResumeContext";

import EducationSection from "../components/EducationSection";
import GeneralSection from "../components/GeneralSection";
import WorkHistorySection from "../components/WorkHistorySection";
import TechnicalSection from "../components/TechnicalSection";
import HobbiesSection from "../components/HobbiesSection";
import LanguagesSection from "../components/LanguagesSection";
import Footer from "../components/Footer";
import PaymentModal from "../components/PaymentModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    maxWidth: "100vw",
    padding: 0
  }
};

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

const Button = styled.button`
  background: ${props => props.themeColor};
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

    ReactGA.pageview("/resume");

    this.state = {
      puppeteer: false,
      generatingPDF: false,
      pickerOpen: false,
      isModalOpen: false
    };
    this.generatePDF = this.generatePDF.bind(this);
  }

  async generatePDF(resume, themeColor, pdfOnly, stripeToken, email) {
    this.setState({ generatingPDF: true });
    debugger;
    const response = await axios({
      method: "post",
      // url: "https://resumeserver.herokuapp.com/",
      url: "http://localhost:3000/",
      data: {
        resume,
        themeColor,
        websiteUrl: "https://hire.clioharper.xyz/",
        // websiteUrl: "http://localhost:3001",
        margin: {
          left: "0.5 in",
          right: "0.5 in"
        },
        pdfOnly,
        stripeToken,
        email
      },
      json: true,
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
    const { generatingPDF, pickerOpen, isModalOpen, error } = this.state;
    const { handleColorChange } = this.props;

    return (
      <ResumeContext.Consumer>
        {context => {
          const { puppeteer, resume, themeColor } = context;
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
            <div className="App" style={{ position: "relative" }}>
              <Modal
                isOpen={isModalOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={() => {
                  if (!generatingPDF) {
                    this.setState({ isModalOpen: !isModalOpen });
                  }
                }}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <Elements>
                  <PaymentModal
                    loading={generatingPDF}
                    handleTokenReceived={(pdfOnly, token, email) =>
                      this.generatePDF(
                        resume,
                        themeColor,
                        pdfOnly,
                        token,
                        email
                      )
                    }
                    setLoading={loading =>
                      this.setState({ generatingPDF: loading })
                    }
                    setPaymentError={error => this.setState({ error })}
                    error={error}
                  />
                </Elements>
              </Modal>
              {!puppeteer && (
                <Fragment>
                  <GithubCorner
                    href="https://github.com/harpe116/resume"
                    bannerColor={themeColor}
                  />
                  <Button
                    onClick={() => this.setState({ isModalOpen: true })}
                    themeColor={themeColor}
                  >
                    Generate and download PDF version
                  </Button>
                  <Link to="/editor">
                    <Button themeColor={themeColor}>Back to the editor</Button>
                  </Link>
                  <Button
                    onClick={() => this.setState({ pickerOpen: !pickerOpen })}
                    themeColor={themeColor}
                  >
                    Change theme color
                  </Button>
                </Fragment>
              )}
              <Grid>
                <Row center="xs">
                  {pickerOpen && (
                    <ChromePicker
                      onChange={handleColorChange}
                      color={themeColor}
                    />
                  )}
                </Row>
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
                      <LanguagesSection
                        languages={languages}
                        themeColor={themeColor}
                      />
                    </Row>
                  </Col>

                  <Col xs={12} md={5} mdOffset={1}>
                    <Row>
                      <TechnicalSection
                        puppeteer={puppeteer}
                        themeColor={themeColor}
                        technicalSkills={technicalSkills}
                      />
                      <HobbiesSection
                        hobbies={hobbies}
                        themeColor={themeColor}
                      />
                    </Row>
                  </Col>
                </Row>
              </Grid>
              {!puppeteer && <Footer themeColor={themeColor} />}
            </div>
          );
        }}
      </ResumeContext.Consumer>
    );
  }
}

export default Resume;
