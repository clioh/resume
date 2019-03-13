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

const LanguagesSection = ({ languages }) => {
  return (
    <SectionWrapper>
      <Row>
        <Typography variant="h5">Languages</Typography>
      </Row>
      <FieldArray
        name="languages"
        render={arrayHelpers => (
          <div>
            {languages &&
              languages.map((language, index) => (
                <ItemContainer key={index} index={index}>
                  <Row>
                    <Col xs={4}>
                      <Field
                        name={`languages.${index}.language`}
                        type="text"
                        label="Language"
                        placeholder="English"
                        component={FullWidthField}
                      />
                    </Col>
                    <Col xs={4}>
                      <Field
                        name={`languages.${index}.level`}
                        type="text"
                        label="Level"
                        placeholder="Native"
                        component={FullWidthField}
                      />
                    </Col>
                    <Col xs={2}>
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
                  onClick={() => arrayHelpers.insert(languages.length + 1, {})}
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

export default LanguagesSection;
