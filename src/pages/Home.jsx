/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { FaGithub } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <h1>안녕하세요!</h1>
        <SwiperContentBox>
          <Typewriter
            options={{
              strings: ["Front-End"],
              autoStart: true,
              loop: true,
            }}
          />
        </SwiperContentBox>
        <h3>
          사용자 중심의 개발에 주력하고 있는 <span>사용자 친화적인 개발자</span>
          입니다.
          <h3>높은 품질의 웹 서비스를 제공하고자 하며,</h3>
          <h3>
            지속적인 개선을 통해 사용자들에게 최고의 경험을 제공하는 것이
            목표입니다.
          </h3>
        </h3>
        <Buttons>
          <button
            onClick={() => {
              window.open("https://github.com/Jihunee", "_blank");
            }}
          >
            <FaGithub fill="skyblue" size={25} />
          </button>
          <button
            onClick={() => {
              window.open("https://jihune6439.tistory.com", "_blank");
            }}
          >
            <FaBlog fill="skyblue" size={25} />
          </button>
        </Buttons>
        <Button
          onClick={() => {
            navigate("/about");
          }}
        >
          <h4>ABOUT ME</h4>
          <span>
            <GrFormNextLink size={30} />
          </span>
        </Button>
      </Content>
      <AvatarContainer>
        <AvatarFigure>
          <img src="assets/image/profileImg.png" alt="프로필 이미지" />
        </AvatarFigure>
      </AvatarContainer>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  font-family: "Cafe24";
`;

const Content = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 100px;
  & h1 {
    font-size: 35px;
    margin-bottom: 20px;
  }
  & h3 {
    font-size: 20px;
    line-height: 35px;
    & span {
      background: linear-gradient(#adffe9, #a3abff);
      color: transparent;
      background-clip: text;
      font-size: 30px;
    }
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  padding-right: 80px;
`;

const AvatarFigure = styled.div`
  margin-left: 80px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  box-shadow: -5px -5px 40px 5px #d5b3ff, 5px 5px 40px 5px #b8ffc7;
  & img {
    width: 400px;
    height: 400px;
    border-radius: 50%;
  }
`;

const SwiperContentBox = styled.div`
  font-size: 50px;
  margin-bottom: 20px;
`;

const Buttons = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  gap: 20px;

  & button {
    background-color: transparent;
    border: none;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.5);
    }
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 25%;
  padding: 10px 0 10px 0;
  border-radius: 30px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  box-shadow: -1px -1px 1px 1px white, 1px 1px 1px 1px gray;
  &:hover {
    transform: scale(1.1);
    & span {
      transition: all 0.3s ease-in-out;
      transform: translateX(15px);
    }
  }
`;
