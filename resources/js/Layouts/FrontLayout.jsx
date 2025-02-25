import Footer from '@/Pages/website/Footer/Footer'
import TopBar from '@/Pages/website/Navbar/TopBar'
import React from 'react'

function FrontLayout({children}) {
  return (
    <>
      <TopBar/>
      <main>
        {children}
        </main>

        <Footer/>
    </>
  )
}

export default FrontLayout
