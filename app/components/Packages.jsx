'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PackagesPage() {
    const [packages, setPackages] = useState([]);
    const [visibleCount, setVisibleCount] = useState(15);
    const [loading, setLoading] = useState(true);
    const router = useRouter();


    useEffect(() => {
        axios
            .get("https://application.impulsivewings.in/api/packages")
            .then((res) => {
                const result = res.data?.data?.data; // Nested inside res.data.data.data
                if (Array.isArray(result)) {
                    setPackages(result);
                } else {
                    setPackages([]);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("API Error:", err);
                setLoading(false);
            });
    }, []);





    const handleViewMore = () => {
        setVisibleCount((prev) => prev + 15);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-12 gap-6">
            {/* Filter Section */}
            {/* <div className="col-span-12 md:col-span-3 bg-white shadow-sm rounded p-4 border border-gray-200">
                <h4 className="text-lg font-semibold mb-4">Filters</h4> */}
            <div className="col-span-12 md:col-span-3 bg-white shadow-sm rounded p-4 border border-gray-200 h-[90vh]">
                <h4 className="text-lg font-semibold mb-4">Filters</h4>

                <div className="mb-6">
                    <h6 className="font-medium mb-2">Duration (Nights)</h6>
                    <input type="range" min={1} max={10} className="w-full custom-range" />
                </div>

                <div className="mb-6">
                    <h6 className="font-medium mb-2">Budget Per Person</h6>
                    <label className="block text-sm mb-1 align-items-center">
                        <input type="checkbox" className="mr-2 custom-checkbox" /> ₹45,000 – ₹55,000
                    </label>
                    <label className="block text-sm mb-1">
                        <input type="checkbox" className="mr-2 custom-checkbox" /> ₹10,001 – ₹20,000
                    </label>
                    <label className="block text-sm mb-1">
                        <input type="checkbox" className="mr-2 custom-checkbox" /> ₹10,001 – ₹20,000
                    </label>
                    <label className="block text-sm mb-1">
                        <input type="checkbox" className="mr-2 custom-checkbox" /> ₹20,001 – ₹30,000
                    </label>
                </div>

                <div className="mb-6">
                    <h6 className="font-medium mb-2">Cities</h6>
                    <label className="block text-sm mb-1">
                        <input type="checkbox" className="mr-2 custom-checkbox" /> Delhi
                    </label>
                    <label className="block text-sm mb-1">
                        <input type="checkbox" className="mr-2 custom-checkbox" /> Mumbai
                    </label>
                </div>

                <div className="mb-6">
                    <h6 className="font-medium mb-2">Package Category</h6>
                    <label className="block text-sm mb-1">
                        <input type="checkbox" className="mr-2 custom-checkbox" /> Family Package
                    </label>
                    <label className="block text-sm mb-1">
                        <input type="checkbox" className="mr-2 custom-checkbox" /> Group Tour
                    </label>
                    <label className="block text-sm mb-1">
                        <input type="checkbox" className="mr-2 custom-checkbox" /> Adventure Package
                    </label>
                    <label className="block text-sm mb-1">
                        <input type="checkbox" className="mr-2 custom-checkbox" /> Wild Life
                    </label>
                </div>

                <div className="mb-6">
                    <h6 className="font-medium mb-2">Themes</h6>
                    <label className="block text-sm mb-1">
                        <input type="checkbox" className="mr-2 custom-checkbox" /> Culture
                    </label>
                    <label className="block text-sm mb-1">
                        <input type="checkbox" className="mr-2 custom-checkbox" /> Wildlife
                    </label>
                    <label className="block text-sm mb-1">
                        <input type="checkbox" className="mr-2 custom-checkbox" /> Honeymoon
                    </label>
                    <label className="block text-sm mb-1">
                        <input type="checkbox" className="mr-2 custom-checkbox" /> Pilgrimage
                    </label>
                </div>
            </div>



            {/* Card Grid Section */}
            <div className="col-span-12 md:col-span-9">
                {loading ? (
                    <p className="text-center text-gray-600">Loading packages...</p>
                ) : (
                    <>
                        <Link href={`/details/${packages.id}`} passHref>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {Array.isArray(packages) && packages.map((pkg, index) => {
                                    if (index >= visibleCount) return null;
                                    return (
                                        <div
                                            key={index}
                                            className="bg-white border border-gray-300 rounded-[15px] overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between h-[380px] md:h-[350px] lg:h-[380px]"
                                        >
                                            <img
                                                src={`https://application.impulsivewings.in/${pkg.thumbnail}` || '/images/default.jpg'}
                                                alt={pkg.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="p-3">
                                                <h5 className="font-semibold text-gray-800 mb-1 line-clamp-2">{pkg.name}</h5>

                                                <div className="flex items-center gap-2 text-sm text-gray-800 mb-3">
                                                    <span className="text-lg font-bold text-green-700">₹ {pkg.price}</span>
                                                    <span className=" text-xs bg-gray-100 border px-2 py-1 rounded-full whitespace-nowrap">
                                                        Per Person
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                                    <span>🛏 {pkg.no_of_hotels || 3} Hotels</span>
                                                    <span>🚌 {pkg.no_of_transport || 2} Transport</span>
                                                    <span>🎉 {pkg.no_of_activities || 5} Activities</span>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => router.push(`/details/${packages.id}`)}
                                                className="bg-[#0094DA] text-white text-lg w-full py-3 hover:bg-[#0095dae8] transition cursor-pointer"
                                            >
                                                View Itinerary
                                            </button>
                                        </div>
                                    );
                                })}

                            </div>
                        </Link>

                        {visibleCount < packages.length && (
                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={handleViewMore}
                                    className="bg-[#0094DA] text-white px-6 py-2 rounded hover:bg-[#0095dae8] text-sm"
                                >
                                    View More
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
