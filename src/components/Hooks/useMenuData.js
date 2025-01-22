import { useState, useEffect } from "react";
import axios from "axios";
import { MENU_API } from "../utils/constants";

const useMenuData = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const getMenuId = async () => {
      const data = await axios.get(MENU_API + id);
      console.log(data, "Fetched Data");
      setResInfo(data?.data?.data);
    };

    if (id) {
      getMenuId();
    }
  }, [id]);

  return resInfo;
};

export default useMenuData;
