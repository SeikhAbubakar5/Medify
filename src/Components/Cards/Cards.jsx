import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Img1 from '../../assets/Group1.png';
import Img2 from '../../assets/Group2.png';
import './Cards.css';

const Cards = () => {
  const images = [
    { src: Img1, alt: 'img1' },
    { src: Img2, alt: 'img2' },
    { src: Img1, alt: 'img1' },
    { src: Img2, alt: 'img2' }
  ];

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper1"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.src} alt={image.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Cards;
