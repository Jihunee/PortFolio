import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { GrNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Typewriter
        options={{
          strings: [
            "안녕하세요!",
            "저는 프론트엔드 개발자 입니다!",
            "저의 포트폴리오를 보여드릴게요!",
          ],
          autoStart: true,
          loop: true,
        }}
      />
      <NextPage
        onClick={() => {
          navigate("/about");
        }}
      >
        <GrNext size={100} style={{ color: "white" }} />
      </NextPage>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 50px;
  font-family: "Cafe24";
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
