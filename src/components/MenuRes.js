import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { useState } from "react";
import useRestaurantMenu from "./utils/hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCatogory";

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id, " res id");

  const dummy = "Dummy Data";

  const resInfo = useRestaurantMenu(id);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("main", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6">
        {resInfo?.cards[2]?.card?.card?.info?.name}
      </h1>
      <h3 className="font-bold text-lg">
        {resInfo?.cards[2]?.card?.card?.info.cuisines.join(", ")} -{" "}
        {resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}
      </h3>
      {categories.map((category) => (
        <RestaurantCategory accordianData={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
