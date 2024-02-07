import cards from "../../assets/cards.svg";
import seller from "../../assets/seller.svg";
import Advertise from "../../assets/Advertise.svg";
import giftcard from "../../assets/giftcard.svg";
import help from "../../assets/help.svg";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer flex flex-col items-center bg-[#454444]  ">
      <div className="footer-top  w-[93%] flex list-none  gap-8  text-white pt-[2.5rem] ">
        <div className="footer-left flex lg:flex-nowrap md:flex-wrap md:gap-x-[1.3rem] sm:flex-wrap">
          <div className="footer-left-child  ">
            <h4 className="mb-2 font-thin text-gray-400">ABOUT</h4>
            <div className="footer-left-links font-bold text-sm lg:text-[0.8rem] ">
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Flipcart Stories</Link>
              </li>
              <li>
                <Link>Press</Link>
              </li>
              <li>
                <Link>Flipcart Wholesale</Link>
              </li>
              <li>
                <Link>Cleartrip</Link>
              </li>
              <li>
                <Link>Corporate information</Link>
              </li>
            </div>
          </div>
          <div className="footer-left-child">
            <h4 className="mb-2 font-thin text-gray-400">HELP</h4>
            <div className="footer-left-links font-bold text-sm lg:text-[0.8rem]">
              <li>
                <Link>Payment</Link>
              </li>
              <li>
                <Link>Shipping</Link>
              </li>
              <li>
                <Link>Cancellation & return</Link>
              </li>
              <li>
                <Link>FAQ</Link>
              </li>
              <li>
                <Link>Report Infringment</Link>
              </li>
            </div>
          </div>
          <div className="footer-left-child">
            <h4 className="mb-2 font-thin text-gray-400">CONSUMER POLICY</h4>
            <div className="footer-left-link font-bold text-sm  lg:text-[0.8rem]">
              <li>
                <Link>Cancellation & return</Link>
              </li>
              <li>
                <Link>Terms of use</Link>
              </li>
              <li>
                <Link>Security</Link>
              </li>
              <li>
                <Link>Privacy</Link>
              </li>
              <li>
                <Link>Sitemap</Link>
              </li>
              <li>
                <Link>Grivance Redressel</Link>
              </li>
              <li>
                <Link>EPR compliance</Link>
              </li>
            </div>
          </div>
          <div className="footer-left-child">
            <h4 className="mb-2 font-thin text-gray-400">SOCIAL</h4>
            <div className="footer-left-link font-bold text-sm lg:text-[0.8rem]">
              <li>
                <Link>Facebook</Link>
              </li>
              <li>
                <Link>Twitter</Link>
              </li>
              <li>
                <Link>Youtube</Link>
              </li>
            </div>
          </div>
        </div>
        <div className="footer-right flex  gap-9 border-l-[1px] pl-[2.5rem] xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-wrap">
          <div className="footer-right-child">
            <h4 className="mb-2 font-thin text-gray-400">Mail Us:</h4>
            <div className="footer-right-address text-sm lg:text-[0.8rem]">
              <p>Flipcart Internet Private Limited,</p>
              <p>Buildings Alyssa, Begonia &</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli Village,</p>
              <p>Bengaluru, 560103</p>
              <p>Karnataka, India</p>
            </div>
          </div>
          <div className="footer-right-child">
            <h4 className="mb-2 font-thin text-gray-400">
              Regestered Office Address:
            </h4>
            <div className="office-address text-sm lg:text-[0.8rem]">
              <p>Flipcart Internet Private Limited,</p>
              <p>Buildings Alyssa, Begonia &</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli Village,</p>
              <p>Bengaluru, 560103</p>
              <p>Karnataka, India</p>
              <p> CIN : U51109KA2012PTC066107 </p>
              <p>
                Telephone: <Link>044-45614700</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom flex justify-center items-center mt-[2.5rem] border-t-[1px] py-[1.87rem] text-white w-full lg:gap-x-[2rem] xl:gap-x-[4.8rem] md:flex-wrap md:gap-x-[2rem] sm:gap-x-[0.9rem] sm:flex-wrap sm:text-[0.8rem]">
        <div className="footer-bottom-child flex ">
          <img src={seller} alt="img" className="pr-[0.2rem]" />
          <h4>Become a seller</h4>
        </div>
        <div className="footer-bottom-child border border-[#454444] flex">
          <img src={Advertise} alt="img" className="pr-[0.2rem]" />
          <h4>Advertise</h4>
        </div>
        <div className="footer-bottom-child flex border border-[#454444]">
          <img src={giftcard} alt="img" className="pr-[0.2rem]" />
          <h4>Gift Cards</h4>
        </div>
        <div className="footer-bottom-child flex border border-[#454444]">
          <img src={help} alt="img" className="pr-[0.2rem]" />
          <h4>Help Center</h4>
        </div>
        <div className="footer-bottom-child flex ">
          <h4>
            <span className="text-white">&copy;</span> 2007-2004
            <span>
              <Link className="text-white">Flipcart.com</Link>
            </span>
          </h4>
        </div>
        <div className="footer-bottom-child">
          <img
            src={cards}
            alt="img"
            className="lg:w-[13rem] xl:w-[18rem] lg:mt-[0rem] xl:mt-[0rem]  md:mt-[1rem] sm:w-[13rem] sm:mt-[0.5rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
