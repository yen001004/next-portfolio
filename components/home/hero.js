import React from "react";
import Animation from "./animation";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
          안녕하세요 :)
          <br className="hidden lg:inline-block" />
          FE 개발자 이예원입니다
        </h1>
        <p className="mb-8 leading-relaxed">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
          try-hard chambray.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
            프로젝트 보러가기
          </button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default Hero;
