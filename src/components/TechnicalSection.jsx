import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-styled-flexboxgrid";

import { SectionTitle, SectionIcon } from "./Generics";
import Skill from "./Skill";
import FlaskIcon from "../icons/flask.svg";

const TechnicalContainer = styled(Col)`
  margin-top: 2rem;
`;

const SkillSection = styled.div`
  margin-top: 1rem;
`;

const TechnicalSection = ({ technicalSkills, puppeteer }) => {
  return (
    <TechnicalContainer xs={12}>
      <Row middle="xs">
        <SectionIcon src={FlaskIcon} />
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
            />
          );
        })}
      </SkillSection>
    </TechnicalContainer>
  );
};

export default TechnicalSection;
