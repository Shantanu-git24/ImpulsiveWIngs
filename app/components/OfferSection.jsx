import Image from "next/image";
import { Globe, BedDouble, Headphones } from "lucide-react";

export default function OfferSection() {
  return (
    <section className="bg-[#EAEDFA] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/image (2).png"
            alt="Travel"
            width={450}
            height={450}
            className="rounded-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-gray-700">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Offer?</h2>
          <p className="mb-6 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages.
          </p>

          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-3">
              <Globe className="text-blue-500 w-5 h-5" />
              <span className="font-semibold">Customized Itineraries</span>
            </li>
            <li className="flex items-center gap-3">
              <BedDouble className="text-pink-500 w-5 h-5" />
              <span className="font-semibold">Unique Accommodations</span>
            </li>
            <li className="flex items-center gap-3">
              <Headphones className="text-blue-500 w-5 h-5" />
              <span className="font-semibold">24/7 Support</span>
            </li>
          </ul>

          <button className="bg-white text-white px-6 py-2 rounded-full">
            Schedule A Callback
          </button>
        </div>
      </div>
    </section>
  );
}
