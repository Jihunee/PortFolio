import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

function Home() {
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
  font-size: 50px;
  font-family: "Cafe24";
`;
