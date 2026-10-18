import React from 'react';
import { ShieldCheck, Award, HeartHandshake, UserCheck, Zap, Activity } from 'lucide-react';

const AboutTrust = () => {
  const pillars = [
    {
      id: 1,
      title: "מדריכים פאראמדיקים בכירים",
      description: "צוות ההדרכה שלנו מורכב מחובשים בכירים ופאראמדיקים יוצאי מד״א וצה״ל בעלי ניסיון מבצעי של שנים בשטח, המעבירים את החומר בגובה העיניים ובצורה חווייתית ומרתקת.",
      icon: <UserCheck className="w-8 h-8 text-red-600" />,
      color: "bg-red-50 border-red-100",
      iconBg: "bg-red-100 text-red-600"
    },
    {
      id: 2,
      title: "ציוד תרגול מהמתקדמים בעולם",
      description: "אנו משתמשים בבובות החייאה מבוגר ותינוק, מכשירי החייאה דפיברילטור (AED) להדמיה. עם משוב על עומק וקצב העיסויים ועבודה נכונה אל מול הציוד הקיים. ציוד חבישה מתקדם ועוד",
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50 border-blue-100",
      iconBg: "bg-blue-100 text-blue-600"
    },
    {
      id: 3,
      title: "תעודת ריענון מוכרת לחוק",
      description: "בסיום קורס הריענון מונפקת תעודת עזרה ראשונה רשמית המוכרת ע״פ כל דרישות החוק והתקנים – חוק הספורט (למאמני כושר), משרד הפנים (למצילים), משטרת ישראל (למאבטחים) ומשרד החינוך.",
      icon: <Award className="w-8 h-8 text-amber-600" />,
      color: "bg-amber-50 border-amber-100",
      iconBg: "bg-amber-100 text-amber-600"
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-red-600 font-bold text-sm tracking-wider uppercase bg-red-50 px-3 py-1.5 rounded-full border border-red-100 mb-3 inline-block">
            הסטנדרט המקצועי שלנו
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            למה ללמוד עזרה ראשונה אצלנו?
          </h2>
          <p className="text-lg text-slate-600">
            אנו מאמינים שהדרכת עזרה ראשונה איכותית היא לא רק קבלת תעודה – היא היכולת האמיתית לפעול בקור רוח ולהציל חיים ברגע האמת.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${pillar.iconBg} transition-transform group-hover:scale-110`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-red-600 transition-colors">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>100% אחריות מקצועית</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutTrust;
