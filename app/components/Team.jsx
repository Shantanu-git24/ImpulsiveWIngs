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

    const data = [
    {
        title: "Mission",
        image: "/images/mission.png",
        content:
            "At ImpulsiveWings, our mission is to empower every kind of traveller — from the spontaneous explorer to the carefully curated planner — by delivering travel experiences that are personalized, purposeful, and unforgettable.We are committed to understanding the unique goals, desires, and travel styles of our customers, and turning those insights into journeys that spark joy, connection, and discovery — whether through group adventures, custom getaways, or themed travel experiences. ",
    },
    {
        title: "Vision",
        image: "/images/Vision.png",
        content:
            "ImpulsiveWings is an innovative travel company that empowers you to craft your trips, your way — with the help of a dedicated Trip Planner. We offer a one-stop travel solution where you can design personalized itineraries, manage all your bookings, and confirm everything in just minutes with a mix of tech and human support — all in one seamless experience.Whether you&apos;re planning a spontaneous escape, a group getaway, or a tailor-made adventure,flight & hotel bookings.",
    },
    {
        title: "The ImpulsiveWings Promise",
        image: "/images/Values.png",
        content:
            "Your journey should be as unique as your fingerprint. That’s why we listen first, design second. From the moment you share your vision to the moment you return home, we’re by your side — handling details, anticipating needs, and unlocking experiences you won&apos;t find in a brochure. We promise travel that&apos;s smooth, immersive, and deeply personal — because we know the destination is only half the story.,",
    },
];

    return (
        <>
            {/* Guide Cards */}
            {/* <section className="py-12 px-6 max-w-7xl mx-auto">
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
              </button> 
                        </div>
                    ))}
                </div>
            </section> */}


            <section className="py-12 px-6 max-w-7xl mx-auto">
                <h2 className="text-center text-3xl font-bold mb-4">About ImpulsiveWings</h2>
                <p className="mb-2">At ImpulsiveWings, we began with a simple belief: no two travellers are the same. Every person steps into a journey with a story, a purpose, and a vision that’s uniquely their own. From young adventurers and solo wanderers to families building memories, couples in search of romance, or corporate teams bonding over shared experiences — each journey is personal, and each deserves to be crafted with care.</p>

                <p className="mb-2">We’ve always understood that travel is far more than a ticket and a hotel booking. It’s a collection of moments, emotions, and discoveries that stay with you long after you return home. That’s why we take the time to understand the traveller behind the trip. Is this a milestone celebration? A well-earned escape from the routine? A quest for inspiration, culture, or adrenaline? By diving deep into your ‘why,’ we design journeys that go beyond the obvious and into the unforgettable.</p>

                <p className="mb-2">Our expertise covers a wide spectrum of travel styles and needs. For some, it’s the camaraderie of a group tour, filled with laughter, shared stories, and new friendships. For others, it’s the exclusivity of a custom-designed private getaway where every detail — from the view outside your window to the wine on your table — is tailored to your taste. We also create theme-based adventures that align with your passions, whether that’s wellness retreats, cultural immersions, food and wine explorations, or thrill-seeking expeditions across rugged landscapes.</p>

                <p className="mb-2">What truly drives us is passion — not just for travel itself, but for the deeper connection it fosters between people, places, and moments. We believe that a well-planned journey has the power to transform, to inspire, and to open doors to perspectives you never knew existed. Our team is made up of travellers at heart, each bringing personal insight, local knowledge, and creative thinking to every itinerary we design.</p>

                <p className="mb-2">From the first conversation to the last step of your journey, we’re there with you. We manage the details — the research, the logistics, the timing — so you can focus on what matters: experiencing the world fully. Our on-the-go support ensures that whether you’re navigating a bustling market in Marrakesh, watching the sun dip behind Santorini’s whitewashed cliffs, or hiking through the emerald trails of Bali, you have the confidence that everything is taken care of.</p>

                <p className="mb-2">For us, success is measured not just in the places you visit, but in the way those places make you feel. We want you to come back with more than just photographs — we want you to return with memories that you can’t help but relive and share.</p>

                <p className="mb-2">At ImpulsiveWings, we don’t just plan trips. We design experiences. We listen, we imagine, and we create, making sure that every journey reflects not only the destination but also the soul of the traveller. Your story is unique. Your journey should be too. And we’re here to make that happen.</p>
            </section>

            <section className="bg-[#d8e2e8] py-14 my-6">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center px-4"
                        >
                            {/* {/* Divider lines between columns (except last)  */}
                            {index !== data.length - 1 && (
                                <div className="hidden md:block absolute right-0 top-6 h-5/5 border-r border-white"></div>
                            )}

                            <img src={item.image} alt={item.title} className="w-25 h-25 mb-4" />
                            <h3 className="text-xl font-bold text-[#005c84]">{item.title}</h3>
                            <p className="text-sm text-gray-700 mt-2">{item.content}</p>
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
