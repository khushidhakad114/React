import React from "react";

const Shimmer = () => {
  return (
    <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
      <span className="loading loading-infinity loading-xs"></span>
      <span className="loading loading-infinity loading-sm"></span>
      <span className="loading loading-infinity loading-md"></span>
      <span className="loading loading-infinity loading-lg"></span>
    </div>
  );
};

export default Shimmer;
