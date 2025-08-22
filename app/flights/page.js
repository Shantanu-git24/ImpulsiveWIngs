import AirFareDeals from '../components/Airfare';
import HeroSection from '../components/HeroSection';
import WhyBook from '../components/WhyBook';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import NewsletterSection from '../components/NewsLetter';
import FlightHeroSection from '../components/FlightHeroSection'

export default function FlightsPage() {
  return (
    <main>
      <Header />
      <FlightHeroSection />
      <WhyBook
        type="Flight"
        image="/images/travel.jpg"
       
      />
      <AirFareDeals />
      <div className="relative w-full h-[600px]">
        <Image
          src="/images/wmremove-transformed-(46).jpg"
          alt="Banner"
          layout="fill"
          priority
        />
      </div>
      {/* <NewsletterSection /> */}
      <Footer />
    </main>
  );
}
