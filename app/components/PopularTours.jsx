'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PopularTours() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await fetch('https://application.impulsivewings.in/api/popular-tours');
        const data = await res.json();
        setTours(Array.isArray(data) ? data : data.data || []);
      } catch (error) {
        console.error('Error fetching tours:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTours();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Loading tours...</p>
      </div>
    );
  }

  return (
    <section className="bg-[#f0f8ff] py-10 px-4">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h4
          className="text-cyan-700 text-lg mb-2"
          style={{ fontFamily: 'Montez, cursive', fontSize: '40px' }}
        >
          Best Place For You
        </h4>
        <h2
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: 'Manrope, cursive', fontSize: '42px' }}
        >
          Most Popular Tour
        </h2>
        {/* <p className="text-gray-500 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p> */}
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
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="max-w-7xl mx-auto"
        >
          {tours.map((tour, id) => (
            <SwiperSlide key={tour.id}>
              <Link href={`/details/${tour.id}`} passHref>
                <div className="bg-white rounded-xl shadow-md overflow-hidden relative h-[380px] flex flex-col justify-between">
                  {/* Image */}
                  <div className="relative h-48 w-full">
                    <Image
                      src={`https://application.impulsivewings.in/${tour.package.thumbnail}`}
                      alt={`Popular ${tour.package.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col justify-between flex-grow space-y-2">

                    {/* Title */}
                    <h3
                      className="text-lg font-semibold h-[35px] overflow-hidden text-ellipsis line-clamp-2"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {tour.package.name}
                    </h3>

                    {/* Rating */}
                    <p className="text-yellow-500 text-sm">
                      ★★★★☆ <span className="text-gray-500"> Rating</span>
                    </p>

                    {/* Price */}
                    <p className="text-xl font-bold text-gray-800">
                      ₹{tour.package.price}{' '}
                      <span className="text-sm text-gray-500">/Person</span>
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center items-center  pt-2">
                      {/* <button
                        className="bg-white text-[#0094da] border border-[#0094da] cursor-pointer text-[10px] font-medium py-2 px-4 rounded-full hover:text-white hover:bg-[#0094da] transition"
                      >
                        View PDF
                      </button> */}
                      <button
                        onClick={() => router.push(`/details/${tour.id}`)}
                        className="bg-[#0094da] text-white text-sm font-medium py-2 px-4 rounded-full transition cursor-pointer"
                      >
                        View Itinerary
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
}
