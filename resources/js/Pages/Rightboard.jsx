import React from 'react'
import Card from './Card'
import { FaBox, FaCog, FaUser,FaUsers } from "react-icons/fa";
function Rightboard() {
  return (
    <div className='grow p-8'>
        <h2 className='text-2xl mb-4'>Dashboard</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
        <Card icon={<FaUser/>} title="Consultancy" value="1"/>
<Card icon={<FaBox/>} title="Users" value="120"/>
<Card icon={<FaUsers/>} title="Users" value="30"/>
<Card icon={<FaCog/>} title="Projects" value="11"/>
    </div>
    </div>
  )
}

export default Rightboard


