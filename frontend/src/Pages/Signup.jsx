import { useState } from "react"
import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import axios from "axios";

 const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={e => {
          setFirstName(e.target.value);
        }} placeholder="Your First Name" label={"First Name"} />
        <InputBox onChange={(e) => {
          setLastName(e.target.value);
        }} placeholder="Your Last Name" label={"Last Name"} />
        <InputBox onChange={e => {
          setUsername(e.target.value);
        }} placeholder="Your Email" label={"Email"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="Your Password" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async () => {
            const response = await axios.post("http://localhost:3001/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            });
            
            localStorage.setItem("token", response.data.token)
            
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/"} />
      </div>
    </div>
  </div>
}

export default Signup