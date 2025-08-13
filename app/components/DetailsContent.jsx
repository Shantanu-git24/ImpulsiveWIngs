"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function BaliPackagePage() {
    const [activeTab, setActiveTab] = useState('Tour Itinerary');
    const [data, setData] = useState(null);
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        if (!id) return;
        fetch(`https://application.impulsivewings.in/api/packages/${id}`)
            .then((res) => res.json())
            .then((json) => {
                if (json.success) {
                    setData(json.data);
                }
            });
    }, [id]);

    if (!data) return <div className="p-10 text-center">Loading...</div>;

    const tabs = [
        'Tour Itinerary',
        'Tour Inclusion',
        'Tour Exclusion',
        'Booking Policy',
        'Cancellation Policy'
    ];

    const renderTabContent = () => {
    switch (activeTab) {
        case 'Tour Itinerary':
            return (
                <div
                    className="bg-white border-1 p-4 rounded-lg shadow text-sm "
                    dangerouslySetInnerHTML={{ __html: data.tour_itinerary }}
                />
            );

        case 'Tour Inclusion':
            return (
                <div
                    className="bg-white border-1 p-4 rounded-lg shadow text-sm"
                    dangerouslySetInnerHTML={{ __html: data.tour_inclusion }}
                />
            );

        case 'Tour Exclusion':
            return (
                <div
                    className="bg-white border-1 p-4 rounded-lg shadow text-sm"
                    dangerouslySetInnerHTML={{ __html: data.tour_exclusion }}
                />
            );

        case 'Booking Policy':
            return (
                <div
                    className="bg-white border-1 p-4 rounded-lg shadow text-sm"
                    dangerouslySetInnerHTML={{ __html: data.terms_conditions }}
                />
            );

        case 'Cancellation Policy':
            return (
                <div
                    className="bg-white border-1 p-4 rounded-lg shadow text-sm"
                    dangerouslySetInnerHTML={{ __html: data.cancellation_policy }}
                />
            );

        default:
            return null;
    }
};


    return (
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold">{data.name}</h2>
                    <p className="text-gray-500 mt-2 text-sm">{data.description}</p>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-lg font-medium mb-2">Highlights of the Tour</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        {data.highlights && (
                            <div
                                className="text-sm text-gray-600 space-y-1"
                                dangerouslySetInnerHTML={{ __html: data.highlights }}
                            />
                        )}

                    </ul>
                </div>

                <div className="relative ">
                    <div className="flex space-x-4 ">
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
                                {activeTab === tab && (
                                    <div className="absolute left-0 right-0 h-[3px] bg-[#0094da] rounded-t" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {renderTabContent()}
            </div>

            {/* <div className="space-y-6">
                <div className="flex gap-2 text-xs">
                    <button className="w-full border border-gray-300 rounded px-4 py-2 text-sm">Contact</button>
                    <button className="w-full border border-gray-300 rounded px-4 py-2 text-sm">Whatsapp</button>
                    <button className="w-full border border-gray-300 rounded px-4 py-2 text-sm">Write Us</button>
                </div>

                <button className="w-full bg-blue-600 text-white rounded px-4 py-2 text-sm">Download PDF</button>

                <div className="bg-white border-0.5 shadow p-4 rounded">
                    <h4 className="text-lg font-semibold mb-2">Related Packages</h4>
                    <div className="space-y-3">
                        {[1, 2, 3].map((pkg) => (
                            <div key={pkg} className="flex gap-3 items-start text-sm">
                                <div className="w-20 h-16 bg-gray-200 rounded" />
                                <div>
                                    <p className="font-medium">Thailand 5N</p>
                                    <p className="text-gray-500 text-xs">₹29,999 Onwards</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    );
}
