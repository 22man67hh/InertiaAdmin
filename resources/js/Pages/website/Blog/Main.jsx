import FrontLayout from '@/Layouts/FrontLayout'
import React from 'react'
import Hero from '../About/Hero'
import Content from './Content'

const Main = ({title}) => {
  return (
    <>
<Hero title={title}/>
<Content/>
    </>
  )
}
Main.layout=(page)=><FrontLayout {...page.props}>{page}</FrontLayout>
export default Main
