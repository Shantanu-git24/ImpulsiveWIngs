import Footer from '../components/Footer';
import Header from '../components/Header';
import Packages from '../components/Packages'

export default function Package() {
  return (
    <main>
      <Header/>
      <div
      className="relative bg-cover bg-center h-[650px] flex items-center justify-center px-4"
      style={{ backgroundImage: "url('images/image.png')" }} // Put your image in public/plane-bg.jpg
    >
      </div>
     <Packages/>
     <Footer/>
    </main>
  );
}