import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const itemInCart = useSelector((store) => store.cartSlice.items);

 
  const consolidatedCart = itemInCart.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  if (consolidatedCart.length === 0) {
    return <div>No items in cart</div>;
  }

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {consolidatedCart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
