import React, { useState, useEffect } from 'react';
import { Accessibility, Eye, Type, Link, FileText, Ban, RotateCcw, X } from 'lucide-react';
import AccessibilityModal from './AccessibilityModal';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [stopAnimations, setStopAnimations] = useState(false);

  useEffect(() => {
    const savedContrast = localStorage.getItem('ysi-high-contrast') === 'true';
    const savedText = localStorage.getItem('ysi-large-text') === 'true';
    const savedLinks = localStorage.getItem('ysi-highlight-links') === 'true';
    const savedFont = localStorage.getItem('ysi-readable-font') === 'true';
    const savedAnim = localStorage.getItem('ysi-stop-animations') === 'true';

    if (savedContrast) toggleOption('contrast', true);
    if (savedText) toggleOption('large-text', true);
    if (savedLinks) toggleOption('links', true);
    if (savedFont) toggleOption('font', true);
    if (savedAnim) toggleOption('animations', true);
  }, []);

  const toggleOption = (type, force) => {
    if (type === 'contrast') {
      const newVal = force !== undefined ? force : !highContrast;
      setHighContrast(newVal);
      localStorage.setItem('ysi-high-contrast', newVal);
      document.documentElement.classList.toggle('high-contrast', newVal);
    } else if (type === 'large-text') {
      const newVal = force !== undefined ? force : !largeText;
      setLargeText(newVal);
      localStorage.setItem('ysi-large-text', newVal);
      document.documentElement.classList.toggle('large-text', newVal);
    } else if (type === 'links') {
      const newVal = force !== undefined ? force : !highlightLinks;
      setHighlightLinks(newVal);
      localStorage.setItem('ysi-highlight-links', newVal);
      document.documentElement.classList.toggle('highlight-links', newVal);
    } else if (type === 'font') {
      const newVal = force !== undefined ? force : !readableFont;
      setReadableFont(newVal);
      localStorage.setItem('ysi-readable-font', newVal);
      document.documentElement.classList.toggle('readable-font', newVal);
    } else if (type === 'animations') {
      const newVal = force !== undefined ? force : !stopAnimations;
      setStopAnimations(newVal);
      localStorage.setItem('ysi-stop-animations', newVal);
      document.documentElement.classList.toggle('stop-animations', newVal);
    }
  };

  const resetAll = () => {
    toggleOption('contrast', false);
    toggleOption('large-text', false);
    toggleOption('links', false);
    toggleOption('font', false);
    toggleOption('animations', false);
  };

  const hasAnyActive = highContrast || largeText || highlightLinks || readableFont || stopAnimations;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        {/* Menu Panel */}
        {isOpen && (
          <div 
            className="absolute bottom-16 right-0 mb-3 w-80 bg-white rounded-3xl shadow-2xl border border-slate-200 p-5 animate-in fade-in zoom-in-95 duration-200 text-slate-800"
            role="dialog"
            aria-label="תפריט נגישות"
          >
            <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-red-600" aria-hidden="true" />
                <h3 className="font-bold text-slate-900 text-sm">הגדרות נגישות</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-900 focus:outline-none p-1 rounded-lg"
                aria-label="סגור תפריט נגישות"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => toggleOption('contrast')}
                className={`flex items-center justify-between p-2.5 rounded-2xl transition-all text-xs font-bold cursor-pointer ${
                  highContrast 
                    ? 'bg-slate-900 text-white shadow-xs' 
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
                aria-pressed={highContrast}
              >
                <div className="flex items-center gap-2.5">
                  <Eye className="w-4 h-4 text-red-500" aria-hidden="true" />
                  <span>ניגודיות גבוהה</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20">
                  {highContrast ? 'פעיל' : 'כבוי'}
                </span>
              </button>

              <button 
                onClick={() => toggleOption('large-text')}
                className={`flex items-center justify-between p-2.5 rounded-2xl transition-all text-xs font-bold cursor-pointer ${
                  largeText 
                    ? 'bg-slate-900 text-white shadow-xs' 
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
                aria-pressed={largeText}
              >
                <div className="flex items-center gap-2.5">
                  <Type className="w-4 h-4 text-red-500" aria-hidden="true" />
                  <span>הגדלת גודל טקסט</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20">
                  {largeText ? 'פעיל' : 'כבוי'}
                </span>
              </button>

              <button 
                onClick={() => toggleOption('links')}
                className={`flex items-center justify-between p-2.5 rounded-2xl transition-all text-xs font-bold cursor-pointer ${
                  highlightLinks 
                    ? 'bg-slate-900 text-white shadow-xs' 
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
                aria-pressed={highlightLinks}
              >
                <div className="flex items-center gap-2.5">
                  <Link className="w-4 h-4 text-red-500" aria-hidden="true" />
                  <span>הדגשת קישורים</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20">
                  {highlightLinks ? 'פעיל' : 'כבוי'}
                </span>
              </button>

              <button 
                onClick={() => toggleOption('font')}
                className={`flex items-center justify-between p-2.5 rounded-2xl transition-all text-xs font-bold cursor-pointer ${
                  readableFont 
                    ? 'bg-slate-900 text-white shadow-xs' 
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
                aria-pressed={readableFont}
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-red-500" aria-hidden="true" />
                  <span>גופן קריא</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20">
                  {readableFont ? 'פעיל' : 'כבוי'}
                </span>
              </button>

              <button 
                onClick={() => toggleOption('animations')}
                className={`flex items-center justify-between p-2.5 rounded-2xl transition-all text-xs font-bold cursor-pointer ${
                  stopAnimations 
                    ? 'bg-slate-900 text-white shadow-xs' 
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
                aria-pressed={stopAnimations}
              >
                <div className="flex items-center gap-2.5">
                  <Ban className="w-4 h-4 text-red-500" aria-hidden="true" />
                  <span>עצירת תנועה ואנימציות</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20">
                  {stopAnimations ? 'פעיל' : 'כבוי'}
                </span>
              </button>

              <button 
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="flex items-center justify-center gap-2 p-2.5 mt-1 rounded-2xl bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 transition-all text-xs font-bold cursor-pointer"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span>הצהרת נגישות (ת״י 5568)</span>
              </button>

              {hasAnyActive && (
                <button
                  onClick={resetAll}
                  className="mt-1 text-xs font-semibold text-slate-500 hover:text-red-600 flex items-center justify-center gap-1.5 py-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>איפוס כל ההגדרות</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Floating Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-slate-900 hover:bg-slate-800 text-white p-3.5 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all focus:outline-none focus:ring-4 focus:ring-red-200 cursor-pointer"
          aria-label={isOpen ? "סגור תפריט נגישות" : "פתח תפריט נגישות"}
          aria-expanded={isOpen}
        >
          <Accessibility className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>

      {/* Accessibility Statement Modal */}
      <AccessibilityModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default AccessibilityMenu;
