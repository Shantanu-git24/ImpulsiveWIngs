'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

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
    <section className="py-10 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/images/Section.png')", // Replace this path
      }}>
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <h3 className="text-lg text-gray-500" style={{ fontFamily: 'Montez, cursive', fontSize: '40px' }}>Upcoming Event</h3>
        <h2 className=" font-bold text-cyan-900" style={{ fontFamily: 'Manrope, cursive', fontSize: '42px' }}>Virtual Holiday</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <Swiper
          spaceBetween={20}
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
          breakpoints={{
            320: { slidesPerView: 1 },   // 📱 mobile
            640: { slidesPerView: 2 },   // tablets
            1024: { slidesPerView: 3 },  // desktops
          }}
        >
          {blogs.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-2xl shadow-md flex flex-col items-center text-center p-4">
                <img
                  src={`https://application.impulsivewings.in/${item.image}` || '/images/fallback.jpg'}
                  alt={item.title}
                  className="rounded-xl w-full object-cover mb-4"
                />

                <div className="flex flex-col items-center justify-center flex-1">
                  <h3 className="font-semibold text-cyan-900 text-md mb-4">{item.title}</h3>
                  <Link href="https://virtualvacation.us/window">
                    <button className="bg-cyan-500 text-white px-4 py-2 rounded-full cursor-pointer text-sm font-medium hover:bg-cyan-600">
                      Take a Tour
                    </button>
                  </Link>
                </div>
              </div>


            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
       <div ref={prevRef} className="custom-swiper-button prev-btn">
          <span>&lt;</span>
        </div>
        <div ref={nextRef} className="custom-swiper-button next-btn">
          <span>&gt;</span>
        </div>
      </div>
      <style jsx>{`
        .custom-swiper-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          background-color: #0094da;
          color: #fff;
          border-radius: 50%;
          cursor: pointer;
        }
        .prev-btn {
          left: -25px;
        }
        .next-btn {
          right: -25px;
        }
        /* Adjust at 1024px specifically */
        @media (max-width: 1100px) {
          .prev-btn {
            left: 5px;
          }
          .next-btn {
            right: 5px;
          }
        }
        /* Hide on small screens if needed */
        @media (max-width: 767px) {
          .custom-swiper-button {
            display: none;
          }
        }
        .custom-swiper-button span {
          font-size: 16px;
          line-height: 1;
        }
      `}</style>
    </section>
  );
}
