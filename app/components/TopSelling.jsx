'use client';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const TopSellingTours = () => {

    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('india');
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const router = useRouter();
    const [filteredTours, setFilteredTours] = useState([]);

    //   useEffect(() => {
    //     async function fetchTours() {
    //       try {
    //         const res = await fetch('https://application.impulsivewings.in/api/group-tours');
    //         const data = await res.json();
    //         setTours(Array.isArray(data) ? data : data.data || []);
    //       } catch (error) {
    //         console.error('Error fetching tours:', error);
    //       } finally {
    //         setLoading(false);
    //       }
    //     }

    //     fetchTours();
    //   }, []);


    useEffect(() => {
        fetch('https://application.impulsivewings.in/api/group-tours')
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data.data)) {
                    setTours(data.data);
                } else {
                    console.error('Expected array but got:', data);
                    setTours([]);
                }

            })
            .catch((err) => console.error('API fetch failed:', err));

    }, []);

    useEffect(() => {
        const filtered = tours.filter(tour => {
            const rawType = tour.destination_type;
            const type = rawType?.trim().toLowerCase();
            console.log(`🧭 ${tour.title} | destination_type: '${rawType}' | parsed: '${type}'`);

            return activeTab === 'india'
                ? type === 'india'
                : type === 'international';
        });

        console.log(`🔎 Active tab: ${activeTab}, Filtered tours count: ${filtered.length}`);
        setFilteredTours(filtered);
    }, [activeTab, tours]);


    //     // if (loading) {
    //     // return (
    //     //   <div className="text-center py-20">
    //     //     <p className="text-gray-500">Loading tours...</p>
    //     //   </div>
    //     // );
    //   }


    return (
        <section className="py-10 text-center">
            <h4 className="text-cyan-700 text-lg " style={{ fontFamily: 'Montez, cursive', fontSize: '40px' }}>Explore</h4>
            <h2 className="text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Manrope, cursive', fontSize: '42px' }}>Group Tours from India</h2>

            {/* Filter Buttons */}
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

            {/* Slider Container */}
            <div className="max-w-7xl mx-auto px-4 relative">
                {/* Custom Nav Buttons */}
                <div ref={prevRef} className="custom-swiper-button prev-btn">
                    <span>&lt;</span>
                </div>
                <div ref={nextRef} className="custom-swiper-button next-btn">
                    <span>&gt;</span>
                </div>
                <Swiper
                    key={activeTab}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    spaceBetween={20}
                    slidesPerView={1} // default for smallest screens
                    breakpoints={{
                        450: { slidesPerView: 1.3 },
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    loop
                >
                    {tours.map((tour, id) => (
                        <SwiperSlide key={id}>
                            <Link href={`/details/${tour.package.id}`} passHref>
                                <div className="rounded-xl overflow-hidden shadow-lg bg-white w-[300px] mx-auto h-[420px] flex flex-col justify-between">
                                    <div>
                                        <Image
                                            src={`https://application.impulsivewings.in/${tour.package.thumbnail}` || '/images/fallback.jpg'}
                                            alt={`Group Tour ${tour.title}`}
                                            width={300}
                                            height={200}
                                            className="object-cover w-full h-[200px]"
                                        />
                                        <div className="text-center">
                                            <h3 className="font-semibold text-[16px] mb-2 px-2 text-left pt-2 min-h-[32px] truncate whitespace-nowrap overflow-hidden">
                                                {tour.package.name}
                                            </h3>
                                            <div className="flex items-center px-2 py-2 gap-2 text-sm mb-1">
                                                <span className="font-bold text-lg text-gray-800">₹ {tour.package.price}</span>
                                                <span className="text-gray-500 text-xs bg-gray-200 rounded-full px-2 py-0.5">Per Person</span>
                                            </div>
                                            <div className="flex items-center px-2 gap-2 text-green-600 text-sm mb-2">
                                                <span>🟢 Stay</span>
                                                <span>🟢 Transfers</span>
                                                <span>🟢 {tour.features[2] || '5 Activities'}</span>
                                            </div>
                                            <div className="flex gap-2  px-2 py-2">
                                                <span className="text-gray-700 text-sm bg-gray-100 px-2 py-1 rounded">{tour.months[0]}</span>
                                                <span className="text-gray-700 text-sm bg-gray-100 px-2 py-1 rounded">{tour.months[1]}</span>
                                                <span className="text-gray-700 text-sm bg-gray-100 px-2 py-1 rounded">{tour.months[2]}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            onClick={() => router.push(`/details/${tour.package.id}`)}
                                            className="bg-blue-500 w-full text-white py-2 font-medium cursor-pointer"
                                        >
                                            View Itinerary →
                                        </button>
                                    </div>
                                </div>
                            </Link>

                            {/* PDF Button (placed outside the card) */}
                            {/* <div className="py-3 text-center">
                                <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-full">
                                    View PDF
                                </button>
                            </div> */}
                        </SwiperSlide>

                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                {/* <div className="swiper-button-prev text-blue-500 absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3">
          <i className="bi bi-chevron-left text-2xl"></i>
        </div>
        <div className="swiper-button-next text-blue-500 absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3">
          <i className="bi bi-chevron-right text-2xl"></i>
        </div> */}
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
};

export default TopSellingTours;
