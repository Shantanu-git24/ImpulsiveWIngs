import Footer from '../components/Footer';
import Header from '../components/Header';
import Packages from '../components/Packages'

export default function Package() {
  return (
    <main>
      <Header />
      <div
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center px-4"
        style={{ backgroundImage: "url('images/image.png')" }} // Put your image in public/plane-bg.jpg
      >

        <div className="relative z-10  justify-between items-center w-full max-w-7xl  text-center mx-auto gap-8">
          {/* Left Side Text */}
          <div className="text-white align-middle pt-10">
            <h1 className=" text-4xl md:text-5xl font-bold mb-4">Travel with Confidence, Explore with Wonder</h1>

            <p className="text-xl">From first booking to final sunset, we’ve been guiding travelers across the globe for years.</p>
          </div>


        </div>
      </div>
      <Packages />
      <Footer />
    </main>
  );
}