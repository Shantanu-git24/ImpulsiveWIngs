import Image from "next/image";

const needsData = [
  {
    title: "Leisure Travel",
    image: "/images/need 1.png",
    points: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
  },
  {
    title: "Booking Needs",
    image: "/images/need 2.png",
    points: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
  },
  {
    title: "Support & Conferences",
    image: "/images/need 3.png",
    points: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
  },
];

export default function OrganisationNeeds() {
  return (
    <section className="py-16 bg-[#eaedfa] text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Catered to every organisation’s need
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {needsData.map((item, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden p-3">
              <div className="w-full h-40 relative mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  
                  className="rounded"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
