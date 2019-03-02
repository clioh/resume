import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-styled-flexboxgrid";

import { SectionTitle } from "./Generics";
import { ReactComponent as LanguageIcon } from "../icons/language.svg";

const LanguagesContainer = styled(Col)`
  margin-top: 2rem;
`;

const LanguageTitle = styled.p`
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Language = styled.p`
  margin: 0;
`;

const LanguageLevel = styled.p`
  text-align: right;
  margin: 0;
`;

const LanguageColumn = styled(Col)`
  padding: 0;
  margin: 0.25rem 0 0.25rem 0;
`;

const LanguagesSection = ({ languages, themeColor }) => {
  return (
    <LanguagesContainer xs={12}>
      <Row middle="xs">
        <LanguageIcon
          fill={themeColor}
          width="2rem"
          height="2rem"
          alt="Lanuage proficiency"
        />

        <SectionTitle>Languages</SectionTitle>
      </Row>
      <Col xs={12}>
        <Row>
          <LanguageTitle>Language</LanguageTitle>
        </Row>

        {languages.map(language => {
          return (
            <Row key={language.language}>
              <LanguageColumn xs={6} style={{ padding: 0 }}>
                <Language>{language.language}</Language>
              </LanguageColumn>
              <Col xs={6}>
                <LanguageLevel>{language.level}</LanguageLevel>
              </Col>
            </Row>
          );
        })}
      </Col>
    </LanguagesContainer>
  );
};
export default LanguagesSection;
