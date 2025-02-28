import React from 'react'

const Photo = () => {
  return (
    <div className='py-10'>
              <h1 className='text-center text-slate-600 text-xl font-semibold pb-4'>Our Moments</h1>

    <div className='flex flex-col md:grid md:grid-cols-3 gap-3'>
    {Array(8).fill(null).map((_,index)=>(
      <div key={index} className='relative rounded overflow-hidden'>
        <img data-aos="fade-up" aos-delay-duration="100" src="https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=1024x1024&w=is&k=20&c=PAkukF90bHKq5yFIGj92Phqyvm8vV9ZjGxlK1PF9d-Y=" alt="" />
        <p className='cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-serif font-medium group-hover:bg-opacity-55 transition'>Lorem ipsum dolor sit amet.</p>
      </div>
       ))}
    </div>

    </div>
  )
}

export default Photo
