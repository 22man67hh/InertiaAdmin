import Footer from '@/Pages/website/Footer/Footer'
import NewNav from '@/Pages/website/Navbar/NewNav'
import TopBar from '@/Pages/website/Navbar/TopBar'
import React from 'react'

function FrontLayout({children}) {
  return (
    <>
      {/* <TopBar/> */}
      <NewNav/>
      <main>
        {children}
        </main>

        <Footer/>
    </>
  )
}

export default FrontLayout
