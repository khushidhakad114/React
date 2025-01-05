import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "./utils/constants";
import { useEffect, useState } from "react";
const MenuRes = () => {
  const [menu, setMenu] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getMenuId();
  }, [id]);
  const getMenuId = async () => {
    const data = await axios.get(MENU_API + id);
    const categories =
      data?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const filteredCategories = categories.filter((c) => {
      ("@type");
    });
    console.log(filteredCategories);
    setMenu(filteredCategories);
  };
  return <div>hi i am menu {id}</div>;
};

export default MenuRes;
