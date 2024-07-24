// src/components/CarAdvertisement.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import carImage from './assets/car.png'; 
import roadImage from './assets/road1.png';

const CarAdvertisement = () => {
  const carRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      gsap.to(carRef.current, {
        x: scrollY * 2, // Adjust this value to control the speed of the car's movement
        ease: 'power2.out',
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-800">
      <div className="absolute top-0 left-0 w-full bg-cover  md:bg-contain bg-center h-[1020px] lg:h-[880px]" style={{ backgroundImage: `url(${roadImage})` }}>
        <div className="flex mt-[100px] justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Ford SUV</h1>
            <p className="text-lg mb-8">Boost your driving experience with our latest models</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <img ref={carRef} src={carImage} alt="Car" className="lg:w-1/2 w-[330px] h-[550px] lg:h-[220px] object-contain" />
      </div>
    </div>
  );
};

export default CarAdvertisement;
