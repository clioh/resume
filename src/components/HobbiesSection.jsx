import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-styled-flexboxgrid";

import { SectionTitle, SectionIcon } from "./Generics";
import Hobby from "./Hobby";
import RocketIcon from "../icons/rocket.svg";

const HobbiesContainer = styled(Col)`
  margin-top: 2rem;
`;

const HobbyList = styled(Row)`
  margin-top: 2rem;
`;

const HobbiesSection = ({ hobbies }) => {
  return (
    <HobbiesContainer xs={12}>
      <Row middle="xs">
        <SectionIcon src={RocketIcon} />
        <SectionTitle>Hobbies</SectionTitle>
      </Row>
      <HobbyList around="xs">
        {hobbies.map(hobby => {
          const { name, icon } = hobby;

          return <Hobby key={name} name={name} icon={icon} />;
        })}
      </HobbyList>
    </HobbiesContainer>
  );
};

export default HobbiesSection;
