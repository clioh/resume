import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Col, Row } from "react-styled-flexboxgrid";
import { Field, FieldArray } from "formik";

import Tasks from "./Tasks";
import {
  RemoveButton,
  FullWidthField,
  SectionWrapper,
  ItemContainer
} from "./styles";

const EducationSection = ({ education }) => {
  return (
    <SectionWrapper>
      <Row>
        <Typography variant="h5">Education</Typography>
      </Row>
      <FieldArray
        name="education"
        render={arrayHelpers => (
          <div>
            {education &&
              education.map((educationItem, index) => (
                <ItemContainer key={index} index={index}>
                  <Row>
                    <Col xs={3}>
                      <Field
                        name={`education.${index}.universityName`}
                        type="text"
                        label="Institution Name"
                        placeholder="USC"
                        component={FullWidthField}
                      />
                    </Col>
                    <Col xs={3}>
                      <Field
                        name={`education.${index}.fieldOfStudy`}
                        type="text"
                        label="Field of Study"
                        placeholder="Applied and Computational Mathematics"
                        component={FullWidthField}
                      />
                    </Col>
                    <Col xs={2}>
                      <Field
                        name={`education.${index}.universityLocation`}
                        type="text"
                        label="Location"
                        placeholder="Los Angeles, USA"
                        component={FullWidthField}
                      />
                    </Col>
                    <Col xs={2}>
                      <Field
                        name={`education.${index}.dateEnded`}
                        type="text"
                        label="Graduation Date"
                        placeholder="12/1990"
                        component={FullWidthField}
                      />
                    </Col>
                    <Col xs={2}>
                      <RemoveButton onClick={() => arrayHelpers.remove(index)}>
                        Remove
                      </RemoveButton>
                    </Col>
                  </Row>
                </ItemContainer>
              ))}
            <Row>
              <Col>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => arrayHelpers.insert(education.length, {})}
                >
                  Add another language
                </Button>
              </Col>
            </Row>
          </div>
        )}
      />
    </SectionWrapper>
  );
};

export default EducationSection;
