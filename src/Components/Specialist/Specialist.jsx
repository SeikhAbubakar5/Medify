import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import img1 from "../../assets/Hena.png";
import img2 from "../../assets/Khan.png";
import img3 from "../../assets/Sharma.png";
import './Specialist.css';

const Specialist = () => {
  const images = [
    { src: img1, alt: 'Dr. Heena Sachdeva' ,title:'Orthopadics' },
    { src: img2, alt: 'Dr. Ahmad Khan',title:'Neurologist' },
    { src: img3, alt: 'Dr. Ankur Sharma',title:'Medicine' },
    { src: img1, alt: 'Dr. Heena Sachdeva',title:'Orthopadics' },
    { src: img2, alt: 'Dr. Ahmad Khan',title:'Neurologist' },
    { src: img3, alt: 'Dr. Ankur Sharma',title:'Medicine' },
  ];

  return (
    <>
    <h1>Our Medical Specialist</h1>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwipers1"
    >
        
      {images.map((image, index) => (
        <SwiperSlide key={index} className='items1'>
          <img src={image.src} alt={image.alt} />
          {image.alt}
          <p>{image.title}</p>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
    
  );
}

export default Specialist;