import React from "react";
import { LOGO_URL } from "./utils/constants";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ItemCard = ({ item }) => {
  const { name, description, price, defaultPrice, imageId } = item;
  const dispatch = useDispatch();

  return (
    <div className="flex items-center mb-4 relative">
      <img
        src={LOGO_URL + imageId}
        alt={name}
        className="w-16 h-16 rounded object-cover mr-4"
      />
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-sm font-bold">₹{(price || defaultPrice) / 100}</p>
      </div>
      <button
        onClick={() => dispatch(addToCart(item))}
        className="absolute top-0 right-0 mt-2 mr-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
};

export default ItemCard;
