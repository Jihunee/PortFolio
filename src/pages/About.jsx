import React from "react";
import { GrNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Information from "../components/Information";
import Typewriter from "typewriter-effect";
import { GrPrevious } from "react-icons/gr";

function About() {
  const navigate = useNavigate();
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
      <NextPage
        onClick={() => {
          navigate("/skills");
        }}
      >
        <GrNext size={100} style={{ color: "white" }} />
      </NextPage>
      <PrevPage
        onClick={() => {
          navigate("/");
        }}
      >
        <GrPrevious size={100} style={{ color: "white" }} />
      </PrevPage>
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

const TypewerBox = styled.div`
  font-family: "Cafe24";
  position: absolute;
  bottom: 200px;
  font-size: 30px;
  color: white;
`;
