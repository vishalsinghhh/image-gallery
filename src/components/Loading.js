import React from "react";
import { useLottie } from "lottie-react";
import loadingAnimation from "../static/react-logo.json";
import "../css/Loading.css";

const Loading = () => {
  const options = {
    animationData: loadingAnimation,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <div className="loadingAni">
      <div className="loadingMain">{View}</div>
      <div>Loading some awesome Images...</div>
    </div>
  );
};

export default Loading;
