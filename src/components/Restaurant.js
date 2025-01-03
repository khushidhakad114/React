import React from "react";
import RestCard from "./RestCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { SWIGGY_API } from "./utils/constants";
import Shimmer from "./Shimmer";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    functionGetRestaurantData();
  }, []);
  const functionGetRestaurantData = async () => {
    const response = await axios.get(SWIGGY_API);
    console.log(
      response.data.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants
    );
    setRestaurants(
      response.data.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants
    );
  };
  {
    if (restaurants.length === 0) {
      return (
        <div>
          <Shimmer />
        </div>
      );
    }
    return (
      <div className="restaurant flex flex-wrap col-3 gap-20 mt-5 justify-center">
        {restaurants.map((res) => (
          <RestCard key={res.id} restaurant={res} />
        ))}
      </div>
    );
  }
};
export default Restaurant;
