import React from "react";
import { LOGO_URL } from "./utils/constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, category } = item;
  const truncatedName = name.length > 15 ? name.slice(0, 15) + "..." : name;

  const handleRemove = () => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="">
          {/* <img src={LOGO_URL + imageId} alt="Shoes" /> */}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{truncatedName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-primary" onClick={handleRemove}>
              {" "}
              remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
