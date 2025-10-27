import React from "react";
import Video from "../Components/Home/Video";
import HomeBtmText from "../Components/Home/HomeBtmText";
import HomeHeroText from "../Components/Home/HomeHeroText";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="h-screen overflow-hidden  w-screen absolute ">
        <Video />
      </div>
      <div className="h-screen w-screen relative lg:pb-10 pb-20 overflow-hidden flex flex-col justify-between font-[font2]">
        <HomeHeroText />
        <HomeBtmText />
      </div>
    </div>
  );
};

export default Home;
