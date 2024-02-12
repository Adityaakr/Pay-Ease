import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import ButtonWarning from "../components/ButtonWarning";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div
          className="rounded-lg bg-white w-full sm:w-full p-5
           h-90 text-center"
        >
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an Account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder={"Enter Your First Name"}
            label={"First name"}
          />
          <InputBox
            onChange={(e) => {
              setlastName(e.target.value);
            }}
            placeholder={"Enter Your Last Name"}
            label={"Last name"}
          />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder={"Enter Your Email"}
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={"Enter Your Password"}
            label={"Password"}
          />
          <Button
            onClick={ async () => {
             const response = await axios.post("https://localhost:3001/api/v1/user/signup", {
                username,
                firstName,
                lastName,
                Password,
              });
              //to store the token in (Application)
              localStorage.setItem("token", response.data.token)
              //remove the token as well when user logout
              localStorage.removeItem("token")
            }}
            label={"Sign Up"}
          />

          <ButtonWarning
            label={"Already have an Account?"}
            ButtonText={"Signup"}
            to={"/"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
