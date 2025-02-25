import React from "react";
import { MdEmail } from "react-icons/md";
import { Link } from "@inertiajs/react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Footer = () => {
    const FooterLinks = [
        { title: "Home", link: "/#" },
        { title: "About", link: "/#" },
        { title: "Contact", link: "/#" },
        { title: "Blog", link: "/#" },
    ];

    return (
        <div className="text-white bg-[#212529] py-10">
            <div data-aos="zoom-in" className="grid md:grid-cols-3 gap-6 px-4">
                <div>
                    <h1 className="sm:text-3xl text-xl font-bold flex items-center gap-2">
                        <MdEmail size={30} />
                        info@gmail.com
                    </h1>
                    <p className="text-gray-300 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore perferendis id mollitia alias optio iusto cupiditate
                        expedita placeat esse reprehenderit.
                    </p>
                </div>

                <div>
                    <h1 className="sm:text-xl text-xl font-bold mb-3">Important Links</h1>
                    <ul className="flex flex-col gap-3">
                        {FooterLinks.map((data) => (
                            <li key={data.title} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                                <Link href={data.link}>{data.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h1 className="sm:text-xl text-xl font-bold mb-3">Important Links</h1>
                    <ul className="flex flex-col gap-3">
                        {FooterLinks.map((data) => (
                            <li key={data.title} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                                <Link href={data.link}>{data.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h1 className="sm:text-xl text-xl font-bold mb-3">Follow Us</h1>
                    <div className="flex items-center gap-4">
                        <Link href="#"><FaInstagram className="text-3xl hover:text-primary" /></Link>
                        <Link href="#"><FaLinkedinIn className="text-3xl hover:text-primary" /></Link>
                        <Link href="#"><FaFacebook className="text-3xl hover:text-primary" /></Link>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center gap-3">
                            <FaMapLocation />
                            <p>Kathmandu</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <IoCall />
                            <p>+977 9800000000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
