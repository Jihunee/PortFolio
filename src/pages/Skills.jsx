import React from "react";
import styled from "styled-components";
import MySkills from "../components/MySkills";

function Skills() {
  return (
    <Container>
      <MySkills />
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
