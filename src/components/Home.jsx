import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import pImage from "../assets/potrait.jpg";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-screen-lg max-h-screen-lg mx-auto px-8 flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="text-pink-600">Hi! My name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Harshita Ramani
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a web developer
          </h2>
          <p className="text-[#8892b0] py-4 max-w-md">
            I'm a passionate web developer on a mission to bring ideas to life
            in the digital realm. With a love for problem-solving and an eye for
            clean and effective design, I specialize in crafting seamless and
            user-friendly web experiences.
          </p>
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 ">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>

        <div className=" mx-auto md:w-full ">
          {/* add 'hidden sm:flex' to classname to show image only in  web mode*/}
          <img src={pImage} alt="potrait" />
        </div>
      </div>
    </div>
  );
};

export default Home;
