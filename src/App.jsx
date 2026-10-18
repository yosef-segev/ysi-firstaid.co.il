import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoursesGrid from './components/CoursesGrid';
import PriceCalculator from './components/PriceCalculator';
import AboutTrust from './components/AboutTrust';
import ProcessPipeline from './components/ProcessPipeline';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AccessibilityMenu from './components/AccessibilityMenu';
import AccessibilityModal from './components/AccessibilityModal';
import { HeartPulse, Phone, MessageSquare, MapPin, Mail, ShieldAlert, Award, Accessibility } from 'lucide-react';
import { SITE_CONFIG } from './config/siteConfig';

function App() {
  const [isAccessibilityModalOpen, setIsAccessibilityModalOpen] = React.useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.defaultWhatsAppMessage)}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900 selection:bg-red-500 selection:text-white">
      {/* Skip to Content for Keyboard Users (WCAG 2.4.1) */}
      <a href="#main-content" className="skip-link">
        דילוג לתוכן המרכזי
      </a>

      {/* Navigation */}
      <Navbar />

      {/* Main Landing Sections */}
      <main id="main-content">
        <Hero />
        <CoursesGrid />
        <PriceCalculator />
        <AboutTrust />
        <ProcessPipeline />
        <FAQSection />
        <ContactForm />
      </main>

      {/* Modern Footer */}
      <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* Col 1: Brand & Bio */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white border border-slate-800">
                  <span className="text-lg font-black text-red-500">ysi</span>
                </div>
                <div>
                  <span className="text-xl font-black text-white">ysi </span>
                  <span className="text-xl font-black text-red-500">הדרכות</span>
                </div>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                המרכז המוביל להדרכות וקורסי עזרה ראשונה, החייאה וריענונים מקצועיים לחובשים ומע״רים, מצילים, מאבטחים, מאמני כושר והורים.
              </p>
              <div className="text-xs text-red-400 font-bold bg-red-950/50 p-3 rounded-xl border border-red-900/50">
                הדרכות פרטיות וקבוצתיות החל מכ-120 ₪ למשתתף
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                קורסי ריענון והדרכות
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-red-400 transition-colors">ריענון חובשים ומע״רים</button></li>
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-red-400 transition-colors">עזרה ראשונה למצילים (בריכה וים)</button></li>
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-red-400 transition-colors">עזרה ראשונה למאמני כושר (חוק הספורט)</button></li>
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-red-400 transition-colors">עזרה ראשונה למאבטחים ושומרים</button></li>
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-red-400 transition-colors">סדנת מצבי חירום בילדים להורים</button></li>
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-red-400 transition-colors">הדרכות פרטיות וארגוניות VIP</button></li>
              </ul>
            </div>

            {/* Col 3: Standards & Regulations */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                תקנים והכרה רשמית
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>מוכר מנהל הספורט (חוק הספורט)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>תקן משרד הפנים למצילי בריכה וים</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>תקן משטרת ישראל לחברות אבטחה</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>אישור משרד העבודה ומוסדות חינוך</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>הדרכה מעשית ע״פ פרוטוקולי AHA / ERC</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Phone */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                יצירת קשר מהירה
              </h4>
              <div className="space-y-3 text-xs sm:text-sm text-slate-400">
                <a 
                  href={`tel:${SITE_CONFIG.phoneRaw}`} 
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span dir="ltr" className="font-bold text-white">{SITE_CONFIG.phone}</span>
                </a>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>מענה מיידי בוואטסאפ</span>
                </a>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <span>פריסה ארצית - הגעה עד אליכם</span>
                </div>
              </div>
            </div>

          </div>

          {/* Emergency Notice, Accessibility Statement & Copyright */}
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right text-xs text-slate-500">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <span>© {new Date().getFullYear()} {SITE_CONFIG.shortName}. כל הזכויות שמורות.</span>
              <span className="hidden md:inline text-slate-700">|</span>
              <button
                onClick={() => setIsAccessibilityModalOpen(true)}
                className="text-slate-400 hover:text-white underline decoration-slate-600 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Accessibility className="w-3.5 h-3.5 text-red-500" />
                <span>הצהרת נגישות (ת״י 5568 AA)</span>
              </button>
            </div>
            <div className="text-slate-400 flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span>במקרה חירום רפואי אמיתי יש לחייג 101 למוקד מגן דוד אדום</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Utilities */}
      <FloatingWhatsApp />
      <AccessibilityMenu />

      {/* Accessibility Statement Modal */}
      <AccessibilityModal 
        isOpen={isAccessibilityModalOpen} 
        onClose={() => setIsAccessibilityModalOpen(false)} 
      />
    </div>
  );
}

export default App;
