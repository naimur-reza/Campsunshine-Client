import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";

const BannerSlider = () => {
  const images = [
    " https://i.ibb.co/XZMxsHd/national-cancer-institute-N-aihp118p8-unsplash.jpg",
    "https://i.ibb.co/428JpVY/cdc-GDok-EYn-Ofn-E-unsplash.jpg",
    "https://i.ibb.co/9gHfGY7/kenny-eliason-z-FSo6bn-ZJTw-unsplash.jpg",
  ];

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
