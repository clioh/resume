import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-styled-flexboxgrid";
import { SectionTitle, SectionIcon } from "./Generics";

import CollegeIcon from "../icons/college-graduation.svg";

const FieldOfStudy = styled.p`
  color: rgb(51, 51, 51);

  font-family: "Roboto", sans-serif;
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

const EducationSection = ({
  fieldOfStudy,
  yearStarted,
  yearEnded,
  universityName
}) => {
  return (
    <EduationContainer xs={12}>
      <Row>
        <SectionIcon src={CollegeIcon} alt="College graduation" />
        <SectionTitle>Education</SectionTitle>
      </Row>
      <Row>
        <Col xs={6}>
          <FieldOfStudy>
            Bachelor of Science in Applied and Computational Mathematics
          </FieldOfStudy>
        </Col>
        <Col xs={6}>
          <Dates>2014 – present</Dates>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <UniversityName>
            University of Southern California, Los Angeles, USA
          </UniversityName>
        </Col>
      </Row>
    </EduationContainer>
  );
};

export default EducationSection;
