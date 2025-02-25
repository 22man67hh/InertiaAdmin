import React from 'react'
import Img1 from '../../../../assets/banner.jpg'

function Hero() {
  return (
    <div>
     <div className='flex flex-col h-[30%] w-auto py-4 px-3 shadow-md border-r-indigo-400 mt-0'>
<div className='relative text-center'>

   <img src={Img1} alt=""  className='mx-auto -translate-y-3'/>
   <p data-aos="zoom-in" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold bg-black/50 px-4 py-3 rounded-lg hover:cursor-pointer hover:bg-slate-800/50 hover:ring-red-600'>About</p>

    </div>     </div>
    </div>
  )
}

export default Hero
