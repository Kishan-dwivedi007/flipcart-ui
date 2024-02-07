import login from "../../assets/login.png";
import cart from "../../assets/shopingCart.png";
import shop from "../../assets/shop.svg";
import more from "../../assets/more.png";
import flipcart from "../../assets/logo.svg";
import search from "../../assets/search.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Navbar.css";

const Navbar = ({ name }) => {
  const navigate = useNavigate();
  //logout button
  const Logout = () => {
    localStorage.removeItem("TOKEN");
    toast("logout successfully", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/login");
  };
  return (
    <div className="nav-body flex justify-center  ">
      <div className="navContainer flex h-[4.4rem] items-center bg-white fixed top-0 left-0 right-0 z-[5] lg:gap-x-[2rem] xl:gap-x-[5.5rem] md:gap-x-[2.3rem] sm:gap-x-[0.9rem] sm:h-[2.4rem] md:h-[4.4rem] ">
        <div className="nav-left   ">
          <div className="nav-logo">
            <img
              src={flipcart}
              alt="img"
              className="w-[8rem] xl:w-[8rem] lg:w-[8rem] md:w-[8rem]  sm:w-[3rem] "
            />
          </div>
        </div>
        <div className="nav-middlie flex items-center">
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            name="search"
            value=""
            className="w-[37rem] h-[2.5rem] bg-[#F0F5FF] outline-none relative pl-[2.88rem]
            md:pl-[2.88rem]  
            font-medium md:text-[1rem] lg:text-[1rem] xl:text-[1rem] lg:w-[28rem] lg:h-[2.5rem] xl:w-[37rem] xl:h-[2.5rem] md:w-[25rem] md:h-[2.5rem] sm:w-[12rem] sm:h-[1rem] sm:pl-[1.2rem]  sm:text-[0.3rem] "
          />
          <img
            src={search}
            alt="img"
            className="w-[1.56rem]  h-[1.56rem] ml-[0.5rem] bg-[#F0F5FF] absolute md:w-[1.56rem] md:h-[1.56rem] lg:w-[1.56rem] lg:h-[1.56rem] xl:w-[1.56rem] xl:h-[1.56rem] sm:w-[0.6rem] sm:h-[0.6rem] "
          />
        </div>
        <div className="nav-right items-center flex loginButton xl:gap-[2rem] lg:gap-[2rem] md:gap-[1.3rem] sm:gap-[0.6rem] ">
          <div className="nav-right-child1 flex items-center">
            <img
              src={login}
              alt="img"
              className="w-[1.1rem] h-[1.1rem] mr-[0.4rem] md:w-[1.1rem] md:h-[1.1rem] sm:w-[0.6rem] sm:h-[0.6rem]"
            />
            <span className="xl:block lg:block md:hidden sm:hidden ">
              Login
            </span>
          </div>
          <div className="sub-links z-[5]  w-[11.25rem] list-none border bg-white lg:mt-[8rem] lg:right-[12rem]  mt-[1.25rem] sm:w-[10rem] sm:mt-[8rem] sm:right-[0.2rem]">
            <li className=" my-[0.63rem] px-[1.7rem] pb-[0.31rem] border-b-[1px] border-slate-300 ">
              <h4 className=""> My Profile</h4> <br />
              <span>{name}</span>
            </li>
            <li className=" px-[1.87rem] pb-[0.31rem] border-b-[1px] border-slate-300  ">
              <button onClick={Logout} type="button">
                Logout
              </button>
            </li>
          </div>

          <div className="nav-right-child2">
            <Link className="flex items-center gap-1">
              <img
                src={cart}
                alt="img"
                className="w-[1.1rem] h-[1.1rem] md:w-[1.1rem] md:h-[1.1rem] sm:w-[0.6rem] sm:h-[0.6rem]"
              />
              <span className="xl:block lg:block md:hidden sm:hidden">
                Cart
              </span>
            </Link>
          </div>
          <div className="nav-right-child3">
            <Link to="" className="flex items-center gap-1">
              <img
                src={shop}
                alt="img"
                className="w-[1.1rem] h-[1.1rem] md:w-[1.1rem] md:h-[1.1rem] sm:w-[0.6rem] sm:h-[0.6rem]"
              />{" "}
              <span className="text-base xl:block lg:block md:hidden sm:hidden">
                Become a Seller
              </span>
            </Link>
          </div>
          <div className="nav-right-child4 more-icon">
            <Link className="flex items-center gap-1">
              <img
                src={more}
                alt="img"
                className="w-[1.1rem] h-[1.1rem] md:w-[1.1rem] md:h-[1.1rem] sm:w-[0.6rem] sm:h-[0.6rem]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
