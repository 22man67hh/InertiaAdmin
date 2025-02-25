import React, { useState } from "react";
import { FaCaretDown, FaBars, FaTimes, FaMailBulk } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import DarkMode from "./DarkMode";
import { Link } from "@inertiajs/react";
function TopBar({ handleOrderPopup }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);
 const toggleDropdown = (id) => setOpenDropdown(openDropdown === id ? null : id);
    const menu = [
        { id: 1, name: "Home", link: "/#" },
        { id: 2, name: "About", link: route('about') },
        { id: 3, name: "Service", link: "/#service" },
        { id: 4, name: "Service1", link: "/#" },
        {
            id: 5,
            name: "Service2",
            link: "/#",
            subMenu: [
                { id: 51, name: "Sub Service 1", link: "/sub1" },
                { id: 52, name: "Sub Service 2", link: "/sub2" },
            ],
        },
    ];
    const DropDownList = [
        { id: 1, name: "name", link: "/#" },
        { id: 2, name: "name1", link: "/#" },
    ];
    const AboutList = [
        { id: 1, name: "name", link: "/#" },
        { id: 2, name: "name1", link: "/#" },
    ];

    return (
        <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
            <div className="bg-primary/40 py-2">
                <div className="container flex justify-between items-center">
                    <div>
                        <a href="#" className="font-bold text-xl items-center flex gap-1">
                            <MdEmail size="30" />
                            info@email.com
                        </a>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all rounded-lg border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800"
                            />
                            <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                        </div>
                        <button
                            onClick={openModal}
                            className="bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                        >
                            <span className="group-hover:block hidden transition-all duration-200">Contact Us</span>
                            <FaMailBulk className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>
                        <div>{<DarkMode />}</div>
                    </div>
                </div>
                {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] dark:bg-slate-800">
                        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                        <p className="mb-4">Please enter your details and message below.</p>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border p-2 mb-2 rounded-md"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border p-2 mb-2 rounded-md"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full border p-2 mb-2 rounded-md"
                            rows="4"
                        ></textarea>
                        <div className="flex justify-end gap-3">
                            <button
                                className="bg-gray-400 text-white px-4 py-2 rounded"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                            <button className="bg-primary text-white px-4 py-2 rounded">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
            </div>

            <div data-aos="zoom-in" className="flex justify-between items-center px-4 py-2 bg-white dark:bg-slate-800">
                <a href="#" className="font-bold text-xl">LOGO</a>
                <button onClick={toggleMobileNav} className="sm:hidden text-xl">
                    {isMobileNavOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileNavOpen && (
                <div className="sm:hidden bg-white dark:bg-slate-800 p-4">
                    <ul className="flex flex-col space-y-2">
                        {menu.map((data) => (
                             <li key={data.id} className="relative">
                             {data.subMenu ? (
                                 <>
                                     <button
                                         onClick={() => toggleDropdown(`service-${data.id}`)}
                                         className="flex items-center w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700"
                                     >
                                         {data.name}{" "}
                                         <FaCaretDown
                                             className={`ml-2 ${
                                                 openDropdown === `service-${data.id}` ? "rotate-180" : ""
                                             }`}
                                         />
                                     </button>
                                     {openDropdown === `service-${data.id}` && (
                                         <ul className="pl-4">
                                             {data.subMenu.map((sub) => (
                                                 <li key={sub.id}>
                                                     <Link
                                                         href={sub.link}
                                                         className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700"
                                                     >
                                                         {sub.name}
                                                     </Link>
                                                 </li>
                                             ))}
                                         </ul>
                                     )}
                                 </>
                             ) : (
                                 <Link
                                     href={data.link}
                                     className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700"
                                 >
                                     {data.name}
                                 </Link>
                             )}
                         </li>
                        ))}
                        {/* Mission Dropdown */}
                        <li className="relative">
                            <button onClick={() => toggleDropdown("mission")} className="flex items-center w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
                                Mission <FaCaretDown className={`ml-2 ${openDropdown === "mission" ? "rotate-180" : ""}`} />
                            </button>
                            {openDropdown === "mission" && (
                                <ul className="pl-4">
                                    {AboutList.map((data) => (
                                        <li key={data.id}>
                                            <a href={data.link} className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">{data.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        {/* Our Services Dropdown */}
                        <li className="relative">
                            <button onClick={() => toggleDropdown("services")} className="flex items-center w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
                                Our Services <FaCaretDown className={`ml-2 ${openDropdown === "services" ? "rotate-180" : ""}`} />
                            </button>
                            {openDropdown === "services" && (
                                <ul className="pl-4">
                                    {DropDownList.map((data) => (
                                        <li key={data.id}>
                                            <a href={data.link} className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">{data.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            )}

            {/* Desktop Navigation */}
            <div data-aos="zoom-in" className="hidden sm:flex justify-center">
                <ul className="flex items-center gap-4">
                    {menu.map((data) => (
                        <li key={data.id} className="relative group">
                            <Link href={data.link} className="inline-block px-4 hover:text-primary duration-200">
                                {data.name}
                            </Link>
                            {data.subMenu && (
                                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                                    <ul>
                                        {data.subMenu.map((sub) => (
                                            <li key={sub.id}>
                                                <a href={sub.link} className="inline-block rounded-md p-2 hover:bg-primary/20">{sub.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                    <li className="group relative cursor-pointer">
                        <Link href="#" className="flex items-center gap-[2px] py-2">
                            Mission <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                        </Link>
                        <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                            <ul>
                                {AboutList.map((data) => (
                                    <li key={data.id}>
                                        <Link href={data.link} className="inline-block rounded-md p-2 hover:bg-primary/20">{data.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li className="group relative cursor-pointer">
                        <Link href="#" className="flex items-center gap-[2px] py-2">
                            Our Services <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                        </Link>
                        <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                            <ul>
                                {DropDownList.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link} className="inline-block rounded-md p-2 hover:bg-primary/20">{data.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TopBar;
