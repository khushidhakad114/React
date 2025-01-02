import React from "react";
import RestCard from "./RestCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Restaurant = () => {
  return (
    <div className="restaurant flex flex-wrap col-3 gap-20 mt-5 justify-center">
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
    </div>
  );
};
export default Restaurant;
