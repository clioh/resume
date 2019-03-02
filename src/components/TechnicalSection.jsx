import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-styled-flexboxgrid";

import { SectionTitle } from "./Generics";
import Skill from "./Skill";
import { ReactComponent as FlaskIcon } from "../icons/flask.svg";

const TechnicalContainer = styled(Col)`
  margin-top: 2rem;
`;

const SkillSection = styled.div`
  margin-top: 1rem;
`;

const TechnicalSection = ({ technicalSkills, puppeteer, themeColor }) => {
  return (
    <TechnicalContainer xs={12}>
      <Row middle="xs">
        <FlaskIcon
          fill={themeColor}
          width="2rem"
          height="2rem"
          alt="Tehcnical skills"
        />
        <SectionTitle>Technical Skills</SectionTitle>
      </Row>
      <SkillSection>
        {technicalSkills.map(skill => {
          const { name, level } = skill;
          return (
            <Skill
              key={name}
              skillName={name}
              skillLevel={level}
              puppeteer={puppeteer}
              themeColor={themeColor}
            />
          );
        })}
      </SkillSection>
    </TechnicalContainer>
  );
};

export default TechnicalSection;
