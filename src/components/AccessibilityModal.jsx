import React, { useEffect } from 'react';
import { X, ShieldCheck, Phone, Mail, MessageSquare, CheckCircle2, Accessibility } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const AccessibilityModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="accessibility-title"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col text-slate-800 border border-slate-200">
        
        {/* Modal Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white">
              <Accessibility className="w-6 h-6" />
            </div>
            <div>
              <h2 id="accessibility-title" className="text-xl font-black">
                הצהרת נגישות
              </h2>
              <p className="text-xs text-slate-400">
                ysi הדרכות • עודכן לאחרונה: אוקטובר 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="סגור הצהרת נגישות"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm leading-relaxed">
          
          <section>
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>מחויבות לנגישות</span>
            </h3>
            <p className="text-slate-600">
              ב-<strong>ysi הדרכות</strong> אנו מחויבים לספק שירות שוויוני, מכבד, נגיש ומקצועי לכלל האזרחים, לרבות אנשים עם מוגבלות (עיוורים, לקויי ראייה, חירשים, כבדי שמיעה ומוגבלי ניידות). אנו פועלים בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, תשנ״ח-1998 ולתקנות שהותקנו מכוחו.
            </p>
          </section>

          <section>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              רמת הנגישות ותקנים (ת״י 5568 ברמה AA)
            </h3>
            <p className="text-slate-600 mb-3">
              אתר זה מותאם לדרישות הנגישות לפי <strong>תקן ישראלי 5568 ברמה AA</strong> ולהנחיות הבינלאומיות <strong>WCAG 2.1</strong>.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>ניווט מקלדת מלא:</strong> ניתן לנווט בכל חלקי האתר, בטפסים ובכפתורים באמצעות מקש Tab ו-Shift+Tab ללא שימוש בעכבר.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>התאמה לקוראי מסך:</strong> מבנה סמנטי תקין (כותרות H1-H3, ציוני דרך Landmark), תגיות ARIA מלאות ותיאורי תמונות (Alt text).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>תפריט נגישות ייעודי:</strong> כולל מצב ניגודיות גבוהה, הגדלת טקסט, גופן קריא, הדגשת קישורים ועצירת אנימציות.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>התאמה לעיוורי צבעים ולניגודיות:</strong> יחס ניגודיות גבוה בין טקסט לרקע (מעל 4.5:1).</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              התאמות לחירשים וכבדי שמיעה
            </h3>
            <p className="text-slate-600">
              למען לקוחות כבדי שמיעה וחירשים, האתר מאפשר יצירת קשר מלאה וקבלת שירות באמצעים דיגיטליים כתובים ללא צורך בחיוג טלפוני:
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <span className="px-3 py-1.5 bg-slate-100 rounded-xl text-xs font-bold text-slate-800">
                מענה כתוב בווצאפ: 054-226-3535
              </span>
              <span className="px-3 py-1.5 bg-slate-100 rounded-xl text-xs font-bold text-slate-800">
                טופס פנייה באתר
              </span>
              <span className="px-3 py-1.5 bg-slate-100 rounded-xl text-xs font-bold text-slate-800">
                דוא״ל: contact@ysi.co.il
              </span>
            </div>
          </section>

          <section>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              הסדרי נגישות פיזיים בהדרכות
            </h3>
            <p className="text-slate-600">
              הדרכות עזרה ראשונה של <strong>ysi הדרכות</strong> מועברות כברירת מחדל <strong>בהגעה עד לבית הלקוח, למשרד או לארגון</strong> בפריסה ארצית, בהתאם למיקום הנגיש ללקוח. במידה וההדרכה מתקיימת בכיתת הדרכה מטעמנו, המקום נגיש במלואו לנכים לרבות חניית נכים, דרכי גישה ושירותי נכים. במידה ונדרשות התאמות הדרכה ייעודיות נוספות, ניתן לפנות אלינו מראש.
            </p>
          </section>

          <section className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">
              פרטי רכז הנגישות ודיווח על תקלות
            </h3>
            <p className="text-xs text-slate-600 mb-3">
              אם נתקלתם בבעיית נגישות באתר או שיש לכם הצעה לשיפור, נשמח שתפנו אלינו ונטפל בכך בהקדם:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>טלפון: <a href="tel:0542263535" className="font-bold underline" dir="ltr">054-226-3535</a></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <MessageSquare className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>וואטסאפ: <a href="https://wa.me/972542263535" target="_blank" rel="noopener noreferrer" className="font-bold underline" dir="ltr">054-226-3535</a></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 sm:col-span-2">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>דוא״ל: <a href="mailto:contact@ysi.co.il" className="font-bold underline">contact@ysi.co.il</a></span>
              </div>
            </div>
          </section>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors focus:ring-2 focus:ring-red-500"
          >
            סגור
          </button>
        </div>

      </div>
    </div>
  );
};

export default AccessibilityModal;
