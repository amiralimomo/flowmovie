import React from "react";
import "./carousel.css";
import slide1 from "../images/slider-8-1.jpg";
import slide2 from "../images/slider-3.jpg";
import slide3 from "../images/slider-6-1.jpg";
import slide4 from "../images/slider-4-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ActiveButton } from "../shared/activebutton";
import { PassiveButton } from "../shared/passivebutton";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';






export const Carousel = () => {


    return (
        <React.Fragment>
            <Swiper spaceBetween={0} slidesPerView={1} loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}


                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                speed={1000}
            >


                <SwiperSlide>
                    <div className="slide" style={{ background: `url(${slide1})` }}>
                        <div className="slide-detail">
                        <h3 className="slide-title">Black Mirror</h3>
                            <div> <span>2017</span><span>|</span><span>comedy</span><span>|</span><span>1 hr 55 mins</span></div>
                            <ActiveButton name="Watch Now"/>
                            <PassiveButton name="+playlist"/>
                            </div></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide" style={{ background: `url(${slide2})` }}>
                        <div className="slide-detail">
                            <h3 className="slide-title">Black Mirror</h3>
                            <div> <span>2017</span><span>|</span><span>dram</span><span>|</span><span>1 hr 55 mins</span></div>
                            <ActiveButton name="Watch Now"/>
                            <PassiveButton name="+playlist"/>
                            </div></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide" style={{ background: `url(${slide3})` }}>
                        <div className="slide-detail">
                            <h3 className="slide-title">Black Mirror</h3>
                            <div> <span>2017</span><span>|</span><span>action</span><span>|</span><span>1 hr 55 mins</span></div>
                            <ActiveButton name="Watch Now"/>
                            <PassiveButton name="+playlist"/>
                            </div></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide" style={{ background: `url(${slide4})` }}>
                        <div className="slide-detail">
                            <h3 className="slide-title">Black Mirror</h3>
                            <div> <span>2017</span><span>|</span><span>horror</span><span>|</span><span>1 hr 55 mins</span></div>
                            <ActiveButton name="Watch Now"/>
                            <PassiveButton name="+playlist"/>
                            </div></div>
                </SwiperSlide>
            </Swiper>
        </React.Fragment>
    )
}