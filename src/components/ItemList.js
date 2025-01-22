import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "./utils/constants";
import { addToCart } from "../redux/cartSlice";

const ItemList = ({ items }) => {
  const checkForItemIFPresent = useSelector((store) => store.cartSlice.items);
  console.log(checkForItemIFPresent, "check for item if present");
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    console.log("clicked", item);
    if (checkForItemIFPresent.find((i) => item.id === item.id)) {
      alert("Item already in cart");
      return;
    }

    dispatch(addToCart(item));
  };

  if (!Array.isArray(items)) {
    return <div>No items available</div>;
  }

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <button
              className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
              onClick={() => handleAddItem(item.card.info)}
            >
              Add item ++++
            </button>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item.card.info)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
