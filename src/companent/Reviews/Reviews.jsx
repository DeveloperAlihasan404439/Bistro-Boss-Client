import { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, Navigation } from "swiper/modules";
import Title from "../../Sheard/Title/Title";
import axios from "axios";
import Rating from "react-rating";
import logo from "../../assets/others/doble_coma.png";
import { BsStarFill,BsStarHalf,BsStar } from 'react-icons/bs';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("/reviews.json").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <div className="pb-10">
      <Title title="TESTIMONIALS" single="What Our Clients Say" />
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper2 md:w-6/12 mx-auto"
        >
          {reviews?.map((reviw) => (
            <SwiperSlide key={reviw._id}>
              <div className="md:px-10">
                <div className="text-center">
                  <Rating
                    placeholderRating={reviw.rating}
                    emptySymbol={<BsStar />}
                    placeholderSymbol={<BsStarFill/>}
                    fullSymbol={<BsStarHalf/>}
                    className="text-orange-600 text-2xl pb-5"
                  />
                </div>
                <div className="flex justify-center pb-5 md:pb-10">
                  <img src={logo} alt="" className="w-[70px]" />
                </div>
                <h1 className="text-center px-5">{reviw.details}</h1>
                <h1 className="text-center text-2xl font-medium">
                  {reviw.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
