import { useState } from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import signupImg from "../../assets/signup.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ForgotPass = () => {
  const [forgotEmail, setForgotEmail] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const navigate = useNavigate();
  const forgotPass = async (e) => {
    e.preventDefault();
    const updatedData = {
      email: forgotEmail,
      oldPassword: oldPass,
      newPassword: newPass,
    };
    await fetch("https://flipkart-server-production.up.railway.app/api/v1/user/forgot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("No response");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        const msg = data.msg;
        const success = data.success;
        console.log(success);
        success ? navigate("/login") : "";

        toast(msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <>
      <Navbar />
      <div className="main-container flex justify-center my-[3rem] border md:mt-[6rem]">
        <div className="forget-left-container w-[28%] bg-[#2874F0] h-[90vh] py-[60px] lg:h-[60vh] lg:w-[35%] md:h-[60vh] md:w-[40%] xl:w-[25%] xl:h-[80vh] sm:h-[40vh] sm:w-[30%] sm:py-[1rem] ">
          <div className="forget-left-child h-[100%] flex flex-col justify-between pt-[30px]">
            <div>
              <h4 className="text-[28px] font-semibold text-white text-center xl:text-[28px] lg:text-[28px]  sm:text-[0.7rem] md:text-[28px]  ">
                Forgot Password?
              </h4>
              <p className="text-[18px] text-[#DBDBDC] text-center xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[0.6rem]">
                We are here to help you
              </p>
            </div>
            <div className="forgot-left-container-child ">
              <img src={signupImg} alt="img" className="  mx-auto" />
            </div>
          </div>
        </div>
        <div className="forget-right-container bg-white w-[40%] px-[1rem] h-[90vh] lg:h-[60vh] lg:w-[50%]  md:h-[60vh] md:w-[50%] xl:w-[40%]  xl:h-[80vh]  sm:h-[40vh] sm:w-[60%] sm:px-[0.3rem] ">
          <form>
            <input
              type="email"
              placeholder="Enter email"
              value={forgotEmail}
              name="forgotEmail"
              id="forgotEmail"
              onChange={(e) => setForgotEmail(e.target.value)}
              className="border-b-[1px]  border-[#DBDBDC] h-[50px] w-[100%] font-medium outline-none mt-[90px]  sm:text-[0.9rem] md:text-[1.3rem] sm:mt-[2rem]  xl:text-[1rem] lg:text-[1rem]"
            />

            <input
              type="password"
              placeholder="Enter old password"
              value={oldPass}
              name="updatePass"
              onChange={(e) => setOldPass(e.target.value)}
              className="border-b-[1px]  border-[#DBDBDC] h-[50px] w-[100%] font-medium outline-none md:text-[1.3rem]  sm:text-[0.9rem]  xl:text-[1rem] lg:text-[1rem]"
            />
            <input
              type="password"
              placeholder="Enter new password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="border-b-[1px]  border-[#DBDBDC] h-[50px] w-[100%] font-medium outline-none md:text-[1.3rem]  sm:text-[0.9rem]  xl:text-[1rem] lg:text-[1rem] "
            />
            <button
              onClick={forgotPass}
              type="button"
              className=" border w-[100%] h-[50px] bg-[#FB641B] text-white mt-[20px] md:h-[50px] sm:h-[30px] lg:text-[1rem]"
            >
              Update
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPass;
