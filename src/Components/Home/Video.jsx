import React from "react";
import videoSrc from "./69496b2d.mp4";
const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full  w-full object-cover"
        autoPlay
        muted
        loop
        src={videoSrc}
      ></video>
    </div>
  );
};

export default Video;
