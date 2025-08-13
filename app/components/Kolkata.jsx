'use client';

import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import PhonePopup from './PhonePopup';

const Kolkata = () => {
    const [places, setPlaces] = useState([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isPopupOpen, setPopupOpen] = useState(false);

    useEffect(() => {
        fetch('https://application.impulsivewings.in/api/weekend-gateways')
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data.data)) {
                    setPlaces(data.data);
                } else {
                    console.error('Expected array but got:', data);
                    setPlaces([]); // fallback
                }
            })
            .catch((err) => console.error('API fetch failed:', err));
    }, []);


    return (
        <section className="py-14 bg-white text-center relative">
            <h3 className="text-cyan-700 text-lg mb-2 " style={{ fontFamily: 'Montez, cursive', fontSize: '40px' }}>Weekend Gateways</h3>
            <h2 className="text-3xl font-bold text-gray-800 mb-8" style={{ fontFamily: 'Manrope, cursive', fontSize: '48px' }}>From Kolkata</h2>

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* Custom Nav Buttons */}
                <div ref={prevRef} className="custom-nav-button  left-[-20px] absolute top-1/2 z-10 hidden md:flex"  >
                    <span className='bg-[#1CA8CB]  ' style={{ cursor: "pointer", width: "25px", borderRadius: "20px", color: "white" }}>&lt;</span>
                </div>
                <div ref={nextRef} className="custom-nav-button right-[-20px] absolute top-1/2 z-10 hidden md:flex">
                    <span className='bg-[#1CA8CB]  ' style={{ cursor: "pointer", width: "25px", borderRadius: "20px", color: "white" }}>&gt;</span>
                </div>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    loop={true}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {places.map((place, id) => (
                        <SwiperSlide key={id}>
                                                    <div className="relative group  rounded-xl overflow-hidden shadow-md bg-white cursor-pointer">
                                                        {/* Image block only takes part of height */}
                                                        <div className="relative h-[300px] w-full">
                                                            <Image
                                                                src={`https://application.impulsivewings.in/${place.image}` || '/images/fallback.jpg'}
                                                                alt={`Weekend ${place.title}`}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                            {/* Black overlay inside image container */}
                                                            <div className="absolute text-left bottom-0 w-full  bg-gradient-to-t from-black/70 to-transparent bg-opacity-60 text-white py-2 px-4">
                                                                <h4 className="font-semibold text-base pb-2">{place.title || 'Unknown Place'}</h4>
                                                                <p className="text-sm pb-2">
                                                                    From ₹<strong>{place.price}</strong>/ - per Person
                                                                </p>
                                                               
                                                            </div>
                                                            
                                                        </div>
                        
                                                        {/* Price below the image */}
                        
                        
                                                        {/* Hover button */}
                                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                            <button className="bg-white text-[#0094da] font-semibold w-full py-2 rounded-md  transition cursor-pointer" onClick={() => setShowPopup(true)}>
                                                                Plan a Trip
                                                            </button>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>


                    ))}
                </Swiper>
                 <PhonePopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
            </div>
        </section>
    );
};

export default Kolkata;
