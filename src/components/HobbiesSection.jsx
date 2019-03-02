import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-styled-flexboxgrid";

import { SectionTitle } from "./Generics";
import Hobby from "./Hobby";
import { ReactComponent as RocketIcon } from "../icons/rocket.svg";

const HobbiesContainer = styled(Col)`
  margin-top: 2rem;
`;

const HobbyList = styled(Row)`
  margin-top: 2rem;
`;

const HobbiesSection = ({ hobbies, themeColor }) => {
  return (
    <HobbiesContainer xs={12}>
      <Row middle="xs">
        <RocketIcon
          fill={themeColor}
          width="2rem"
          height="2rem"
          alt="Lanuage proficiency"
        />
        <SectionTitle themeColor={themeColor}>Hobbies</SectionTitle>
      </Row>
      <HobbyList around="xs">
        {hobbies.map(hobby => {
          const { name, icon, link } = hobby;

          return <Hobby key={name} name={name} icon={icon} link={link} />;
        })}
      </HobbyList>
    </HobbiesContainer>
  );
};

export default HobbiesSection;
