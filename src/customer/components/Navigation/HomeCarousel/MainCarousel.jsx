import React from 'react'
import { MainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
const MainCarousel = () => {
    const items = MainCarouselData.map((item)=><img  className='cursor-pointer' role='preasentatoon' src={item.image} alt=""/>)
  return (
    <AliceCarousel
    mouseTracking
        items={items}
        
/>
  )
}

export default MainCarousel







