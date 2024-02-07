import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import signupImg from "../../assets/signup.png";
import Navbar from "../NavBar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();
  //error handling
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  //show password function
  const toggleButton = () => {
    setShowPass(!showPass);
  };

  //handleCheckboxChange
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  //sending data to the server in json format
  const SubmitData = async (e) => {
    try {
      e.preventDefault();

      const errorValue = {
        nameError: !name ? "Name is required" : "",
        emailError: !email
          ? "Email is required"
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
          ? "Invalid email format"
          : "",
        passwordError: !password
          ? "Password is required"
          : password.length < 6
          ? "Password must be greater than 6 character"
          : !/[!@#$%^&*(),.?":{}|<>]/.test(password)
          ? "Password must contain special characters !@#$%^&*()_+,./"
          : "",
      };
      setError(errorValue);

      //If no error then only sending data to the server
      if (
        !errorValue.nameError &&
        !errorValue.emailError &&
        !errorValue.passwordError &&
        checked === true
      ) {
        const userData = {
          name: name,
          email: email || null,
          password: password,
        };
        await fetch("http://localhost:3000/api/v1/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            toast(data.msg, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            if (data.success && checked === true) {
              navigate(`/login`);
            } else {
              navigate("/");
            }
          });

        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setName("");
      setEmail("");
      setPassword("");
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="Signup-form-container flex justify-center items-center border sm:my-[2rem] sm:mt-[3rem] md:mt-[6rem]">
        <div className="signup-left-container bg-[#2874F0] w-[33%] h-[90vh]  flex flex-col justify-between py-[1rem]  md:px-[2rem] md:py-[2rem]  lg:h-[60vh] lg:w-[35%] md:h-[60vh] md:w-[43%] xl:w-[25%] xl:h-[80vh] sm:h-[50vh] sm:w-[30%] ">
          <div className="signup-left-container-child  ">
            <h2 className="text-[1.8em]  font-semibold text-white md:text-[1.8em]  sm:text-[0.9rem] sm:px-[0.5rem]">
              Looks like you are new here!
            </h2>
            <p className="text-[1.2em] text-[#DBDBDC] mt-[0.8rem] md:text-[1.2em] sm:text-[0.6rem] sm:px-[0.5rem]">
              Sign up with your details <br /> to get started
            </p>
          </div>
          <div className="signup-left-container-child ">
            <img src={signupImg} alt="img" className="  mx-auto" />
          </div>
        </div>
        <div className="Signup-form-right-container bg-white  px-[1rem] py-[1rem] h-[90vh] md:h-[60vh] lg:h-[60vh] lg:w-[50%]  md:py-[2rem]   md:w-[50%] xl:w-[40%] xl:h-[80vh] sm:h-[50vh] sm:w-[60%]">
          <form method="POST" onSubmit={SubmitData}>
            <div className="full-name">
              <input
                type="text"
                placeholder="Enter full name"
                id="fullName"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-b-[1px]  border-[#DBDBDC] h-[3rem] w-[100%] font-medium outline-none md:text-[1.3rem] sm:text-[0.9rem] xl:text-[1rem] lg:text-[1rem] "
              />
              <span>{error.nameError}</span>
            </div>
            <div className="email">
              <input
                type="email"
                placeholder="Enter email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b-[1px]  border-[#DBDBDC] h-[3rem] w-[100%] font-medium outline-none md:text-[1.3rem] sm:text-[0.9rem] xl:text-[1rem] lg:text-[1rem]"
              />
              <span>{error.emailError}</span>
            </div>
            <div className="password">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter Password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b-[1px]  border-[#DBDBDC] h-[3rem] w-[100%] font-medium outline-none md:text-[1.3rem] sm:text-[0.9rem] xl:text-[1rem] lg:text-[1rem]"
              />
              <div className="showPassword flex text-sm mt-[0.8rem] mb-[1.3rem]">
                <p className="pr-[0.8rem] md:text-[1.3rem] sm:text-[0.6rem] xl:text-[1rem] lg:text-[1rem]">
                  Show Password
                </p>
                <input
                  type="checkbox"
                  onClick={toggleButton}
                  className="checkPass "
                  id="showPass"
                />
              </div>
              <span>{error.passwordError}</span>
            </div>
            <div className=" md:text-[1.3rem] sm:text-[0.9rem] xl:text-[1rem] lg:text-[1rem]">
              <input
                type="checkbox"
                name="check-signup"
                id="check-signup"
                checked={checked}
                onChange={handleCheckboxChange}
                className="mr-[0.6rem]"
              />
              By continuing, you agree to Flipkart{" "}
              <span className="">Terms of Use and Privacy Policy.</span> <br />
              <Link
                to={"/login"}
                className="text-[#6185ee]  md:text-[1.3rem] sm:text-[0.9rem] xl:text-[1rem] lg:text-[1rem]"
              >
                Login here
              </Link>
            </div>
            <button
              type="submit"
              className="signup border w-[100%] h-[3.3rem] bg-[#FB641B] text-white mt-[1.3rem] md:h-[3.3rem] sm:h-[2.5rem] md:text-[1.3rem] sm:text-[0.9rem] lg:text-[1rem]"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
