'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function UpcomingSlider() {
  const [blogs, setBlogs] = useState([]);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
    fetch('https://application.impulsivewings.in/api/events')
      .then(res => res.json())
      .then(data => {
        setBlogs(data.data || []);
      });
  }, []);

  return (
    <section  className="py-16 bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: "url('/images/Section.png')", // Replace this path
  }}>
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h3 className="text-lg text-gray-500" style={{ fontFamily: 'Montez, cursive' ,fontSize:'40px'}}>Upcoming Event</h3>
        <h2 className="text-4xl font-bold text-cyan-900">Virtual Holiday</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <Swiper
          spaceBetween={30}
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
        >
          {blogs.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-2xl  text-left shadow-md">
                <img
                   src={`https://application.impulsivewings.in/${item.image}` || '/images/fallback.jpg'}
                  alt={item.title}
                  className="rounded-xl h-full w-full object-cover mb-4"
                />
                </div>
                <div className="flex items-center text-sm text-gray-500 gap-4 my-4">
                  <span>📅 {item.date}</span>
                  {/* <span>🕒 {item.created_at}</span> */}
                </div>
                <h3 className="font-semibold text-cyan-900 text-md mb-4">{item.title}</h3>
                <button className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-600">
                  Coming Soon
                </button>
              
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
          <button
            ref={nextRef}
            className="w-10 h-10 rounded-full bg-cyan-600 text-white shadow hover:bg-cyan-700"
          >
            ➤
          </button>
        </div>
      </div>
    </section>
  );
}
