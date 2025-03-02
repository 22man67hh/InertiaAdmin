import React from 'react';
import { motion } from 'framer-motion';

import ellipse1 from "../../../../assets/Ellipse-01.png";
import ellipse from "../../../../assets/Ellipse-02.png";
import vector from "../../../../assets/location.png";
import plane from "../../../../assets/plane.png";
import header from "../../../../assets/header-img.png";

const NewBest = () => {
  return (
    <section className='relative bg-gray-100 py-40 px-6 flex items-center w-full'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center w-full'>

        {/* Text Section */}
        <div className='text-left w-full'>
          <p className='text-purple-600 font-semibold text-lg mb-4'>SPECIAL OFFER FIRST CUSTOMER</p>
          <h1 className='text-5xl font-bold text-gray-900 mb-6'>
            Your <span className='text-red-500'>success</span> Journey <br /> starts with us
          </h1>
          <p className='text-gray-600 text-lg leading-relaxed mb-6'>
            UniSquad can fulfill your international education dream <br /> as per your best fit with world-class universities.
          </p>
          <div className='mt-8 flex space-x-6'>
            <button className='bg-purple-600 text-white px-6 py-4 rounded-md font-semibold hover:bg-purple-700'>Apply Online</button>
            <button className='bg-white border border-gray-300 text-gray-900 px-6 py-4 rounded-md font-semibold hover:bg-purple-700 hover:text-white transition'>Discover</button>
          </div>
        </div>

        {/* Image Section */}
        <div className='relative md:flex justify-center w-full hidden'>
          <img src={ellipse1} alt='' className='absolute right-[35%] top-[70%] shadow-lg' />
<motion.img
src={vector}
className='absolute right-20 top-56'
animate={{opacity:[1,0.1]}}
transition={{repeat:Infinity,duration:1.5,ease:"easeInOut"}}

/>
<img src={vector} alt="" />
          <motion.img
            src={plane}
            alt=''
            className='absolute top-[-150px] left-0 max-w-full  hidden lg:block'
            initial={{ x: -100, y: -150, opacity: 1 ,rotateY:0}}
            animate={{ x: [-100, 250, 480, 350, -100],
                 y: [-150, -140, -130, -120, -150], opacity: 1,
                rotateY: [0, 0, 160,180,180], }}
            transition={{ duration: 10, ease: "linear",
             }}

          />

          <div className='absolute right-0 -top-72'>
            <img src={header} alt='' className='max-w-full scale-75' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBest;
