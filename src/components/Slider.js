import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import { Navigation, A11y } from "swiper/modules";
import listImages from "../utils/listImages";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Slider({ id, setId }) {
  const handleId = (image) => {
    setId(image);
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, A11y]}
        loop={true}
        // centeredSlides={true}
        grabCursor={true}
        slidesPerView={4}
        className="swiper_container"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        spaceBetween={10}
      >
        {listImages.map((image, index) => (
          <SwiperSlide key={index} onClick={() => handleId(image)}>
            <img
              src={image}
              alt={index}
              className="w-full h-full object-fill"
            />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <KeyboardArrowLeftIcon />
          </div>

          <div className="swiper-button-next slider-arrow">
            <KeyboardArrowRightIcon />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
