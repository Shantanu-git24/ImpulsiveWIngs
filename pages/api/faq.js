export default function handler(req, res) {
  const faqData = [
    {
      category: "General",
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of purchase.",
    },
    {
      category: "General",
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide.",
    },
    {
      category: "Support",
      question: "How do I contact customer service?",
      answer: "You can contact us via the support page or call us directly.",
    },
    {
      category: "Support",
      question: "Where can I track my order?",
      answer: "Use the tracking link sent to your email after the order was shipped.",
    },
    {
      category: "Billing",
      question: "How do I update my billing info?",
      answer: "Log in to your account and go to Billing Settings.",
    },
    {
      category: "Billing",
      question: "Why was my payment declined?",
      answer: "Please check with your bank or try a different payment method.",
    }
  ];

  res.status(200).json(faqData);
}
