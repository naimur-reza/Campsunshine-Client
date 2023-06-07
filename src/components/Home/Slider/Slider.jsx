import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/1.jpg";
import img2 from "../../../assets/home/2.jpg";
const BannerSlider = () => {
  const images = [img1, img2];

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={true}
      showThumbs={true}
      interval={3000}
      transitionTime={1000}
      stopOnHover={false}
      dynamicHeight={false}
      swipeable={true}
      emulateTouch={true}
      useKeyboardArrows={true}
      centerMode={false}
      centerSlidePercentage={80}
      swipeScrollTolerance={5}
      axis={"horizontal"}
      thumbWidth={100}>
      {images.map((image, index) => (
        <div key={index} className="select-none cursor-grab md:h-screen">
          <img src={image} />
        </div>
      ))}
    </Carousel>
  );
};

export default BannerSlider;
