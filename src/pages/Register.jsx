import React from "react";
import { useLocation } from "react-router-dom";
import { GoogleLogin, SignUpForm, LoginForm, UserTypeInput } from "../components/Form";
export default function Register() {
  const { pathname } = useLocation();

  return (
    <div className= "md:bg-primary flex w-[80%] md:w-[95%] lg:w-[85%] mx-auto relative rounded-[2rem]">
      <div className="hidden px-4 lg:w-2/5 md:w-2/4 md:flex">
        <p className="w-full mt-8 text-[2rem] font-extrabold text-white capitalize">Connect with the best <br /> specialist all over the country</p>
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
