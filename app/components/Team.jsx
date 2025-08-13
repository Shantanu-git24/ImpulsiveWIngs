"use client";
import { useEffect, useState } from "react";
import { FaShareAlt, FaStar, FaHandPaper, FaHandshake } from "react-icons/fa";

export default function GuideCardsWithFacts() {
    const [guides, setGuides] = useState([]);

    useEffect(() => {
        fetch("https://application.impulsivewings.in/api/team")
            .then((res) => res.json())
            .then((data) => setGuides(data?.data || []))
            .catch((err) => console.error("Error fetching team data:", err));
    }, []);

    return (
        <>
            {/* Guide Cards */}
            <section className="py-12 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {guides.map((guide, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-2xl shadow-md overflow-hidden"
                        >
                            <img
                                src={guide.image}
                                alt={guide.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="text-lg font-semibold text-[#083E73]">
                                    {guide.name}
                                </h4>
                                <p className="text-sm text-gray-500">{guide.position}</p>
                            </div>
                            {/* Share icon */}
                            {/* <button className="absolute bottom-6 right-4 bg-white p-2 rounded-full shadow">
                <FaShareAlt className="text-[#083E73]" />
              </button> */}
                        </div>
                    ))}
                </div>
            </section>

            {/* Fast Facts */}
            <h2 className="text-3xl font-bold mb-8 text-center">Fast Facts</h2>
            <section
                className="relative bg-cover bg-center text-white mb-8"
                style={{ backgroundImage: "url('/images/facts.png')" }}
            >
                <div className=" bg-opacity-60 py-6">
                    <div className="max-w-7xl mx-auto px-6 text-center">

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex">
                                <img src="images/250.png" className="w-20 h-20 text-4xl mb-2" />
                                <div className="flex flex-col items-center py-4">
                                    <h3 className="text-3xl font-bold">250</h3>
                                    <p className="text-sm">Experiences curated</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img src="images/30.png" className="w-20 h-20 text-4xl mb-2" />
                                <div className="flex flex-col items-center py-4">
                                    <h3 className="text-3xl font-bold">30</h3>
                                    <p className="text-sm">Villages Empowered</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img src="images/520.png" className="w-20 h-20 text-4xl mb-2" />
                                <div className="flex flex-col items-center py-4">
                                    <h3 className="text-3xl font-bold">520</h3>
                                    <p className="text-sm">Local Partners</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
