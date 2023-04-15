import React, { useState } from "react";
import { TextField } from "../Form";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate,useLocation } from "react-router-dom"


export default function LoginForm({role}) {
  const navigate = useNavigate()
  const { state } = useLocation();
  const [loginValues, setLoginValues] = useState({
    surname: "",
    firstname: "",
    email: "",
    password: "",
    role,
    agree: false,
  });
  const {logIn,userInfo} =  useAuthContext()

  const onChange = ({ target }) => {
    const { name, value, checked } = target;
    
    if (name !== "agree") {
      setLoginValues({
        ...loginValues,
        [name]: value,
      });
    } else {
      setLoginValues({
        ...loginValues,
        [name]: checked,
      });
    }
  }

  const destination = ()=>{
    if (userInfo && (userInfo.role ==='DOCTOR')){
      return '/doctor'
    }
    else if( userInfo && (userInfo.role ==='PATIENT')){
      return '/patient'
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    const user = await logIn(loginValues)
    console.log({user})
    if (user){
      navigate(state?.path || '/dashboard/overview');
    }
    
  };
  return (
    <div className="">
      <form action="" className="w-full p-4" onSubmit={handleSubmit}>
        
        <div className="mt-[1rem]">
          <TextField
            placeholder="Email"
            name="email"
            value={loginValues.email}
            onChange={onChange}
          />
        </div>
        <div className="mt-[1rem]">
          <TextField
            placeholder="Password"
            type="password"
            name="password"
            value={loginValues.password}
            onChange={onChange}
          />
        </div>
     
        <div className="mt-8">
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-primary rounded-2xl hover:bg-hover"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
