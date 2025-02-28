import React from 'react'
import Hero from '../About/Hero'
import FrontLayout from '@/Layouts/FrontLayout'
import Photo from './Photo'

const Gallery = ({title}) => {
  return (
    <>
      <Hero title={title}/>
     <Photo/>
    </>
  )
}

Gallery.layout=(page)=><FrontLayout {...page.props}>{page}</FrontLayout>
export default Gallery
