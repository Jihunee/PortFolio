import React from "react";
import styled from "styled-components";
import SwiperImgs from "../components/SwiperImgs";
import { projectImgs1 } from "../data/imgData";
import { projectImgs2 } from "../data/imgData";
import { projectImgs3 } from "../data/imgData";
import TopBtn from "../components/TopBtn";
import {
  projectData_Skills_1,
  projectData_Skills_2,
  projectData_Skills_3,
  projectFront_Skills_1,
  projectFront_Skills_2,
  projectFront_Skills_3,
} from "../data/skillsData";

function Projects() {
  return (
    <Container>
      <ProjectBox>
        <Title>
          <h1>Crosswalk</h1>
          <h2>2024.01.04 ~ 2024.02.08 (4인 TeamProject )</h2>
        </Title>
        <ContentBox>
          <SlideImgs>
            <SwiperImgs
              projectImgs={projectImgs3}
              projectImgCounts={projectImgs3.length}
              size={"small"}
            />
          </SlideImgs>
          <Content>
            <div>
              <h1>Crosswalk : 인생의 소울메이트를 찾아보세요!</h1>
              <h2>
                블라인드 매칭 및 실시간 채팅을 통해 소울메이트를 만들 수 있는
                웹페이지입니다. 웹 앱 형태로 나와 관심사가 맞거나 맘에드는
                사람을 픽하여 하나씩 알아가고 나와 맘이 맞는 친구를 찾아 줍니다!
                횡단보도 양끝에서 마주친 두 사람. 실시간 대화를 진행하고
                호감도를 쌓아 블라인드된 유저의 이미지를 볼 수 있습니다!
              </h2>
              <h2>
                <span>PWA</span>를 실제로 구현해봄으로써 앞으로 웹 생태계가
                뻗어나갈 무한한 가능성과 확장성을 몸소 체감할 수 있었으며 더
                많은 유저의 참여율을 높일 수 있었습니다.
              </h2>
            </div>
            <div>
              <h3> 주요기능</h3>
              <h4>1. 소셜로그인을 통한 간단한 로그인</h4>
              <h4>2. 3D 카드 애니메이션, 활발한 대화를 통한 호감도 시스템</h4>
              <h4>3. 실시간 알림 및 실시간 채팅</h4>
              <h4>4. 소울메이트 달성 시 유저의 시크릿 사진 공개</h4>
            </div>
            <div>
              <h3>Frontend</h3>
              <SkillContents>
                {projectFront_Skills_1.map((item) => {
                  return <SkillChip>{item}</SkillChip>;
                })}
              </SkillContents>
            </div>
            <div>
              <h3>Data Manamgement</h3>{" "}
              <SkillContents>
                {projectData_Skills_1.map((item) => {
                  return <SkillChip>{item}</SkillChip>;
                })}
              </SkillContents>
            </div>
            <SkillContents>
              <h3>GtiHub </h3>
              <a
                href="https://github.com/volant97/Crosswalk"
                target="_blank"
                rel="noreferrer"
              >
                Crosswalk-Github
              </a>
            </SkillContents>
            <SkillContents>
              <h3>URL </h3>
              <a
                href="https://crosswalk-zeta.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Crosswalk
              </a>
            </SkillContents>
            <SkillContents>
              <h3>Deployment</h3> Vercel
            </SkillContents>
          </Content>
        </ContentBox>
      </ProjectBox>
      <ProjectBox>
        <Title>
          <h1>DailyC</h1>
          <h2>2023.12.26 ~ 2024.01.03 (4인 TeamProject )</h2>
        </Title>
        <ContentBox>
          <SlideImgs>
            <SwiperImgs
              projectImgs={projectImgs2}
              projectImgCounts={projectImgs2.length}
            />
          </SlideImgs>
          <Content>
            <div>
              <h1>DailyC : 오늘의 외출 코디 공유</h1>
              <h2>
                여러 사람들의 다양한 코디를 확인해 볼 수 있으며 남자, 여자
                모두의 코디를 볼 수 있으며 코디를 좋아하는 사람들을 위해
                만들어진 웹사이트입니다.
              </h2>
              <h2>
                Next.JS의 App Router를 처음 사용해봤던 프로젝트이며 이 과정을
                통하여 서버 컴포넌트의 활용, next사용 및 활용 방법, React와 다른
                Router구조, Image최적화 등 많은 것을 배울 수 있었으며 실무에서
                많이 사용하는 Tailwind CSS, TypeScript, supabase를 처음으로
                사용해보며 더 빠른 성장의 계기가 되었습니다.
              </h2>
            </div>
            <div>
              <h3> 주요기능</h3>
              <h4>
                {" "}
                1. 유행하는 코디, 계절에 맞는 코디 정보를 확인할 수 있습니다.
              </h4>
              <h4>
                2. 원하는 코디 카드를 저장할 수 있습니다. (좋아요, 북마크)
              </h4>
              <h4> 3. 오늘의 출근룩, 데이트 룩을 공유할 수 있습니다.</h4>
            </div>
            <div>
              <h3>Frontend</h3>
              <SkillContents>
                {projectFront_Skills_2.map((item) => {
                  return <SkillChip>{item}</SkillChip>;
                })}
              </SkillContents>
            </div>
            <div>
              <h3>Data Manamgement</h3>
              <SkillContents>
                {projectData_Skills_2.map((item) => {
                  return <SkillChip>{item}</SkillChip>;
                })}
              </SkillContents>
            </div>
            <SkillContents>
              <h3>GtiHub </h3>
              <a
                href="https://github.com/yachaechae/DailyC"
                target="_blank"
                rel="noreferrer"
              >
                DailyC-Github
              </a>
            </SkillContents>
            <SkillContents>
              <h3>URL </h3>
              <a
                href="https://mechuli.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                DailyC
              </a>
            </SkillContents>
            <SkillContents>
              <h3>Deployment</h3> Vercel
            </SkillContents>
          </Content>
        </ContentBox>
      </ProjectBox>
      <ProjectBox>
        <Title>
          <h1>MECHULI</h1>
          <h2>2023.12.05 ~ 2023.12.11 (4인 TeamProject )</h2>
        </Title>
        <ContentBox>
          <SlideImgs>
            <SwiperImgs
              projectImgs={projectImgs1}
              projectImgCounts={projectImgs1.length}
            />
          </SlideImgs>
          <Content>
            <div>
              <h1>메추리 : 메뉴 추천 리스트</h1>
              <h2>
                지도를 기반으로 한 메뉴 추천 페이지입니다. 점심 및 저녁을 먹고
                싶지만 메뉴를 고르지 못하는 '당신!'을 위해 만들어진
                웹사이트입니다. 주변 맛집을 잘 모르거나 주변 맛집을 빠르게
                찾을려고 하는 사람들에게 도움이 되었으면하는 마음으로
                개발하였습니다.
              </h2>
              <h2>
                지도 API서비스를 처음 사용해봤던 프로젝트이며 사용해봤다는
                것만으로도 의미가 있었지만, 그 과정에서 처음에는 어려움을
                겪었지만, 여러 커뮤니티, 공식문서를 읽고 여러번 테스트하면서
                점차 익숙해져서 새로운 기술을 습득하는 즐거움을 느꼈습니다
              </h2>
            </div>
            <div>
              <h3> 주요기능</h3>
              <h4> 1. 현재 주변 맛집을 찾을 수 있습니다.</h4>
              <h4>
                2. 한식, 양식, 중식, 일식 카테고리를 통해서도 검색할 수
                있습니다.
              </h4>
              <h4> 3. 직접 검색어를 입력하여 검색할 수도 있습니다.</h4>
              <h4>
                4. 검색된 맛집은 마커로표시되며 상세정보를 볼 수 있습니다.
              </h4>
            </div>
            <div>
              <h3>Frontend</h3>
              <SkillContents>
                {projectFront_Skills_3.map((item) => {
                  return <SkillChip>{item}</SkillChip>;
                })}
              </SkillContents>
            </div>
            <div>
              <h3>Data Manamgement</h3>{" "}
              <SkillContents>
                {projectData_Skills_3.map((item) => {
                  return <SkillChip>{item}</SkillChip>;
                })}
              </SkillContents>
            </div>
            <SkillContents>
              <h3>GtiHub </h3>
              <a
                href="https://github.com/Pudliya/mechuli"
                target="_blank"
                rel="noreferrer"
              >
                mechuli-Github
              </a>
            </SkillContents>
            <SkillContents>
              <h3>URL </h3>
              <a
                href="https://mechuli.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                mechuli
              </a>
            </SkillContents>
            <SkillContents>
              <h3>Deployment</h3> Vercel, Glitch
            </SkillContents>
          </Content>
        </ContentBox>
      </ProjectBox>
      <TopBtn />
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  background-image: linear-gradient(
    90deg,
    rgb(168, 215, 255),
    rgb(255, 184, 211)
  );

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
  margin-top: 20px;
  border: 30px solid white;
  border-radius: 80px;
`;

const ProjectBox = styled.div`
  margin-top: 80px;
  width: 1200px;
  height: 820px;
  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  box-shadow: -5px -5px 5px 5px white, 5px 5px 30px 5px gray;
`;

const Title = styled.div`
  width: 100%;
  height: 100px;
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
  padding: 20px 0 20px 0;
  display: flex;
`;

const SlideImgs = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  border-right: 3px solid gray;
  border-radius: 3px;
`;
const Content = styled.div`
  padding-bottom: 20px;
  scale: 0.9;
  width: 50%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  & h1 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  & h2 {
    line-height: 25px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  & h3 {
    font-size: 19px;
    margin-bottom: 5px;
  }
  & a {
    text-decoration: none;
    color: skyblue;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SkillContents = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
`;

const SkillChip = styled.div`
  border: 2px solid white;
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: -1px -1px 1px 1px white, 1px 1px 1px 1px gray;
  background: linear-gradient(
    to right top,
    rgb(168, 215, 255),
    rgb(255, 184, 211)
  );
  font-size: 15px;
`;
