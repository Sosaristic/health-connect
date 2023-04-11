import { GoogleLogin, LoginForm, SignUpForm, UserTypeInput } from "../components/Form";

import ConsultantImg from "../assets/svg/medical-consultant.svg";
import React, { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Register() {
  const { pathname,state } = useLocation();
  const { isAuth } = useAuthContext();
  const navigate = useNavigate()

  const [value, setValue] = useState("DOCTOR");
  const handleUser = (e) => {
    setValue(e.target.value);
  };

  useEffect(()=>{
      if(isAuth) navigate(state?.pathname || '/')
  },[isAuth])

  const handleUserCardClick = (user)=>{
    user == "DOCTOR"? setValue("DOCTOR") : setValue("PATIENT")
  }
 

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
        <UserTypeInput 
         handleUserCardClick={handleUserCardClick}
         handleUser={handleUser}  
         value={value}  
         />

        {pathname == "/sign-up" ? <SignUpForm role={value} /> : <LoginForm role={value} />}
        {/* sign up with google */}

        <div className="mt-8">
          <GoogleLogin pathname={pathname} />
        </div>
      </div>
    </div>
  );
}
