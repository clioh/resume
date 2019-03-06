import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

// import Logo from "../assets/splat-logo.svg";

const Wrapper = styled.div`
  height: 100px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px transparent;
  background-color: #3f51b5;
  position: relative;
  z-index: 4;
  left: 0;
  top: 0;
  width: 100vw;
`;

const InnerWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  max-width: 1000px;
  height: 100%;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  @media (max-width: 700px) {
    display: none;
  }
  a:not(:last-of-type) {
    border-right: 1px solid #ccc;
    padding-right: 2rem;
  }
`;

const LinkText = styled.a`
  text-align: center;
  text-decoration: none;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.6rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  color: #fff;
  margin-left: 40px;
  cursor: pointer;

  &:hover {
    color: #6a6c6e;
  }
  &.active {
    color: #ccc;
  }
`;

const LogoContainer = styled.div`
  height: 100%;
  width: 200px;
  position: relative;
  cursor: pointer;
  margin: auto;

  @media (max-width: 700px) {
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const NavigationBar = () => (
  <Wrapper>
    <InnerWrapper>
      <Link to="/">
        <LogoContainer>
          {/*<Logo
            style={{ position: "absolute", height: "100%", maxWidth: "100%" }}
            alt="Quishirt logo"
          />*/}
        </LogoContainer>
      </Link>
      <LinkWrapper>
        <NavLink to="/#pricing">
          <LinkText>Pricing</LinkText>
        </NavLink>

        <NavLink to="/editor">
          <Button
            style={{ marginLeft: "2rem", color: "white", borderColor: "white" }}
            variant="outlined"
            color="primary"
          >
            Start creating
          </Button>
        </NavLink>
      </LinkWrapper>
    </InnerWrapper>
  </Wrapper>
);

export default NavigationBar;
