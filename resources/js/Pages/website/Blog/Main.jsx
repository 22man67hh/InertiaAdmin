import FrontLayout from '@/Layouts/FrontLayout'
import React from 'react'
import Hero from '../About/Hero'

const Main = ({title}) => {
  return (
    <>
<Hero title={title}/>
    </>
  )
}
Main.layout=(page)=><FrontLayout {...page.props}>{page}</FrontLayout>
export default Main
