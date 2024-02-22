import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

function Layout() {
  const location = useLocation();
  return (
    <>
      <Header>
        <Logo>
          <Link to="/">Jihun@PortFolio</Link>
        </Logo>
        <NavBar>
          <Link
            className={location.pathname === "/about" ? "active" : ""}
            to="/about"
          >
            ABOUT
          </Link>
          <Link
            className={location.pathname === "/skills" ? "active" : ""}
            to="skills"
          >
            Skills
          </Link>
          <Link
            className={location.pathname === "/projects" ? "active" : ""}
            to="projects"
          >
            PROJECTS
          </Link>
          <Link
            className={location.pathname === "/contact" ? "active" : ""}
            to="contact"
          >
            CONTACT
          </Link>
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
  border-bottom: 5px solid #d5b3ff;
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
  & .active {
    background: linear-gradient(to right top, #d5b3ff, #b8ffc7);
    color: transparent;
    background-clip: text;
    transform: scale(1.2);
  }
`;

const Logo = styled.div`
  background: linear-gradient(to right top, #d5b3ff, #b8ffc7);
  color: transparent;
  background-clip: text;
  font-size: 25px;
`;
