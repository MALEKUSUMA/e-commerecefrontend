import React, { useState } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// Assuming mens_kurta is an array of items you want to display in the carousel
// You need to import or define this array
// import { mens_kurta } from 'path_to_your_mens_kurta_data';

const HomeSectionCarosel = ({ data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const slideNext = () => {
        if (activeIndex < data.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    // Assuming data is an array of objects and HomeSectionCard expects props
    const items = data.slice(0, 10).map((item) => <HomeSectionCard key={item.id} product={item} />);

    return (
        <div className="border">
            <h2 className="text2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    // mouseTracking
                    items={items}
                    disableButtonsControls
                    // autoPlay
                    // autoPlayInterval={1000}
                    // infinite
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex < data.length - 1 && (
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: 'translateX(50%) rotate(90deg)',
                            bgcolor: 'white',
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                    </Button>
                )}
                {activeIndex !== 0 && (
                    <Button
                        onClick={slidePrev}
                        variant="contained"
                        className="z-50 bg-white"
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            transform: 'translateX(-50%) rotate(-90deg)',
                            bgcolor: 'white',
                        }}
                        aria-label="previous"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarosel;
