import React from "react";
import Img1 from "../../../../assets/best/desk.jpg";
import Img2 from "../../../../assets/best/auditorium.jpg";
import Img3 from "../../../../assets/best/achievement.jpg";
const OurBlogs = [
    {
        id: 1,
        img: Img1,
        title: "helelemelme",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae porro veniam quaerat voluptatibus, blanditiis dolorem",
    },
    {
        id: 2,
        img: Img2,
        title: "helelemelme",
        description:
            "Lorem ipsum,ng elit. Repudiandae porro veniam quaerat voluptatibus, blanditiis dolorem",
    },
    {
        id: 3,
        img: Img3,
        title: "helelemelme",
        description:
            "Lorem ipsum, adipisicing elit. Repudiandae porro veniam quaerat voluptatibus, blanditiis dolorem",
    },
];
const Blog = ({ handlePopup }) => {
    return (
        <div className="container">
            <div className="text-left mb-20">
                {/* <p data-aos="fade-up" className="text-sm text-primary">Our Blogs</p> */}
                <h1 data-aos="fade-up" className="text-3xl font-bold">
                    Our Blogs
                </h1>
                <p data-aos="fade-up" className="text-sm text-gray-500 mb-24">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum non ratione numquam laboriosam exercitationem
                    accusantium?
                </p>
                <div>
                    <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                        {OurBlogs.map((data)=>(
                            <div data-aos="zoom-in" className="rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg:black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
                               <div>
                                <img src={data.img} alt="" className="max w-[300px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md" />
                               </div>
                                {/* <div className="w-full flex items-center"></div> */}
                                <h1 className="text-xl font-bold">{data.title}</h1>
                                <p className="text-gray-500 group-hover:text-dark dark:hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
                                <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary" onClick={handlePopup}>View More</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
