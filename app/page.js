'use client';

import Image from 'next/image';
import PopularTours from './components/PopularTours';
import ExploreByLocation from './components/ExplorebyLocation';
import ExploreUnexplored from './components/ExploreUnexplored';
import TopSellingTours from './components/TopSelling';
import OceaniaSlider from './components/Oceania';
import VisaFreeDestinations from './components/VisaFreeDestinations';
import HolidayThemesSlider from './components/HolidayThemesSlider';
import Kolkata from './components/Kolkata';
import UpcomingSlider from './components/Upcoming';
import TestimonialSlider from './components/Testimonials';
import Header from './components/Header';
import Footer from './components/Footer';
import TourFilterBar from './components/TourFilter';
import LayoutWrapper from './components/LayoutWrapper';
import { useState, useEffect } from 'react';


export default function Home() {
  const [bgImageUrl, setBgImageUrl] = useState('');

  useEffect(() => {
    fetch('https://application.impulsivewings.in/api/banners')
      .then((res) => res.json())
      .then((response) => {
        if (response.success && Array.isArray(response.data) && response.data.length > 0) {
          const bannerImage = response.data[0].image;
          const fullImageUrl = `https://application.impulsivewings.in/${bannerImage}`;
          setBgImageUrl(fullImageUrl);
        } else {
          console.error('No valid banner image found in API response.');
        }
      })
      .catch((error) => {
        console.error('Error fetching banner:', error);
      });
  }, []);


  return (
    
      <main className="min-h-screen font-sans bg-white">
        <LayoutWrapper>
        {/* Hero Section */}
        <Header />

          <div
      className="relative bg-center h-[650px] flex items-center justify-center px-4 bg-no-repeat
             bg-contain sm:bg-cover"
      style={{
        backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : 'none',
      }}
    >
        </div>

        {/* Info Section */}
        <section className="grid  grid-cols-1 md:grid-cols-2 gap-8 px-10 py-12 items-start">
          <div className="w-full relative max-w-[900px] h-[500px] rounded-2xl overflow-hidden">
            {/* <video
            controls
            className="w-full max-w-[600px] h-[350px] rounded-2xl object-cover shadow-lg"
            poster="/images/video-poster.jpg"
          >
            <source src="/videos/travel.mp4" type="video/mp4" />
          </video> */}
            <Image
              src="/images/image (1).png"
              alt="Traveler"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white rounded-full p-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-6.518-3.756A1 1 0 007 8.118v7.764a1 1 0 001.234.97l6.518-3.756a1 1 0 000-1.764z" />
                </svg>
              </button>
            </div> */}
          </div>

          <div>
            <h4 className="text-3xl text-cyan-600 font-medium ">Let&apos; Go Together</h4>
            <h2 className="text-3xl font-bold mb-2 leading-tight">Plan Your Trip With us</h2>
            <p className="text-[15px] text-gray-600 mb-3">At ImpulsiveWings, we make holiday planning effortless and exciting. From the moment you dream of a getaway to the day you return, we handle every detail:</p>

            <div className="space-y-2">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-100 p-2 rounded-full">
                  <svg className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Discover</h3>
                  <p className="text-[10px] text-gray-600">Get inspired with personalized destination ideas.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-100 p-2 rounded-full">
                  <svg className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Plan</h3>
                  <p className="text-base text-gray-600">Receive a custom itinerary tailored to your style and budget or be part of Fixed itinerary ( Group Tours)</p>
                </div>
              </div>
               <div className="flex items-start space-x-4">
                <div className="bg-cyan-100 p-2 rounded-full">
                  <svg className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Book</h3>
                  <p className="text-base text-gray-600">We secure everything: flights, stays, experiences, and more.</p>
                </div>
              </div>
               <div className="flex items-start space-x-4">
                <div className="bg-cyan-100 p-2 rounded-full">
                  <svg className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Prepare</h3>
                  <p className="text-base text-gray-600">Travel tips, packing lists, and pre-trip support included.</p>
                </div>
              </div>
               <div className="flex items-start space-x-4">
                <div className="bg-cyan-100 p-2 rounded-full">
                  <svg className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Travel</h3>
                  <p className="text-base text-gray-600">Enjoy 24/7 support while you explore the world.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section
          className="relative bg-cover bg-center h-[200px] md:h-[150px] flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/Group 693.png')",
          }}
        >
          <div className="relative z-10 w-full px-4 md:px-8">

            {/* Filter Bar Positioned 

            <TourFilterBar />
          </div>
        </section> */}
        <ExploreByLocation />
        <PopularTours />
        {/* <TestimonialSlider /> */}
        <TopSellingTours />
        {/* <HolidayThemesSlider /> */}
        <ExploreUnexplored />
        <OceaniaSlider />
        <VisaFreeDestinations />
        <Kolkata />
        <UpcomingSlider />
        <Footer />
        </LayoutWrapper>
      </main>
    
  );
}
