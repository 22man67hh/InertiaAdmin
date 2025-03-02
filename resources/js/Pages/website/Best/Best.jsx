import React from "react";
import Img1 from "../../../../assets/best/desk.jpg";
import Img2 from "../../../../assets/best/auditorium.jpg";
import Img3 from "../../../../assets/best/achievement.jpg";
import Img4 from "../../../../assets/best/writing.jpg";

const OurBest = [
    {
        id: 1,
        img: Img1,
        title: "Lorem, ipsum dolor sit amet ",
        description:
            "consectetur adipisicing elit. Numquam facilis magni pariatur voluptates quibusdam molestias exercitationem!",
        color: "white",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Lorem, ipsum dolor sit amet ",
        description:
            "Repellat doloribus saepe et rem assumenda! Veniam laborum excepturi aliquam rerum mollitia ut commodi voluptate.",
        color: "white",
        aosDelay: "100",
    },
    {
        id: 3,
        img: Img3,
        title: "Lorem, ipsum dolor sit amet ",
        description:
            "Expedita, quaerat, corporis soluta? Veniam laborum excepturi aliquam rerum mollitia ut commodi voluptate.",
        color: "white",
        aosDelay: "200",
    },
    {
        id: 4,
        img: Img4,
        title: "Lorem, ipsum dolor sit amet ",
        description:
            "Expedita, quaerat, corporis soluta? Veniam laborum excepturi aliquam rerum mollitia ut commodi voluptate.",
        color: "white",
        aosDelay: "200",
    },

];

const Best = () => {
    return (
        <div className=" mt-20 mb-12">
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <h2 data-aos="fade-up" className="text-sm text-primary">
                    Get the Best from Our Network
                </h2>
                <h2 data-aos="fade-up" className="text-3xl font-bold ">Service</h2>
                <p data-aos="fade-up" className="text-xs text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ducimus sequi ad voluptatem culpa inventore illo expedita consequatur iste quibusdam.
                </p>
            </div>
            <div className="flex justify-center ">
    <div className="px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
        {OurBest.map((data) => (
            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className="space-y-2 flex flex-col items-center">
                <img src={data.img} alt="" className="h-[280px] w-[280px] object-cover rounded-md" />
                <div className="text-center">
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-800 dark:text-white">{data.description}</p>
                </div>
            </div>
        ))}
    </div>
</div>

        </div>
    );
};

export default Best;
