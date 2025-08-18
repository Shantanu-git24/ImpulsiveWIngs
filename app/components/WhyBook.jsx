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
    <section className="px-6 lg:px-16 pt-10 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8" style={{  fontSize: '42px' }}>
        Why Book Flights With Us
      </h2>

      {/* Stack until lg breakpoint */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Image */}
        <div className="flex justify-center lg:justify-end w-full">
          <Image
            src={image}
            alt={`Why Book ${type}`}
            width={450}
            height={450}
            className="object-cover rounded-2xl w-fit h-[300px] md:h-[400px] lg:h-[500px] "
          />
        </div>

        {/* Benefits List */}
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-left"
            >
              <FaCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">{benefit.text}</p>
            </div>
          ))}
          <p className="text-[16px] font-normal text-[#0094da] italic">
            Fly smarter, easier, and better with ImpulsiveWings.
          </p>
        </div>
      </div>
    </section>


  );
}
