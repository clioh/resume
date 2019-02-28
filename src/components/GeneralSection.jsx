import React from "react";
import styled from "styled-components";

const GeneralContainer = styled.div`
  p {
    font-size: 1rem;
    line-height: 0.5rem;
    text-align: left;
  }
`;

const GeneralSection = ({ generalInfo }) => {
  const { phoneNumber, email, github, address } = generalInfo;
  return (
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
  );
};

export default GeneralSection;
