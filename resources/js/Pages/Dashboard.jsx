import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Rightboard from './Rightboard'
import ThemeContextProvider from './Context/ThemeContextProvider'

function Dashboard() {
    const [sideBarOpen,setSidebarOpen]=useState(false)
    const toggleSidebar=()=>{
        setSidebarOpen(!sideBarOpen)
    } 
    return (
        <ThemeContextProvider>
            <div className="flex">
                <div className={`${sideBarOpen ? 'block' : 'hidden'} transition-all duration-300`}>
                    <Sidebar isOpen={sideBarOpen} toggleSidebar={toggleSidebar} />
                </div>

                <div
                    className={`grow ${sideBarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white`}>
                    <Navbar toggleSidebar={toggleSidebar} />
                    <Rightboard />
                </div>
            </div>
        </ThemeContextProvider>
    );
}


export default Dashboard



