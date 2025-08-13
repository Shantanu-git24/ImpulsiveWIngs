"use client";
import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";
import { Globe, Plane, Hotel, Briefcase } from "lucide-react";

export default function Header() {

  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState(1);
  const [destinations, setDestinations] = useState(['']);
  const [groupType, setGroupType] = useState('Family');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [addFlights, setAddFlights] = useState(false);
  const [addHotels, setAddHotels] = useState(true);
  const [hotelPref, setHotelPref] = useState('Room Configuration 2 Travelers, 1 Room');
  const [stayBudget, setStayBudget] = useState([500, 10000]);
  const [totalBudget, setTotalBudget] = useState([5000, 50000]);
  const [formData, setFormData] = useState({ phone: '', email: '', message: '' });


  const groupOptions = [
    { label: "Couple", value: "couple", img: "/images/couple.png" },
    { label: "Family", value: "family", img: "/images/family.png" },
    { label: "Friends", value: "friends", img: "/images/friends.png" },
    { label: "Solo", value: "solo", img: "/images/solo.png" },
  ];

  const handleAddDestination = () => setDestinations([...destinations, '']);
  const handleChange = (field, value) => setFormData({ ...formData, [field]: value });

  const isStepValid = () => {
    if (step === 1) return destinations.every((d) => d.trim() !== "");
    if (step === 2) return groupType && travelers.adults >= 1;
    if (step === 3) return stayBudget[0] && totalBudget[0];
    if (step === 4) return contact.mobile && contact.email;
    return true;
  };


  return (
    <header className="w-full bg-white py-3 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" >
            <Image src="/images/LOGO.png" alt="Logo" width={120} height={40} />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-700 items-center">
          <Link href="/packages" className="flex items-center text-[#0094DA] gap-1 hover:text-[#0094DA] cursor-pointer">
            <Globe className="w-5 h-5" /> <span className="text-[16px]">Packages</span>
          </Link>
          <Link href="/flights" className="flex items-center text-[#0094DA] gap-1 hover:text-[#0094DA] cursor-pointer">
            <Plane className="w-4 h-4" /> <span className="text-[16px]">Flights</span>
          </Link>
          <Link href="/hotels" className="flex items-center text-[#0094DA] gap-1 hover:text-[#0094DA] cursor-pointer">
            <Hotel className="w-4 h-4" /> <span className="text-[16px]">Hotels</span>
          </Link>
          <Link href="/corporate" className="flex items-center text-[#0094DA] gap-1 hover:text-[#0094DA] cursor-pointer">
            <Briefcase className="w-4 h-4" /> <span className="text-[16px]">Corporate Package</span>
          </Link>
          <Link href="/about" className="flex items-center text-[#0094DA] gap-1 hover:text-[#0094DA] cursor-pointer">
            <Briefcase className="w-4 h-4" /> <span className="text-[16px]">About Us</span>
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-2">
          <button className="bg-sky-400 hover:bg-sky-400 text-white px-4 py-1 rounded-full text-sm cursor-pointer" onClick={() => setShowPopup(true)}>
            Create a Trip
          </button>
          <Link href="https://wealthywings.in/pricing" target="_blank" >
            <button className="bg-sky-400 hover:bg-sky-500 text-white px-4 py-1 rounded-full text-sm cursor-pointer">
              Join club
            </button>
          </Link>
        </div>
      </div>


      {showPopup && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-8 relative max-h-screen overflow-y-auto">
            <button
              onClick={() => { setShowPopup(false); setStep(1); }}
              className="absolute top-3 right-4 text-3xl text-gray-500  hover:text-black w-10 h-10 cursor-pointer"
            >
              &times;
            </button>

            <h2 className="text-center text-lg font-semibold mb-4">Get your free travel plan now</h2>

            {/* Step Navigation */}
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} className="absolute left-4 top-4  text-2xl cursor-pointer">&larr;</button>
            )}

            {step === 1 && (
              <form className="space-y-4">
                <div>
                  <label className="block mb-3">What do you want to explore?</label>
                  <input type="text" placeholder="Departing from" className="w-full border rounded px-3 py-2 mb-3" />
                  {destinations.map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder={`Write Destination ${index + 1}`}
                      className="w-full border rounded px-3 py-2 mb-3"
                    />
                  ))}
                  <p onClick={handleAddDestination} className="text-[#0094da] text-sm mt-1 text-center cursor-pointer">
                    + Add Destination
                  </p>
                </div>

                <div>
                  <label className="block mb-3">When are you planning to travel?</label>
                  <div className="flex gap-2">
                    <div className="d-block">
                      <p className="mb-3 font-semibold">Start Date</p>
                      <input type="date" className="flex-1 border rounded px-3 py-2" />
                    </div>
                    <div className="d-block">
                    <p className="mb-3 font-semibold">End Date</p>
                    <input type="date" className="flex-1 border rounded px-3 py-2" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-3">Activity Preferences?</label>
                  <div className="grid grid-cols-2 gap-2 text-sm font-medium">
                    {['Nature & Spiritual', 'Adventure', 'Heritage & Art', 'Nightlife & Shopping', 'Hidden gems', 'Romantic'].map((activity) => (
                      <label key={activity}><input type="checkbox" className="mr-1" />{activity}</label>
                    ))}
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className=" bg-[#0094DA] text-white px-6 py-2 rounded-full"
                  >Continue</button>
                </div>
              </form>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Your group type?</label>

                  <div className="grid grid-cols-4 gap-4 text-center">
                    {[
                      { label: 'Couple', img: '/images/couple 1.png' },
                      { label: 'Family', img: '/images/Family.png' },
                      { label: 'Friends', img: '/images/friends 1.png' },
                      { label: 'Solo', img: '/images/solo-traveller 1.png' }
                    ].map((item) => (
                      <button
                        key={item.label}
                        onClick={() => setGroupType(item.label)}
                        className={`border rounded-lg p-2 flex flex-col items-center hover:shadow-md transition ${groupType === item.label ? 'border-[#0094da] bg-blue-50' : 'border-gray-300'
                          }`}
                      >
                        <img src={item.img} alt={item.label} className="w-10 h-10 mb-2" />
                        <span className="text-sm">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {[{ label: 'Adults', value: adults, set: setAdults }, { label: 'Children', value: children, set: setChildren }, { label: 'Infants', value: infants, set: setInfants }].map(({ label, value, set }) => (
                  <div key={label} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{label}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => set(Math.max(0, value - 1))} className="w-8 h-8 border rounded-full">-</button>
                      <span>{value}</span>
                      <button onClick={() => set(value + 1)} className="w-8 h-8 border rounded-full">+</button>
                    </div>
                  </div>
                ))}

                <div className="text-sm">
                  <label><input type="checkbox" checked={addFlights} onChange={() => setAddFlights(!addFlights)} className="mr-2" />Add flights to my itinerary?</label><br />
                  <label><input type="checkbox" checked={addHotels} onChange={() => setAddHotels(!addHotels)} className="mr-2" />Add hotels to my itinerary?</label>
                </div>
                <div className="text-center mt-4">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className=" bg-[#0094da] text-white py-2 px-6 rounded-full"
                  >Continue</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block mb-3">Hotel Preference</label>
                  <select className="w-full border px-3 py-2 rounded">
                    <option>{hotelPref}</option>
                    <option>Room Configuration 4 Travelers, 2 Rooms</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-3">Your Stay Budget (per night)</label>
                  <input type="range" min="500" max="10000" value={stayBudget[0]} onChange={e => setStayBudget([+e.target.value, stayBudget[1]])} className="w-full" />
                  <div className="flex justify-between text-sm">
                    <span>₹{stayBudget[0]}</span>
                    <span>₹{stayBudget[1]}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-3">Total Budget for All</label>
                  <input type="range" min="5000" max="50000" value={totalBudget[0]} onChange={e => setTotalBudget([+e.target.value, totalBudget[1]])} className="w-full" />
                  <div className="flex justify-between text-sm">
                    <span>₹{totalBudget[0]}</span>
                    <span>₹{totalBudget[1]}</span>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className=" bg-[#0094da] text-white px-6 py-2 rounded-full"
                  >Continue</button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                {/* Mobile Number */}
                <div className="relative">
                  <img
                    src="/images/Phone.png"
                    alt="Phone Icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  />
                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    value={formData.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                    className="w-full border pl-10 pr-3 py-2 rounded"
                  />
                </div>

                {/* Email Address */}
                <div className="relative">
                  <img
                    src="/images/Email 1.png"
                    alt="Email Icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  />
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    value={formData.email}
                    onChange={e => handleChange('email', e.target.value)}
                    className="w-full border pl-10 pr-3 py-2 rounded"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <img
                    src="/images/Message 1.png"
                    alt="Message Icon"
                    className="absolute left-3 top-3 w-5 h-5"
                  />
                  <textarea
                    placeholder="Send Message"
                    value={formData.message}
                    onChange={e => handleChange('message', e.target.value)}
                    className="w-full border pl-10 pr-3 py-2 rounded"
                    rows={3}
                  ></textarea>
                </div>

                {/* Terms and Submit */}
                <p className="text-xs text-center">
                  By signing up you are agreeing with our <a href="#" className="text-blue-500">T&Cs and privacy policy</a>
                </p>
                <div className="text-center mt-4">
                  <button type="submit" className="bg-[#0094da] text-white px-6 py-2 rounded-full">
                    Submit
                  </button>
                </div>
              </div>

            )}
          </div>
        </div>
      )}
    </header>
  );
}
