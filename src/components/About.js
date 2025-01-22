import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleFeedback = () => {
    navigate("/feedback");
  };

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
        <p>
          Welcome to [Restaurant Name], where culinary excellence meets a
          passion for great food and memorable experiences. Located in the heart
          of [City/Neighborhood], we are a family-owned restaurant dedicated to
          serving fresh, high-quality dishes that bring people together. At
          [Restaurant Name], we believe that every meal should be a celebration.
          Our menu is a fusion of traditional flavors and innovative culinary
          techniques, offering something for every taste. Whether you’re here
          for a casual dinner with friends, a romantic evening, or a special
          celebration, we strive to make every dining experience unforgettable.
        </p>
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
