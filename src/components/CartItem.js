import React from "react";
import { useDispatch } from "react-redux";
import { LOGO_URL } from "./utils/constants";
import { removeItems } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, category, imageId, quantity } = item;
  const truncatedName = name.length > 15 ? name.slice(0, 15) + "..." : name;

  const handleRemove = () => {
    dispatch(removeItems(item));
  };

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="relative">
          <img
            src={LOGO_URL + imageId}
            alt={truncatedName}
            className="h-20 w-20 object-cover"
          />
          <div className="absolute top-0 right-0 bg-orange-500 text-white rounded-full px-2">
            x{quantity}
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{truncatedName}</h2>
          <p>{category}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-primary" onClick={handleRemove}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
