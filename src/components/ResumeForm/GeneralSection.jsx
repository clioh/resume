import React from "react";
import { Field } from "formik";
import { Typography } from "@material-ui/core";

import { Col, Row } from "react-styled-flexboxgrid";
import { SectionWrapper, FullWidthField, ItemContainer } from "./styles";

const GeneralSection = () => {
  return (
    <SectionWrapper>
      <Row>
        <Typography variant="h5">General Information</Typography>
      </Row>
      <ItemContainer>
        <Row>
          <Col xs={4}>
            <Field
              name={`general.firstName`}
              type="text"
              label="First Name"
              placeholder="John"
              component={FullWidthField}
            />
          </Col>
          <Col xs={4}>
            <Field
              name={`general.lastName`}
              type="text"
              label="Last Name"
              placeholder="Doe"
              component={FullWidthField}
            />
          </Col>
          <Col xs={4}>
            <Field
              name={`general.phoneNumber`}
              type="text"
              label="Phone Number"
              placeholder="123-456-7890"
              component={FullWidthField}
            />
          </Col>
          <Col xs={4}>
            <Field
              name={`general.github`}
              type="text"
              label="Github URL"
              placeholder="https://github.com/harpe116"
              component={FullWidthField}
            />
          </Col>
          <Col xs={4}>
            <Field
              name={`general.linkedin`}
              type="text"
              label="LinkedIn Profile"
              placeholder="https://linkedin.com/example"
              component={FullWidthField}
            />
          </Col>
          <Col xs={4}>
            <Field
              name={`general.email`}
              type="text"
              label="Email"
              placeholder="example@example.com"
              component={FullWidthField}
            />
          </Col>
        </Row>
      </ItemContainer>
    </SectionWrapper>
  );
};

export default GeneralSection;
