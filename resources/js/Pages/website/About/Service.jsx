import React from 'react'

const Service = () => {
    const OurService=[
        {
            id:1,
            img:"https://picsum.photos/536/354",
            title:"Lorem, ipsum dolor sit amet ",
            description: "consectetur adipisicing elit. Numquam facilis magni pariatur voluptates quibusdam molestias exercitationem!",
            aosDelay:"0",

        },
        {
            id:2,
            img:"https://picsum.photos/536/354",
            title:"Lorem, ipsum dolor sit amet ",
            description: "consectetur adipisicing elit. Numquam facilis magni pariatur voluptates quibusdam molestias exercitationem!",
            aosDelay:"100",

        },
        {
            id:3,
            img:"https://picsum.photos/536/354",
            title:"Lorem, ipsum dolor sit amet ",
            description: "consectetur adipisicing elit. Numquam facilis magni pariatur voluptates quibusdam molestias exercitationem!",
            aosDelay:"200",

        },
        // {
        //     id:4,
        //     img:"https://picsum.photos/536/354",
        //     title:"Lorem, ipsum dolor sit amet ",
        //     description: "consectetur adipisicing elit. Numquam facilis magni pariatur voluptates quibusdam molestias exercitationem!",
        //     aosDelay:"300",

        // }
    ]
  return (
    <div className='container mx-auto px-4 py-4 mb-6'>
    <h3 className='text-3xl font-bold text-primary-500 text-center mb-6 dark:text-slate-400'>
        Our Services
    </h3>

    {/* Move grid container outside the map */}
    <div className=' group grid grid-cols-1 md:grid-cols-3 gap-7'>
        {OurService.map((data) => (
            <div key={data.id} className='bg-white rounded-lg shadow-md overflow-hidden dark:bg-slate-800'>
                <img src={data.img} alt="" data-aos="fade-up" data-aos-delay={data.aosDelay} className='w-full h-64 object-cover'/>
                <div className='text-center p-6'>
                    <h3 className="text-slate-800 mb-2 text-xl font-medium  dark:text-slate-200">
                        {data.title}
                    </h3>
                    <p className='text-slate-700 text-base dark:text-slate-300 group-hover:text-slate-400'>{data.description}</p>
                </div>
            </div>
        ))}
    </div>
</div>

   
  )
}

export default Service
