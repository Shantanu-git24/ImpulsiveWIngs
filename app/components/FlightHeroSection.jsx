'use client';

import { useState } from 'react';

export default function FlightHeroSection() {
    const [tripType, setTripType] = useState('round');

    return (
        <div
            className="relative bg-cover bg-center h-[550px] flex items-center justify-center px-4"
            style={{ backgroundImage: "url('images/travel-img-2-(1).jpg')" }} // Put your image in public/plane-bg.jpg
        >
            <div className="absolute inset-0 bg-opacity-30" />

            <div className="relative z-10 flex justify-between items-center w-full max-w-7xl mx-auto gap-8">

            </div>
        </div>
    
    );
}
