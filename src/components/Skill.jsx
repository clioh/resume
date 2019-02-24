import React from "react";
import styled, { keyframes } from "styled-components";
import { Row, Col } from "react-styled-flexboxgrid";

const SkillIndicator = styled.div`
  background: #eee;
  width: 100%;
  height: 100%;
`;

const animation = keyframes`
  from {
    width: 0;
  }


`;

const SkillLevel = styled.div`
  background: rgb(30, 144, 255);
  position: absolute;
  left: 5px;
  top: 5px;
  height: 1px;
  padding: 5px;
  width: calc(${props => `${props.level * 100}%`} - 20px);

  animation: ${animation} 1.5s ease-in-out;
`;

const SkillIndicatorContainer = styled(Row)`
  height: 100%;
  padding: 5px;
  position: relative;
`;

const SkillContainer = styled(Row)`
  p {
    margin: 0;
  }
`;

const Skill = ({ skillName, skillLevel }) => {
  return (
    <SkillContainer>
      <Col xs={6}>
        <p>{skillName}</p>
      </Col>
      <Col xs={6}>
        <SkillIndicatorContainer middle="xs">
          <SkillIndicator />
          <SkillLevel level={skillLevel} />
        </SkillIndicatorContainer>
      </Col>
    </SkillContainer>
  );
};

export default Skill;
