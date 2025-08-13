"use client";
import Slider from "react-slick";
import Image from "next/image";

const logos = [
  "/images/wise.png",
  "/images/novac.png",
  "/images/packt.png",
  "/images/growfitter.png",
];

export default function BrandSlider() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-8">Trusted by Global brands</h2>
        <Slider {...settings}>
          {logos.map((src, index) => (
            <div key={index} className="flex justify-center px-4">
              <div className="border rounded-e-lg p-4 w-full flex items-center justify-center h-[140px] bg-white">
                <Image src={src} alt={`brand-${index}`} width={140} height={100} objectFit="contain" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
