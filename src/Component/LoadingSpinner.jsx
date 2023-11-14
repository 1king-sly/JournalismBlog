import React from 'react'
import Lottie from "lottie-react";
import Loader from "../../public/Loader.json";
const LoadingSpinner = () => {
  return (
    <div className="w-screen h-screen items-center justify-center flex">
      <div className=" w-20 h-20">
        <Lottie animationData={Loader} loop={true} />
      </div>
    </div>
  );
}

export default LoadingSpinner