import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, CheckBox } from "../Form";
import { useAuthContext } from "../../context/AuthContext";

export default function SignUpForm({role}) {
  const {signUp} =  useAuthContext()
  const [signUpValues, setSignUpValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    agree: false,
    role
  });

  const onChange = ({ target }) => {
    const { name, value, checked } = target;
    
    if (name !== "agree") {
      setSignUpValues({
        ...signUpValues,
        [name]: value,
      });
    } else {
      setSignUpValues({
        ...signUpValues,
        [name]: checked,
      });
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(signUpValues);
     await signUp(signUpValues)
  };
  return (
    <div>
      <form action="" className="w-full" onSubmit={handleSubmit}>

        <div className="flex flex-col lg:flex-row relative gap-x-8 gap-y-4 mt-[2rem]">
          <div className="lg:w-1/2">
            <TextField
              placeholder="First Name"
              name="firstname"
              value={signUpValues.firstname}
              onChange={onChange}
            />
          </div>
          <div className="lg:w-1/2 ">
            <TextField
              placeholder="Last Name"
              name="lastname"
              value={signUpValues.lastname}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="mt-[1rem]">
          <TextField
            placeholder="Email"
            name="email"
            value={signUpValues.email}
            onChange={onChange}
          />
        </div>
        <div className="mt-[1rem]">
          <TextField
            placeholder="Password"
            type="password"
            name="password"
            value={signUpValues.password}
            onChange={onChange}
          />
        </div>

        <div className="flex items-center relative gap-4 mt-8">
          <CheckBox name="agree" value={signUpValues.agree} onChange={onChange} />{" "}
          <p>
            I agree to the{" "}
            <Link to="#" className="text-primary hover:underline">
              term of service
            </Link>{" "}
            and{" "}
            <Link to="#" className="text-primary hover:underline">
              privacy policy
            </Link>{" "}
          </p>
        </div>

        <div className="mt-4">
          <button
            disabled={false}
            type="submit"
            className="bg-primary rounded-2xl w-full  py-3 text-white font-bold hover:bg-hover"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
