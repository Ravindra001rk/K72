import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font2] uppercase overflow-hidden">
      <div className="lg:pt-5 pt-50 text-center lg:text-[9vw] text-[12vw] text-white flex flex-col items-center">
        <div className=" lg:leading-[9vw] leading-15">L'étincelle</div>
        <div className=" lg:leading-[9vw] leading-15 flex items-center">
          qui
          <div className="w-[16vw] h-[7vw] rounded-[6vw] overflow-hidden">
            <Video />
          </div>
          génère
        </div>
        <div className=" lg:leading-[9vw] leading-15">la créativité</div>
      </div>
    </div>
  );
};

export default HomeHeroText;

