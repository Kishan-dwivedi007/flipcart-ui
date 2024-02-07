import carosoul from "../../assets/carosoul/carosoul";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="flex justify-center  w-[98vw] ">
      <div className="carosoul-container  my-[20px] w-[100%] ">
        <Slider {...settings}>
          {carosoul.map((item, id) => (
            <div className="carosoul-img" key={id}>
              <img src={item.img} alt="img" className="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
