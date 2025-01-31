import { useDispatch } from "react-redux";
import { LOGO_URL } from "./utils/constants";
import { addItem } from "../redux/cartSlice";

const AccordionList = ({ items }) => {
  const dispatch = useDispatch();

  // Handle add to cart
  const handleAddToCart = (item) => {
    console.log("clicked", item);
    dispatch(addItem(item)); // Dispatch the entire item object
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b border-gray-200 flex items-center p-4"
        >
          {/* Image and Add to Cart Button */}
          <div className="relative flex-shrink-0">
            <img
              src={LOGO_URL + item.card.info.imageId}
              className="w-22 h-16 rounded-full mr-4"
              alt={item.card.info.name}
            />
            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(item.card.info)} // Pass the specific item
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-orange-300 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>

          {/* Item Details */}
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-lg">
                {item.card.info.name}
              </span>
              <span className="text-gray-600 font-semibold text-lg">
                -₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100 || 0}
              </span>
            </div>
            <p className="text-sm text-gray-600 text-left">
              {item.card.info.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionList;
