import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import banner from "../../assets/home/banner.jpg";
// import img from "next/image";
import banner1 from "../../assets/home/01.jpg";
import banner2 from "../../assets/home/02.jpg";
import banner3 from "../../assets/home/03.png";
import banner4 from "../../assets/home/04.jpg";
const Banner = () => {
  return (
    <div className='w-full'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper2 w-full"
      >
        <SwiperSlide>
          <img src={banner} className='h-[65vh] w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} className='h-[65vh] w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2}  className='h-[65vh] w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} className='h-[65vh] w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} className='h-[65vh] w-full'/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        // onSwiper={setThumbsSwiper}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Autoplay,FreeMode, Navigation, Thumbs]}
        className="mySwiper w-[300px] mt-2"
      >
      <SwiperSlide>
        <img src={banner} className='w-full rounded-lg'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner1}  className='w-full rounded-lg'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2}  className='w-full rounded-lg'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} className='w-full rounded-lg'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner4} className='w-full rounded-lg'/>
      </SwiperSlide>
      </Swiper>
    </div>
  );
}


export default Banner;
