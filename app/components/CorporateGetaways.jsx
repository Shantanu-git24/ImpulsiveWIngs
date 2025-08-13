'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef, useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

const slides = [
  {
    image: '/images/destination1.png',
    title: 'Lorem Ipsum Is Simply Dummy Text',
    text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever.',
  },
  {
    image: '/images/destination2.png',
    title: 'Lorem Ipsum Is Simply Dummy Text',
    text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever.',
  },
  {
    image: '/images/destination3.png',
    title: 'Lorem Ipsum Is Simply Dummy Text',
    text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever.',
  },
   {
    image: '/images/destination4.png',
    title: 'Lorem Ipsum Is Simply Dummy Text',
    text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever.',
  },
  {
    image: '/images/destination2.png',
    title: 'Lorem Ipsum Is Simply Dummy Text',
    text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever.',
  },
   {
    image: '/images/destination4.png',
    title: 'Lorem Ipsum Is Simply Dummy Text',
    text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever.',
  },
];

export default function CorporateGetaways() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    setIsSwiperReady(true); // Trigger binding after refs are ready
  }, []);

  return (
    <section className="py-14 px-4 max-w-7xl mx-auto relative">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
        Corporate Getaways
      </h2>
      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
        Escape the office and rejuvenate with inspiring retreats designed to recharge teams and fuel fresh ideas in scenic, peaceful locations.
      </p>

      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          ref={prevRef}
          className="absolute -left-12 z-10 bg-white border rounded-full p-2 shadow-md hover:bg-blue-500 hover:text-white transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Swiper Slider */}
        {isSwiperReady && (
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            modules={[Navigation]}
            className="w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <img
                    src={slide.image}
                    alt="destination"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-md font-semibold text-gray-800 mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-gray-600">{slide.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Right Arrow */}
        <button
          ref={nextRef}
          className="absolute -right-12 z-10 bg-white border rounded-full p-2 shadow-md hover:bg-blue-500 hover:text-white transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition">
          Schedule A Callback Now!
        </button>
      </div>
    </section>
  );
}
