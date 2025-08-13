'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Lindsy Walters',
    text: 'Vivamus ac blandit ipsum, sed condimentum magna. Etiam id lacinia lectus. Nulla euismod neque.',
    avatar: '/avatars/user1.jpg',
    rating: 4,
  },
  {
    id: 2,
    name: 'David Martin',
    text: 'Aenean id velit vehicula, luctus justo at, venenatis ligula. Pellentesque sed ligula nec sapien.',
    avatar: '/avatars/user2.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sara James',
    text: 'Curabitur euismod ipsum nec augue gravida, nec commodo nibh sodales.',
    avatar: '/avatars/user3.jpg',
    rating: 4,
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-20 bg-[#f9f9fb] text-center px-4">
      <h2 className="text-3xl font-bold mb-6">Testimonial</h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="max-w-2xl mx-auto"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex justify-center space-x-4 mb-6">
              {testimonials.map((t) => (
                <Image
                  key={t.id}
                  src={t.avatar}
                  alt={t.name}
                  width={50}
                  height={50}
                  className={`rounded-full border-4 ${
                    t.id === item.id
                      ? 'border-cyan-600 scale-110'
                      : 'border-gray-300 opacity-70'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600 text-lg max-w-xl mx-auto italic mb-4">{item.text}</p>
            <div className="text-yellow-500 text-lg mb-2">
              {'★'.repeat(item.rating)}
              {'☆'.repeat(5 - item.rating)}
            </div>
            <h4 className="font-semibold text-cyan-700 text-lg">{item.name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
