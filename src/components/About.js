import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction, logout } from "../redux/userSlice";

const About = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFeedback = () => {
    // dispatch(loginAction(""));
    // navigate("/feedback");
    dispatch(logout());
  };
  // const userEmail = useSelector((state) => state.user.user.user.email);

  return (
    <div className="card card-side bg-base-200 shadow-2xl m-5 mt-5 p-5 w-3/4 h-96">
      <figure className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/free-photo/top-view-lunch-setup-with-chicken-kebab-fries-tomato-soup-salad_140725-5157.jpg?ga=GA1.1.745777393.1725194479&semt=ais_hybrid"
          alt="Restaurant"
        />
      </figure>
      <div className="card-body">
        {/* <p>{userEmail ? userEmail : "guest"}</p> */}
        <div className="card-actions justify-end">
          <button onClick={handleFeedback} className="btn btn-primary">
            Give Feedback!
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
