import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Title from "../../Sheard/Title/Title";
import slider4 from "../../assets/home/slide4.jpg";
const Order = () => {
  return (
    <div className="my-5">
      <Title title="ORDER ONLINE" single="From 11:00am to 10:00pm" />
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper md:h-[390px]"
        >
          <SwiperSlide className="relative">
            <img src="https://plus.unsplash.com/premium_photo-1679518412299-76e2712f0d35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBpenphfGVufDB8fDB8fHww" alt="" className="w-full h-full" />
            <div className="bg-[#151515c2] absolute left-0 bottom-0 w-full">
              <h1 className=" md:text-2xl text-center  md:px-5 py-2 text-white font-medium uppercase">
                {" "}
                Salads
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src="https://images.unsplash.com/photo-1544681280-d25a782adc9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNvdXBzfGVufDB8fDB8fHww" alt="" className="w-full h-full" />
            <div className="bg-[#151515c2] absolute left-0 bottom-0 w-full">
              <h1 className=" md:text-2xl text-center  md:px-5 py-2 text-white font-medium uppercase">
                {" "}
                Soups
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src="https://images.unsplash.com/photo-1594179047519-f347310d3322?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHBpenphc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="w-full h-full" />
            <div className="bg-[#151515c2] absolute left-0 bottom-0 w-full">
              <h1 className=" md:text-2xl text-center  md:px-5 py-2 text-white font-medium uppercase">
                {" "}
                pizzas
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slider4} alt="" className="w-full h-full" />
            <div className="bg-[#151515c2] absolute left-0 bottom-0 w-full">
              <h1 className=" md:text-2xl text-center  md:px-5 py-2 text-white font-medium uppercase">
                {" "}
                desserts
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src="https://images.unsplash.com/photo-1621538997517-58ce53933faa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBpenphc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="w-full h-full" />
            <div className="bg-[#151515c2] absolute left-0 bottom-0 w-full">
              <h1 className=" md:text-2xl text-center pmd:x-5 py-2 text-white font-medium uppercase">
                {" "}
                Salads
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Order;
