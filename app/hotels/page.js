import AirFareDeals from '../components/Airfare';
import HeroSection from '../components/HeroSection';
import WhyBook from '../components/WhyBook';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsletterSection from '../components/NewsLetter';

export default function HotelsPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WhyBook
        type="Hotel"
        image="/images/image (1).png"
        content={[
          "Book top-rated hotels worldwide at the best prices, curated for comfort and luxury.",
          "Enjoy seamless cancellation, special deals, and round-the-clock customer support.",
        ]}
      />
      <AirFareDeals />
      <NewsletterSection />
      <Footer />
    </main>
  );
}