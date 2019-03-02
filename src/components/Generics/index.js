import styled from "styled-components";

const SectionTitle = styled.h6`
  color: ${props => props.themeColor};

  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  padding-left: 10px;
  margin: 0;
`;

const SectionIcon = styled.img`
  height: 2rem;
  width: auto;
  color: ${props => props.themeColor};
  fill: ${props => props.themeColor};
`;

export { SectionTitle, SectionIcon };
