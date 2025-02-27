import React from 'react';
import Img2 from '../../../../assets/bbb.jpg';

function Hero({ title }) {
  return (
    <div>
      <div className="flex flex-col py-4 px-1 shadow-md border-r-indigo-400 mt-0">
        <div className="relative text-center">
          <img src={Img2} alt="Background" className="mx-auto -translate-y-2" />

          <p
            data-aos="zoom-in"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       text-4xl sm:text-lg text-white font-bold px-4 py-3 rounded-lg
                       hover:cursor-pointer hover:bg-slate-800/50 hover:ring hover:ring-red-600">
            {title ? title:"No title Received"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
