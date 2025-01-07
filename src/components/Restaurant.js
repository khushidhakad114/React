import React, { useState, useEffect } from "react";
import RestCard from "./RestCard";
import axios from "axios";
import { SWIGGY_API } from "./utils/constants";
import Shimmer from "./Shimmer";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0); // Rating selected by user
  const [filterActive, setFilterActive] = useState(false); // To toggle filter

  useEffect(() => {
    functionGetRestaurantData();
  }, []);

  const functionGetRestaurantData = async () => {
    const response = await axios.get(SWIGGY_API);
    const filterRes =
      response.data.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants;
    setRestaurants(filterRes);
    setFilteredRestaurants(filterRes); // Initially, display all restaurants
  };

  const handleFilter = () => {
    if (filterActive) {
      // If filter is active, reset to show all restaurants
      setFilteredRestaurants(restaurants);
    } else {
      // If no filter is applied, filter restaurants by selected rating
      const filtered =
        selectedRating > 0
          ? restaurants.filter((res) => res.info.avgRating >= selectedRating)
          : restaurants;
      setFilteredRestaurants(filtered);
    }
    setFilterActive(!filterActive);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(Number(event.target.value)); // Update selected rating
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="flex justify-end mt-4 mb-8 pr-7">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        {/* Rating dropdown */}
        <select
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          value={selectedRating}
          onChange={handleRatingChange}
        >
          <option value={0}>Select Rating</option>
          <option value={1}>1+</option>
          <option value={2}>2+</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
          <option value={5}>5</option>
        </select>

        <button
          onClick={handleFilter}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-4"
        >
          {filterActive ? "Show All" : "Apply Filter"}
        </button>
      </div>

      {/* Check if filtered restaurants are empty */}
      {filteredRestaurants.length === 0 ? (
        <div className="text-center text-xl text-red-500 mt-5">
          No restaurants found.
        </div>
      ) : (
        <div className="restaurant flex flex-wrap col-3 gap-20 mt-5 justify-center">
          {filteredRestaurants.map((res) => (
            <RestCard key={res.id} restaurant={res} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Restaurant;