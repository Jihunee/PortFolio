import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import styled, { css } from "styled-components";

function SwiperImgs({ projectImgs, projectImgCounts, size }) {
  const [swiper, setSwiper] = useState(null);
  const [currentImgCount, setCurrentImgCount] = useState(1);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    setCurrentImgCount(activeIndex);
  };
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={true}
        touchRatio={0}
        loopAdditionalSlides={1}
        loop={true}
        onSlideChange={(swiper) => {
          handleSlideChange(swiper);
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
      >
        {projectImgs.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <ImgBox size={size}>
                <img src={item.src} alt={item.title} />
              </ImgBox>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ImgCount>
        ( {currentImgCount + 1} / {projectImgCounts} )
      </ImgCount>
      <NextButton
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <MdNavigateNext size={50} />
      </NextButton>
      <PrevButton
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <GrFormPrevious size={45} />
      </PrevButton>
    </div>
  );
}

export default SwiperImgs;

const ImgBox = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px 0 15px;
  & img {
    ${(props) => {
      if (props.size === "small") {
        return css`
          width: 50%;
        `;
      }
      return css`
        width: 100%;
        height: 60%;
      `;
    }}
    border-radius: 20px;
    margin-bottom: 80px;
  }
`;

const ImgCount = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 60px;
  left: 45%;
`;

const NextButton = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 310px;
  right: 20px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateX(10px);
    cursor: pointer;
  }
`;

const PrevButton = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 310px;
  left: 20px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateX(-10px);
    cursor: pointer;
  }
`;
