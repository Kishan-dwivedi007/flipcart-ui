import banner from "../../assets/banner/banner";
import { Link } from "react-router-dom";
const Banners = () => {
  return (
    <div className="banner-container flex justify-center flex-wrap gap-x-2 gap-y-5 my-8">
      {banner.map((item, id) => (
        <div className="banner-inner-container" key={id}>
          <Link>
            <img
              src={item.img}
              alt="img"
              className="w-[27.2rem] h-[13.6rem]  lg:w-[20rem] lg:h-[10rem] xl:w-[27.2rem] xl:h-[13.6rem] md:w-[22.7rem] sm:w-[20.7rem]"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Banners;
