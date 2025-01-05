import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "./utils/constants";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";
const MenuRes = () => {
  const [menu, setMenu] = useState([]);
  const [name, setName] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getMenuId();
  }, [id]);
  const getMenuId = async () => {
    const data = await axios.get(MENU_API + id);
    const categories =
      data?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const filteredCategories = categories.filter((category) => {
      return (
        category?.card?.card?.itemCards &&
        category?.card?.card?.itemCards.length > 0
      );
    });
    setName(data?.data?.data?.cards[0]?.card?.card?.text);
    console.log(data?.data?.data?.cards[0]?.card?.card?.text);
    console.log(filteredCategories);
    setMenu(filteredCategories);
  };
  {
    if (name.length === 0) {
      return (
        <div>
          <Shimmer />
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
  }
};

export default MenuRes;
