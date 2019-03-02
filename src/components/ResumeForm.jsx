import React, { Fragment } from "react";
import { Typography, Button } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import { Formik, Field, Form, FieldArray } from "formik";
import { TextField, Select } from "formik-material-ui";
import * as yup from "yup";

import { Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email required"),
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
  address1: yup.string().required("Address required"),
  address2: yup.string(),
  city: yup.string().required("City required"),
  stateCode: yup.mixed().required("State required"),
  countryCode: yup.mixed().required("Country required"),
  zip: yup.number().required("ZIP code is required")
});

const fullWidthField = styled(TextField)`
  width: 100%;
`;

const ResumeForm = () => {
  return (
    <Formik
      initialValues={{
        workHistory: [
          {
            position: "Example position",
            company: "Example company",
            location: "Example Location",
            startDate: "01/2001",
            endDate: "10/2010",
            tasks: ["Example task/responsibility"]
          }
        ],
        education: {
          fieldOfStudy: "Field of study",
          dateEnded: "Graduation Date",
          universityName: "Your university",
          universityLocation: "Location"
        },
        general: {
          github: "https://github.com/harpe116",
          firstName: "First",
          lastName: "Last",
          address: "Address",
          phoneNumber: "123-456-7890",
          email: "youremail@example.com"
        },
        languages: [
          {
            language: "English",
            level: "Native"
          }
        ],
        hobbies: [
          {
            name: "Hobby 1",
            icon:
              "https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/How%20to%20calm%20a%20hyper%20dog.jpg?itok=Vg7ueySi",
            link: "https://google.com"
          },
          {
            name: "Hobby 2",
            icon: "printer"
          }
        ],
        technicalSkills: [
          {
            name: "Example skill",
            level: 0.7
          }
        ]
      }}
      validationSchema={schema}
      onSubmit={async (values, { setSubmitting }) => {
        debugger;
      }}
      render={({ submitForm, isSubmitting, errors, touched, values }) => (
        <Form style={{ marginBottom: "2rem" }}>
          <Row>
            <Typography variant="h5">General Information</Typography>
          </Row>
          <Row>
            <Col xs={4}>
              <Field
                name={`general.firstName`}
                type="text"
                label="First Name"
                placeholder="John"
                component={fullWidthField}
              />
            </Col>
            <Col xs={4}>
              <Field
                name={`general.lastName`}
                type="text"
                label="Last Name"
                placeholder="Doe"
                component={fullWidthField}
              />
            </Col>
            <Col xs={4}>
              <Field
                name={`general.phoneNumber`}
                type="text"
                label="Phone Number"
                placeholder="123-456-7890"
                component={fullWidthField}
              />
            </Col>
            <Col xs={4}>
              <Field
                name={`general.github`}
                type="text"
                label="Github URL"
                placeholder="https://github.com/harpe116"
                component={fullWidthField}
              />
            </Col>
            <Col xs={4}>
              <Field
                name={`general.linkedin`}
                type="text"
                label="LinkedIn Profile"
                placeholder="https://linkedin.com/example"
                component={fullWidthField}
              />
            </Col>
            <Col xs={4}>
              <Field
                name={`general.email`}
                type="text"
                label="Email"
                placeholder="example@example.com"
                component={fullWidthField}
              />
            </Col>
          </Row>
          <Row>
            <Typography variant="h5">Work history</Typography>
          </Row>
          <FieldArray
            name="workHistory"
            render={arrayHelpers => (
              <div>
                {values.workHistory &&
                  values.workHistory.map((job, index) => (
                    <div key={index}>
                      <Row>
                        <Col xs={5}>
                          <Field
                            name={`workHistory.${index}.position`}
                            type="position"
                            label="Position"
                            placeholder="Senior software engineer"
                            component={fullWidthField}
                          />
                        </Col>
                        <Col xs={2} style={{ textAlign: "center" }}>
                          <Typography
                            style={{ lineHeight: "5rem" }}
                            variant="p"
                          >
                            at
                          </Typography>
                        </Col>
                        <Col xs={5}>
                          <Field
                            name={`workHistory.company${index}`}
                            type="company"
                            label="Company"
                            placeholder="Google"
                            component={fullWidthField}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={1}>
                          <Typography
                            style={{ lineHeight: "5rem" }}
                            variant="p"
                          >
                            In
                          </Typography>
                        </Col>
                        <Col xs={5}>
                          <Field
                            name="location"
                            type="location"
                            label="Location"
                            placeholder="Los Angeles, USA"
                            component={fullWidthField}
                          />
                        </Col>
                        <Col xs={1} style={{ textAlign: "center" }}>
                          <Typography
                            style={{ lineHeight: "5rem" }}
                            variant="p"
                          >
                            from
                          </Typography>
                        </Col>
                        <Col xs={2}>
                          <Field
                            name="startDate"
                            type="startDate"
                            label="Start Date"
                            placeholder="01/2019"
                            component={fullWidthField}
                          />
                        </Col>
                        <Col xs={1} style={{ textAlign: "center" }}>
                          <Typography
                            style={{ lineHeight: "5rem" }}
                            variant="p"
                          >
                            to
                          </Typography>
                        </Col>
                        <Col xs={2}>
                          <Field
                            name="endDate"
                            type="endDate"
                            label="End Date"
                            placeholder="12/2019"
                            component={fullWidthField}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <Field
                            name="task"
                            type="task"
                            label="Task/Responsibility"
                            placeholder="Putting out fires"
                            component={fullWidthField}
                          />
                        </Col>
                      </Row>

                      <Delete onClick={() => arrayHelpers.remove(index)} />
                    </div>
                  ))}
                <Row>
                  <Col>
                    <Button
                      onClick={() =>
                        arrayHelpers.insert(values.workHistory.length + 1, "")
                      }
                    >
                      Add another job
                    </Button>
                  </Col>
                </Row>
              </div>
            )}
          />
          <Row>
            <Typography variant="h5">Education</Typography>
          </Row>
          <Row>
            <Col xs={3}>
              <Field
                name="education.universityName"
                type="text"
                label="University Name"
                placeholder="USC"
                component={fullWidthField}
              />
            </Col>
            <Col xs={3}>
              <Field
                name="education.fieldOfStudy"
                type="text"
                label="Field of Study"
                placeholder="Applied and Computational Mathematics"
                component={fullWidthField}
              />
            </Col>
            <Col xs={3}>
              <Field
                name="education.universityLocation"
                type="text"
                label="Location"
                placeholder="Los Angeles, USA"
                component={fullWidthField}
              />
            </Col>
            <Col xs={3}>
              <Field
                name="education.dateEnded"
                type="text"
                label="Graduation Date"
                placeholder="12/1990"
                component={fullWidthField}
              />
            </Col>
          </Row>
          <Row>
            <Typography variant="h5">Languages</Typography>
          </Row>
          <FieldArray
            name="languages"
            render={arrayHelpers => (
              <div>
                {values.languages &&
                  values.languages.map((language, index) => (
                    <div key={index}>
                      <Row>
                        <Col xs={4}>
                          <Field
                            name={`languages.${index}.language`}
                            type="text"
                            label="Language"
                            placeholder="English"
                            component={fullWidthField}
                          />
                        </Col>
                        <Col xs={4}>
                          <Field
                            name={`languages.${index}.level`}
                            type="text"
                            label="Level"
                            placeholder="Native"
                            component={fullWidthField}
                          />
                        </Col>
                      </Row>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                    </div>
                  ))}
                <Row>
                  <Col>
                    <Button
                      onClick={() =>
                        arrayHelpers.insert(values.languages.length + 1, "")
                      }
                    >
                      Add another language
                    </Button>
                  </Col>
                </Row>
              </div>
            )}
          />
          <Row>
            <Typography variant="h5">Hobbies</Typography>
          </Row>
          <FieldArray
            name="hobbies"
            render={arrayHelpers => (
              <div>
                {values.hobbies &&
                  values.hobbies.map((hobby, index) => (
                    <div key={index}>
                      <Row>
                        <Col xs={4}>
                          <Field
                            name={`hobbies.${index}.name`}
                            type="text"
                            label="Hobby Name"
                            placeholder="Skydiving"
                            component={fullWidthField}
                          />
                        </Col>
                        <Col xs={4}>
                          <Field
                            name={`hobbies.${index}.icon`}
                            type="text"
                            label="Icon URL"
                            placeholder="https://example.com/image.jpg"
                            component={fullWidthField}
                          />
                        </Col>
                        <Col xs={4}>
                          <Field
                            name={`hobbies.${index}.link`}
                            type="text"
                            label="Link (Optional)"
                            placeholder="https://linktowebsite.com/"
                            component={fullWidthField}
                          />
                        </Col>
                      </Row>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                    </div>
                  ))}
                <Row>
                  <Col>
                    <Button
                      onClick={() =>
                        arrayHelpers.insert(values.languages.length + 1, "")
                      }
                    >
                      Add another language
                    </Button>
                  </Col>
                </Row>
              </div>
            )}
          />
          <Row>
            <Typography variant="h5">Technical Skills</Typography>
          </Row>
          <FieldArray
            name="technicalSkills"
            render={arrayHelpers => (
              <div>
                {values.technicalSkills &&
                  values.technicalSkills.map((skill, index) => (
                    <div key={index}>
                      <Row>
                        <Col xs={3}>
                          <Field
                            name={`technicalSkills.${index}.name`}
                            type="text"
                            label="Skill name"
                            placeholder="React"
                            component={fullWidthField}
                          />
                        </Col>
                        <Col xs={3}>
                          <Field
                            name={`technicalSkills.${index}.level`}
                            type="text"
                            label="Skill level 0.0 - 1.0"
                            placeholder="0.5"
                            component={fullWidthField}
                          />
                        </Col>
                      </Row>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                    </div>
                  ))}
                <Row>
                  <Col>
                    <Button
                      onClick={() =>
                        arrayHelpers.insert(
                          values.technicalSkills.length + 1,
                          ""
                        )
                      }
                    >
                      Add another skill
                    </Button>
                  </Col>
                </Row>
              </div>
            )}
          />
        </Form>
      )}
    />
  );
};

export default ResumeForm;
