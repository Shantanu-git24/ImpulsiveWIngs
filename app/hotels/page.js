import AirFareDeals from '../components/Airfare';
import HeroSection from '../components/HeroSection';
import WhyBookHotel from '../components/WhyBookHotel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsletterSection from '../components/NewsLetter';
import HotelSearchHero from '../components/HeroSection';
import HotelTabs from '../components/Hotelfare';
import Image from 'next/image';

export default function HotelsPage() {
  return (
    <main>
      <Header />
      <HotelSearchHero />
      <WhyBookHotel
        type="Hotels"
        image="/images/1.jpg"
        
      />
      <HotelTabs />
      <div className="relative w-full h-[500px]">
        <Image
          src="/images/3.jpg"
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