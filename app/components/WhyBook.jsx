import Image from 'next/image';

export default function WhyBook({ type = 'Flight', image = '/images/image (1).png', content }) {
  return (
    <section className="px-8 py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Why Book {type} With Us</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-end">
          <Image
            src={image}
            alt={`Why Book ${type}`}
            width={500}
            height={500}
            className="object-cover text-right"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-700">
          {content?.map((para, index) => (
            <p className="mb-4" key={index}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
