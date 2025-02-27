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

function About({title}) {
    console.log("Hero Props:", title);
  return (
    <div className="dark:bg-slate-800">

      <Hero title={title}/>
      <Section className="dark:bg-slate-800"/>
      <Service/>
<Team/>
<Subscribe className="dark:bg-slate-700"/>
<Faq/>
    </div>
  )
}
About.layout = (page) => <FrontLayout {...page.props}>{page}</FrontLayout>;
export default About
