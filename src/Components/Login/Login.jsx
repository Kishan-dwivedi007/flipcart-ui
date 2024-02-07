import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import signupImg from "../../assets/signup.png";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [userName, setuserName] = useState("");
  const navigate = useNavigate();
  //handeling error
  const [loginError, setloginError] = useState({});
  //show password
  const toggleButton = () => {
    setShowPass(!showPass);
  };
  //protected route
  useEffect(() => {
    let userToken = localStorage.getItem("TOKEN");
    if (userToken) {
      navigate(`/home/${userName}`);
    }
  });
  const loginData = async (e) => {
    try {
      e.preventDefault();

      const logErrorValue = {
        emailLoginError: !email
          ? "Email is required"
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
          ? "Invalid email format"
          : "",
        passwordLoginError: !password
          ? "Password is required"
          : password.length < 6
          ? "Password must be greater than 6 character"
          : !/[!@#$%^&*(),.?":{}|<>]/.test(password)
          ? "Password must contain special characters !@#$%^&*()_+,./"
          : "",
      };
      //updating login error value
      setloginError(logErrorValue);
      //checking to db if everything is fine

      if (!logErrorValue.emailLoginError && !logErrorValue.passwordLoginError) {
        const userLoginData = {
          email: email,
          password: password,
        };
        await fetch("http://localhost:3000/api/v1/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userLoginData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`No response ${response.status()}`);
            }
            return response.json();
          })
          .then((data) => {
            if (data.loged.success) {
              //redirecting to home component;
              let userName = data.user.name;
              setuserName(userName);
              const msg = data.loged.msg;
              toast(msg, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              const token = data.token;
              localStorage.setItem("TOKEN", token);
              //useEffect
            }
          });

        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setEmail("");
      setPassword("");
      toast.error("Error fetching data:", error, {
        position: "top-center",
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className="login-form-container flex justify-center items-center mt-[3rem] my-[1.87rem] w-[100vw]">
        <div
          className="login-left-container bg-[#2874F0] w-[25%]  h-[90vh] flex flex-col justify-between  py-[3rem] px-[1.9rem] lg:h-[60vh] lg:w-[35%] md:mt-[3rem] md:h-[60vh] md:w-[40%] xl:w-[25%] xl:h-[80vh] 
        sm:h-[40vh] sm:w-[30%] sm:px-[0.3rem] md:px-[2rem]"
        >
          <div className="login-left-container-child ">
            <h2 className="text-[1.8em] font-semibold text-white md:text-[1.8em] sm:text-[0.9rem]">
              Login!
            </h2>
            <p className="text-[1.1em] text-[#DBDBDC] mt-[0.8rem] md:text-[1.1em] sm:text-[0.5rem]">
              Get access to your Orders,
              <br /> Wishlist and Recommendation
            </p>
          </div>
          <div className="login-left-container-child ">
            <img src={signupImg} alt="img" className="  mx-auto" />
          </div>
        </div>
        <div
          className="login-form-right-container flex flex-col justify-between border w-[30%] bg-white h-[90vh]
        pt-[2rem] lg:h-[60vh] lg:w-[50%] md:h-[60vh] md:w-[50%] md:pt-[4rem] xl:w-[40%]  xl:h-[80vh] sm:h-[40vh] sm:w-[60%] sm:px-[0.3rem] "
        >
          <form onSubmit={loginData}>
            <div className="email">
              <input
                type="email"
                placeholder="Enter email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b-[1px]  border-[#DBDBDC] h-[3.13rem] w-[100%] font-medium outline-none md:text-[1.3rem] sm:text-[0.9rem] xl:text-[1rem] lg:text-[1rem]"
              />
              <span>{loginError.emailLoginError}</span>
            </div>
            <div className="password">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b-[1px]  border-[#DBDBDC] h-[3.13rem] w-[100%] font-medium outline-none md:text-[1.3rem] sm:text-[0.9rem] xl:text-[1rem] lg:text-[1rem]"
              />
              <div className="showPassword flex mt-[0.8rem]">
                <h4 className="pr-[0.3rem] text-sm md:text-[1.3rem] sm:text-[0.9rem] xl:text-[1rem] lg:text-[1rem]">
                  Show Password
                </h4>
                <input type="checkbox" id="showPass" onClick={toggleButton} />
              </div>
              <span>{loginError.passwordLoginError}</span>
            </div>
            <h4 className="text-sm mt-[0.3rem] md:text-[1.3rem] sm:text-[0.9rem] xl:text-[1rem] lg:text-[1rem]">
              forget password
              <Link
                to="/forgot"
                className="text-[#6958eb] pl-[0.3rem] md:text-[1.3rem] sm:text-[0.9rem] xl:text-[1rem] lg:text-[1rem]"
              >
                Click here
              </Link>
            </h4>
            <button
              type="submit "
              className=" border w-[100%] h-[3.15rem] bg-[#FB641B] text-white mt-[1.8rem] md:h-[3.15rem] sm:mb-[1rem] sm:h-[2rem] "
            >
              Login
            </button>
          </form>
          <div className="login-footer-container mb-[2.5rem] text-center">
            <h4 className="text-[#2874F0] font-medium md:text-[1.3rem] sm:text-[0.9rem] xl:text-[1rem] lg:text-[1rem]">
              New to Flipkart? <Link to="/">Create an Account</Link>
            </h4>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
