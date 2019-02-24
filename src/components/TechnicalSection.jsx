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

const TechnicalSection = () => {
  return (
    <TechnicalContainer xs={12}>
      <Row middle="xs">
        <SectionIcon src={FlaskIcon} />
        <SectionTitle>Technical Skills</SectionTitle>
      </Row>
      <SkillSection>
        <Skill skillName="Python" skillLevel={1} />
        <Skill skillName="Javascipt" skillLevel={1} />
        <Skill skillName="Spark/Scala" skillLevel={0.6} />
        <Skill skillName="MATLAB" skillLevel={0.5} />
        <Skill skillName="Web Design" />
      </SkillSection>
    </TechnicalContainer>
  );
};

export default TechnicalSection;
