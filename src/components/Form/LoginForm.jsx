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
  const {logIn} =  useAuthContext()

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

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(loginValues);
    await logIn(loginValues)
    navigate(state?.path || "/");

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
