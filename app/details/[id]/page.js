import Header from '../../components/Header';

import Footer from '../../components/Footer';
import BannerGallery from '../../components/BannerGallery';
import DetailsContent from '../../components/DetailsContent';

export default function About() {
    return (
        <main>
            <Header />
            <BannerGallery packageId={1} />
            <DetailsContent/>
            
            <Footer />
        </main>
    );
}