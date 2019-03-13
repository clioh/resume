import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Col, Row } from "react-styled-flexboxgrid";
import { Field, FieldArray } from "formik";

import { FullWidthField, RemoveButton } from "./styles";

const Tasks = ({ tasks, jobIndex }) => {
  return (
    <FieldArray
      name={`workHistory.${jobIndex}.tasks`}
      render={arrayHelpers => (
        <div>
          {tasks &&
            tasks.map((task, index) => {
              return (
                <Row key={index}>
                  <Col xs={10}>
                    <Field
                      name={`workHistory.${jobIndex}.tasks[${index}]`}
                      type="text"
                      label="Task/Responsibility"
                      placeholder="Putting out fires"
                      component={FullWidthField}
                    />
                  </Col>
                  <Col xs={2}>
                    <Row center="xs" bottom="xs" style={{ height: "100%" }}>
                      <RemoveButton onClick={() => arrayHelpers.remove(index)}>
                        Remove
                      </RemoveButton>
                    </Row>
                  </Col>
                </Row>
              );
            })}
          <Row style={{ marginTop: "1rem" }}>
            <Col>
              <Button
                variant="contained"
                color="primary"
                onClick={() => arrayHelpers.insert(tasks.length + 1, "")}
              >
                Add another task
              </Button>
            </Col>
          </Row>
        </div>
      )}
    />
  );
};

export default Tasks;
