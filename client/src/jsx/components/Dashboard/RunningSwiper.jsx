import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGES } from '../../constant/theme';

import gif from './../../../assets/images/p.gif';
import gif1 from './../../../assets/images/p1.gif';
import gif2 from './../../../assets/images/p2.gif';
import gif3 from './../../../assets/images/p3.gif';

const sliderDate = [
    {image: gif1, Name:'Development planning', status:'Cencle', badge:'danger'},
    {image: gif3, Name:'Desinging planning', status:'Inprogress',badge:'info ' },
    {image: gif,  Name:'Frontend Designing', status:'Pending',badge:'warning'},
    {image: gif2, Name:'Development planning', status:'Complete', badge:'primary'},
];

const RunningSwiper = () => {
    return (
        <>
            <Swiper                        
                speed={1500}
                spaceBetween={20}
                slidesPerView={4}
                autoplay = {{
                    delay: 1000,
                }}
                breakpoints= {{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    416: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1788: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                className="mySwiper"        
            >
                {sliderDate.map((item, ind)=>(
                    <SwiperSlide key={ind}>
                        <div className="swiper-slide">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-media">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="media-data">
                                        <h4><Link to={"/project"}>{item.Name}</Link></h4>
                                        <div className="d-flex align-items-center">
                                            <div className="avatar-list avatar-list-stacked">
                                                <img src={IMAGES.contact6} className="avatar avatar-md  rounded-circle" alt="" />
                                                <img src={IMAGES.contact5} className="avatar avatar-md rounded-circle" alt="" />
                                                <img src={IMAGES.contact1} className="avatar avatar-md rounded-circle" alt="" />
                                                <img src={IMAGES.contact6} className="avatar avatar-md  rounded-circle" alt="" />
                                            </div>
                                            <span>21+ Team</span>
                                        </div>
                                        <div className="dateformat d-flex justify-content-between align-items-end">
                                            <div>
                                                <p>Due Date</p>
                                                <span>06 Sep 2021</span>
                                            </div>
                                            <span className={`badge light border-0 badge-${item.badge}`}>{item.status}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>        
                ))}
            </Swiper>
        </>
    );
};

export default RunningSwiper;