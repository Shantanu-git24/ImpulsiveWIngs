'use client';
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function TestimonialSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const videoTestimonials = [
    { videoUrl: '/videos/video1.mp4', title: 'Lorem Ipsum', desc: 'Dummy Text' },
    { videoUrl: '/videos/video2.mp4', title: 'Lorem Ipsum', desc: 'Dummy Text' },
    { videoUrl: '/videos/video3.mp4', title: 'Lorem Ipsum', desc: 'Dummy Text' },
    { videoUrl: '/videos/video4.mp4', title: 'Lorem Ipsum', desc: 'Dummy Text' },
    { videoUrl: '/videos/video5.mp4', title: 'Lorem Ipsum', desc: 'Dummy Text' },
  ];

  useEffect(() => {
    setSwiperReady(true); // trigger after refs are ready
  }, []);

  return (
    <section className="py-20 bg-white text-center font-sans">
      {/* Title */}
      <h4 className="text-[#2e6369] font-montez text-xl mb-2" style={{ fontFamily: 'Montez, cursive',fontSize:'40px' }}>Testimonials</h4>
      <h2 className="text-3xl font-bold text-[#0e1f51] mb-10" style={{ fontFamily: 'Manrope, cursive',fontSize:'42px' }}>What Client Say About Us</h2>

      <div className="relative bg-[#102f2d] rounded-lg overflow-hidden max-w-7xl mx-auto px-4 py-12">
        {/* Background */}
        <div
          className="absolute inset-0 bg-bottom bg-no-repeat bg-cover opacity-70"
          style={{ backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg?uid=R172246069&ga=GA1.1.1957295445.1730801569&semt=ais_items_boosted&w=740')" }}
        />

        {/* Custom Buttons */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
          <button ref={prevRef} className="bg-white text-[#0e1f51] p-3 rounded-full shadow hover:bg-gray-200">
            <FaChevronLeft />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
          <button ref={nextRef} className="bg-white text-[#0e1f51] p-3 rounded-full shadow hover:bg-gray-200">
            <FaChevronRight />
          </button>
        </div>

        {/* Swiper - Delay render until refs ready */}
        {swiperReady && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
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
            className="relative z-10 pb-8"
          >
            {videoTestimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                  <video
                    src={item.videoUrl}
                    controls
                    className="w-full h-[320px] object-cover"
                  />
                  </div>
                  <div className="p-4 bg-transparent text-white">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
