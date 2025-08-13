import Image from 'next/image';

export default function BookTourSection() {
  return (
    <section className="w-full">
      {/* Background Image with Form */}
      <div className="relative w-full h-[600px]">
        <Image
          src="/images/Booktour.png" // Replace with actual path in public/
          alt="Tour Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        <div className="absolute top-1/2 left-[15%] transform -translate-y-1/2  backdrop-blur-md bg-white/60  bg-opacity-95 rounded-xl p-6 w-[400px] shadow-lg z-10">
          <h2 className="text-xl font-semibold mb-4">Book A Tour</h2>
          <form className="space-y-7">
            <input type="text" placeholder="Your Name" className="w-full border bg-white border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Your Mail" className="w-full border bg-white border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Select Tour Type" className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Your Message" className="w-full border border-gray-300 bg-white rounded-xl px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="bg-[#0094da] text-white px-4 py-2 rounded hover:bg-blue-600">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] mt-4 p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.042621882983!2d88.36389521496013!3d22.57264618517968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277ae3f46e5c7%3A0x4d8f0d30a6e789ed!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1621582348826!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
