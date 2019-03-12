import React, { Component } from "react";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";

const PricingContainer = styled(Col)`
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px transparent;
  background-color: rgba(255, 255, 255, 0.2);
  position: relative;
  transition: transform 0.2s ease-in-out;
  border-radius: 5px;
  &:hover {
    transform: scale(1.01);
  }
  height: 100%;
  max-width: 100%;
  margin-top: 50px;

  @media only screen and (min-width: 1000px) {
    ${props => (props.centerContainer ? "margin-top: 0;" : "")}
  }
`;

const PricingLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Divider = styled.hr`
  width: 88%;
  opacity: 0.3;
  color: #000;
  border: 0.5px solid #000;
  margin: 40px auto 30px auto;
`;

const PricingContent = styled.div`
  padding: 1rem;

  sup {
    font-size: 45px;
  }
`;

const Pricing = () => {
  return (
    <Grid style={{ marginTop: "10rem" }} fluid id="pricing">
      <Row center="xs">
        <PricingContainer sm={12} md={3} style={{ marginTop: "50px" }}>
          <PricingLink to="/editor">
            <PricingContent>
              <Row center="xs">
                <Typography variant="h6">Basic</Typography>
              </Row>
              <Row center="xs">
                <Typography variant="h1">
                  <sup>$</sup>1
                </Typography>
              </Row>
              <Divider />
              <Row>
                <Typography variant="p" align="center">
                  Our basic package includes a PDF generated with out beautiful
                  template as well as a copy of your resume text should you ever
                  need to come back and regenerate your resume.
                </Typography>
              </Row>
              <Row style={{ marginTop: "1rem" }}>
                <Typography variant="p">
                  <strong>Includes:</strong>
                  <ul>
                    <li>Customized PDF version of your resume</li>
                    <li>JSON file containing your information</li>
                  </ul>
                </Typography>
              </Row>
              <Row center="xs">
                <Button variant="outlined" color="primary">
                  Get started
                </Button>
              </Row>
            </PricingContent>
          </PricingLink>
        </PricingContainer>
        <PricingContainer sm={12} mdOffset={1} md={3} centerContainer={true}>
          <PricingLink to="/editor">
            <Row
              style={{
                background: "#3f51b5",
                width: "calc(100% + 16px)",
                margin: "0 -8px",
                left: 0,
                height: "50px",
                borderRadius: "5px",
                padding: 0
              }}
              center="xs"
              middle="xs"
            >
              <Typography style={{ color: "white" }} variant="h6">
                Our most popular
              </Typography>
            </Row>
            <PricingContent>
              <Row center="xs">
                <Typography variant="h6">Plus</Typography>
              </Row>
              <Row center="xs">
                <Typography variant="h1">
                  <sup>$</sup>5
                </Typography>
              </Row>
              <Divider />
              <Row>
                Our plus package not only includes a PDF version of your resume,
                but you'll also get a custom website to share with potential
                employers. You'll get to choose the address at checkout (i.e.
                swiftresume.io/johndoe).
              </Row>
              <Row style={{ marginTop: "1rem" }}>
                <Typography variant="p">
                  <strong>Includes:</strong>
                  <ul>
                    <li>A website link to your resume</li>
                    <li>Customized PDF version of your resume</li>
                    <li>JSON file containing your information</li>
                  </ul>
                </Typography>
              </Row>
              <Row center="xs">
                <Button variant="outlined" color="primary">
                  Get started
                </Button>
              </Row>
            </PricingContent>
          </PricingLink>
        </PricingContainer>
        <PricingContainer
          sm={12}
          md={3}
          mdOffset={1}
          style={{ marginTop: "50px" }}
        >
          <PricingLink to="/editor">
            <PricingContent>
              <Row center="xs">
                <Typography variant="h6">Premium</Typography>
              </Row>
              <Row center="xs">
                <Typography variant="h1">
                  <sup>$</sup>10
                </Typography>
              </Row>
              <Divider />
              <Row>
                The premium package is for advanced users only. It gets you a
                zip file containing all the code you'll need to download to
                statically build and host your the resume HTML on your own
                website. You can edit and tinker with it to your liking. You'll
                also have access to our PDF generator, so anyone will be able to
                navigate your your website to download your resume for free.
              </Row>
              <Row style={{ marginTop: "1rem" }}>
                <Typography variant="p">
                  <strong>Includes:</strong>
                  <ul>
                    <li>A custom React app for your resume</li>
                    <li>Unlimited PDF downloads</li>
                    <li>Support working out any kinks</li>
                  </ul>
                </Typography>
              </Row>
              <Row center="xs" style={{ marginTop: "2rem" }}>
                <Button variant="outlined" color="primary">
                  Get started
                </Button>
              </Row>
            </PricingContent>
          </PricingLink>
        </PricingContainer>
      </Row>
    </Grid>
  );
};

export default Pricing;
