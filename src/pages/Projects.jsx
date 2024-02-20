import React from "react";
import styled from "styled-components";
import SwiperImgs from "../components/SwiperImgs";

const PROJECTIMG1 = {
  src: "assets/image/project1/projectImg1.png",
  title: "1번째 이미지",
};
const PROJECTIMG2 = {
  src: "assets/image/project1/projectImg2.jpg",
  title: "2번째 이미지",
};
const PROJECTIMG3 = {
  src: "assets/image/project1/projectImg3.jpg",
  title: "3번째 이미지",
};
const PROJECTIMG4 = {
  src: "assets/image/project1/projectImg4.png",
  title: "4번째 이미지",
};
const PROJECTIMG5 = {
  src: "assets/image/project1/projectImg5.png",
  title: "5번째 이미지",
};
const PROJECTIMG6 = {
  src: "assets/image/project1/projectImg6.png",
  title: "6번째 이미지",
};
const PROJECTIMG7 = {
  src: "assets/image/project1/projectImg7.png",
  title: "7번째 이미지",
};

function Projects() {
  const projectImgs1 = [
    PROJECTIMG1,
    PROJECTIMG2,
    PROJECTIMG3,
    PROJECTIMG4,
    PROJECTIMG5,
    PROJECTIMG6,
    PROJECTIMG7,
  ];
  return (
    <Container>
      <ProjectBox>
        <Title>
          <h1>MECHULI</h1>
          <h2>2023.12.05 ~ 2023.12.11 (4인 TeamProject )</h2>
        </Title>
        <ContentBox>
          <SlideImgs>
            <SwiperImgs projectImgs1={projectImgs1} />
          </SlideImgs>
          <Content></Content>
        </ContentBox>
      </ProjectBox>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 50px;
  font-family: "Cafe24";
`;

const ProjectBox = styled.div`
  width: 1200px;
  height: 800px;
  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  /* box-shadow: -5px -5px 5px 5px white, 5px 5px 30px 5px gray; */
`;

const Title = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  h1 {
    font-size: 30px;
  }
  h2 {
    color: gray;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  height: 700px;
  border: 1px solid blue;
  display: flex;
`;

const SlideImgs = styled.div`
  width: 50%;
  height: 700px;
  border: 1px solid skyblue;
`;
const Content = styled.div`
  width: 50%;
  height: 700px;
  border: 1px solid pink;
`;
