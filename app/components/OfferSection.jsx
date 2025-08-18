import Image from 'next/image';
import { FaCheckCircle } from "react-icons/fa";

export default function WhyBook({ type = 'Flight', image = '/images/image (1).png', content }) {

  const benefits = [
  {
    text: "Tailored Solutions: We design every experience to fit your company’s unique culture, goals, and budget — no cookie-cutter packages here.",
  },
  {
    text: "End-to-End Management: From planning to execution, we handle all the logistics so you can focus on your team and objectives.",
  },
  {
    text: "Experienced Team: Our experts know what it takes to create impactful corporate events that motivate, engage, and inspire.",
  },
  {
    text: "Seamless Support: With 24/7 assistance and on-site coordination, we ensure your events run smoothly, no matter what.",
  },
  {
    text: "Innovative Experiences: We bring fresh ideas and creative activations to make your corporate events memorable and meaningful.",
  },
  {
    text: "Trusted Network: We partner with top venues, suppliers, and local experts to deliver premium quality and exceptional value.",
  },
];
  return (
    <section className="px-8 pt-10 bg-white">
      <h2 className="text-3xl font-semibold text-center sm:text-2xl " style={{  fontSize: '42px' }}>Why Choose ImpulsiveWings for Your Corporate Needs?</h2>

      <section className="py-8 px-6 max-w-7xl mx-auto">
                
                <p className="mb-2">At ImpulsiveWings, we specialize in curated corporate holiday experiences that go far beyond the typical company retreat. Whether you&apos;re rewarding top performers, planning a team-building escape, or hosting a leadership offsite, we design seamless, stress-free getaways tailored to your company’s goals.</p>

                <p className="mb-2">From unique accommodations to immersive activities, each itinerary is customized to foster connection, relaxation, and inspiration. Whether your team seeks a tranquil wellness retreat, an adrenaline-fueled adventure, or a culturally enriching experience, we ensure every detail is handled — so you can focus on what matters most: your people.</p>

                <p className="mb-2">Reconnect. Recharge. Rediscover your team — with ImpulsiveWings.</p>

                
            </section>
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-end mb-4">
          <Image
            src={image}
            alt={`Why Book ${type}`}
            width={500}
            height={500}
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
          <p className="text-[16px] font-normal text-[#0094da] text-left mb-8 items-end italic" >Partner with ImpulsiveWings — where your corporate vision meets flawless execution.</p>
        </ul>
      </div>
    </section>
  );
}
