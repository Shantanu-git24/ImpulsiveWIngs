import Image from 'next/image';
import { FaCheckCircle } from "react-icons/fa";

export default function WhyBook({ type = 'Flight', image = '/images/image (1).png', content }) {

  const benefits = [
  {
    text: "Best Price Guarantee: We compare multiple airlines and fares to secure the most competitive prices for you.",
  },
  {
    text: "Personalized Flight Options: Whether you want the shortest route, most convenient times, or specific airlines, we tailor your flight choices to your preferences.",
  },
  {
    text: "Seamless Booking Experience: Book your flights quickly and easily through our call/WhatsApp with help from our expert agents.",
  },
  {
    text: "Comprehensive Support: From booking to boarding, our dedicated team is available to assist you with any changes, cancellations, or special requests.",
  },
  {
    text: "Exclusive Deals & Upgrades: Access special offers, seat upgrades, and added perks available only through ImpulsiveWings.",
  },
  {
    text: "Secure & Transparent: Your booking is safe with us, with clear pricing, no hidden fees, and full travel documentation provided.",
  },
];
  return (
    <section className="px-8 pt-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Why Book Hotels With Us</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-end">
          <Image
            src={image}
            alt={`Why Book ${type}`}
            width={400}
            height={400}
            className="object-cover text-right"
          />
        </div>
        {/* <div className="w-full md:w-1/2 text-gray-700">
          {content?.map((para, index) => (
            <p className="mb-4" key={index}>{para}</p>
          ))}
        </div> */}
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">{benefit.text}</p>
            </li>
          ))}
          <p className="text-[16px] font-normal text-[#0094da] text-left mb-8 items-end italic" >Fly smarter, easier, and better with ImpulsiveWings.</p>
        </ul>
      </div>
    </section>
  );
}
