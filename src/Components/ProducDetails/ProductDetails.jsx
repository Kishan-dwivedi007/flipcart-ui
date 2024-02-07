import { useParams } from "react-router-dom";
import products from "../../assets/products/products.jsx";
import NavBar from "../NavBar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
const ProductDetails = () => {
  const { id } = useParams();
  const clickedId = Number(id);

  const all_products = products;
  const clickedProduct = all_products.filter(
    (product) => product.id === clickedId
  );
  console.log(clickedProduct);
  return (
    <>
      <NavBar />
      <div className=" bg-white mb-[4rem] px-[2rem] py-[2rem] xl:flex lg:flex md:block sm:block md:mt-[6rem] sm:mt-[3rem] ">
        <div>
          <div className="display-Left-container flex   ">
            <div className="sideImg list-none   ">
              <li>
                <img
                  src={clickedProduct[0].subImg.mainMiniView}
                  alt=""
                  className=" w-[3.5rem]  py-[1rem] bg-white px-[0.3rem]"
                />
              </li>
              <li>
                <img
                  src={clickedProduct[0].subImg.frontView}
                  alt=""
                  className=" w-[3.5rem]  py-[1rem] bg-white px-[0.3rem]"
                />
              </li>
              <li>
                <img
                  src={clickedProduct[0].subImg.sideView}
                  alt=""
                  className=" w-[3.5rem]  py-[1rem] bg-white px-[0.3rem]"
                />
              </li>
              <li>
                <img
                  src={clickedProduct[0].subImg.topView}
                  alt=""
                  className=" w-[3.5rem]   py-[1rem] bg-white px-[0.3rem]"
                />
              </li>
              <li>
                <img
                  src={clickedProduct[0].subImg.bottomView}
                  alt=""
                  className=" w-[3.5rem]  py-[1rem] bg-white px-[0.3rem]"
                />
              </li>
            </div>
            <div className="main-container pt-[2rem] bg-white ">
              <div className="image ">
                <img
                  src={clickedProduct[0].subImg.main}
                  alt="img"
                  className=" w-[30vw] h-[40vh] xl:w-[30vw] xl:h-[40vh] lg:w-[40vw] lg:h-[20vh] md:w-[50vw] md:h-[35vh] sm:w-[60vw] "
                />
              </div>
            </div>
          </div>
          <div className="buttons   ">
            <input
              type="button"
              value="ADD TO CART"
              name=""
              className="text-[0.8rem] border h-[4rem] py-[0.8rem] px-[4.3rem]  text-white font-medium bg-[#FF9F00]  mr-[0.6rem] xl:px-[4rem] lg:px-[1.5rem] md:px-[3rem] sm:px-[1.5rem]"
            />
            <input
              type="button"
              value="BUY NOW"
              className="text-[0.8rem] border py-[0.8rem] h-[4rem] px-[5.5rem] text-white font-medium bg-[#FB641B]
              xl:px-[4.4rem] lg:px-[2.5rem] md:px-[4rem] sm:px-[2.5rem]"
            />
          </div>
        </div>
        <div className="display-Right-container lg:ml-[2rem] mt-[2rem] sm:ml-[0.5rem]">
          <div className="heading mb-[0.5rem]">
            <h3 className=" text-slate-500 uppercase font-medium ">
              {clickedProduct[0].name}
            </h3>
            <h2 className="text-[1.3rem]">{clickedProduct[0].title}</h2>
          </div>
          <div className="price  mb-[0.8rem] ">
            <p className=" text-[#65A541] font-medium">Special price</p>
            <p className="text-[2rem] font-medium">{clickedProduct[0].price}</p>
          </div>
          <div className="rating"></div>
          <div className="offers mb-[0.8rem]">
            <h3 className="font-medium">Available Offers</h3>
            <li className="lg:mb-[0.4rem]">
              {clickedProduct[0].offers.offer1}
            </li>
            <li className="lg:mb-[0.4rem]">
              {clickedProduct[0].offers.offer2}
            </li>
            <li className="lg:mb-[0.4rem]">
              {clickedProduct[0].offers.offer3}
            </li>
            <li className="lg:mb-[0.4rem]">
              {clickedProduct[0].offers.offer4}
            </li>
          </div>

          <h2 className="font-medium text-[1.5rem] mb-[1rem]">
            Product Details
          </h2>
          <div className="product-details flex list-none">
            <div className="product-details-title text-slate-600  mr-[5rem]">
              <li className="mb-[0.8rem]">Color</li>
              <li className="mb-[0.8rem]">Outer material</li>
              <li className="mb-[0.8rem]">Model name</li>
              <li className="mb-[0.8rem]">Ideal for</li>
              <li className="mb-[0.8rem]">Occassion</li>
              <li className="mb-[0.8rem]">Types for sports</li>
              <li className="mb-[0.8rem]">Net quantity</li>
              <li className="mb-[0.8rem]">Sole Material</li>
            </div>
            <div className="product-details-title-value">
              <li className="mb-[0.8rem]">
                {clickedProduct[0].proDetails.color}
              </li>
              <li className="mb-[0.8rem]">
                {clickedProduct[0].proDetails.outer_material}
              </li>
              <li className="mb-[0.8rem]">
                {clickedProduct[0].proDetails.model_name}
              </li>
              <li className="mb-[0.8rem]">
                {clickedProduct[0].proDetails.ideal}
              </li>
              <li className="mb-[0.8rem]">
                {clickedProduct[0].proDetails.occassion}
              </li>
              <li className="mb-[0.8rem]">
                {clickedProduct[0].proDetails.type}
              </li>
              <li className="mb-[0.8rem]">
                {clickedProduct[0].proDetails.quantity}
              </li>
              <li className="mb-[0.8rem]">
                {clickedProduct[0].proDetails.sole_material}
              </li>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
