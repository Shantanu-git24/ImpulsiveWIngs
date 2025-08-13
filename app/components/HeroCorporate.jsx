"use client";
import Image from "next/image";
import { Calendar, Clock, ChevronDown, Globe } from "lucide-react";

export default function HeroCorporate() {
  return (
    <section
      className="relative bg-cover bg-center py-20 px-4 md:px-16"
      style={{ backgroundImage: "url('images/Group 687.png')" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Lorem Ipsum is text</h1>
          <p className="text-lg mb-6">Give your team stories they will always treasure!</p>
          <ul className="space-y-3 text-base">
            <li className="flex items-center gap-2"><Calendar className="w-7 h-7" /> Unique Travel & Event Plans</li>
            <li className="flex items-center gap-2"><Clock className="w-7 h-7"/> End-to-End Support</li>
            <li className="flex items-center gap-2"><Globe className="w-7 h-7"/>Trusted Partners</li>
          </ul>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full">
            Schedule A Callback
          </button>
        </div>

        {/* Right Form */}
        {/* <div className="bg-white bg-opacity-90 rounded-xl p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Schedule a callback now!</h2>
          <p className="text-sm text-gray-600 mb-4 font-medium">Your Details*</p>

          <div className="space-y-3">
            <input type="text" placeholder="Enter Full Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Enter Your Email ID" className="w-full p-2 border rounded" />
            <div className="flex gap-2">
              <input type="text" placeholder="Phone Number" className="w-1/2 p-2 border rounded" />
              <input type="text" placeholder="Company" className="w-1/2 p-2 border rounded" />
            </div>

            <div>
              <label className="text-sm mb-1 block">What are you looking for?</label>
              <select className="w-full p-2 border rounded">
                <option>Others</option>
                <option>Corporate Event</option>
                <option>Team Retreat</option>
              </select>
            </div>

            <div>
              <label className="text-sm mb-1 block">When should we call you?</label>
              <div className="flex gap-2">
                <input type="date" className="w-1/2 p-2 border rounded" />
                <select className="w-1/2 p-2 border rounded">
                  <option>10:00 AM</option>
                  <option>2:00 PM</option>
                  <option>5:00 PM</option>
                </select>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 w-full rounded-full">
              Schedule A Callback
            </button>
          </div>
        </div> */}
        <div className="w-full md:w-[420px] ml-auto backdrop-blur-md bg-white/60 rounded-3xl p-6 shadow-xl">
          <h2 className="text-xl font-bold mb-4">Schedule a callback now!</h2>
          <p className="text-sm text-gray-600 mb-4 font-medium">Your Details*</p>
          {/* From / To */}
          <div className="space-y-3 mb-4">
            <input type="text" placeholder="Enter Full Name" className="w-full border text-sm bg-white border-[#0094DA] rounded px-3 py-2" />
          </div>
          <div className="space-y-3 mb-4">
            <input type="email" placeholder="Enter Your Email ID" className="w-full border text-sm bg-white border-[#0094DA] rounded px-3 py-2"
            />
          </div>

          {/* Class & Phone */}
          <div className="flex gap-2 mb-4 ">
            <div>
              <input type="text" placeholder="Phone Number" className="w-full border text-sm bg-white border-[#0094DA] rounded px-3 py-2" />
            </div>
            <div>
              <input type="text" placeholder="Company" className="w-full text-sm border bg-white border-[#0094DA] rounded px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="text-sm mb-2 block">What are you looking for?</label>
            <select className="w-full text-sm border bg-white border-[#0094DA] rounded px-2 py-2 mb-4">
              <option>Others</option>
              <option>Corporate Event</option>
              <option>Team Retreat</option>
            </select>
          </div>

          <div>
            <label className="text-sm mb-2 block">When should we call you?</label>
            <div className="flex gap-2">
              <input type="date" className="w-1/2 p-2 text-sm border bg-white border-[#0094DA] rounded" />
              <select className="w-1/2 p-2 text-sm border bg-white border-[#0094DA] rounded">
                <option>10:00 AM</option>
                <option>2:00 PM</option>
                <option>5:00 PM</option>
              </select>
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
    </section >
  );
}
