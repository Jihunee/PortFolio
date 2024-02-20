import React from "react";
import styled from "styled-components";
import Information from "../components/Information";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <Container>
      <Information />
      <TypewerBox>
        <Typewriter
          options={{
            strings:
              "저는 꼼꼼한 성격을 가졌으며, 맡은 일에 최선을 다하며 강한 책임감이 저의 강점 입니다!",
            autoStart: true,
          }}
        />
      </TypewerBox>
    </Container>
  );
}

export default About;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TypewerBox = styled.div`
  font-family: "Cafe24";
  position: absolute;
  bottom: 200px;
  font-size: 30px;
`;
