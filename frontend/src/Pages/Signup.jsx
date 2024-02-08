import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import ButtonWarning from "../components/ButtonWarning"


function Signup() {

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-full sm:w-full p-5
      h-90 text-center">
          <Heading label={"Sign up"}/>
          <SubHeading label={"Enter your information to create an Account"}/> 
          <InputBox placeholder={"Enter Your Name"} label={"Your name"}/>
          <InputBox placeholder={"Enter Your Email"} label={"Email"}/>
          <InputBox placeholder={"Enter Your Password"} label={"Password"}/>
          <Button Button={"Sign Up"}/>

          <ButtonWarning label={"Already have an Account?"} ButtonText={"Signup"} to={"/"}/>
        </div>
      </div>
    </div>
   
  )
}

export default Signup
