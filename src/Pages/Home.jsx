import React from "react";
import Video from "../Components/home/video";
import HomeHeroText from "../Components/home/HomeHeroText";
import HomeBottomText from "../Components/home/HomeBottomText";

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Video />
      </div>
      <div className="flex flex-col justify-between h-full w-full">
        <div className="pt-20 flex justify-center">
          <HomeHeroText />
        </div>
        <div className="pb-10 flex justify-center">
          <HomeBottomText />
        </div>
      </div>
    </div>
  );
};

export default Home;
