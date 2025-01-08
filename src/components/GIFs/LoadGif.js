import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LoadGif = () => {
  return (
    <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
      <DotLottieReact
        src="https://lottie.host/f53f157c-236f-44ad-8a69-7135ef620e0b/53kfkvThvQ.lottie"
        loop
        autoplay
      />
    </div>
  );
};
export default LoadGif;
