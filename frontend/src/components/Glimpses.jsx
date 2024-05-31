import React, { useEffect, useRef, useState } from 'react';
import sl1 from '../assets/sl1.jpg';
import sl2 from '../assets/sl2.jpg';
import sl3 from '../assets/sl3.jpg';
import sl4 from '../assets/sl4.jpg';
import sl5 from '../assets/sl5.jpg';
import sl6 from '../assets/sl6.jpg';
import sl7 from '../assets/sl7.jpg';

const images = [
    sl1,
    sl2,
    sl3,
    sl4,
    sl5,
    sl6,
    sl7,
];

const Glimpses = () => {
    const carouselRef = useRef(null);
    const [speed, setSpeed] = useState(30);

    useEffect(() => {
        const updateSpeed = () => {
            if (window.matchMedia('(max-width: 768px)').matches) {
                setSpeed(10); // Speed for mobile
            } else {
                setSpeed(30); // Speed for desktop
            }
        };

        window.addEventListener('resize', updateSpeed);
        updateSpeed();

        const carousel = carouselRef.current;

        const startAnimation = () => {
            carousel.style.animation = `scroll ${speed}s linear infinite`;
        };

        startAnimation();

        const handleMouseEnter = () => {
            carousel.style.animationPlayState = 'paused';
        };

        const handleMouseLeave = () => {
            carousel.style.animationPlayState = 'running';
        };

        carousel.addEventListener('mouseenter', handleMouseEnter);
        carousel.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', updateSpeed);
            carousel.removeEventListener('mouseenter', handleMouseEnter);
            carousel.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [speed]);

    return (
        <>
       <div className="w-full flex mt-10 flex-col mb-2 items-center justify-center">
					<span className="text-4xl font-medium text-[#f9c950]">
						Glimpses
					</span>
					
				</div>
            <div className='my-10 px-4 md:px-10'>
                <div className="relative w-full h-64 overflow-hidden">
                    <div
                        ref={carouselRef}
                        className="carousel flex items-center"
                    >
                        {images.concat(images).map((src, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-64 h-48 md:h-48 px-2"
                            >
                                <img
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full rounded-xl h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
                </div>
            </div>
        </>
    );
};

export default Glimpses;
