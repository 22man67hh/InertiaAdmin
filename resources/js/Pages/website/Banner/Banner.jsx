import React from "react";
import BanerImg from "../../../../assets/consultancy-crm.jpg";
import { GrSecure } from "react-icons/gr";
function Banner() {
    return (
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    <div data-aos="zoom-in">
                        <img
                            className="max-w-[400px] h-[350px] w-full mx-auto object-cover"
                            src={BanerImg}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col  justify-center gap-6 sm:pt-0">
                        <h1
                            data-aos="fade-up"
                            className="text-3xl sm:text-4xl font-bold"
                        >
                            Manish Acharya
                        </h1>
                        <p
                            data-aos="fade-up"
                            className="text-sm text-gray-500 tracking-wide leading-5"
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Et pariatur, cupiditate sed facere deleniti
                            ipsam porro, recusandae quod, aliquam itaque
                            accusamus. Ex accusantium illo eligendi vel expedita
                            ipsa minima quae? Reiciendis id quidem porro maxime.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div
                                data-aos="fade-up"
                                className="flex items-center gap-4"
                            >
                                <GrSecure className="text-4xl h-12 w-12 rounded-full bg-violet-100 dark:bg-violet-400 " />
                                <p>Quality Products</p>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
