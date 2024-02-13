import React from "react";
import { GrNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function About() {
  const navigate = useNavigate();
  return (
    <Container>
      <NextPage
        onClick={() => {
          navigate("/about");
        }}
      >
        <GrNext size={100} style={{ color: "#d5b3ff" }} />
      </NextPage>
    </Container>
  );
}

export default About;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextPage = styled.div`
  position: absolute;
  right: 30px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateX(20px);
    cursor: pointer;
  }
`;
