import { useParams } from "react-router-dom";
import "./Home.css";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import SubNavbar from "../SubNavbar/SubNavbar";
import Banners from "../Banners/Banners";
import Products from "../Products/Products";
import Carousel from "../Carousel/Carousel";
const Home = () => {
  const { userName } = useParams();

  return (
    <div className="home-container">
      <Navbar name={userName} />
      <SubNavbar />
      <Carousel />
      <Products />
      <Banners />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
