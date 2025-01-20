import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import LoadGif from "./GIFs/LoadGif";
import useMenuData from "./Hooks/useMenuData";

const MenuRes = () => {
  const { id } = useParams();
  const resInfo = useMenuData(id);
  const [menu, setMenu] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    if (resInfo) {
      const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filteredCategories = categories.filter((category) => {
        return (
          category?.card?.card?.itemCards &&
          category?.card?.card?.itemCards.length > 0
        );
      });

      setName(resInfo?.cards[0]?.card?.card?.text);
      setMenu(filteredCategories);
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
    <div className="restaurant flex flex-wrap col-3 gap-20 mt-5 justify-center">
      {menu.map((res) => (
        <MenuCard key={res.card.card.id} restaurant={res} />
      ))}
    </div>
  );
};

export default MenuRes;
