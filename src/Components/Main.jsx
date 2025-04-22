import React from "react";
import { main } from "../assets/assets";

const Main = () => {
  return (
    <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden">
      {main.map((pic, index) => (
        <div key={index} className="relative w-full">
          <img src={pic.src} alt="" className="w-full h-full object-cover" />
          <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/40">
            <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 font-Outfit animate__bounce">
              Explore homes that fit your dreams
            </h2>
            <div className="space-x-6 mt-16">
              <a
                href="#Projects"
                className="border border-white px-8 py-3 rounded"
              >
                Projects
              </a>
              <a href="#contact" className="bg-blue-500 px-8 py-3 rounded">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
