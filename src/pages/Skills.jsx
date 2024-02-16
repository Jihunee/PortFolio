import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MySkills from "../components/MySkills";

function Skills() {
  const navigate = useNavigate();
  return (
    <Container>
      <MySkills />
      <NextPage
        onClick={() => {
          navigate("/projects");
        }}
      >
        <GrNext size={100} />
      </NextPage>
      <PrevPage
        onClick={() => {
          navigate("/about");
        }}
      >
        <GrPrevious size={100} />
      </PrevPage>
    </Container>
  );
}

export default Skills;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
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

const PrevPage = styled.div`
  position: absolute;
  left: 30px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateX(-20px);
    cursor: pointer;
  }
`;
