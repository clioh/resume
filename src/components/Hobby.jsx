import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-styled-flexboxgrid";

const HobbyContainer = styled(Col)`
  max-width: 200px;
`;

const HobbyImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 60px;
`;

const HobbyName = styled.p`
  text-align: center;
`;

const Hobby = ({ name, icon }) => (
  <HobbyContainer xs={6} md={4}>
    <Row>
      <HobbyImage src={icon} />
    </Row>
    <Row center="xs">
      <HobbyName>{name}</HobbyName>
    </Row>
  </HobbyContainer>
);

export default Hobby;
