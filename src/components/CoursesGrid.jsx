import React, { useState } from 'react';
import { 
  Stethoscope, 
  LifeBuoy, 
  Dumbbell, 
  ShieldAlert, 
  Baby, 
  Users, 
  Check, 
  Clock, 
  Target, 
  MessageSquare, 
  ArrowLeft,
  Calculator
} from 'lucide-react';
import { COURSES_DATA, SITE_CONFIG } from '../config/siteConfig';

const iconMap = {
  Stethoscope: Stethoscope,
  LifeBuoy: LifeBuoy,
  Dumbbell: Dumbbell,
  ShieldAlert: ShieldAlert,
  Baby: Baby,
  Users: Users,
};

const CoursesGrid = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'כל קורסי הריענון וההדרכות' },
    { id: 'professionals', label: 'ריענון מקצועי ומצילים' },
    { id: 'fitness', label: 'ריענון מאמני כושר' },
    { id: 'parents', label: 'הורים ומשפחה' },
  ];

  const filteredCourses = COURSES_DATA.filter(course => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'professionals') return ['medics', 'lifeguards', 'security'].includes(course.id);
    if (selectedFilter === 'fitness') return course.id === 'fitness';
    if (selectedFilter === 'parents') return ['parents', 'private-group'].includes(course.id);
    return true;
  });

  const getWhatsAppCourseUrl = (courseTitle) => {
    const text = `שלום ysi הדרכות, אני מעוניין לקבל פרטים לגבי ${courseTitle}.`;
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-red-600 font-bold text-sm tracking-wider uppercase bg-red-50 px-3 py-1.5 rounded-full border border-red-100 mb-3 inline-block">
            קורסי ריענון והדרכות מעשיות
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            קורסי הריענון וההדרכות שלנו
          </h2>
          <p className="text-lg text-slate-600">
            קורסי ריענון ממוקדים לחידוש תוקף תעודות ועמידה מלאה בדרישות החוק והרגולציה, לצד סדנאות מעשיות מציגות חיים להורים ולפרטיים.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all cursor-pointer ${
                selectedFilter === filter.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Courses Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredCourses.map((course) => {
            const IconComponent = iconMap[course.iconName] || Stethoscope;
            const whatsappUrl = getWhatsAppCourseUrl(course.title);

            return (
              <div
                key={course.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Card Header with Gradient Accent */}
                <div className={`p-6 bg-gradient-to-br ${course.color} text-white relative`}>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-1 tracking-tight">
                    {course.title}
                  </h3>
                  <p className="text-white/80 text-sm font-medium">
                    {course.subtitle}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Meta Details: Duration & Audience */}
                  <div className="space-y-3 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <Clock className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span>היקף: {course.duration}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-600">
                      <Target className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>קהל יעד: {course.audience}</span>
                    </div>
                  </div>

                  {/* Highlights Checklist */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      נושאי הריענון והתרגול:
                    </h4>
                    <ul className="space-y-2.5">
                      {course.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <span className="w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-lg border border-green-100">
                        תעודת ריענון מוכרת
                      </span>
                      <button
                        onClick={scrollToCalculator}
                        className="text-xs font-bold text-slate-600 hover:text-red-600 flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <Calculator className="w-3.5 h-3.5 text-red-500" />
                        <span>חישוב מחיר במחשבון</span>
                      </button>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 bg-slate-900 hover:bg-red-600 text-white rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xs group/btn"
                    >
                      <MessageSquare className="w-4 h-4 text-green-400 group-hover/btn:text-white transition-colors" />
                      <span>פרטים והרשמה בווצאפ</span>
                      <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Custom / Corporate Requests */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-10 border border-slate-200 max-w-4xl mx-auto shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">זקוקים לריענון או הדרכה מותאמת אישית לארגון?</h3>
            <p className="text-slate-600 text-sm">
              ב-ysi הדרכות אנו מתאימים סילבוס ריענון ייעודי לחברות, מפעלים, מוסדות חינוך וקבוצות פרטיות בכל סדר גודל.
            </p>
          </div>
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm transition-all whitespace-nowrap shadow-md shadow-red-200"
          >
            חיוג לייעוץ: {SITE_CONFIG.phone}
          </a>
        </div>

      </div>
    </section>
  );
};

export default CoursesGrid;
