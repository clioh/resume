import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-styled-flexboxgrid";
import { SectionTitle } from "./Generics";

import ResumeContext from "../ResumeContext";

import { ReactComponent as CollegeIcon } from "../icons/college-graduation.svg";

const FieldOfStudy = styled.p`
  color: rgb(51, 51, 51);

  font-family: "Roboto Mono", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
`;

const UniversityName = styled.p`
  margin: 0;
  color: ${props => props.themeColor};
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
    <ResumeContext.Consumer>
      {context => {
        const { themeColor } = context;
        return (
          <EduationContainer xs={12}>
            <Row>
              <CollegeIcon
                fill={themeColor}
                width="2rem"
                height="2rem"
                alt="College graduation"
              />

              <SectionTitle themeColor={themeColor}>Education</SectionTitle>
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
                <UniversityName themeColor={themeColor}>
                  {`${universityName}, ${universityLocation}`}
                </UniversityName>
              </Col>
            </Row>
          </EduationContainer>
        );
      }}
    </ResumeContext.Consumer>
  );
};

export default EducationSection;
