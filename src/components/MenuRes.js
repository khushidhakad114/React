import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "./utils/constants";
import { useEffect } from "react";
const MenuRes = () => {
  const { id } = useParams();
  useEffect(() => {
    getMenuId();
  }, [id]);
  const getMenuId = async () => {
    const data = await axios.get(MENU_API + id);
    console.log(
      data.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card
        .card.categories[1].itemCards[1].card.info.name
    );
  };
  return <div>hi i am menu {id}</div>;
};

export default MenuRes;
