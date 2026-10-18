import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Clock, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'ריענון חובשים ומע״רים',
    participants: '3-6 משתתפים',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, success, error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');

    // Build WhatsApp message
    const text = `שלום ysi הדרכות, השארתי פרטים באתר:
- שם: ${formData.name}
- טלפון: ${formData.phone}
- סוג הדרכה: ${formData.course}
- מספר משתתפים: ${formData.participants}
- הודעה: ${formData.message || 'אין'}`;

    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    // Automatically open WhatsApp in new tab for fastest response
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Main Box */}
        <div className="max-w-5xl mx-auto bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-12">
            
            {/* Info Column (5 cols) */}
            <div className="md:col-span-5 p-8 md:p-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col justify-between border-b md:border-b-0 md:border-l border-slate-700">
              <div>
                <span className="text-red-400 font-bold text-xs uppercase tracking-wider block mb-2">
                  זמינות ומענה מהיר
                </span>
                <h2 className="text-3xl font-black mb-4 tracking-tight">
                  דברו עם ysi הדרכות
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  מחפשים ריענון דחוף לתעודה או מעוניינים בסדנה פרטית בבית או בעסק?
                  אנחנו כאן לכל שאלה, התייעצות והצעת מחיר.
                </p>

                <div className="space-y-6">
                  {/* Phone Item */}
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">חיוג ישיר</span>
                      <span className="text-base font-black text-white" dir="ltr">{SITE_CONFIG.phone}</span>
                    </div>
                  </a>

                  {/* WhatsApp Item */}
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.defaultWhatsAppMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-600/20 text-green-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">מענה מהיר בווצאפ</span>
                      <span className="text-base font-black text-white">פתיחת שיחה &larr;</span>
                    </div>
                  </a>

                  {/* Service Area */}
                  <div className="flex items-center gap-3 text-xs text-slate-400 pt-2">
                    <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>פריסה ארצית - הגעה עד לבית הלקוח / לארגון</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>שעות מענה: א׳-ה׳ 08:00-21:00, ו׳ 08:00-14:00</span>
                  </div>

                  {/* Accessibility for Deaf and Hard of Hearing */}
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-slate-300 flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 mt-1 flex-shrink-0" aria-hidden="true"></span>
                    <span>
                      <strong>מענה נגיש לכבדי שמיעה וחירשים:</strong> ניתן לפנות אלינו בכל עת בהודעת וואטסאפ כתובה או במילוי הטופס.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8 text-xs text-slate-500 border-t border-slate-800 mt-8">
                מחירים שקופים ומותאמים • תעודה מוכרת רשמית
              </div>
            </div>

            {/* Form Column (7 cols) */}
            <div className="md:col-span-7 p-8 md:p-12 bg-white text-slate-900">
              <h3 className="text-2xl font-black mb-2 tracking-tight">
                השאירו פרטים להצעת מחיר
              </h3>
              <p className="text-slate-500 text-xs md:text-sm mb-6">
                מלאו את הפרטים ונחזור אליכם תוך זמן קצר עם מענה מותאם אישית.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1.5">
                      שם מלא *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-required="true"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="ישראל ישראלי"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                      מספר טלפון *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      aria-required="true"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="054-226-3535"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-right"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="course" className="block text-xs font-bold text-slate-700 mb-1.5">
                      סוג ההדרכה המבוקשת
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-white"
                    >
                      <option value="ריענון חובשים ומע״רים">ריענון חובשים ומע״רים</option>
                      <option value="עזרה ראשונה למצילים">עזרה ראשונה למצילים</option>
                      <option value="עזרה ראשונה למאבטחים">עזרה ראשונה למאבטחים</option>
                      <option value="עזרה ראשונה למאמני כושר (חוק הספורט)">עזרה ראשונה למאמני כושר</option>
                      <option value="סדנת מצבי חירום בילדים להורים">סדנת הורים ומצבי חירום בילדים</option>
                      <option value="הדרכה פרטית / ארגונית מותאמת">הדרכה פרטית / ארגונית</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="participants" className="block text-xs font-bold text-slate-700 mb-1.5">
                      כמות משתתפים משוערת
                    </label>
                    <select
                      id="participants"
                      name="participants"
                      value={formData.participants}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-white"
                    >
                      <option value="פרטי (1-2 משתתפים)">פרטי (1-2 משתתפים - כ-400 ₪ לאדם)</option>
                      <option value="3 עד 6 משתתפים">3 עד 6 משתתפים (כ-150 ₪ לאדם)</option>
                      <option value="7 עד 11 משתתפים">7 עד 11 משתתפים (כ-130 ₪ לאדם)</option>
                      <option value="12 עד 16 משתתפים">12 עד 16 משתתפים (כ-120 ₪ לאדם)</option>
                      <option value="17+ משתתפים (קבוצה גדולה / ארגון)">17+ משתתפים (מחיר מיוחד לארגונים)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1.5">
                    הערות או בקשות מיוחדות (אופציונלי)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="ציינו מיקום מועדף, תאריכים נוחים או כל בקשה מיוחדת..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/25 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>שליחת פנייה וקבלת הצעה</span>
                </button>

                {status === 'success' && (
                  <div 
                    role="status" 
                    aria-live="polite" 
                    className="p-4 bg-green-50 text-green-800 rounded-xl text-center text-xs md:text-sm font-bold border border-green-200 flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>הפרטים נשלחו בהצלחה! פותח עבורך שיחה בווצאפ למענה מיידי...</span>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
