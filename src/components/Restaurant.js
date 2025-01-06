import React, { useState, useEffect } from "react";
import RestCard from "./RestCard";
import axios from "axios";
import { SWIGGY_API } from "./utils/constants";
import Shimmer from "./Shimmer";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filterActive, setFilterActive] = useState(false);

  useEffect(() => {
    functionGetRestaurantData();
  }, []);

  const functionGetRestaurantData = async () => {
    const response = await axios.get(SWIGGY_API);
    const filterRes =
      response.data.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants;
    setRestaurants(filterRes);
    setFilteredRestaurants(filterRes);
  };

  const handleFilter = () => {
    if (!filterActive) {
      const filtered = restaurants.filter((res) => res.info.avgRating >= 4);
      setFilteredRestaurants(filtered);
    } else {
      setFilteredRestaurants(restaurants);
    }
    setFilterActive(!filterActive);
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="flex justify-end mt-4 mb-8 pr-7">
        <button
          onClick={handleFilter}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          {filterActive ? "Show All" : "Rating 4+"}
        </button>
      </div>

      <div className="restaurant flex flex-wrap col-3 gap-20 mt-5 justify-center">
        {filteredRestaurants.map((res) => (
          <RestCard key={res.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;