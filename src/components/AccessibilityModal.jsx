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
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col text-slate-800 border border-slate-200">
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white">
              <Accessibility className="w-6 h-6" />
            </div>
            <div>
              <h2 id="accessibility-title" className="text-xl font-black">הצהרת נגישות</h2>
              <p className="text-xs text-slate-400">ysi הדרכות • עודכן לאחרונה: אוקטובר 2026</p>
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

        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm leading-relaxed">
          <section>
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>מחויבות לנגישות</span>
            </h3>
            <p className="text-slate-600">
              אתר <strong>ysi הדרכות</strong> פועל בהתאם לעקרון של שוויון, נגישות, שירות מכבד ומקצועי לכלל המשתמשים,
              לרבות אנשים עם מוגבלויות. האתר מתוכנן כדי להקל על שימוש באמצעות מחשב, סמארטפון, מסך קריאה,
              מקלדת, קלט קולי ותצוגות שונות, בהתאם לדרישות הנגישות המודרניות.
            </p>
          </section>

          <section>
            <h3 className="text-base font-bold text-slate-900 mb-2">רמת הנגישות ותקנים</h3>
            <p className="text-slate-600 mb-3">
              האתר מיועד להתאים את עצמו ל<strong>תקן הישראלי ת"י 5568</strong> ולרמת <strong>WCAG 2.1 AA</strong>.
              המטרה היא להבטיח שליטה מלאה בתוכן, קריאה ברורה, ניווט פשוט, ניגודיות נאותה, והזנה של מידע באופן
              שמאפשר שימוש נגיש לכלל האוכלוסייה.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>ניווט מקלדת:</strong> ניתן לנווט בין אלמנטים באמצעות מקש Tab, Shift+Tab, Enter ו-Escape, עם מיקוד ברור ויזואלי.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>קוראי מסך:</strong> האתר משתמש במבנה סמנטי של כותרות, מלל ברור, תוויות בטפסים, ואלמנטים שמיועדים לקריאה נכונה על ידי קוראי מסך.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>תפריט נגישות:</strong> באתר קיימים כלי התאמה לשיפור הקריאה, ניגודיות, קישורים, גופנים, עיצוב, סמן, אנימציות ותוכן.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>ניגודיות וקריאות:</strong> האתר שואף לשמור על ניגודיות גבוהה, גופנים קריאים, מרווחים נאותים, ותוכן ברור ומאורגן.</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-bold text-slate-900 mb-2">כלים זמינים באתר</h3>
            <p className="text-slate-600 mb-3">
              האתר מציע מגוון כלים לעזרה בהנגשת השימוש, לרבות:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>קורא מסך</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>ניווט מקלדת</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>ניווט קולי</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>קורא טקסט</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>אפשרויות ניגודיות, רוויה, התאמות תוכן, מיקום טקסט</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>הדגשת קישורים וכותרות, גופנים קריאים, סמן גדול, עצירת אנימציות</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>עזר קריאה, מבנה דף, מילון, הסתרת תמונות, חלוניות מידע</span></li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-bold text-slate-900 mb-2">חוק שוויון זכויות לאנשים עם מוגבלות</h3>
            <p className="text-slate-600">
              בהתאם ל<strong>חוק שוויון זכויות לאנשים עם מוגבלות, התשנ&quot;ח-1998</strong>, נבחנת נגישות האתר
              כמרכיב יסודי של שירות ציבורי ושותפות שוויונית. כמו כן, על פי הנחיות והתקנים המקובלים, האתר נועד להיות
              נגיש והולם ככל הניתן לצרכים של משתמשים עם מוגבלויות שונות.
            </p>
          </section>

          <section>
            <h3 className="text-base font-bold text-slate-900 mb-2">התאמות ללקויות שמיעה וראייה</h3>
            <p className="text-slate-600">
              האתר נועד להעניק פתרונות תומכי נגישות גם למשתמשים עם לקויות ראייה, לקויות שמיעה, קושי בקריאה,
              ולמכוונים ברכיבי שפה, תצוגה וניווט. המשאב העיקרי הוא התוכן הכתוב, הממוקד והקריא, יחד עם אפשרויות התאמה
              אוטומטיות של האתר לצרכי המשתמש.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <span className="px-3 py-1.5 bg-slate-100 rounded-xl text-xs font-bold text-slate-800">מענה כתוב בווצאפ: {SITE_CONFIG.whatsappDisplay}</span>
              <span className="px-3 py-1.5 bg-slate-100 rounded-xl text-xs font-bold text-slate-800">טופס פנייה באתר</span>
              <span className="px-3 py-1.5 bg-slate-100 rounded-xl text-xs font-bold text-slate-800">דוא&quot;ל: {SITE_CONFIG.email}</span>
            </div>
          </section>

          <section>
            <h3 className="text-base font-bold text-slate-900 mb-2">הדרכות פיזיות ונגישות</h3>
            <p className="text-slate-600">
              הדרכות עזרה ראשונה של <strong>ysi הדרכות</strong> מתוכננות להתאים את המיקום, רמת הנוחות והסביבה
              ללקוח, על פי צרכיו. כמו כן, אנו פועלים לקיים שירות מכבד, ברור ומותאם למשתמשים עם צרכים שונים,
              ובכל מקרה של קושי במיקום, תיאום או לוגיסטיקה, נעמוד לרשות הלקוח כדי למצוא פתרון מתאים.
            </p>
          </section>

          <section className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">פרטי קשר ודיווח על בעיות נגישות</h3>
            <p className="text-xs text-slate-600 mb-3">
              אם נתקלתם בקושי בנגישות, חסר, בעיה טכנית, או שיש לכם רעיון לשיפור, נשמח שתפנו אלינו בהקדם:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>טלפון: <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="font-bold underline" dir="ltr">{SITE_CONFIG.phone}</a></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <MessageSquare className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>וואטסאפ: <a href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="font-bold underline" dir="ltr">{SITE_CONFIG.whatsappDisplay}</a></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 sm:col-span-2">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>דוא&quot;ל: <a href={`mailto:${SITE_CONFIG.email}`} className="font-bold underline">{SITE_CONFIG.email}</a></span>
              </div>
            </div>
          </section>
        </div>

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
