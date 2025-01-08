import React, { useState, useEffect } from "react";
import RestCard from "./RestCard";
import axios from "axios";
import { SWIGGY_API } from "./utils/constants";
import LoadGif from "./GIFs/LoadGif";
import NotFound from "./GIFs/NotFound";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [filterActive, setFilterActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
    if (filterActive) {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered =
        selectedRating > 0
          ? restaurants.filter((res) => res.info.avgRating >= selectedRating)
          : restaurants;
      setFilteredRestaurants(filtered);
    }
    setFilterActive(!filterActive);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(Number(event.target.value));
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = restaurants.filter(
      (res) =>
        res.info.name.toLowerCase().includes(value.toLowerCase()) ||
        res.info.locality.toLowerCase().includes(value.toLowerCase()) ||
        res.info.areaName.toLowerCase().includes(value.toLowerCase())
    );

    const finalFiltered =
      selectedRating > 0
        ? filtered.filter((res) => res.info.avgRating >= selectedRating)
        : filtered;

    setFilteredRestaurants(finalFiltered);
  };

  if (restaurants.length === 0) {
    return <LoadGif />;
  }

  return (
    <div>
      <div className="flex justify-between mt-4 mb-8 px-7">
        <div className="flex-1 mr-4 ml-28">
          <label className="input input-bordered flex items-center gap-2 w-[550px] h-10">
            <input
              type="text"
              className="grow p-2"
              placeholder="Search Restaurant"
              value={searchTerm}
              onChange={handleSearchChange}
            />
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
        </div>

        <div className="flex items-center gap-4 mr-28">
          <select
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
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
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            {filterActive ? "Show All" : "Apply Filter"}
          </button>
        </div>
      </div>

      {filteredRestaurants.length === 0 ? (
        <div className="text-center text-xl text-red-500 mt-5">
          <NotFound />
          No restaurants found.
        </div>
      ) : (
        <div className="restaurant flex flex-wrap gap-20 mt-5 justify-center">
          {filteredRestaurants.map((res) => (
            <RestCard key={res.info.id} restaurant={res} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Restaurant;
