import Image from 'next/image';
import Head from 'next/head';

export default function ContactSection() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <section className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xl text-blue-900 italic">Get In Touch</p>
            <h2 className="text-3xl font-bold">Our Contact Information</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden">
            {/* Left Image */}
            <div className="h-full">
              <div className="relative w-full h-full min-h-[400px]">
                <Image
                  src="/images/contact 1.png" // Ensure this exists in public/
                  alt="Contact"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-l-xl"
                />
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-[#eef0ff] p-6 flex items-center">
              <form className="w-full space-y-4">
                <h3 className="text-lg font-semibold mb-2">Reach Us Anytime</h3>
                <div>
                  <label className="block text-sm font-medium mb-1">Name*</label>
                  <input type="text" placeholder="Enter your name" className="w-full border border-blue-400 rounded px-3 py-2" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone*</label>
                    <input type="text" placeholder="Enter phone no." className="w-full border border-blue-400 rounded px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email*</label>
                    <input type="email" placeholder="Enter email id" className="w-full border border-blue-400 rounded px-3 py-2" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Write Your Message*</label>
                  <textarea placeholder="Write message" className="w-full border border-blue-400 rounded px-3 py-2 h-32"></textarea>
                </div>
                <button type="submit" className="bg-[#0094da] text-white px-6 py-2 rounded-full hover:bg-blue-600">Submit Now</button>
              </form>
            </div>
          </div>

          {/* Bottom Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="border border-blue-300 p-4 rounded flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-[#0094da] flex items-center justify-center">
                <div className="relative w-6 h-6">
                  <Image src="/images/vector.png" alt="Email Icon" layout="fill" objectFit="contain" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Our Address</h4>
                <p className="text-sm text-gray-600">Lorem Ipsum is dummy text</p>
                <p className="text-sm text-gray-600">Lorem Ipsum is dummy text</p>
              </div>
            </div>

            <div className="border border-blue-300 p-4 rounded flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0094da] flex items-center justify-center">
                <div className="relative w-6 h-6">
                  <Image src="/images/email.png" alt="Email Icon" layout="fill" objectFit="contain" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Email Address</h4>
                <p className="text-sm text-gray-600">loremipsum@gmail.com</p>
                <p className="text-sm text-gray-600">loremipsum@gmail.com</p>
              </div>
            </div>

            <div className="border border-blue-300 p-4 rounded flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0094da] flex items-center justify-center">
                <div className="relative w-6 h-6">
                  <Image src="/images/call.png" alt="Email Icon" layout="fill" objectFit="contain" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Phone Number</h4>
                <p className="text-sm text-gray-600">+91 00000 00000</p>
                <p className="text-sm text-gray-600">+91 00000 00000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
