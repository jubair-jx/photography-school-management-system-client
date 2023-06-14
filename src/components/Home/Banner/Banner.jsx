import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Scrollbar } from "swiper";
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";
import banner4 from "../../../assets/banner4.png";
import banner5 from "../../../assets/banner5.png";
import banner6 from "../../../assets/banner2.png";
const Banner = () => {
  return (
    <div>
      <Swiper
        pagination={{
          type: "progressbar",
          dynamicBullets: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="md:h-[700px] w-full" src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="md:h-[700px] w-full" src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="md:h-[700px] w-full" src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="md:h-[700px] w-full" src={banner4} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img className="md:h-[700px] w-full" src={banner5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="md:h-[700px] w-full" src={banner6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="md:h-[700px] w-full" src={banner3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
