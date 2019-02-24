import React from "react";
import styled from "styled-components";
import { Col } from "react-styled-flexboxgrid";

const GeneralContainer = styled.div`
  p {
    font-size: 1rem;
    line-height: 0.5rem;
    text-align: left;
  }
`;

const GeneralSection = ({ address, phoneNumber, email, github }) => (
  <Col xs={12} md={6}>
    <GeneralContainer>
      <p>{address}</p>

      <p>
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </p>
      <p>
        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          {email}
        </a>
      </p>
      <p>
        <a
          href="https://github.com/harpe116"
          target="_blank"
          rel="noopener noreferrer"
        >
          {github}
        </a>
      </p>
    </GeneralContainer>
  </Col>
);

export default GeneralSection;
