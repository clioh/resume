import React from "react";

import { Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { Field } from "formik";
import { RemoveButton, FullWidthField, ItemContainer } from "./styles";

const SkillWrapper = styled.div`
  background: ${props => (props.index % 2 ? "#fff" : "#eee")};
  margin: 1rem 0 1rem 0;
  padding: 1rem;
`;

const TechnicalSkill = ({ skill, index, skillsHelper }) => {
  return (
    <ItemContainer index={index} key={index}>
      <Row>
        <Col xs={3}>
          <Field
            name={`technicalSkills.${index}.name`}
            type="text"
            label="Skill name"
            placeholder="React"
            component={FullWidthField}
          />
        </Col>
        <Col xs={3}>
          <Field
            name={`technicalSkills.${index}.level`}
            type="text"
            label="Skill level (0.0 - 1.0)"
            placeholder="0.5"
            component={FullWidthField}
          />
        </Col>
        <Col>
          <RemoveButton
            // remove a skill from the list
            onClick={() => skillsHelper.remove(index)}
          >
            Remove this skill
          </RemoveButton>
        </Col>
      </Row>
    </ItemContainer>
  );
};

export default TechnicalSkill;
