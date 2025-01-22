import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadGif from "./GIFs/LoadGif";
import useMenuData from "./Hooks/useMenuData";
import AccordionList from "./AccordionList";

const MenuRes = () => {
  const { id } = useParams();
  const resInfo = useMenuData(id);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    if (resInfo) {
      const { itemCards } =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card;

      const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      setName(resInfo?.cards[0]?.card?.card?.text);
      setCategories(categories);
      console.log(categories, "Filtered Categories");
    }
  }, [resInfo]);

  if (name.length === 0) {
    return (
      <div>
        <LoadGif />
      </div>
    );
  }

  return (
    <div className="w-3/4 mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-5">{name || "Menu"}</h1>
      <AccordionList items={categories} />{" "}
    </div>
  );
};

export default MenuRes;
