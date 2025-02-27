import React from 'react'
import Hero from '../About/Hero'
import FrontLayout from '@/Layouts/FrontLayout'

const News = ({title}) => {
  return (
    <>
     <Hero title={title}/>
    </>
  )
}
News.layout=(page)=><FrontLayout {...page.props}>{page}</FrontLayout>
export default News
