import React, { useEffect, useState } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import Banner from './Banner/Banner';
import TopBar from './Navbar/TopBar';
import Hero from './Hero/Hero';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Best from './Best/Best';
import Blog from './Blog/Blog';
import Subscribe from './Subscribe/Subscribe';
import Testimonial from './Testimonial/Testimonial';
import Footer from './Footer/Footer';
import NewNav from './Navbar/NewNav';
import NewBest from './Best/NewBest';
import Destination from '../Destination/Destination';
import Feedback from './Feedback/Feedback';
function Main() {
    const [orderPopUp,setOrderPopUp]=useState(false);
    const handlePopup=()=>{
        setOrderPopUp(!orderPopUp);
    }

    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:800,
            easing:"ease-in-sine",
            delay:100,
        });
        AOS.refresh();
    },[]);
  return (
    <>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
{/* <TopBar handlePopup={handlePopup}/> */}
<NewNav handlePopup={handlePopup}/>
{/* <Hero handlePopup={handlePopup}/> */}
<NewBest/>
<Feedback/>

{/* <Best/> */}
<Destination/>
<Blog handlePopup={handlePopup}/>
{/* <Banner/> */}
{/* <Subscribe/> */}
{/* <Testimonial/> */}
{/* <Footer/> */}
      </div>
    </>
  )
}

export default Main
