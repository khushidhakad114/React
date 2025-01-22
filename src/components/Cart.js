import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const itemInCart = useSelector((store) => store.cartSlice.items);

  console.log(itemInCart, "checking for item in cart");

  if (itemInCart.length === 0) {
    return <div>No items in cart</div>;
  }
  return (
    <div className="flex gap-4">
      {itemInCart.map((item) => (
        <CartItem item={item} />
      ))}
    </div>
  );
};

export default Cart;
