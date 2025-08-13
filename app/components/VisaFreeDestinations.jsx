'use client';
import { useEffect, useState, useRef } from 'react';
import { usePopup } from './PopupContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function VisaFreeDestinations() {
  const [locations, setLocations] = useState([]);
  const { setShowPopup } = usePopup();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const fetchData = () => {
    fetch('https://application.impulsivewings.in/api/visa-free')
      .then((res) => res.json())
      .then((data) => {
        console.log('API Response:', data);
        setLocations(data?.data || []);
      })
      .catch((err) => console.error('Failed to fetch:', err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className=" w-full bg-white text-center relative py-14">

      <h2
        className="text-4xl font-bold mb-8"
        style={{ fontFamily: 'Manrope, cursive', fontSize: '42px' }}
      >
        Visa Free & On Arrival
      </h2>
      <div className="max-w-7xl mx-auto text-center relative px-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1} // 1 grid per view
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // Connect refs after swiper is initialized
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {Array.from({ length: Math.ceil(locations.length / 5) }, (_, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {locations
                  .slice(groupIndex * 5, groupIndex * 5 + 5)
                  .map((item, index) => {
                    const isTallCard = index === 1;
                    return (
                      <div
                        key={index}
                        className={`relative group rounded-xl overflow-hidden shadow-lg ${isTallCard ? 'row-span-2 h-[500px]' : 'h-[240px]'
                          }`}
                      >
                        <img
                          src={`https://application.impulsivewings.in/${item.image}`}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-opacity-40 flex flex-col bg-gradient-to-t from-black/70 to-transparent justify-end p-4 text-left">
                          <h3 className="text-white font-semibold text-lg mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-200 text-sm">
                            Starting at <strong>₹{item.price}</strong> <br />
                            Per person
                          </p>
                        </div>

                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            className="bg-white text-[#0094da] font-semibold w-40 py-2 rounded-md transition cursor-pointer"
                            onClick={() => setShowPopup(true)}
                          >
                            Plan a Trip
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div
          ref={prevRef}
          className="custom-swiper-button absolute  items-center left-[-20px] top-1/2 transform -translate-y-1/2  z-10 hidden md:flex"
        >
          <span
            className="bg-[#1CA8CB] flex items-center justify-center"
            style={{
              cursor: 'pointer',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              color: 'white',
              fontSize: '20px',
            }}
          >
            &lt;
          </span>
        </div>

        <div
          ref={nextRef}
          className="custom-swiper-button absolute items-center right-[-20px] top-1/2 transform -translate-y-1/2 z-10 hidden md:flex"
        >
          <span
            className="bg-[#1CA8CB] flex items-center justify-center"
            style={{
              cursor: 'pointer',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              color: 'white',
              fontSize: '20px',
            }}
          >
            &gt;
          </span>
        </div>
      </div>
    </section>
  );
}
