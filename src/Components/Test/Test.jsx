import React from 'react';
import './Test.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import john from '../../Assisstens/img/john.png';
import women from '../../Assisstens/img/women.png';
import oldman from '../../Assisstens/img/old man.png';
import {Helmet} from "react-helmet-async";

export default function Test() {
    const windowMatch = window.matchMedia('(max-width: 1000px)');

    return (
        <section className='test' id={"testimonial"}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="top">отзывы компании</h1>
                        <p className="top">ВАШИ ОТЗЫВЫ -<br /> НАША ГОРДОСТЬ</p>
                        <p className="bottom">
                            Мы ценим каждое мнение и стремимся к совершенству
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <Swiper
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={windowMatch ? 1 : 2}
                            autoplay={{
                                delay: 250,
                                duration: 250,
                            }}
                        >
                            <SwiperSlide>
                                <div className="box">
                                    <p className="box-top">
                                        "Industrix has been our trusted partner for years. Their manufacturing consulting services helped us streamline our operations and boost productivity. They are the go-to experts in the industry!"
                                    </p>
                                    <div className="star">★★★★★</div>
                                    <div className="box-bottom">
                                        <img src={john} alt="John Doe" />
                                        <div className="text">
                                            <p className="name">John Doe</p>
                                            <p className="info">Freelancer</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box">
                                    <p className="box-top">
                                        "We turned to Industrix for their top-notch industrial automation solutions. Their robotics team revolutionized our production process, making us more competitive than ever. Thanks, Industrix!"
                                    </p>
                                    <div className="star">★★★★★</div>
                                    <div className="box-bottom">
                                        <img src={women} alt="Mellisa Frenc" />
                                        <div className="text">
                                            <p className="name">Mellisa Frenc</p>
                                            <p className="info">Business Owner</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box">
                                    <p className="box-top">
                                        "Industrix's quality assurance and testing services have been instrumental in maintaining our product standards. Their attention to detail is unparalleled, ensuring our products meet regulations."
                                    </p>
                                    <div className="star">★★★★★</div>
                                    <div className="box-bottom">
                                        <img src={oldman} alt="William Joe" />
                                        <div className="text">
                                            <p className="name">William Joe</p>
                                            <p className="info">General Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
