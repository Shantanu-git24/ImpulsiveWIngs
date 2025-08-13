import { usePopup } from './PopupContext';
import { useState } from 'react';

export default function PopupForm() {
    const { showPopup, setShowPopup } = usePopup();
    const [step, setStep] = useState(1);
    const [departingFrom, setDepartingFrom] = useState('');
    const [destinations, setDestinations] = useState(['']);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [activityPrefs, setActivityPrefs] = useState([]);
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

    const handleAddDestination = () => {
        setDestinations([...destinations, '']);
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toggleActivity = (activity) => {
        setActivityPrefs(prev =>
            prev.includes(activity) ? prev.filter(a => a !== activity) : [...prev, activity]
        );
    };

    const handleDestinationChange = (index, value) => {
        const updated = [...destinations];
        updated[index] = value;
        setDestinations(updated);
    };

    const handleSubmit = async () => {
        const body = {
            departing_from: departingFrom,
            destinations: destinations.filter(Boolean),
            start_date: startDate,
            end_date: endDate,
            activity_preferences: activityPrefs,
            group_type: groupType,
            adults,
            children,
            infants,
            add_flights: addFlights,
            add_hotels: addHotels,
            hotel_preference: hotelPref,
            stay_budget_min: stayBudget[0],
            stay_budget_max: stayBudget[1],
            total_budget_min: totalBudget[0],
            total_budget_max: totalBudget[1],
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
        };

        try {
            const response = await fetch('https://application.impulsivewings.in/api/inquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                const errorText = await response.text(); // get error message from server
                console.error('Response status:', response.status);
                console.error('Response body:', errorText);
                throw new Error('Submission failed');
            }

            const result = await response.json();
            alert('Form submitted successfully!');
            setShowPopup(false);
            setStep(1);
        } catch (err) {
            alert('Failed to submit form');
            console.error(err);
        }
    };

    if (!showPopup) return null;

    return (
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

                            {/* Departing From Input */}
                            <input
                                type="text"
                                placeholder="Departing from"
                                className="w-full border rounded px-3 py-2 mb-3"
                                value={departingFrom}
                                onChange={e => setDepartingFrom(e.target.value)}
                            />

                            {/* Destination Inputs */}
                            {destinations.map((dest, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    placeholder={`Write Destination ${index + 1}`}
                                    className="w-full border rounded px-3 py-2 mb-3"
                                    value={dest}
                                    onChange={e => handleDestinationChange(index, e.target.value)}
                                />
                            ))}

                            <p
                                onClick={handleAddDestination}
                                className="text-[#0094da] text-sm mt-1 text-center cursor-pointer"
                            >
                                + Add Destination
                            </p>
                        </div>

                        <div>
                            <label className="block mb-3">When are you planning to travel?</label>
                            <div className="flex gap-2">
                                <div className="d-block">
                                    <p className="mb-3 font-semibold">Start Date</p>
                                    <input
                                        type="date"
                                        className="flex-1 border rounded px-3 py-2"
                                        value={startDate}
                                        onChange={e => setStartDate(e.target.value)}
                                    />
                                </div>
                                <div className="d-block">
                                    <p className="mb-3 font-semibold">End Date</p>
                                    <input
                                        type="date"
                                        className="flex-1 border rounded px-3 py-2"
                                        value={endDate}
                                        onChange={e => setEndDate(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block mb-3">Activity Preferences?</label>
                            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
                                {[
                                    'Nature & Spiritual',
                                    'Adventure',
                                    'Heritage & Art',
                                    'Nightlife & Shopping',
                                    'Hidden gems',
                                    'Romantic'
                                ].map((activity) => (
                                    <label key={activity}>
                                        <input
                                            type="checkbox"
                                            className="mr-1"
                                            checked={activityPrefs.includes(activity)}
                                            onChange={() => toggleActivity(activity)}
                                        />
                                        {activity}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <button
                                type="button"
                                onClick={() => setStep(2)}
                                className=" bg-[#0094DA] text-white px-6 py-2 rounded-full"
                            >
                                Continue
                            </button>
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
                            <button type="submit" onClick={handleSubmit} className="bg-[#0094da] text-white px-6 py-2 rounded-full cursor-pointer">
                                Submit
                            </button>
                        </div>
                    </div>

                )}
            </div>
        </div>
    );
}
