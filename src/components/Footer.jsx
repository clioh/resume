import React from "react";
import styled from "styled-components";
import { Row } from "react-styled-flexboxgrid";

const FooterWrapper = styled(Row)`
  height: 100px;
  background: rgb(30, 144, 255);
  margin: 0;
  margin-top: 2rem;
  left: 0;
  width: 100vw;
`;

const Footer = () => {
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

export default Footer;
