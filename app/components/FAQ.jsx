"use client";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/faq"; // Replace with actual API

const ITEMS_PER_PAGE = 3;

export default function FAQPage() {
  const [faqs, setFaqs] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    // Simulated API fetch
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const categories = [...new Set(data.map((item) => item.category))];
        setFaqs(data);
        setCategoryList(categories);
        setActiveCategory(categories[0]);
      });
  }, []);

  const filteredFaqs = faqs.filter((item) => item.category === activeCategory);
  const totalPages = Math.ceil(filteredFaqs.length / ITEMS_PER_PAGE);
  const paginatedFaqs = filteredFaqs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Categories */}
        <div className="w-full md:w-1/3 space-y-2">
          {categoryList.map((cat) => (
            <button
              key={cat}
              className={`w-full text-left px-4 py-3 border  ${
                activeCategory === cat
                  ? "bg-[#0094DA] text-white font-semibold"
                  : "bg-white hover:bg-blue-100"
              }`}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
            >
              {cat} Questions
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="w-full md:w-2/3 space-y-4">
          {paginatedFaqs.map((faq, index) => (
            <div
              key={index}
              className="border-0  bg-gray-100 p-4 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-[#0094DA]">{faq.question}</h3>
                <span>{expandedIndex === index ? "−" : "+"}</span>
              </div>
              {expandedIndex === index && (
                <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-40"
              >
                ‹
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1 ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-40"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
