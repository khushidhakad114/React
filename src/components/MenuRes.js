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
    console.log(data?.data?.data);
  };
  return <div>hi i am menu {id}</div>;
};

export default MenuRes;
