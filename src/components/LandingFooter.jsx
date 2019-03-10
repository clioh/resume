import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-styled-flexboxgrid";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const FooterWrapper = styled(Row)`
  padding-top: 50px;
  padding-bottom: 50px;
  color: white;
  background: #3f51b5;
  margin: 0;
  margin-top: 2rem;
  left: 0;
  width: 100vw;
`;

const LandingFooter = () => {
  return (
    <FooterWrapper center="xs" middle="xs">
      Built with
      <span role="img" aria-label="love">
        {"❤️"}
      </span>
      by Clio Harper
    </FooterWrapper>
  );
};

export default LandingFooter;
