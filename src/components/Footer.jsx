import React from "react";
import styled from "styled-components";
import { Row } from "react-styled-flexboxgrid";

const FooterWrapper = styled(Row)`
  height: 100px;
  background: ${props => props.themeColor};
  margin: 0;
  margin-top: 2rem;
  left: 0;
  width: 100vw;
`;

const Footer = ({ themeColor }) => {
  return (
    <FooterWrapper center="xs" middle="xs" themeColor={themeColor}>
      Built with
      <span role="img" aria-label="love">
        {"❤️"}
      </span>
      by Clio Harper
    </FooterWrapper>
  );
};

export default Footer;
