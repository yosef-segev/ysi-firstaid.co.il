import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '../config/siteConfig';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden mb-3.5 shadow-xs transition-all hover:shadow-sm">
      <button
        className="w-full px-6 py-5 flex items-center justify-between bg-white text-right focus:outline-none cursor-pointer group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-bold text-slate-900 text-base md:text-lg group-hover:text-red-600 transition-colors">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-slate-400 flex-shrink-0 mr-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-600' : ''}`} 
        />
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-4">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-bold mb-3 border border-red-100">
            <HelpCircle className="w-4 h-4" />
            <span>תשובות לשאלות נפוצות</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            שאלות ותשובות
          </h2>
          <p className="text-lg text-slate-600">
            כל מה שחשוב לדעת על קורסי עזרה ראשונה, מחירים, תוקף תעודות והסמכות.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto">
          {FAQS_DATA.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
