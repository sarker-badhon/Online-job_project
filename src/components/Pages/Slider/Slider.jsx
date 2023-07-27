import React from 'react';
import introVideo from "../../../assets/intro.mp4";

const Slider = () => {
  return (
    <div className="hero h-[560px] mb-64">
      <video className="hero-video w-full" autoPlay loop muted>
        <source src={introVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-center text-neutral-content top-[-40px]">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:max-w-4xl lg:px-8">
          <h1 className="mb-5 text-4xl sm:text-5xl font-bold">Hire the best Employee for </h1>
          <h1 className="mb-5 text-4xl sm:text-5xl font-bold">online job </h1>
          <p className="mb-5 text-sm sm:text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
         <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 ">
         <button className="bg-blue-900 font-bold text-2xl pt-3 pb-3 ">Hire Employee</button>
         <button className="border border-white font-bold text-2xl pt-3 pb-3 ">Earn Money</button>
         
         </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
