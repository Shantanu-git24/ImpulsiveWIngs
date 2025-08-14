import AirFareDeals from '../components/Airfare';
import HeroSection from '../components/HeroSection';
import WhyBook from '../components/WhyBook';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import NewsletterSection from '../components/NewsLetter';
import Terms from '../components/Terms'

export default function FlightsPage() {
    return (
        <main>
            <Header />
            {/* <HeroSection />
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
      <NewsletterSection /> */}
            <div className="container mx-auto max-w-7xl px-7 my-12">
                <p className="text-3xl mb-4 text-center"><strong>Disclaimer</strong></p>
                <p className="mb-3">The information contained in this website is for general information purposes only. The information is provided by [www.impulsivewings.in], a property of ImpulsiveWings Biz Llp. While we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
                <p className="mb-3">In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
                <p className="mb-3">Through this website you are able to link to other websites which are not under the control of ImpulsiveWings Biz Llp. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
                <p className="mb-3">Every effort is made to keep the website up and running smoothly. However, ImpulsiveWings Biz Llp takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.</p>
            </div>
            <Footer />
        </main>
    );
}
