import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Col, Row } from "react-styled-flexboxgrid";
import { Field, FieldArray } from "formik";
import styled from "styled-components";
import Tasks from "./Tasks";
import {
  RemoveButton,
  FullWidthField,
  SectionWrapper,
  ItemContainer
} from "./styles";

const WorkHistorySection = ({ workHistory }) => {
  return (
    <SectionWrapper>
      <Row>
        <Typography variant="h5">Work history</Typography>
      </Row>
      <FieldArray
        name="workHistory"
        render={arrayHelpers => (
          <div>
            {workHistory &&
              workHistory.map((job, index) => {
                const { tasks } = job;

                return (
                  <ItemContainer key={index} index={index}>
                    <Row>
                      <Col xs={5}>
                        <Field
                          name={`workHistory.${index}.position`}
                          type="position"
                          label="Position"
                          placeholder="Senior software engineer"
                          component={FullWidthField}
                        />
                      </Col>
                      <Col xs={2} style={{ textAlign: "center" }}>
                        <Typography
                          style={{ lineHeight: "5rem" }}
                          variant="body1"
                        >
                          at
                        </Typography>
                      </Col>
                      <Col xs={5}>
                        <Field
                          name={`workHistory.${index}.company`}
                          type="company"
                          label="Company"
                          placeholder="Google"
                          component={FullWidthField}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={1}>
                        <Typography
                          style={{ lineHeight: "5rem" }}
                          variant="body1"
                        >
                          In
                        </Typography>
                      </Col>
                      <Col xs={5}>
                        <Field
                          name={`workHistory.${index}.location`}
                          type="location"
                          label="Location"
                          placeholder="Los Angeles, USA"
                          component={FullWidthField}
                        />
                      </Col>
                      <Col xs={1} style={{ textAlign: "center" }}>
                        <Typography
                          style={{ lineHeight: "5rem" }}
                          variant="body1"
                        >
                          from
                        </Typography>
                      </Col>
                      <Col xs={2}>
                        <Field
                          name={`workHistory.${index}.startDate`}
                          type="startDate"
                          label="Start Date"
                          placeholder="01/2019"
                          component={FullWidthField}
                        />
                      </Col>
                      <Col xs={1} style={{ textAlign: "center" }}>
                        <Typography
                          style={{ lineHeight: "5rem" }}
                          variant="body1"
                        >
                          to
                        </Typography>
                      </Col>
                      <Col xs={2}>
                        <Field
                          name={`workHistory.${index}.endDate`}
                          type="text"
                          label="End Date"
                          placeholder="12/2019"
                          component={FullWidthField}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <Tasks tasks={tasks} jobIndex={index} />
                      </Col>
                    </Row>
                    <Row end="xs" style={{ marginRight: "1rem" }}>
                      <RemoveButton onClick={() => arrayHelpers.remove(index)}>
                        Remove this job
                      </RemoveButton>
                    </Row>
                  </ItemContainer>
                );
              })}
            <Row>
              <Col>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    arrayHelpers.insert(workHistory.length + 1, { tasks: [] })
                  }
                >
                  Add another job
                </Button>
              </Col>
            </Row>
          </div>
        )}
      />
    </SectionWrapper>
  );
};

export default WorkHistorySection;
