'use client';
import { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';

export default function PackageGallery({ packageId = 1 }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(`https://application.impulsivewings.in/api/packages/${packageId}`);
        const json = await res.json();
        if (json.success && json.data && Array.isArray(json.data.images)) {
          setImages(json.data.images);
        }
      } catch (err) {
        console.error('Error fetching images:', err);
      }
    };

    fetchImages();
  }, [packageId]);

  if (!images.length) {
    return <p className="text-center text-gray-500 mt-6">No gallery images found.</p>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Main image with play icon */}
        <div className="relative h-100 md:h-[400px] rounded-lg overflow-hidden">
          <img
            src={`https://application.impulsivewings.in/${images[0]}`}
            alt="Main Image"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-80 p-4 rounded-full cursor-pointer hover:scale-105 transition">
              <FaPlay className="text-[#0094DA] text-2xl" />
            </div>
          </div> */}
        </div>

        {/* Right: 2x2 grid of images */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-80 md:h-[400px]">
          {images.slice(1, 5).map((img, idx) => (
            <div key={idx} className="relative rounded-lg overflow-hidden">
              <img
                src={`https://application.impulsivewings.in/${img}`}
                alt={`Thumb ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              {idx === 3 && images.length > 5 && (
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-sm text-center p-2">
                  <div>
                    <img
                      src="/images/gallery-icon.png"
                      alt="Gallery Icon"
                      className="mx-auto mb-1 w-6 h-6"
                    />
                    View more images
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
