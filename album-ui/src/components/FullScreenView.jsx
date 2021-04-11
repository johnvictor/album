import React from "react";
import CloseIcon from "../img/CloseIcon";
import ZoomInIcon from "../img/ZoomInIcon";
import ZoomOutIcon from "../img/ZoomOutIcon";

export default function FullScreenView(props) {
  return (
    <div
      onClick={props.handleFullScreen}
      className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70"
    >
      <div className="relative flex justify-end py-3 text-white">
        <ZoomInIcon />
        <ZoomOutIcon />
        <CloseIcon />
      </div>
      <div className="fixed top-10 bottom-6 right-8 left-8 h-full">
        <img src="/images/images.jpeg" className="w-full h-full" />
      </div>
    </div>
  );
}
