import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPass from "./Components/ForgotPass/ForgotPass";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ProductDetails from "./Components/ProducDetails/ProductDetails";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="home/:userName"
            element={<PrivateRoute Component={Home} />}
          />
          <Route
            path="/productDetails/:id"
            element={<PrivateRoute Component={ProductDetails} />}
          />
          <Route path="/forgot" element={<ForgotPass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
