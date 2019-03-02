import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-styled-flexboxgrid";

import Printer from "../icons/3d-printer.svg";
import Airplane from "../icons/airplane.svg";

const HobbyContainer = styled(Col)`
  max-width: 200px;
`;

const HobbyImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 60px;
  object-fit: contain;
`;

const HobbyName = styled.p`
  text-align: center;
`;

const IconList = {
  airplane: Airplane,
  printer: Printer
};

const Hobby = ({ name, icon: iconName, link }) => {
  const icon = IconList[iconName] ? IconList[iconName] : iconName;
  return (
    <HobbyContainer xs={6} md={4}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Row>
          <HobbyImage alt="Hobby image" src={icon} />
        </Row>
        <Row center="xs">
          <HobbyName>{name}</HobbyName>
        </Row>
      </a>
    </HobbyContainer>
  );
};

export default Hobby;
