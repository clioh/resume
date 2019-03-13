import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Col, Row } from "react-styled-flexboxgrid";
import { FieldArray } from "formik";
import TechnicalSkill from "./TechnicalSkill";
import { SectionWrapper } from "./styles";

const SkillSection = ({ technicalSkills }) => {
  return (
    <SectionWrapper>
      <Row>
        <Typography variant="h5">Technical Skills</Typography>
      </Row>
      <FieldArray
        name="technicalSkills"
        render={arrayHelpers => (
          <div>
            {technicalSkills &&
              technicalSkills.map((skill, index) => (
                <TechnicalSkill
                  skill={skill}
                  index={index}
                  key={index}
                  skillsHelper={arrayHelpers}
                />
              ))}
            <Row middle="xs">
              <Col>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    arrayHelpers.insert(technicalSkills.length + 1, "")
                  }
                >
                  Add another skill
                </Button>
              </Col>
            </Row>
          </div>
        )}
      />
    </SectionWrapper>
  );
};

export default SkillSection;
