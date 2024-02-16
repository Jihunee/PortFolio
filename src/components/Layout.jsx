import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

function Layout() {
  return (
    <>
      <Header>
        <Logo>
          <Link to="/">Jihun@PortFolio</Link>
        </Logo>
        <NavBar>
          <Link to="/about">ABOUT</Link>
          <Link to="skills">Skills</Link>
          <Link to="projects">PROJECTS</Link>
          <Link to="contact">CONTACT</Link>
        </NavBar>
      </Header>
      <Outlet />
    </>
  );
}

export default Layout;

const Header = styled.div`
  font-family: "Cafe24";
  width: 100%;
  height: 80px;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid white;
  border-radius: 0 0 30px 30px;
  background-color: white;
  border-bottom: 10px solid #d5b3ff;
  & a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: linear-gradient(to right top, #d5b3ff, #b8ffc7);
      color: transparent;
      background-clip: text;
      transform: scale(1.2);
    }
  }
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  font-size: 20px;
`;

const Logo = styled.div`
  font-size: 60px;
  background: linear-gradient(to right top, #d5b3ff, #b8ffc7);
  color: transparent;
  background-clip: text;
  font-size: 25px;
`;
