import React from "react";
import { LOGO_URL } from "./utils/constants";

const RestCard = ({ restaurant }) => {
  const { name, cloudinaryImageId, address, rating, priceRange } =
    restaurant.info;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="w-full h-48">
        <img
          className="w-full h-full object-cover"
          src={`${LOGO_URL}${cloudinaryImageId}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{restaurant.info.name}</h2>
        <p>
          {restaurant.info.costForTwo}
          <br></br>
          {restaurant.info.avgRating}
          <br></br>
          {restaurant.info.areaName}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Explore!</button>
        </div>
      </div>
    </div>
  );
};

export default RestCard;
