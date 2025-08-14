"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function BaliPackagePage() {
    const [activeTab, setActiveTab] = useState('Tour Itinerary');
    const [data, setData] = useState(null);

    const params = useParams(); // ✅ App Router way
    const id = params?.id; // safely access

    useEffect(() => {
        if (!id) return;
        fetch(`https://application.impulsivewings.in/api/packages/${id}`)
            .then((res) => res.json())
            .then((json) => {
                if (json.success) {
                    setData(json.data);
                }
            })
            .catch((err) => console.error("Error fetching package:", err));
    }, [id]);

    if (!id) return <div className="p-10 text-center">Invalid package ID</div>;
    if (!data) return <div className="p-10 text-center">Loading...</div>;

    const tabs = [
        'Tour Itinerary',
        'Tour Inclusion',
        'Tour Exclusion',
        'Booking Policy',
       
    ];

    const renderTabContent = () => {
        const contentMap = {
            'Tour Itinerary': data.tour_itinerary,
            'Tour Inclusion': data.tour_inclusion,
            'Tour Exclusion': data.tour_exclusion,
            'Booking Policy': data.terms_conditions,
            
        };
        return (
            <div
                className="bg-white border-1 p-4 rounded-lg shadow text-sm"
                dangerouslySetInnerHTML={{ __html: contentMap[activeTab] || '' }}
            />
        );
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-semibold">{data.name}</h2>
            <p className="text-gray-500 mt-2 text-sm">{data.description}</p>

            <div className="bg-white rounded-lg shadow p-4 mt-4">
                <h3 className="text-lg font-medium mb-2">Highlights of the Tour</h3>
                {data.highlights && (
                    <div
                        className="text-sm text-gray-600 space-y-1"
                        dangerouslySetInnerHTML={{ __html: data.highlights }}
                    />
                )}
            </div>

            <div className="flex space-x-4 my-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`py-3 px-4 text-sm font-medium relative ${activeTab === tab
                            ? 'text-white rounded-[10px] bg-[#0094da] font-semibold'
                            : 'text-gray-600'
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {renderTabContent()}
        </div>
    );
}
