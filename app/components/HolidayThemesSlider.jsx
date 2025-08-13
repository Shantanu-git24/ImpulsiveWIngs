'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useEffect } from 'react';

const themes = [
  {
    title: 'Luxe Holidays',
    image: '/card-1.jpg',
    tags: ['Beach', 'Cultural', 'Island', 'Hill'],
  },
  {
    title: 'Next-Gen Adventures',
    image: '/card-2.jpg',
    tags: ['Adventure Awaits', 'Party Paths', 'Beach Vibes'],
  },
  {
    title: 'Honeymoon',
    image: '/card-3.jpg',
    tags: ['Beaches', 'Hill Vacays', 'Adventure', 'City Escapes'],
  },
   {
    title: 'Next-Gen Adventures',
    image: '/card-2.jpg',
    tags: ['Adventure Awaits', 'Party Paths', 'Beach Vibes'],
  },
    {
    title: 'Luxe Holidays',
    image: '/card-1.jpg',
    tags: ['Beach', 'Cultural', 'Island', 'Hill'],
  },
];

const HolidayThemesSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

//      const fetchThemes = async () => {
//       try {
//         const res = await fetch('https://application.impulsivewings.in/api/get-holidays-tags/');
//         const data = await res.json();
//         setThemes(data?.data || []);
//       } catch (error) {
//         console.error('Failed to fetch holiday themes:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchThemes();
//   }, []);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-20"
      
    >
      {/* Overlay box container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-opacity-60 bg-transparent bg-cover bg-center bg-no-repeat rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg?uid=R172246069&ga=GA1.1.1957295445.1730801569&semt=ais_items_boosted&w=740')"}}>
          
          {/* Left Text Section */}
          <div className="w-full md:w-1/5 text-white">
            <p className="text-xl font-light" style={{ fontFamily: 'Montez, cursive',fontSize:'40px' }}>Explore</p>
            <h2 className="text-4xl font-bold leading-tight">Holidays</h2>
            <p className="text-cyan-300 text-lg mt-1 mb-3">By Theme</p>
            <p className="text-sm text-gray-200">Pick From Our Specially Curated Packages</p>
          </div>

          {/* Right Slider Section */}
          <div className="w-full md:w-4/5 relative">
            <Swiper
              spaceBetween={24}
              slidesPerView={3}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              modules={[Navigation]}
              className="!px-1"
            >
              {themes.map((theme, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                    <img src={theme.image} alt={theme.title} className="w-full h-48 object-cover" />
                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{theme.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {theme.tags.map((tag, i) => (
                          <span key={i} className="bg-cyan-100 text-cyan-700 px-3 py-1 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-sm text-cyan-600 font-medium hover:underline">View More</button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Nav Buttons */}
            <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-10">
              <button
                ref={nextRef}
                className="w-10 h-10 rounded-full border-2  text-white hover:bg-cyan-500 hover:text-white transition"
              >
                ➤
              </button>
            </div>

            <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 z-10">
              <button
                ref={prevRef}
                className="w-10 h-10 rounded-full border-2   text-white hover:bg-cyan-500 hover:text-white transition"
              >
                ◀
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayThemesSlider;
