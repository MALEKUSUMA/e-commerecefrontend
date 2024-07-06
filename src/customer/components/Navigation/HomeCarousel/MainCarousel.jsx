// import React from 'react'
// import { MainCarouselData } from './MainCarouselData'
// import AliceCarousel from 'react-alice-carousel'
// import 'react-alice-carousel/lib/alice-carousel.css';
// const MainCarousel = () => {
//     const items = MainCarouselData.map((item)=><img  className='cursor-pointer' role='preasentatoon' src={item.image} alt=""/>)
//   return (
//     <AliceCarousel
//     mouseTracking
//         items={items}

// />
//   )
// }

// export default MainCarousel




// MainCarousel.jsx
import React from 'react';
import { MainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './App.css'; // Import your custom CSS file

const MainCarousel = () => {
    const items = MainCarouselData.map((item, index) => (
        <img
            key={index}
            className='carousel-image cursor-pointer z-10' // Apply your CSS classes
            role='presentation'
            src={item.image}
            style={item.style} // Apply the style object if needed
            alt={`Slide ${index + 1}`}
        />
    ));

    return (
        <div className="carousel-container"> {/* Ensure the container takes up full screen width */}
            <AliceCarousel
                mouseTracking
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
            />
        </div>
    );
}

export default MainCarousel;

