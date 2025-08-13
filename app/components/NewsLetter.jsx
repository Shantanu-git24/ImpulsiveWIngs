"use client";


export default function NewsletterSection() {
  return (
    <section className="border-t border-b py-8 px-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <h2 className="text-xl md:text-2xl font-semibold text-center lg:text-left">
          Get Updated The Latest Newsletter
        </h2>

        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full sm:w-[300px] border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-[#0095eb] text-white px-6 py-2 rounded-full hover:bg-[#007fd1] w-full sm:w-auto">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
