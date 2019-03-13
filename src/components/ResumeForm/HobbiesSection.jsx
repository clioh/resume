import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Col, Row } from "react-styled-flexboxgrid";
import { Field, FieldArray } from "formik";

import {
  RemoveButton,
  FullWidthField,
  SectionWrapper,
  ItemContainer
} from "./styles";

const HobbiesSection = ({ hobbies }) => {
  return (
    <SectionWrapper>
      <Row>
        <Typography variant="h5">Hobbies</Typography>
      </Row>
      <FieldArray
        name="hobbies"
        render={arrayHelpers => (
          <div>
            {hobbies &&
              hobbies.map((hobby, index) => (
                <ItemContainer key={index} index={index}>
                  <Row>
                    <Col xs={3}>
                      <Field
                        name={`hobbies.${index}.name`}
                        type="text"
                        label="Hobby Name"
                        placeholder="Skydiving"
                        component={FullWidthField}
                      />
                    </Col>
                    <Col xs={4}>
                      <Field
                        name={`hobbies.${index}.icon`}
                        type="text"
                        label="Icon URL"
                        placeholder="https://example.com/image.jpg"
                        component={FullWidthField}
                      />
                    </Col>
                    <Col xs={4}>
                      <Field
                        name={`hobbies.${index}.link`}
                        type="text"
                        label="Link (Optional)"
                        placeholder="https://linktowebsite.com/"
                        component={FullWidthField}
                      />
                    </Col>
                    <Col xs={1}>
                      <RemoveButton
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
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
                  onClick={() => arrayHelpers.insert(hobbies.length + 1, "")}
                >
                  Add another hobby
                </Button>
              </Col>
            </Row>
          </div>
        )}
      />
    </SectionWrapper>
  );
};

export default HobbiesSection;
