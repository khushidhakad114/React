import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./utils/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { checkValidateEmailPswd } from "./utils/checkValidateEmailPswd";

const Login = () => {
  const [message, setmessage]=useState("");
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  const emailref = useRef();
  const passwordref = useRef();
  const [login, setlogin] = useState(false); //login =>false=> login , login => true=> signup
  const handleLogin = () => {
    setlogin(!login);
  };
  
  const handleSubmitButton = async () => {
    const email = emailref.current.value;
    const password = passwordref.current.value;

    //passing email and password in chechvalid function
    const message = checkValidateEmailPswd(
      emailref.current.value,// if it returns true
      passwordref.current.value// if it returns true
    );
    if (message) {
      setmessage(message);
      return;
    }
    setmessage("");
    if (login) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful!");
      } catch (err) {
        console.log(err.message);
        setmessage(err.message);
      }
    } else {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
        alert("Login successful!");

        //after successful login user will navigate to returant page
        navigate("/restaurants");
      } catch (err) {
        console.log(err.message);
        setmessage(err.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center p-7">
      <div className="card bg-base-100 w-96 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title flex justify-center items-center">
            {!login ? "Login" : "SignUp"}
          </h2>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              ref={emailref}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type={eye ? "text" : "password"}
              className="grow"
              placeholder="Password"
              ref={passwordref}
            />
            <button type="button" className="ml-2" onClick={() => setEye(!eye)}>
              <FontAwesomeIcon
                icon={eye ? faEyeSlash : faEye}
                className="h-4 w-4 opacity-70"
              />
            </button>
          </label>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleSubmitButton}>
              login
            </button>
          </div>
          <div className="text-center cursor-pointer">
            <span onClick={handleLogin}>
              {message?<p className="text-red-600">{message}</p>:null} 
              {!login ? "Don't have an account?" : "Already have an account"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;



