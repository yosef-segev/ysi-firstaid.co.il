import React, { useState } from 'react';
import { Calculator, MessageSquare, Phone, CheckCircle2, Sparkles, HelpCircle, Users, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const PriceCalculator = () => {
  const [courseType, setCourseType] = useState('medics');
  const [groupSize, setGroupSize] = useState('group_3_6');
  const [location, setLocation] = useState('home');

  const courseOptions = [
    { id: 'medics', name: 'ריענון חובשים / מע"רים' },
    { id: 'lifeguards', name: 'עזרה ראשונה למצילים' },
    { id: 'fitness', name: 'עזרה ראשונה למאמני כושר (חוק הספורט)' },
    { id: 'security', name: 'עזרה ראשונה למאבטחים' },
    { id: 'parents', name: 'סדנת מצבי חירום בילדים להורים' },
    { id: 'custom', name: 'הדרכה ארגונית / מותאמת אישית' },
  ];

  const groupOptions = [
    { 
      id: 'single', 
      name: 'פרטי (1-2 משתתפים)', 
      priceDisplay: 'כ-400 ₪', 
      priceSubtext: 'לאדם (הדרכה פרטית אישית VIP)',
      isSpecial: false 
    },
    { 
      id: 'group_3_6', 
      name: '3 עד 6 משתתפים', 
      priceDisplay: 'כ-150 ₪', 
      priceSubtext: 'לאדם בקבוצה',
      isSpecial: false 
    },
    { 
      id: 'group_7_11', 
      name: '7 עד 11 משתתפים', 
      priceDisplay: 'כ-130 ₪', 
      priceSubtext: 'לאדם בקבוצה',
      isSpecial: false 
    },
    { 
      id: 'group_12_16', 
      name: '12 עד 16 משתתפים', 
      priceDisplay: 'כ-120 ₪', 
      priceSubtext: 'לאדם בקבוצה',
      isSpecial: false 
    },
    { 
      id: 'corporate', 
      name: 'קבוצה גדולה / ארגון (17+)', 
      priceDisplay: 'מחיר מיוחד', 
      priceSubtext: 'דברו איתנו להצעה מותאמת אישית',
      isSpecial: true 
    },
  ];

  const locationOptions = [
    { id: 'home', name: 'הגעה עד אליכם (לבית / למשרד / לקאנטרי)' },
    { id: 'center', name: 'בכיתת ההדרכה שלנו' },
  ];

  const selectedCourseObj = courseOptions.find(c => c.id === courseType) || courseOptions[0];
  const selectedGroupObj = groupOptions.find(g => g.id === groupSize) || groupOptions[1];
  const selectedLocationObj = locationOptions.find(l => l.id === location) || locationOptions[0];
  const estimatedPriceText = selectedGroupObj.isSpecial
    ? 'מחיר מותאם'
    : selectedGroupObj.priceDisplay.replace(/^כ-/, '');

  const buildWhatsAppMessage = () => {
    const text = `שלום ysi הדרכות, השתמשתי במחשבון המחיר באתר:
- סוג הדרכה: ${selectedCourseObj.name}
- כמות משתתפים: ${selectedGroupObj.name} (${selectedGroupObj.priceDisplay} ${selectedGroupObj.priceSubtext})
- מיקום: ${selectedLocationObj.name}
אשמח לקבל הצעת מחיר סופית ולשריין תאריך.`;
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculator" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-bold mb-3 border border-red-100">
            <Calculator className="w-4 h-4" />
            <span>מחשבון עלויות והתאמת הדרכה</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            מחשבון מחיר להדרכות עזרה ראשונה
          </h2>
          <p className="text-lg text-slate-600">
            בחרו את סוג ההדרכה ומספר המשתתפים לקבלת המחיר המדויק. המחירים שקופים ומשתלמים במיוחד!
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm">
          <div className="grid md:grid-cols-12 gap-8">
            
            {/* Options Column */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Step 1: Course Selection */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  1. בחרו את סוג ההדרכה:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {courseOptions.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCourseType(c.id)}
                      className={`p-3 rounded-2xl text-right text-xs md:text-sm font-bold transition-all border cursor-pointer ${
                        courseType === c.id
                          ? 'bg-red-600 text-white border-red-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Group Size */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  2. מספר משתתפים ומדרגות מחיר:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {groupOptions.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setGroupSize(g.id)}
                      className={`p-3 rounded-2xl text-right transition-all border cursor-pointer ${
                        groupSize === g.id
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs md:text-sm font-bold flex items-center justify-between">
                        <span>{g.name}</span>
                        <span className={`text-[11px] font-black px-2 py-0.5 rounded-md ${
                          groupSize === g.id ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-800'
                        }`}>
                          {g.priceDisplay}
                        </span>
                      </div>
                      <div className={`text-[11px] mt-1 ${groupSize === g.id ? 'text-slate-300' : 'text-slate-500'}`}>
                        {g.priceSubtext}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Location */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  3. מיקום ההדרכה:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {locationOptions.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => setLocation(l.id)}
                      className={`p-3 rounded-2xl text-right text-xs md:text-sm font-bold transition-all border cursor-pointer ${
                        location === l.id
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {l.name}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Summary & Price Display Column */}
            <div className="md:col-span-5 flex flex-col justify-between bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <span className="text-sm font-bold text-slate-900">סיכום התאמה אישית:</span>
                  <Sparkles className="w-5 h-5 text-amber-500" />
                </div>

                <div className="space-y-3 text-xs md:text-sm text-slate-600 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>הדרכה:</strong> {selectedCourseObj.name}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>הרכב:</strong> {selectedGroupObj.name}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>מיקום:</strong> {selectedLocationObj.name}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>כולל ציוד תרגול מלא ותעודה מוכרת במקום</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-center mb-6">
                  <span className="text-xs text-slate-500 font-medium block">
                    {selectedGroupObj.isSpecial ? 'הצעה מותאמת' : 'עלות למשתתף'}
                  </span>
                  
                  <div className="flex items-baseline justify-center gap-1.5 mt-1">
                    <span className="text-3xl md:text-4xl font-black text-red-600">
                      {selectedGroupObj.priceDisplay}
                    </span>
                  </div>
                  
                  <span className="text-[12px] text-slate-500 font-medium block mt-1">
                    {selectedGroupObj.priceSubtext}
                  </span>
                </div>

                <div className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-right">
                  <div className="text-sm font-black text-slate-800">
                    עלות משוערת להדרכה: החל מ-{estimatedPriceText}*
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                    * המחיר הינו עבור ההדרכה בלבד ואינו כולל נסיעות/השכרת כיתה. הצעת מחיר סופית כפופה לאישור זמינות, מיקום ואזורי פעילות.
                  </p>
                </div>

                <a
                  href={buildWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-green-600/20"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>שליחת הבחירה לווצאפ וקבלת הצעה</span>
                </a>

                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="w-full mt-2.5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl font-semibold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-600" />
                  <span>מעדיפים לדבר? <span dir="ltr">{SITE_CONFIG.phone}</span></span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PriceCalculator;
