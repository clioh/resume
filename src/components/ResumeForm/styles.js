import React from "react";
import styled from "styled-components";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import { Row } from "react-styled-flexboxgrid";

const FullWidthField = styled(TextField)`
  width: 100%;
`;

const SectionWrapper = styled.div`
  margin: 2rem 0 2rem 0;
`;

const RemoveButton = ({ children, ...rest }) => (
  <Row bottom="xs" center="xs" style={{ height: "100%" }}>
    <Button
      {...rest}
      variant="contained"
      color="secondary"
      style={{ fontSize: "12px" }}
    >
      {children}
    </Button>
  </Row>
);

const ItemContainer = styled.div`
  background: ${props => (props.index % 2 === 1 ? "#fcfcfc" : "#fff")};
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 2px 0px;
`;

export { SectionWrapper, FullWidthField, RemoveButton, ItemContainer };
