import React from 'react'
import canada from "../../../assets/canda.png"
const Destination = () => {
  return (
  <section className='bg-gray-100 flex justify-center items-center' >
    <div className="text-center p-6">
<h2 className='text-3xl font-bold'>Top Destinations</h2>
<p className='text-gray-500 mt-2'>we have quality partners in variety of destination</p>

<div className='grid grid-cols-4 md:grid-cols-7 gap-6 mt-6' >
<div className="p-6 bg-gray-100 rounded-lg shadow text-center my-8">
    <img src={canada} alt="canada" className='w-24 h-24 mx-auto rounded-full'/>
    <p className='mt-2 font-semibold'>Canada</p>

</div>
<div className="p-6 bg-gray-100 rounded-lg shadow text-center my-8">
    <img src={canada} alt="canada" className='w-24 h-24 mx-auto rounded-full'/>
    <p className='mt-2 font-semibold'>Canada</p>

</div>
<div className="p-6 bg-gray-100 rounded-lg shadow text-center my-8">
    <img src={canada} alt="canada" className='w-24 h-24 mx-auto rounded-full'/>
    <p className='mt-2 font-semibold'>Canada</p>

</div>
<div className="p-6 bg-gray-100 rounded-lg shadow text-center my-8">
    <img src={canada} alt="canada" className='w-24 h-24 mx-auto rounded-full'/>
    <p className='mt-2 font-semibold'>Canada</p>

</div>
<div className="p-6 bg-gray-100 rounded-lg shadow text-center my-8">
    <img src={canada} alt="canada" className='w-24 h-24 mx-auto rounded-full'/>
    <p className='mt-2 font-semibold'>Canada</p>

</div>
<div className="p-6 bg-gray-100 rounded-lg shadow text-center my-8">
    <img src={canada} alt="canada" className='w-24 h-24 mx-auto rounded-full'/>
    <p className='mt-2 font-semibold'>Canada</p>

</div>
<div className="p-6 bg-gray-100 rounded-lg shadow text-center my-8">
    <img src={canada} alt="canada" className='w-24 h-24 mx-auto rounded-full'/>
    <p className='mt-2 font-semibold'>Canada</p>

</div>


</div>
<button className='mt-6 text-white px-6 py-3 rounded-full bg-slate-700 hover:bg-purple-700 hover:text-white transition'>Apply Now</button>
    </div>

  </section>
  )
}

export default Destination
