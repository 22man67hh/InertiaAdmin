import { Box, Card, CardContent, Icon, Typography } from "@mui/material";
import React from "react";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
function Section() {
    return (
        <>
            <Box
                component="section"
                sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "left",
                    height: "100vh",
                    backgroundColor: "#f5f5f5",
                }}
                className=" md:h-[100vh] sm:h-[90vh]"
            >
                <div className="container mx-auto py-12 px-4 sm:px-3 sm:pb-10 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg">
                            <h2  className="text-3xl font-extrabold sm:text-4xl dark:text-slate-200">
                                About Us
                            </h2>
                            <p data-aos="fade-up" className="mt-4 text-gray-600 text-lg dark:text-slate-300">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sequi velit ducimus itaque
                                facere maiores provident odit dignissimos
                                exercitationem, neque nemo. Iste tempore
                                voluptatem aliquid similique animi totam ullam,
                                tempora fugit unde, possimus molestias debitis
                                est libero fugiat quidem recusandae. Deleniti
                                eos deserunt dolor vero aut numquam eaque
                                maxime, aspernatur facere!
                            </p>
                            <div className="mt-8" data-aos="fade-up">
                                <a
                                    href="#"
                                    class="text-blue-500 hover:text-blue-600 font-medium"
                                >
                                    Learn more about us
                                    <span class="ml-2">&#8594;</span>
                                </a>
                            </div>
                        </div>
                        <div className="mt-12 md:mt-10" data-aos="fade-up">
                            <img
                                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                                alt="About Us Image"
                                class="object-cover rounded-lg shadow-md"
                        style={{ aosDelay: "200"}}    />
                        </div>
                    </div>
                </div>
            </Box>
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 data-aos="fade-up" className="font-heading mb-4  bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                            Why Choose Us?
                        </h2>
                        <p data-aos="fade-up" className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quo, soluta.
                        </p>
                        <p data-aos="fade-up" className="mt-4 max-2xl text-lg twxt-gray-500 lg:mx-auto dark:text-slate-400">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Voluptatem facilis sapiente quibusdam
                            accusantium. Ipsam minus quis placeat fugit ea ab?
                        </p>
                    </div>
                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div  className=" absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                                        {/* <ElectricBoltIcon/> */}
                                        <svg data-aos="fade-up"
                                            fill="#000000"
                                            viewBox="0 0 1920 1920"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g
                                                id="SVGRepo_bgCarrier"
                                                stroke-width="0"
                                            ></g>
                                            <g
                                                id="SVGRepo_tracerCarrier"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></g>
                                            <g id="SVGRepo_iconCarrier">

                                                <path
                                                    d="M855.281 308.99v522.256L0 309.524v1300.242l855.281-521.83V1610.3l1064.612-650.655L855.281 308.989Zm106.91 190.62 752.755 460.035-752.754 460.034V499.61Zm-855.28.32 748.37 456.507v6.308l-748.37 456.507V499.93Z"
                                                    fill-rule="evenodd"
                                                ></path>{" "}
                                            </g>
                                        </svg>
                                        {/* <img src="https://www.svgrepo.com/svg/509922/fast-forward" alt="" /> */}
                                    </div>
                                    <p data-aos="fade-up" className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-slate-400">
                                        Fast Service
                                    </p>
                                </dt>
                                <dd data-aos="fade-up" className="mt-2 ml-16 text-base text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Molestias odio soluta
                                    numquam alias adipisci eos distinctio, ut
                                    illum vitae eum nihil nemo autem delectus
                                    velit veniam eveniet officiis. Labore,
                                    ducimus quis. Illum accusamus cum
                                    necessitatibus eos deserunt nihil
                                    consequatur repellendus.
                                </dd>
                            </div>
                            <div data-aos="fade-up" className="relative">
                                <dt>
                                    <div className=" absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-dark">
<img src="https://www.svgrepo.com/show/426657/contact-book-2.svg" alt="" /></div>
<p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-slate-400">
                                Easily Available
                            </p>

                                </dt>
                        <dd data-aos="fade-up" class="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.</dd>
                            </div>
                            <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />

                            </div>
                            <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-slate-400">Lorem ipsum
                            </p>
                        </dt>
                        <dd data-aos="fade-up" class="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                            <div class="relative">
                        <dt>
                            <div data-aos="fade-up"
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />

                            </div>
                            <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-slate-400">Lorem ipsum
                            </p>
                        </dt>
                        <dd data-aos="fade-up" class="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section;
