"use client";
import { FaMapMarkerAlt, FaHiking, FaClock, FaUmbrellaBeach } from 'react-icons/fa';

const TourFilterBar = () => {
  return (
    <div className="bg-white p-4 rounded-full shadow-md flex flex-wrap md:flex-nowrap justify-between items-center space-y-4 md:space-y-0 md:space-x-6 max-w-5xl mx-auto">
      
      {/* Destination */}
      <div className="flex items-center space-x-2 border-r pr-4">
        <FaMapMarkerAlt className="text-sky-500" />
        <div>
          <div className="text-xs text-gray-400">Destination</div>
          <select className="bg-transparent outline-none text-sm font-medium">
            <option>Select Destination</option>
            <option>Paris</option>
            <option>Dubai</option>
          </select>
        </div>
      </div>

      {/* Type */}
      <div className="flex items-center space-x-2 border-r pr-4">
        <FaHiking className="text-sky-500" />
        <div>
          <div className="text-xs text-gray-400">Type</div>
          <select className="bg-transparent outline-none text-sm font-medium">
            <option>Adventure</option>
            <option>Relax</option>
          </select>
        </div>
      </div>

      {/* Duration */}
      <div className="flex items-center space-x-2 border-r pr-4">
        <FaClock className="text-sky-500" />
        <div>
          <div className="text-xs text-gray-400">Duration</div>
          <select className="bg-transparent outline-none text-sm font-medium">
            <option>Duration</option>
            <option>3 Days</option>
            <option>7 Days</option>
          </select>
        </div>
      </div>

      {/* Tour Category */}
      <div className="flex items-center space-x-2 border-r pr-4">
        <FaUmbrellaBeach className="text-sky-500" />
        <div>
          <div className="text-xs text-gray-400">Tour Category</div>
          <select className="bg-transparent outline-none text-sm font-medium">
            <option>Luxury</option>
            <option>Budget</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div>
        <button className="bg-white text-white px-5 py-2 rounded-full font-medium hover:bg-sky-600 transition">
          🔍 Search
        </button>
      </div>
    </div>
  );
};

export default TourFilterBar;
