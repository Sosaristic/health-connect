import { GoogleLogin, LoginForm, SignUpForm, UserTypeInput } from "../components/Form";

import ConsultantImg from "../assets/svg/medical-consultant.svg";
import React from "react";
import { useLocation } from "react-router-dom";

export default function Register() {
  const { pathname } = useLocation();
 

  return (
    <div className="md:bg-primary flex w-[80%] md:w-[100%]  min-h-[100vh] mx-auto relative ">
      <div className="relative lg:w-2/5 md:w-2/4 hidden md:flex px-4">
        <p className="w-full mt-8 text-[2rem] font-extrabold text-white capitalize">
          Connect with the best <br /> specialist all over the country
        </p>
        <img src={ConsultantImg} alt="" className="absolute bottom-0 max-w-[30rem]"/>
      </div>

      <div className="bg-white w-full md:w-2/4 lg:w-3/5 md:p-[1rem_4rem] relative rounded-[2rem]">
        {pathname === "/login" ? (
          <h2 className=" font-[900] text-[1.5rem] mt-4">Sign In</h2>
        ) : (
          <h2 className="mt-[3rem] font-[900] text-[1.5rem]">Create Account</h2>
        )}
        <UserTypeInput />

        {pathname == "/sign-up" ? <SignUpForm /> : <LoginForm />}
        {/* sign up with google */}

        <div className="mt-8">
          <GoogleLogin pathname={pathname} />
        </div>
      </div>
    </div>
  );
}
