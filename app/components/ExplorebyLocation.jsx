'use client';

import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { usePopup } from './PopupContext';

const ExploreByLocation = () => {
  const [locations, setLocations] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { setShowPopup } = usePopup();
  const [filteredTours, setFilteredTours] = useState([]);
  const [activeTab, setActiveTab] = useState('india');

  useEffect(() => {
    fetch('https://application.impulsivewings.in/api/explore-by-locations')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setLocations(data.data);
        } else {
          console.error('Expected array but got:', data);
          setLocations([]);
        }
      })
      .catch((err) => console.error('API fetch failed:', err));
  }, []);

  useEffect(() => {
    const filtered = locations.filter(tour => {
      const rawType = tour.destination_type;
      const type = rawType?.trim().toLowerCase();
      console.log(`🧭 ${tour.title} | destination_type: '${rawType}' | parsed: '${type}'`);

      return activeTab === 'india'
        ? type === 'india'
        : type === 'international';
    });

    console.log(`🔎 Active tab: ${activeTab}, Filtered tours count: ${filtered.length}`);
    setFilteredTours(filtered);
  }, [activeTab, locations]);





  return (
    <section className="pb-10 bg-white text-center relative">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6" style={{ fontFamily: 'Manrope, cursive', fontSize: '42px' }}>
        Explore By Location
      </h2>

      <div className="mb-6 flex justify-center gap-4">
        <button
          className={`px-4 py-2 rounded-full font-medium ${activeTab === 'india' ? 'bg-[#0094da] text-white' : 'bg-gray-200 text-gray-700 cursor-pointer'
            }`}
          onClick={() => setActiveTab('india')}
        >
          India
        </button>
        <button
          className={`px-4 py-2 rounded-full font-medium ${activeTab === 'international' ? 'bg-[#0094da] text-white' : 'bg-gray-200 text-gray-700 cursor-pointer'
            }`}
          onClick={() => setActiveTab('international')}
        >
          International
        </button>
      </div>



      <div className="max-w-7xl mx-auto relative px-4">
        {/* Custom Navigation Buttons */}
        <div
          ref={prevRef}
          className="custom-swiper-button left-[-20px] absolute top-1/2 z-10 hidden md:flex"
        >
          <span
            className="bg-[#0094da]"
            style={{
              cursor: 'pointer',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              color: 'white',
              textAlign: 'center',
              lineHeight: '30px',
            }}
          >
            &lt;
          </span>
        </div>
        <div
          ref={nextRef}
          className="custom-swiper-button right-[-20px] absolute top-1/2 z-10 hidden md:flex"
        >
          <span
            className="bg-[#0094da]"
            style={{
              cursor: 'pointer',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              color: 'white',
              textAlign: 'center',
              lineHeight: '30px',
            }}
          >
            &gt;
          </span>
        </div>



        <Swiper
          key={activeTab}
          slidesPerView={5}
          spaceBetween={15}
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
            1024: { slidesPerView: 5 },
          }}
        >
          {filteredTours.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer">
                <Image
                  src={`https://application.impulsivewings.in/${item.image}`}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
                />

                {/* Text content */}
                <div className="absolute bottom-0 w-full text-left bg-gradient-to-t from-black/70 to-transparent text-white px-4 py-3">
                  <h4 className="font-bold text-base">{item.title}</h4>
                  <p className="text-sm">
                    From ₹<strong>{item.price}</strong>/ - per Person
                  </p>
                  <p>{item.packages} Packages</p>
                </div>

                {/* Hover button */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="bg-white text-[#0094da] font-semibold w-30 py-2 rounded-md transition cursor-pointer"
                    onClick={() => setShowPopup(true)}
                  >
                    Plan a Trip
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ExploreByLocation;
