import React, { useContext, useState } from 'react';
import { FaMoon, FaSun, FaUser } from 'react-icons/fa';
import { ThemeContext } from './Context/ThemeContextProvider';
import { GiToggles } from "react-icons/gi";
const Navbar = ({toggleSidebar}) => {
    const [openAdmin,setOpenAdmin]=useState(null);
    const toggleAdmin=(menu)=>{
        setOpenAdmin(openAdmin==menu ? null :menu);
    }
    // const toggleSidebar=()=>{
    //     setSidebarOpen(!sideBarOpen)
    // }
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className='bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
              <button  className="text-3xl text-gray-900 dark:text-white hover:text-blue-600 transition-colors pl-4 flex " onClick={toggleSidebar} aria-label='Toggle Sidebar'>
                <GiToggles/>
                </button>
            <h1 className="text-xl font-bold"> Admin Dashboard</h1>

            <div className="flex items-center space-x-6">
                <button
                    className='text-2xl text-gray-900 dark:text-white'
                    onClick={toggleTheme}
                    aria-label="Toggle Theme"
                >
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                </button>
<div className="relative">
                <button
                    className='text-2xl text-gray-900 hover:text-blue-600 treansition-colors dark:text-white'
                    aria-label="User Profile"
                onClick={()=>toggleAdmin('admin')}>
                    <FaUser />

                </button>
                {openAdmin ==='admin' &&(
                    <div className='absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700'>
                        <ul className=' py-2'>
                            <li className='px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition'>Logout</li>
                            <li className='px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition'>setting</li>
                        </ul>
                        </div>
                    )}
                    </div>
            </div>
        </div>
    );
};

export default Navbar;
