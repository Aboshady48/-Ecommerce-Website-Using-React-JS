import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import './Style.css';

const slides = [
  {
    title: 'Microsoft xbox <br /> 360 controllers',
    subtitle: 'Introducing the new',
    text: 'Windows xp 10 and Windows 11 compatible',
    img: '/img/banner_Hero1.jpg',
  },
  {
    title: 'JBL Bluetooth <br /> 360 speakers',
    subtitle: 'Introducing the new',
    text: "Experience rich and clear audio that fills any space, whether you're indoors or outdoors",
    img: '/img/banner_Hero2.jpg',
  },
  {
    title: 'MP3 player <br /> headphones',
    subtitle: 'Introducing the new',
    text: 'MP3 Player with Integrated Headphones (Headband Style)',
    img: '/img/banner_Hero3.jpg',
  },
];

const HeroSlider = () => {
  return (
    <div className="hero">
      <div className="container">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.img} alt="Slide" className="slide-img" />
              <div className="content">
                <h4>{slide.subtitle}</h4>
                <h3 dangerouslySetInnerHTML={{ __html: slide.title }}></h3>
                <p>{slide.text}</p>
                
                <Link to="/" className="btn">Shop Now</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
