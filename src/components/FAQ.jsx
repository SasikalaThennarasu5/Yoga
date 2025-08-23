import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I know if I need therapy?",
    answer:
      "If you're feeling overwhelmed, anxious, low, or stuck—or simply want to better understand yourself—therapy can help. You don’t need a crisis to benefit from mental health support.",
  },
  {
    question: "What is mental wellness?",
    answer:
      "Mental wellness is a state of well-being where an individual can cope with stress, work productively, and contribute to their community.",
  },
  {
    question: "What types of therapy do you offer?",
    answer:
      "We offer individual therapy, group therapy, mindfulness-based sessions, and holistic mental health practices tailored to your needs.",
  },
  {
    question: "What can I expect in a therapy session?",
    answer:
      "Sessions typically involve open conversations with your therapist, strategies for coping, and tools to support your emotional growth.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 bg-[#feeeee] font-robotoSerif">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#6f145f] text-center mb-10">
          FAQs
        </h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-950 pb-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-xl text-gray-900">
                  {index + 1}. {faq.question}
                </h3>
                <span className="text-3xl font-bold text-[#6f145f]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Animated Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="mt-3 text-gray-950 text-lg overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
