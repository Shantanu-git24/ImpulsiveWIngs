"use client";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import axios from "axios";

const dummyData = {
  domestic: [
    {
      title: "Delhi → Mumbai",
      description: "IndiGo | Non-stop | 2h",
      price: "3500",
      logo: "/images/indigo.png",
    },
    {
      title: "Bangalore → Chennai",
      description: "SpiceJet | 1 Stop | 3h",
      price: "2800",
      logo: "/images/spicejet.png",
    },
    {
      title: "Kolkata → Guwahati",
      description: "AirAsia | Direct | 1h 30m",
      price: "1900",
      logo: "/images/air-asia.png",
    },
     {
      title: "Bangalore → Chennai",
      description: "SpiceJet | 1 Stop | 3h",
      price: "2800",
      logo: "/images/spicejet.png",
    },
     {
      title: "Bangalore → Chennai",
      description: "SpiceJet | 1 Stop | 3h",
      price: "2800",
      logo: "/images/spicejet.png",
    },
  ],
  international: [
    {
      title: "Delhi → Dubai",
      description: "Emirates | Non-stop | 4h",
      price: "13500",
      logo: "/images/emirates.png",
    },
    {
      title: "Mumbai → Singapore",
      description: "Singapore Airlines | 5h 10m",
      price: "15000",
      logo: "/images/singapore.png",
    },
    {
      title: "Chennai → Colombo",
      description: "SriLankan Airlines | 3h 20m",
      price: "8700",
      logo: "/images/srilankan.png",
    },
  ],
};

const FlightTabs = () => {
  const [activeTab, setActiveTab] = useState("domestic");
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  const fetchFlights = async (type) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.example.com/flights?type=${type}`);
      const data = response.data?.flights;
      if (Array.isArray(data) && data.length > 0) {
        setFlights(data);
      } else {
        setFlights(dummyData[type]);
      }
    } catch (err) {
      setFlights(dummyData[type]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights(activeTab);
  }, [activeTab]);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Tabs */}
      <div className="flex space-x-4 mb-8 justify-center">
        {["domestic", "international"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === tab ? "bg-[#0094da] text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Navigation + Slider Row */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
          <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute -left-12 z-10 bg-white border rounded-full p-2 shadow-md hover:bg-[#0094da] hover:text-white transition"
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
        {/* <div className="w-12 flex justify-center">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 "
          >
            ⬅
          </button>
        </div> */}

        {/* Slider */}
        <div className="flex-1 overflow-hidden">
          {loading ? (
            <div className="text-center text-gray-600">Loading...</div>
          ) : (
            <Slider ref={sliderRef} {...sliderSettings}>
              {flights.map((flight, index) => (
                <div key={index} className="px-3">
                  <div className="bg-white border border-gray-200 rounded-xl shadow-md h-[290px] p-6 flex flex-col justify-between transition hover:shadow-lg">
                    <div>
                      <img
                        src={flight.logo}
                        alt="airline-logo"
                        className="h-15 w-auto mb-4"
                      />
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{flight.title}</h3>
                      <p className="text-gray-500 text-sm">{flight.description}</p>
                    </div>
                    <div className="mt-6">
                      <p className="text-blue-600 text-lg font-semibold">₹{flight.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>

        {/* Right Arrow */}
        <button
           onClick={() => sliderRef.current?.slickNext()}
          className="absolute -right-12 z-10 bg-white border rounded-full p-2 shadow-md hover:bg-[#0094da] hover:text-white transition"
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
        {/* <div className="w-10 flex justify-center">
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-md"
          >
            ➡
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default FlightTabs;
