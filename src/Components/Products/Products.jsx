import products from "../../assets/products/products";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Products = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
  };
  return (
    <div className="flex  justify-center py-[rem] mx-[0.8rem] my-[1.8rem] border bg-white">
      <div className="product-container w-[90%] mt-[1rem] md:h-[12rem] md:py-[1rem] sm:h-[8rem] ">
        <Slider {...settings}>
          {products.map((item, id) => (
            <div
              className="product-inner-container pb-[0.8rem] pt-[0.5rem] px-[0.5rem] border bg-white   "
              key={id}
            >
              <Link to={`/productDetails/${id}`}>
                <img
                  src={item.img}
                  alt=""
                  className="w-[6.3rem] h-[7.5rem]  border xl:w-[6.3rem] xl:h-[7.5rem] lg:w-[6.3rem] lg:h-[7.5rem]  md:w-[6.3rem] md:h-[7.5rem] sm:w-[5rem] sm:h-[5rem]"
                />
              </Link>
              <h4 className="text-center xl:text-center lg:text-center md:text-center xl:text-[1rem] lg:text-[1rem] md:text-[1rem]  sm:text-[0.4rem]">
                {item.name}
              </h4>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
