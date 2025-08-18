'use client';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';

export default function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("https://application.impulsivewings.in/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("✅ Your message has been sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setSuccess("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccess("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };


  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div
        className="relative bg-cover bg-center h-[550px] w-full flex items-center justify-center px-4"
        style={{
          backgroundImage: "url('/images/contact-banner.jpg')",
        }}
      >
        <div className="absolute inset-0  bg-opacity-30" />
      </div>



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
              <form onSubmit={handleSubmit} className="w-full space-y-4">
                <h3 className="text-lg font-semibold mb-2">Reach Us Anytime</h3>

                <div>
                  <label className="block text-sm font-medium mb-1">Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full border border-blue-400 rounded px-3 py-2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone*</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter phone no."
                      className="w-full border border-blue-400 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter email id"
                      className="w-full border border-blue-400 rounded px-3 py-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Write Your Message*</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write message"
                    className="w-full border border-blue-400 rounded px-3 py-2 h-32"
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#0094da] text-white px-6 py-2 rounded-full hover:bg-blue-600 disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Submit Now"}
                  </button>
                </div>

                {success && (
                  <p className="text-center mt-2 text-sm">
                    {success}
                  </p>
                )}
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
                <p className="text-sm text-gray-600">5 Ballygunge Circular Road, Kolkata 700019</p>
                <p className="text-sm text-gray-600">41B S.P. Mukherjee Road, Kolkata-700026</p>
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
                <a href="mailto:care@impulsivewings.in">
                  <p className="text-sm text-gray-600">care@impulsivewings.in</p>
                </a>

                {/* <p className="text-sm text-gray-600">loremipsum@gmail.com</p> */}
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
                <a href="tel:03369028513" >
                  <p className="text-sm text-gray-600">033 6902 8513</p>
                </a>

                {/* <p className="text-sm text-gray-600">+91 00000 00000</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
