import React from 'react';
import { ArrowLeft, MessageSquare, Phone, ShieldCheck, Users, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const Hero = () => {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.defaultWhatsAppMessage)}`;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Background Subtle Gradient Spheres */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-red-100/60 blur-[130px]"></div>
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-[120px]"></div>
        <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] rounded-full bg-emerald-100/40 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Trust Pill - Non-blinking static red dot */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-bold mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span>הדרכות פרטיות וקבוצתיות החל מכ-120 ₪ למשתתף</span>
            <span className="text-gray-300">|</span>
            <span className="text-slate-700 font-medium">תעודת ריענון מוכרת לחוק במקום</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.15] mb-8">
            קורסי ריענון והדרכות <span className="text-red-600 underline decoration-red-300 decoration-wavy underline-offset-8">עזרה ראשונה</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-normal max-w-3xl mx-auto">
            ב-<strong>ysi הדרכות</strong> אנו מתמחים בהעברת <strong className="text-slate-900 font-semibold">קורסי ריענון מקצועיים לחובשים ומע״רים קיימים, מצילים, מאבטחים ומאמני כושר</strong>, לצד סדנאות מצבי חירום בילדים ותינוקות להורים.
            הדרכה מעשית ממוקדת "בידיים" עם מדריכים בכירים יוצאי מד״א וצה״ל.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 group shadow-lg shadow-green-600/25 hover:shadow-green-600/40 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-6 h-6" />
              <span>ייעוץ והצעת מחיר בווצאפ</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </a>

            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-md hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 text-red-400" />
              <span>חיוג מהיר: <span dir="ltr">{SITE_CONFIG.phone}</span></span>
            </a>

            <button
              onClick={() => scrollToSection('calculator')}
              className="w-full sm:w-auto px-6 py-4 bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>מחשבון מחיר</span>
            </button>
          </div>

          {/* Trust Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-6 border-t border-slate-100">
            <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100 text-center">
              <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="text-xl md:text-2xl font-black text-slate-900">החל מכ-120 ₪</p>
              <p className="text-xs text-slate-500 font-medium">למשתתף במחשבון</p>
            </div>

            <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100 text-center">
              <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-xl md:text-2xl font-black text-slate-900">פריסה ארצית</p>
              <p className="text-xs text-slate-500 font-medium">הגעה עד לבית / למשרד</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
