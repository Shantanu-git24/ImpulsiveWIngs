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
        image="/images/image (1).png"
        
      />
      <HotelTabs />
      <div className="relative w-full h-[500px]">
        <Image
          src="/images/wmremove-transformed-(47).jpg"
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