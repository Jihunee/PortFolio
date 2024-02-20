import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

function SwiperImgs(projectImgs1) {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        touchRatio={1}
        loopAdditionalSlides={1}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* {projectImgs1.map((item) => {
          return <SwiperSlide></SwiperSlide>;
        })} */}
      </Swiper>
    </div>
  );
}

export default SwiperImgs;
