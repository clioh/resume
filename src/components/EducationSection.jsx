import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-styled-flexboxgrid";
import { SectionTitle, SectionIcon } from "./Generics";

import CollegeIcon from "../icons/college-graduation.svg";

const FieldOfStudy = styled.p`
  color: rgb(51, 51, 51);

  font-family: "Roboto Mono", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
`;

const UniversityName = styled.p`
  margin: 0;
  color: rgb(30, 144, 255);
`;

const EduationContainer = styled(Col)`
  margin-top: 2rem;
`;

const Dates = styled.p`
  text-align: center;
`;

const EducationSection = ({ education }) => {
  const {
    fieldOfStudy,
    dateEnded,
    universityName,
    universityLocation
  } = education;
  return (
    <EduationContainer xs={12}>
      <Row>
        <SectionIcon src={CollegeIcon} alt="College graduation" />
        <SectionTitle>Education</SectionTitle>
      </Row>
      <Row>
        <Col xs={6}>
          <FieldOfStudy>{fieldOfStudy}</FieldOfStudy>
        </Col>
        <Col xs={6}>
          <Dates>{dateEnded}</Dates>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <UniversityName>
            {`${universityName}, ${universityLocation}`}
          </UniversityName>
        </Col>
      </Row>
    </EduationContainer>
  );
};

export default EducationSection;
