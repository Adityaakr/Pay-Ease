import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import BottomWarning from "../components/BottomWarning";
import { Image } from "../components/Image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/signin",
        {
          username,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);

     
      navigate(`/dashboard`); // Navigate to dashboard page with user data in URL
    } catch (error) {
      console.error("Signin failed:", error);

      toast.error("Check Credentials and Try again !", {});
    }
  };

  return (
    <div className="bg-slate-300  h-screen flex justify-center">
      <div className="flex flex-col justify-center ">
        <div className="rounded-lg bg-white w-full sm:w-full p-5 h-90 text-center">
          <Image />
          <Heading label={"Sign in"} />
          <SubHeading
            label={"Enter your information to Login in your Account"}
          />
          <InputBox
            placeholder={"Enter Your Email"}
            label={"Email"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox
            placeholder={"Enter Your Password"}
            type="password"
            label={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSignIn} label={"Sign in"} />
          <ToastContainer />
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign in"}
            to={"/Signup"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
