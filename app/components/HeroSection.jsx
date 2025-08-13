'use client';

import { useState } from 'react';

export default function FlightSearchHero() {
  const [tripType, setTripType] = useState('round');

  return (
    <div
      className="relative bg-cover bg-center h-[650px] flex items-center justify-center px-4"
      style={{ backgroundImage: "url('images/Group 686.jpg')" }} // Put your image in public/plane-bg.jpg
    >
      <div className="absolute inset-0 bg-opacity-30" />

      <div className="relative z-10 flex justify-between items-center w-full max-w-7xl mx-auto gap-8">
        {/* Left Side Text */}
        <div className="text-white align-middle pt-10">
          <h1 className=" text-4xl md:text-5xl font-bold mb-4">The Sky is Waiting for You</h1>
          <p className="text-lg max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-[420px] ml-auto backdrop-blur-md bg-white/60 rounded-3xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold mb-6">Search Flights</h2>

          {/* Trip Type */}
          <div className="flex space-x-4 mb-6">
            {['round', 'one', 'multi'].map((type) => (
              <label key={type} className="flex items-center space-x-1 text-sm capitalize">
                <input
                  type="radio"
                  name="tripType"
                  value={type}
                  checked={tripType === type}
                  onChange={() => setTripType(type)}
                />
                <span>{type === 'round' ? 'Round Trip' : type === 'one' ? 'One Way' : 'Multi-City'}</span>
              </label>
            ))}
          </div>

          {/* From / To */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-[10px] font-semibold mb-2">From*</label>
              <input type="text" placeholder="Leaving From" className="w-full border text-sm bg-white border-[#0094DA] rounded px-3 py-2"
    />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-2">To*</label>
              <input type="text" placeholder="Going To" className="w-full border text-sm bg-white border-[#0094DA] rounded px-3 py-2"
    />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold mb-2">Departure Date*</label>
              <input type="date" className="w-full text-sm border bg-white border-[#0094DA] rounded px-3 py-2"
    />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-2">Return Date*</label>
              <input type="date" className="border text-sm  border-[#0094DA] bg-white rounded px-3 py-2 w-full" disabled={tripType !== 'round'} />
            </div>
          </div>

          {/* Passenger Counts */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-[11px] font-semibold mb-2">Adults (12+ Yrs)</label>
              <select className="w-full text-sm border bg-white border-[#0094DA] rounded px-2 py-2">
                {[...Array(10)].map((_, i) => (
                  <option key={i}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-semibold mb-2">Children (2–12 Yrs)</label>
              <select className="w-full text-sm border bg-white border-[#0094DA] rounded px-2 py-2">
                {[...Array(10)].map((_, i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-semibold mb-2">Infants (0–2 Yrs)</label>
              <select className="w-full text-sm border bg-white border-[#0094DA] rounded px-2 py-2">
                {[...Array(10)].map((_, i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Class & Phone */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold mb-2">Class*</label>
              <select className="w-full border text-sm bg-white border-[#0094DA] rounded px-3 py-2">
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-2">Contact Number*</label>
              <input type="tel" placeholder="Enter Phone No." className="w-full text-sm border bg-white border-[#0094DA] rounded px-3 py-2"
    />
            </div>
          </div>

          <p className="text-xs text-gray-600 italic mb-4">
            * Please select exact number of passengers to view the best prices
          </p>
          <div className="flex justify-center mt-6">
            <button className=" bg-blue-500 text-white px-16 py-2 rounded-3xl  hover:bg-blue-600 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
