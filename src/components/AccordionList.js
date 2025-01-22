import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { addToCart } from "../redux/cartSlice";


const AccordionList = ({ categories}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {categories.map((category, index) => (
        <div key={index} className="border-b border-gray-200 mb-4">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium"
          >
            {category.card.card.title} ({category.card.card.itemCards.length})
            <span
              className={`transform transition-transform ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            >
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-4">
              {category.card.card.itemCards.map((item) => (
                <ItemCard
                  key={item.card.info.id}
                  item={item.card.info}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionList;
