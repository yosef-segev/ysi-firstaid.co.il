import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, ShieldAlert, HeartPulse } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.defaultWhatsAppMessage)}`;

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      {/* Top Banner with Quick Phone & WhatsApp */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
            <span>ysi הדרכות | קורסי ריענון עזרה ראשונה והחייאה בפריסה ארצית | תעודות מוכרות רשמית</span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${SITE_CONFIG.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-red-400 transition-colors font-medium"
              aria-label={`חיוג ישיר: ${SITE_CONFIG.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span dir="ltr">{SITE_CONFIG.phone}</span>
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-300 font-medium">הדרכות פרטיות וקבוצתיות החל מכ-120 ₪ למשתתף</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform border border-slate-800">
            <span className="text-xl font-black text-red-500 tracking-tighter">ysi</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black text-slate-900 tracking-tight">ysi</span>
              <span className="text-2xl font-black text-red-600">הדרכות</span>
            </div>
            <p className="text-xs text-gray-500 font-medium">עזרה ראשונה • קורסי ריענון • הדרכות מעשיות</p>
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <button onClick={() => scrollToSection('courses')} className="hover:text-red-600 transition-colors cursor-pointer">קורסי ריענון והדרכות</button>
          <button onClick={() => scrollToSection('calculator')} className="hover:text-red-600 transition-colors cursor-pointer">מחשבון מחיר</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-red-600 transition-colors cursor-pointer">למה אנחנו?</button>
          <button onClick={() => scrollToSection('process')} className="hover:text-red-600 transition-colors cursor-pointer">איך זה עובד?</button>
          <button onClick={() => scrollToSection('faq')} className="hover:text-red-600 transition-colors cursor-pointer">שאלות נפוצות</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-red-600 transition-colors cursor-pointer">צור קשר</button>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="px-4 py-2.5 bg-slate-100 text-slate-900 hover:bg-slate-200 rounded-xl font-bold text-sm transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-red-600" />
            <span dir="ltr">{SITE_CONFIG.phone}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>וואטסאפ מהיר</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-gray-100 text-slate-800 hover:bg-gray-200 focus:outline-none"
          aria-label="תפריט ניווט"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col gap-3 text-base font-semibold text-slate-800">
            <button onClick={() => scrollToSection('courses')} className="text-right py-2 border-b border-gray-50 hover:text-red-600">קורסי ריענון והדרכות</button>
            <button onClick={() => scrollToSection('calculator')} className="text-right py-2 border-b border-gray-50 hover:text-red-600">מחשבון מחיר</button>
            <button onClick={() => scrollToSection('about')} className="text-right py-2 border-b border-gray-50 hover:text-red-600">למה אנחנו?</button>
            <button onClick={() => scrollToSection('process')} className="text-right py-2 border-b border-gray-50 hover:text-red-600">איך זה עובד?</button>
            <button onClick={() => scrollToSection('faq')} className="text-right py-2 border-b border-gray-50 hover:text-red-600">שאלות נפוצות</button>
            <button onClick={() => scrollToSection('contact')} className="text-right py-2 hover:text-red-600">צור קשר</button>
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-red-400" />
              <span>חיוג מיידי: <span dir="ltr">{SITE_CONFIG.phone}</span></span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-green-600 text-white rounded-xl font-bold text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>שיחה מהירה בווצאפ</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
