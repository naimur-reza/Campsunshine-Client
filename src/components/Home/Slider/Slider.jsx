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
  const data = [
    {
      image:
        "https://i.ibb.co/XZMxsHd/national-cancer-institute-N-aihp118p8-unsplash.jpg",
      title: "Fun-Filled Adventures Await",
      description:
        "Discover an exciting summer experience filled with outdoor activities, educational programs, and lifelong memories. Enroll your child today.",
    },
    {
      image: "https://i.ibb.co/428JpVY/cdc-GDok-EYn-Ofn-E-unsplash.jpg",
      title: "Discover the Joy of Learning Outdoors",
      description:
        "Step into nature for hands-on exploration, teamwork, and innovative lessons. Give your child a summer of education and fun.",
    },
    {
      image:
        "https://i.ibb.co/9gHfGY7/kenny-eliason-z-FSo6bn-ZJTw-unsplash.jpg",
      title: "Unlock Your Child's Potential",
      description:
        "Nurture your child's talents and passions in a supportive environment. Join us for a summer of growth and achievement.",
    },
  ];
  // " https://i.ibb.co/XZMxsHd/national-cancer-institute-N-aihp118p8-unsplash.jpg",
  // "https://i.ibb.co/428JpVY/cdc-GDok-EYn-Ofn-E-unsplash.jpg",
  // "https://i.ibb.co/9gHfGY7/kenny-eliason-z-FSo6bn-ZJTw-unsplash.jpg",

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
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt="banner"
              className="h-[100vh] object-cover w-full"
            />
            <div className="absolute inset-0 z-10 flex items-center px-10 bg-black/40 dark:bg-black/60">
              <div className="lg:w-1/2 ">
                <h1 className="lg:text-5xl text-3xl font-bold text-white">
                  {item.title}
                </h1>
                <p className="text-gray-200 pt-6 lg:text-lg text-base tracking-wide  ">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerSlider;
