"use client";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";

export default function DestinationSlider() {
  const [items, setItems] = useState([]);
  const sliderRef = useRef(null);

  // 🧪 Dummy API Fetch
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=8");
        const data = await response.json();
        setItems(data.products || []);
      } catch (err) {
        console.error("Failed to fetch dummy data", err);
      }
    }

    fetchData();
  }, []);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Explore Destinations</h2>
        <p className="text-center text-gray-600 mb-8">
          Discover corporate getaway spots with perfect settings to build teams and create lasting memories.
        </p>

        {/* Slider + Navigation */}
        <div className="relative flex items-center">
          {/* Prev Button */}
          <div className="w-10 flex justify-center">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-3 rounded-full"
            >
              ‹
            </button>
          </div>

          {/* Slider */}
          <div className="flex-1">
            <Slider ref={sliderRef} {...settings}>
              {items.map((item) => (
                <div key={item.id} className="px-3">
                  <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Starting at ₹{item.price * 100}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Next Button */}
          <div className="w-10 flex justify-center">
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
