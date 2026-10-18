import React from 'react';
import { CalendarCheck2, HandMetal, Award, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const ProcessPipeline = () => {
  const steps = [
    {
      id: 1,
      stepNum: "01",
      title: "תיאום והתאמת צרכים",
      description: "יצירת קשר מהירה, בחירת תאריך ושעה הנוחים לכם, והתאמת הסילבוס המדויק לסוג הקהל (הורים, מאמנים, מצילים, מאבטחים או חובשים).",
      icon: <CalendarCheck2 className="w-8 h-8 text-red-600" />
    },
    {
      id: 2,
      stepNum: "02",
      title: "תרגול מעשי 1-על-1",
      description: "הדרכה מרתקת וממוקדת: למידה בגובה העיניים ותרגול מעשי מלא על בובות החייאה חכמות, מכשירי AED וציוד עזרה ראשונה מתקדם.",
      icon: <HandMetal className="w-8 h-8 text-red-600" />
    },
    {
      id: 3,
      stepNum: "03",
      title: "הנפקת תעודת ריענון מוכרת",
      description: "מבחן מעשי קצר וחלוקת תעודות ריענון רשמיות ומוכרות לחוק במקום, התקפות לשנתיים עבור כל הדרישות המקצועיות.",
      icon: <Award className="w-8 h-8 text-red-600" />
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-red-600 font-bold text-sm tracking-wider uppercase bg-red-50 px-3 py-1.5 rounded-full border border-red-100 mb-3 inline-block">
            פשוט, מהיר ומקצועי
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            איך מתבצע תהליך ההדרכה?
          </h2>
          <p className="text-lg text-slate-600">
            3 שלבים פשוטים מהפנייה הראשונה ועד קבלת תעודת הריענון הרשמית בידיים שלכם.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 relative max-w-6xl mx-auto">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-[52px] right-[15%] w-[70%] h-0.5 bg-gradient-to-r from-red-200 via-red-400 to-red-200 z-0"></div>

          {steps.map((step) => (
            <div key={step.id} className="flex-1 relative z-10 flex flex-col items-center text-center group">
              {/* Step Circle */}
              <div className="w-24 h-24 bg-white border-4 border-red-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-red-500 group-hover:scale-110 transition-all duration-300">
                {step.icon}
              </div>

              {/* Step Card */}
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 w-full flex-1 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <span className="text-xs font-black text-red-600 tracking-wider uppercase block mb-2">
                    שלב {step.stepNum}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fast CTA */}
        <div className="text-center mt-14">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.defaultWhatsAppMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-red-600 transition-colors"
          >
            <span>רוצים לתאם מועד להדרכה כבר השבוע?</span>
            <span className="text-red-600 underline">דברו איתנו בוואטסאפ &larr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProcessPipeline;
