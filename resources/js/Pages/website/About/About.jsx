import React from 'react'
import Hero from './Hero'
import TopBar from '../Navbar/TopBar'
import Footer from '../Footer/Footer'
import Section from './Section'
import FrontLayout from '@/Layouts/FrontLayout'

function About() {
  return (
    <div>

      <Hero/>
      <Section/>

    </div>
  )
}
About.layout = page =><FrontLayout children={page}/>
export default About
