import Image from 'next/image';
import { FaHotel, FaDollarSign, FaRegLightbulb, FaCheckCircle, FaHandshake, FaHeadset } from "react-icons/fa";

export default function WhyBookHotel({ type = 'Flight', image = '/images/image (1).png', content }) {

    const features = [
        {
          text:"Wide Selection:Choose from a vast range of hotels — from boutique gems to luxury resorts — tailored to your style and budget.",
        },
        {
            text:"Best Rates Guaranteed:We navigate our partner networks to offer you the best competitive prices on a wide selection of hotels worldwide.",
        },
        {
            text:"Personalized Recommendations:Our experts help you find the perfect stay based on your preferences, whether it&apos;s location, amenities, or vibe.",
        },
        {
            text:"Seamless Booking:Effortless reservations with instant confirmation and flexible cancellation options.",
        },
        {
            text:"Trusted Partners:We work with vetted hotels known for quality, service, and guest satisfaction.",
        },
        {
            text:"Customer Support:Assistance whenever you need it — before, during, and after your stay.",
        },
    ];
    return (
        <section className="px-6  lg:px-16 pt-10 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8">Why Book {type} With Us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="flex justify-center lg:justify-end w-full">
                    <Image
                        src={image}
                        alt={`Why Book ${type}`}
                        width={450}
                        height={450}
                        className="object-cover rounded-2xl"
                    />
                </div>
                {/* <div className="w-full md:w-1/2 text-gray-700">
          {content?.map((para, index) => (
            <p className="mb-4" key={index}>{para}</p>
          ))}
        </div> */}
                <ul className="space-y-4">
          {features.map((features, index) => (
            <li key={index} className="flex items-start gap-2 text-left">
              <FaCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">{features.text}</p>
            </li>
          ))}
          <p className="text-[16px] font-normal text-[#0094da] text-left mb-8 items-end italic" >Book your perfect stay with confidence — only at ImpulsiveWings.</p>
        </ul>
            </div>
        </section>
    );
}
