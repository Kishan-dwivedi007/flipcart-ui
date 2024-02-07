import subNavbar from "../../assets/SubNavbar/Header.js";

const SubNavbar = () => {
  return (
    <div className="flex justify-center mt-[4.2rem] ">
      <div
        className="sub-navbar flex my-[0.5rem] justify-center w-[98%] py-[1rem]  bg-white font-medium border lg:gap-x-[1.4rem] xl:gap-x-[3rem] xl:flex-nowrap md:gap-x-[1rem] md:px-[1rem] md:flex-nowrap lg:flex-nowrap
      sm:gap-x-[0.8rem] sm:px-[0.5rem]"
      >
        {subNavbar.map((item, id) => (
          <div className="subnav-container" key={id}>
            <img
              src={item.img}
              alt="img"
              className="w-[4rem] h-[4rem] mx-auto xl:w-[4rem] xl:h-[4rem] lg:w-[4rem] lg:h-[4rem] md:w-[3rem] md:h-[3rem]  sm:w-[2rem] sm:h-[2rem] "
            />
            <h4 className="text-center xl:text-[1rem] lg:text-[1rem] md:text-[1rem]  sm:text-[0.4rem]">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubNavbar;
