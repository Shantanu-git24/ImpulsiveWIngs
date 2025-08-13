import AirFareDeals from '../components/Airfare';
import HeroSection from '../components/HeroSection';
import WhyBook from '../components/WhyBook';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import NewsletterSection from '../components/NewsLetter';

export default function FlightsPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WhyBook
        type="Flight"
        image="/images/image (1).png"
        content={[
          "We offer domestic and international multi-city bookings with your choice of airlines, timings, and routes at the most optimized fares.",
          "Our unmatched services in booking, cancellation, and changes are widely appreciated.",
        ]}
      />
      <AirFareDeals />
      <div className="relative w-full h-[500px]">
        <Image
          src="/images/image 53.png"
          alt="Banner"
          layout="fill"
          priority
        />
      </div>
      <NewsletterSection />
      <Footer />
    </main>
  );
}
