'use client';
import { motion } from "framer-motion";

// const timelineData = [
//     {
//         title: "The Beginning",
//         content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         date: "January 2016",
//         side: "left",
//         image: "/images/timeline 1.png",
//     },
//     {
//         title: "Reaching 500 Travelers",
//         content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, w",
//         date: "June 2016",
//         side: "right",
//         image: "/images/timeline 2.png",
//     },
//     {
//         title: "Travel Experiences",
//         content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
//         date: "March 2017",
//         side: "left",
//         image: "/images/timeline 3.png",
//     },
//     {
//         title: "Identity Crisis",
//         content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
//         date: "October 2016",
//         side: "right",
//         image: "/images/timeline 4.png",
//     },
//     {
//         title: "Starting from Scratch",
//         content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
//         date: "August 2017",
//         side: "left",
//         image: "/images/timeline 5.png",
//     },
//     {
//         title: "Our Solution",
//         content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
//         date: "November 2017",
//         side: "right",
//         image: "/images/timeline 6.png",
//     },
// ];

const data = [
    {
        title: "Mission",
        image: "/images/mission.png",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
        title: "Vision",
        image: "/images/Vision.png",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
        title: "Values",
        image: "/images/Values.png",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
];

export default function Timeline() {
    return (
        <>
            <div
                className="relative bg-cover bg-center h-[500px] flex items-center justify-center px-4"
                style={{ backgroundImage: "url('images/Group 692.png')" }} // Put your image in public/plane-bg.jpg
            >
                <div className="absolute inset-0 bg-opacity-30" />

                <div className="relative z-10 flex justify-between items-center w-full max-w-7xl mx-auto gap-8">
                    {/* Left Side Text */}
                    <div className="text-white align-middle pt-10">
                        <h1 className=" text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                        <p className="text-sm leading-6 max-w-md">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>


                </div>
            </div>

            <div className="relative max-w-6xl mx-auto py-10 mt-4 px-4 md:px-0">
                {/* Vertical Line 
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 z-0 "></div>

                {/* Top Center Marker 
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative flex items-center justify-center w-24 h-24">
                        <div className="absolute w-full h-full rounded-full border-2 border-dotted border-[#0094DA]"></div>
                        <div className="bg-[#0094DA] text-white rounded-full px-4 py-2 text-sm font-semibold z-10 text-center w-20 h-20 flex items-center justify-center">
                            Dec<br />2016
                        </div>
                    </div>
                </div>

                <div className="space-y-16 mt-32 relative z-10">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col md:flex-row justify-between items-center w-full relative ${item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div
                                className={`w-full md:w-5/12 bg-[#e0f2fe] px-5 py-5 shadow-md flex items-start space-x-4 relative ${item.side === "left" ? "arrow-left" : "arrow-right"
                                    }`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className=" object-contain mt-1 "
                                />
                                <div className="flex flex-col">
                                    <h3 className="text-[20px] md:text-[28px] font-semibold text-[#0094DA]">
                                        {item.title}
                                    </h3>
                                    <p className="text-[12px] text-gray-600 mt-2">{item.content}</p>
                                </div>
                            </div>

                            {/* Timeline Circle 
                            <div className="relative z-10 flex items-center justify-center w-8 h-8 my-6 md:my-0">
                                <div className="absolute w-full h-full p-6 rounded-full border-2 border-dotted border-[#0094DA]"></div>
                                <div className="w-8 h-8 bg-[#0094DA] rounded-full z-10"></div>
                            </div>

                            <div className="w-full md:w-5/12 text-[20px] md:text-[32px] text-gray-500 text-center mt-4 md:mt-0">
                                {item.date}
                            </div>
                        </motion.div>
                    ))}
                </div> */}
            </div>
            {/* <section className="bg-[#d8e2e8] py-14 my-6">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center px-4"
                        >
                            {/* Divider lines between columns (except last) 
                            {index !== data.length - 1 && (
                                <div className="hidden md:block absolute right-0 top-6 h-5/5 border-r border-white"></div>
                            )}

                            <img src={item.image} alt={item.title} className="w-25 h-25 mb-4" />
                            <h3 className="text-xl font-bold text-[#005c84]">{item.title}</h3>
                            <p className="text-sm text-gray-700 mt-2">{item.content}</p>
                        </div>
                    ))}
                </div>
            </section> */}
        </>
    );
}
