import { useState, useEffect } from "react";
import axios from "axios";
import { MENU_API } from "../utils/constants";

const useMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const getMenuId = async () => {
      const data = await axios.get(MENU_API + id);
      setResInfo(data?.data?.data);
    };

    if (id) {
      getMenuId();
    }
  }, [id]);

  return resInfo;
};

export default useMenu;