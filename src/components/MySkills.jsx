import React from "react";
import styled from "styled-components";

const TS_IMG = {
  src: "assets/image/icons/TSIMG.png",
  title: "TypeScript",
};
const REACT_IMG = {
  src: "assets/image/icons/REACTIMG.png",
  title: "REACT",
};
const NEXT_IMG = {
  src: "assets/image/icons/NEXTIMG.png",
  title: "NEXT",
};
const REDUX_IMG = {
  src: "assets/image/icons/REDUXIMG.png",
  title: "Redux",
};
const RECOIL_IMG = {
  src: "assets/image/icons/RECOILIMG.png",
  title: "Recoil",
};
const REACT_QUERY_IMG = {
  src: "assets/image/icons/ReactQueryIMG.png",
  title: "ReactQuery",
};
const TAILWIND_IMG = {
  src: "assets/image/icons/TailWindImg.png",
  title: "TailWind",
};

function MySkills() {
  const images = [
    TS_IMG,
    REACT_IMG,
    NEXT_IMG,
    REDUX_IMG,
    RECOIL_IMG,
    REACT_QUERY_IMG,
    TAILWIND_IMG,
  ];

  return (
    <Container>
      <SkillBox>
        <h1>Frontend</h1>
        <div style={{ display: "flex" }}>
          <img src="assets/image/icons/HTML.png" alt="HTML 이미지" />
          <img src="assets/image/icons/cssImg.png" alt="CSS 이미지" />
          <img src="assets/image/icons/JSIMG.png" alt="JS 이미지" />
        </div>
        {images.map((item) => {
          return (
            <ImageBox key={item.title}>
              <img src={item.src} alt={`${item.title}이미지`} />
              <h2>{item.title}</h2>
            </ImageBox>
          );
        })}
      </SkillBox>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <SkillBox>
          <h1>Backend</h1>
          <ImageBox>
            <img
              src="assets/image/icons/fireBaseImg.png"
              alt="파이어베이스 이미지"
            />
            <h2>FireBase</h2>
          </ImageBox>
          <ImageBox>
            <img
              src="assets/image/icons/supabaseImg.png"
              alt="수파베이스 이미지"
            />
            <h2>SupaBase</h2>
          </ImageBox>
        </SkillBox>
        <SkillBox>
          <h1>Communication</h1>
          <ImageBox>
            <img src="assets/image/icons/figmaImg.png" alt="피그마 이미지" />
            <h2>Figma</h2>
          </ImageBox>
          <ImageBox>
            <img src="assets/image/icons/slackImg.jpg" alt="슬랙 이미지" />
            <h2>Slack</h2>
          </ImageBox>
          <ImageBox>
            <img src="assets/image/icons/notionImg.png" alt="노션 이미지" />
            <h2>Notion</h2>
          </ImageBox>
        </SkillBox>
      </div>
      <SkillBox>
        <h1>VersionControl</h1>
        <ImageBox>
          <img src="assets/image/icons/gitImg.png" alt="깃 이미지" />
          <h2>Git</h2>
        </ImageBox>
        <ImageBox>
          <img src="assets/image/icons/githubImg.png" alt="깃허브 이미지" />
          <h2>Github</h2>
        </ImageBox>
      </SkillBox>
    </Container>
  );
}

export default MySkills;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  font-family: "Cafe24";
`;

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  gap: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 30px;
  box-shadow: -5px -5px 5px 5px white, 5px 5px 30px 5px gray;
  transition: all 0.2s ease-in-out;
  & h1 {
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
    font-size: 25px;
    border-bottom: 3px solid gray;
    color: orange;
    padding-bottom: 10px;
  }
  & img {
    width: 50px;
  }
  &:hover {
    transform: translateY(-20px);
  }
`;

const ImageBox = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  gap: 30px;
`;
