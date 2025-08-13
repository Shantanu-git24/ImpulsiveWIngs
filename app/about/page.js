import History from '../components/History'
import Header from '../components/Header';
import Team from '../components/Team'
import Newsletter from '../components/NewsLetter';
import Footer from '../components/Footer';
import FaqSection from '../components/FAQ';

export default function About() {
  return (
    <main>
      <Header />
      <History />
      <Team />
      {/* <FaqSection/> */}
      {/* <Newsletter/> */}
      <Footer />
    </main>
  );
}