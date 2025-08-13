'use client';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { usePopup } from './PopupContext';
import Image from 'next/image';
import PhonePopup from './PhonePopup';



export default function OceaniaSlider() {
  // const [locations, setLocations] = useState([]);
  const [allTours, setAllTours] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeTab, setActiveTab] = useState('india');
  const [filteredTours, setFilteredTours] = useState([]);
  const { setShowPopup } = usePopup();



  useEffect(() => {
    fetch('https://application.impulsivewings.in/api/wildlife-tours')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setAllTours(data.data);
        } else {
          console.error('Expected array but got:', data);
          setAllTours([]);
        }
      })
      .catch((err) => console.error('API fetch failed:', err));
  }, []);

  useEffect(() => {
    const filtered = allTours.filter(tour => {
      const rawType = tour.destination_type;
      const type = rawType?.trim().toLowerCase();
      console.log(`🧭 ${tour.title} | destination_type: '${rawType}' | parsed: '${type}'`);

      return activeTab === 'india'
        ? type === 'india'
        : type === 'international';
    });

    console.log(`🔎 Active tab: ${activeTab}, Filtered tours count: ${filtered.length}`);
    setFilteredTours(filtered);
  }, [activeTab, allTours]);

//   useEffect(() => {
//   fetch('https://application.impulsivewings.in/api/wildlife-tours')
//     .then((res) => res.json())
//     .then((data) => {
//       if (Array.isArray(data.data)) {
//         console.log('📦 All fetched tours:', data.data);
//         const india = data.data.filter(t => t.destination_type === 'India');
//         const intl = data.data.filter(t => t.destination_type === 'International');
//         console.log('🇮🇳 India tours count:', india.length);
//         console.log('🌍 International tours count:', intl.length);
//         setAllTours(data.data);
//       } else {
//         console.error('Expected array but got:', data);
//         setAllTours([]);
//       }
//     })
//     .catch((err) => console.error('API fetch failed:', err));
// }, []);




  // Predefined vertical offsets for curve (center lowest, sides higher)
  // const yOffsets = ['translate-y-8', 'translate-y-4', 'translate-y-0', 'translate-y-4', 'translate-y-8', 'translate-y-12'];

  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        {/* <h3 className="text-2xl  text-cyan-700" style={{ fontFamily: 'Montez, cursive',fontSize:'40px' }}>Lorem Ipsum</h3> */}
        <h2 className="text-4xl font-bold" style={{ fontFamily: 'Manrope, cursive', fontSize: '40px' }}>Wildlife Tours</h2>
      </div>

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

      <div className="relative max-w-7xl  mx-auto px-4">
        {/* Navigation Arrow */}
        {/* Custom Navigation Buttons */}
        {/* Custom Navigation Buttons */}
        <div
          ref={prevRef}
          className="custom-swiper-button absolute top-1/2 z-10 flex 
             left-[-20px] md:left-[-20px] lg:left-0"
        >
          <span
            className="bg-[#1CA8CB]"
            style={{ cursor: 'pointer', width: '25px', borderRadius: '20px', color: 'white',textAlign:'center' }}
          >
            &lt;
          </span>
        </div>

        <div
          ref={nextRef}
          className="custom-swiper-button absolute top-1/2 z-10 flex 
             right-[-20px] md:right-[-20px] lg:right-0"
        >
          <span
            className="bg-[#1CA8CB]"
            style={{ cursor: 'pointer', width: '25px', borderRadius: '20px', color: 'white',textAlign:'center' }}
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
          {filteredTours.map((location, id) => {
            // const offset = yOffsets[index % yOffsets.length];
            return (
              <SwiperSlide key={id}>
                <div className="relative group  rounded-xl overflow-hidden shadow-md bg-white cursor-pointer">
                  {/* Image block only takes part of height */}
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={`https://application.impulsivewings.in/${location.image}` || '/images/fallback.jpg'}
                      alt={`Weekend ${location.title}`}
                      fill
                      className="object-cover"
                    />
                    {/* Black overlay inside image container */}
                    <div className="absolute text-left bottom-0 w-full  bg-gradient-to-t from-black/70 to-transparent bg-opacity-60 text-white py-2 px-4">
                      <h4 className="font-semibold text-base pb-2">{location.title || 'Unknown Place'}</h4>
                      <p className="text-sm pb-2">
                        From ₹<strong>{location.price}</strong>/ - per Person
                      </p>

                    </div>

                  </div>

                  {/* Price below the image */}


                  {/* Hover button */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-[#0094da] font-semibold w-40 py-2 rounded-md  transition cursor-pointer" onClick={() => setShowPopup(true)}>
                      Plan a Trip
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>




      </div>
    </section>
  );
}
