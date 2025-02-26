import React from 'react'
import Img1 from '../../../../assets/banner.jpg'
import Img2 from '../../../../assets/bbb.jpg'


function Hero() {
  return (
    <div>
     <div className='flex flex-col  py-4 px-1 shadow-md border-r-indigo-400 mt-0'>
<div className='relative text-center'>

   <img src={Img2} alt=""  className='mx-auto -translate-y-2'/>
   <p 
  data-aos="zoom-in" 
  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             text-4xl text-white font-bold px-4 py-3 rounded-lg 
             hover:cursor-pointer hover:bg-slate-800/50 hover:ring hover:ring-red-600 
             sm:text-sm sm:bg-transparent'>
  About Us
</p>

    </div>     </div>
    </div>
  )
}

export default Hero
