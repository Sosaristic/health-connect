import React, { useState } from "react";
import { TextField } from "../Form";

export default function LoginForm() {
  const [loginValues, setLoginValues] = useState({
    surname: "",
    firstname: "",
    email: "",
    password: "",
    agree: false,
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginValues);
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
