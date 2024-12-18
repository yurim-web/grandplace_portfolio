import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/styles.css";

const MainSlide = ({ img }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    ></div>
  );
};

export default MainSlide;
