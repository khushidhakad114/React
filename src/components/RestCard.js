import React from "react";
import { LOGO_URL } from "./utils/constants";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const RestCard = ({ restaurant }) => {
  const {
    name,
    cloudinaryImageId,
    areaName,
    avgRating,
    costForTwo,
    locality,
    id,
  } = restaurant.info;
  const navigate = useNavigate();
  const handleMenu = () => {
    navigate(`/menu/${id}`);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="w-full h-48">
        <img
          className="w-full h-full object-cover"
          src={`${LOGO_URL}${cloudinaryImageId}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {costForTwo}
          <br></br>
          {avgRating}
          <br></br>
          {areaName}, {locality}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleMenu}>
            Explore!
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestCard;
