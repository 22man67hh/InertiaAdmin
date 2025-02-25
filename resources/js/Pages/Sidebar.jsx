import React, { useState } from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { BiSolidNavigation } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { IoBook } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";

import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";
function Sidebar({ isOpen, toggleSidebar }) {
    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };
    return (


        <div className={`bg-gray-100 text-gray-900 h-screen px-4 fixed w-17 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>




        {/*<div className={`bg-gray-100 text-gray-900 h-screen px-4 fixed transition-all duration-300
                ${isOpen ? 'w-64' : 'w-16'} border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white`}>*/}

            {isOpen && (
                <button
                    className="absolute top-4 right-4 text-2xl text-gray-600 dark:text-white hover:text-red-500"
                    onClick={toggleSidebar}
                >
                    <IoMdClose />
                </button>
            )}
            <h1
                className={`text-xl font-bold hidden md:block mt-4 text-center italic ${isOpen ? "opacity-100 block" : "opacity-0 hidden"}`}
            >
                Admin Dashboard
            </h1>
            <ul className="flex flex-col mt-6 text-xl">
                <li className="flex items-center py-4 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                    <FaTachometerAlt />
                    {isOpen && <span className="">Dashboard</span>}
                    {/* <span className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>Dashboard</span> */}
                </li>

                <li>
                    <div
                        className="flex items-center py-4 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white"
                        onClick={() => toggleDropdown("company")}
                    >
                        <div className="flex items-center space-x-4">
                            <MdBusinessCenter />

                            {/* <span className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>Company</span> */}
                            {/* <span className='hidden md:inline'>Company</span> */}
                            {isOpen && <span>Company</span>}
                        </div>
                        {isOpen &&
                            (openDropdown === "company" ? (
                                <IoIosArrowUp />
                            ) : (
                                <IoIosArrowDown />
                            ))}
                    </div>
                    {openDropdown === "company" && (
                        <ul className="ml-6 text-lg text-gray-700 dark:text-white">
                            <li>
                                <div className="py-3 px-3 space-x-4 flex items-center hover:text-blue-500 cursor-pointer">
                                    <FaBuildingColumns />

                                    <span>Add Company</span>
                                </div>
                            </li>
                            <li>
                                <div className="py-3 px-3 space-x-4 flex items-center hover:text-blue-500 cursor-pointer">
                                    <FaBuildingColumns />

                                    <span>Add Company</span>
                                </div>
                            </li>
                            <li>
                                <div className="py-3 px-3 space-x-4 flex items-center hover:text-blue-500 cursor-pointer">
                                    <FaBuildingColumns />

                                    <span>Add Company</span>
                                </div>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="flex items-center py-4 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                    <BiSolidNavigation />
                    {isOpen && <span>Destination</span>}
                    {/* <span className={`${isOpen ?'block' :'hidden'}md:hidden`}>Destination</span> */}
                </li>
                <li>
                    <div
                        className="flex items-center py-4 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white"
                        onClick={() => toggleDropdown("service")}
                    >
                        <div className="flex items-center space-x-4">
                            <GrServices />
                            {isOpen && <span>Service</span>}

                            {/* <span className='hidden md:inline'>Service</span> */}
                        </div>
                        {isOpen &&
                            (openDropdown === "service" ? (
                                <IoIosArrowUp />
                            ) : (
                                <IoIosArrowDown />
                            ))}
                    </div>
                    {openDropdown === "service" && (
                        <ul className="ml-6 text-lg text-gray-700 dark:text-white">
                            <li>
                                <div className="py-3 px-3 space-x-4 flex items-center hover:text-blue-500 cursor-pointer">
                                    <FaBuildingColumns />

                                    <span>Add Company</span>
                                </div>
                            </li>
                            <li>
                                <div className="py-3 px-3 space-x-4 flex items-center hover:text-blue-500 cursor-pointer">
                                    <FaBuildingColumns />

                                    <span>Add Company</span>
                                </div>
                            </li>
                            <li>
                                <div className="py-3 px-3 space-x-4 flex items-center hover:text-blue-500 cursor-pointer">
                                    <FaBuildingColumns />

                                    <span>Add Company</span>
                                </div>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="flex items-center py-4 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                    <IoBook />
                    {/* <span className='hidden md:inline'>Course</span> */}
                    {isOpen && <span>Course</span>}
                </li>
                <li className="flex items-center py-4 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
                    <FaUser />
                    {isOpen && <span>User</span>}

                    {/* <span className='hidden md:inline'>User</span> */}
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
