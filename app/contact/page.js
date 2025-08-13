import Header from '../components/Header';
import Newsletter from '../components/NewsLetter';
import Footer from '../components/Footer';
import BannerGallery from '../components/BannerGallery';
import DetailsContent from '../components/DetailsContent';
import ContactSection from '../components/ContactForm';
import BookTourSection from '../components/BookTour';

export default function About() {
    return (
        <main>
            <Header />
            <ContactSection/>
            <BookTourSection/>
            <Footer />
        </main>
    );
}