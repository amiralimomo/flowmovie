import React from "react";
import "./carousel.css";
import slide from "../images/silent-hill-2-remake_w6eW6gC.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export const Carousel=()=>{
    return (
        <React.Fragment>
           <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className="slider-image" src={slide} alt="" /></SwiperSlide>
      <SwiperSlide><img className="slider-image" src={slide} alt="" /></SwiperSlide>
      <SwiperSlide><img className="slider-image" src={slide} alt="" /></SwiperSlide>
      <SwiperSlide><img className="slider-image" src={slide} alt="" /></SwiperSlide>
      <SwiperSlide><img className="slider-image" src={slide} alt="" /></SwiperSlide>
      <SwiperSlide><img className="slider-image" src={slide} alt="" /></SwiperSlide>
      <SwiperSlide><img className="slider-image" src={slide} alt="" /></SwiperSlide>
   
      ...
    </Swiper>
        </React.Fragment>
    )
}