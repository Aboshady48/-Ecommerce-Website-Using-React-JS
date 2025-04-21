import Product from "./Product"
import './SlideProduct.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay,Navigation } from 'swiper/modules';


const SlideProduct = ({ title ,products}) => {
  return (
    <div className="slide-product slide">
      <div className="container">
        <div className="top-slide">
          <h2>{title}</h2>
          <p></p>
        </div>

        <Swiper slidesPerView={3} loop={true} autoplay={{ delay: 2000, disableOnInteraction: false }} navigation={true} modules={[Autoplay, Navigation]} className="mySwiper">
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <Product product={product} />
            </SwiperSlide>
          ))} 
        </Swiper>
      </div>
    </div>
  );
};

export default SlideProduct
