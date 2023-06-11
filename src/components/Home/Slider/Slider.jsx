import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import img1 from "../../../assets/home/1.jpg";
import img2 from "../../../assets/home/2.jpg";
import "./Slider.css";
const BannerSlider = () => {
  const images = [img1, img2];

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt="banner"
              className="h-[100vh] object-cover w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerSlider;
