import React, { Component } from "react";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import withNavigation from "../components/hocs/withNavigation";

import styled from "styled-components";
import ReactGA from "react-ga";
import { Link } from "react-router-dom";

import HeroImage from "../assets/resume_hero.jpg";

import { Typography, Button } from "@material-ui/core";
import Pricing from "../components/Pricing";
import LandingFooter from "../components/LandingFooter";

const Title = styled(Typography)`
  font-family: "IBM Plex Mono", monospace;
  max-width: 800px;
`;

const Hero = styled.img`
  width: auto;
  max-width: 100%;
  height: calc(100vh - 100px);
  object-fit: cover;
`;

const HeroCol = styled(Col)`
  @media only screen and (max-width: 1000px) {
    position: absolute;
    z-index: 1;
    left: 0;
    padding: 0;
    margin: 0;
    margin-bottom: 2rem;
  }
`;

class Index extends Component {
  constructor(props) {
    super(props);
    ReactGA.pageview("/");
  }

  render() {
    return (
      <div style={{ background: "#8295ff" }}>
        <Grid fluid style={{ paddingLeft: 0, position: "relative" }}>
          <Row middle="xs">
            <HeroCol xs={12} md={7}>
              <Hero src={HeroImage} />
            </HeroCol>
            <Col xs={12} md={5} style={{ zIndex: 2 }}>
              <Row center="xs" middle="xs">
                <Typography
                  align="center"
                  variant="h6"
                  style={{ color: "white" }}
                >
                  ONLINE RESUME BUILDER
                </Typography>

                <Title align="center" variant="h3" style={{ color: "white" }}>
                  Searching for a job is stressful.
                </Title>
                <Title
                  align="center"
                  variant="h3"
                  style={{ marginTop: "1rem", color: "white" }}
                >
                  Creating a resume shouldn't be.
                </Title>
                <Row center="xs">
                  <Button
                    style={{
                      marginTop: "2rem",
                      color: "white",
                      borderColor: "white"
                    }}
                    variant="outlined"
                    color="primary"
                  >
                    Start creating
                  </Button>
                </Row>
              </Row>
            </Col>
          </Row>
        </Grid>
        <Pricing />
        <LandingFooter />
      </div>
    );
  }
}

export default withNavigation(Index);
