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
      const rawCategories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filteredCategories = rawCategories.filter((category) => {
        return (
          category?.card?.card?.itemCards &&
          category?.card?.card?.itemCards.length > 0
        );
      });
      setName(resInfo?.cards[0]?.card?.card?.text);
      setCategories(filteredCategories);
      console.log(filteredCategories, "Filtered Categories");
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
      <h1 className="text-2xl font-bold mb-5">{name}</h1>
      <AccordionList items={categories} />{" "}
    </div>
  );
};

export default MenuRes;
