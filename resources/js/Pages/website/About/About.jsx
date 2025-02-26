import React from 'react'
import Hero from './Hero'
import TopBar from '../Navbar/TopBar'
import Footer from '../Footer/Footer'
import Section from './Section'
import FrontLayout from '@/Layouts/FrontLayout'
import Team from './Team'
import Service from './Service'
import Faq from './Faq'
import Subscribe from '../Subscribe/Subscribe'

function About() {
  return (
    <div className="dark:bg-slate-800">

      <Hero/>
      <Section className="dark:bg-slate-800"/>
      <Service/>
<Team/>
<Subscribe className="dark:bg-slate-700"/>
<Faq/>
    </div>
  )
}
About.layout = page =><FrontLayout children={page}/>
export default About
