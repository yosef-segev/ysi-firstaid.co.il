import React, { useState, useEffect } from 'react';
import {
  Accessibility,
  Eye,
  Type,
  Link,
  FileText,
  Ban,
  RotateCcw,
  X,
  Volume2,
  Keyboard,
  Mic,
  Contrast,
  Palette,
  AlignLeft,
  MousePointer2,
  EyeOff,
  BookOpenText,
  LayoutGrid,
  Languages,
  Info,
  MessageSquareText,
} from 'lucide-react';
import AccessibilityModal from './AccessibilityModal';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [screenReader, setScreenReader] = useState(false);
  const [keyboardNavigation, setKeyboardNavigation] = useState(false);
  const [voiceNavigation, setVoiceNavigation] = useState(false);
  const [textReader, setTextReader] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [saturation, setSaturation] = useState(false);
  const [contentAdjustments, setContentAdjustments] = useState(false);
  const [textAlignment, setTextAlignment] = useState('center');
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [largeCursor, setLargeCursor] = useState(false);
  const [stopAnimations, setStopAnimations] = useState(false);
  const [readingMask, setReadingMask] = useState(false);
  const [pageStructure, setPageStructure] = useState(false);
  const [dictionary, setDictionary] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [infoPanels, setInfoPanels] = useState(false);

  useEffect(() => {
    const saved = {
      screenReader: localStorage.getItem('ysi-screen-reader') === 'true',
      keyboardNavigation: localStorage.getItem('ysi-keyboard-navigation') === 'true',
      voiceNavigation: localStorage.getItem('ysi-voice-navigation') === 'true',
      textReader: localStorage.getItem('ysi-text-reader') === 'true',
      highContrast: localStorage.getItem('ysi-high-contrast') === 'true',
      saturation: localStorage.getItem('ysi-saturation') === 'true',
      contentAdjustments: localStorage.getItem('ysi-content-adjustments') === 'true',
      textAlignment: localStorage.getItem('ysi-text-alignment') || 'center',
      highlightLinks: localStorage.getItem('ysi-highlight-links') === 'true',
      readableFont: localStorage.getItem('ysi-readable-font') === 'true',
      largeCursor: localStorage.getItem('ysi-large-cursor') === 'true',
      stopAnimations: localStorage.getItem('ysi-stop-animations') === 'true',
      readingMask: localStorage.getItem('ysi-reading-mask') === 'true',
      pageStructure: localStorage.getItem('ysi-page-structure') === 'true',
      dictionary: localStorage.getItem('ysi-dictionary') === 'true',
      hideImages: localStorage.getItem('ysi-hide-images') === 'true',
      infoPanels: localStorage.getItem('ysi-info-panels') === 'true'
    };

    if (saved.screenReader) toggleOption('screen-reader', true);
    if (saved.keyboardNavigation) toggleOption('keyboard-navigation', true);
    if (saved.voiceNavigation) toggleOption('voice-navigation', true);
    if (saved.textReader) toggleOption('text-reader', true);
    if (saved.highContrast) toggleOption('contrast', true);
    if (saved.saturation) toggleOption('saturation', true);
    if (saved.contentAdjustments) toggleOption('content-adjustments', true);
    if (saved.textAlignment) applyTextAlignment(saved.textAlignment);
    if (saved.highlightLinks) toggleOption('links', true);
    if (saved.readableFont) toggleOption('font', true);
    if (saved.largeCursor) toggleOption('large-cursor', true);
    if (saved.stopAnimations) toggleOption('animations', true);
    if (saved.readingMask) toggleOption('reading-mask', true);
    if (saved.pageStructure) toggleOption('page-structure', true);
    if (saved.dictionary) toggleOption('dictionary', true);
    if (saved.hideImages) toggleOption('hide-images', true);
    if (saved.infoPanels) toggleOption('info-panels', true);
  }, []);

  const applyTextAlignment = (alignment) => {
    const normalized = ['left', 'right', 'center'].includes(alignment) ? alignment : 'center';
    setTextAlignment(normalized);
    localStorage.setItem('ysi-text-alignment', normalized);
    document.documentElement.classList.remove('text-align-left', 'text-align-right', 'text-align-center');
    document.documentElement.classList.add(`text-align-${normalized}`);
  };

  const toggleOption = (type, force) => {
    const options = {
      'screen-reader': { value: screenReader, setter: setScreenReader, key: 'ysi-screen-reader', className: 'screen-reader' },
      'keyboard-navigation': { value: keyboardNavigation, setter: setKeyboardNavigation, key: 'ysi-keyboard-navigation', className: 'keyboard-navigation' },
      'voice-navigation': { value: voiceNavigation, setter: setVoiceNavigation, key: 'ysi-voice-navigation', className: 'voice-navigation' },
      'text-reader': { value: textReader, setter: setTextReader, key: 'ysi-text-reader', className: 'text-reader' },
      contrast: { value: highContrast, setter: setHighContrast, key: 'ysi-high-contrast', className: 'high-contrast' },
      saturation: { value: saturation, setter: setSaturation, key: 'ysi-saturation', className: 'saturation' },
      'content-adjustments': { value: contentAdjustments, setter: setContentAdjustments, key: 'ysi-content-adjustments', className: 'content-adjustments' },
      links: { value: highlightLinks, setter: setHighlightLinks, key: 'ysi-highlight-links', className: 'highlight-links' },
      font: { value: readableFont, setter: setReadableFont, key: 'ysi-readable-font', className: 'readable-font' },
      'large-cursor': { value: largeCursor, setter: setLargeCursor, key: 'ysi-large-cursor', className: 'large-cursor' },
      animations: { value: stopAnimations, setter: setStopAnimations, key: 'ysi-stop-animations', className: 'stop-animations' },
      'reading-mask': { value: readingMask, setter: setReadingMask, key: 'ysi-reading-mask', className: 'reading-mask' },
      'page-structure': { value: pageStructure, setter: setPageStructure, key: 'ysi-page-structure', className: 'page-structure' },
      dictionary: { value: dictionary, setter: setDictionary, key: 'ysi-dictionary', className: 'dictionary' },
      'hide-images': { value: hideImages, setter: setHideImages, key: 'ysi-hide-images', className: 'hide-images' },
      'info-panels': { value: infoPanels, setter: setInfoPanels, key: 'ysi-info-panels', className: 'info-panels' }
    };

    const option = options[type];
    if (!option) return;

    const nextValue = force !== undefined ? force : !option.value;
    option.setter(nextValue);
    localStorage.setItem(option.key, String(nextValue));
    document.documentElement.classList.toggle(option.className, nextValue);
  };

  const resetAll = () => {
    toggleOption('contrast', false);
    toggleOption('saturation', false);
    toggleOption('content-adjustments', false);
    applyTextAlignment('center');
    toggleOption('links', false);
    toggleOption('font', false);
    toggleOption('large-cursor', false);
    toggleOption('animations', false);
    toggleOption('reading-mask', false);
    toggleOption('page-structure', false);
    toggleOption('dictionary', false);
    toggleOption('hide-images', false);
    toggleOption('info-panels', false);
    toggleOption('screen-reader', false);
    toggleOption('keyboard-navigation', false);
    toggleOption('voice-navigation', false);
    toggleOption('text-reader', false);
  };

  const hasAnyActive =
    screenReader ||
    keyboardNavigation ||
    voiceNavigation ||
    textReader ||
    highContrast ||
    saturation ||
    contentAdjustments ||
    textAlignment !== 'center' ||
    highlightLinks ||
    readableFont ||
    largeCursor ||
    stopAnimations ||
    readingMask ||
    pageStructure ||
    dictionary ||
    hideImages ||
    infoPanels;

  const settings = [
    { key: 'screenReader', label: 'קורא מסך', description: 'מסייע למשתמשים עם לקות ראייה על ידי קריאת תוכן האתר בקול רם.', icon: Volume2, active: screenReader, onToggle: () => toggleOption('screen-reader') },
    { key: 'keyboardNavigation', label: 'ניווט מקלדת', description: 'מאפשר למשתמשים לנווט באתר באמצעות המקלדת בלבד.', icon: Keyboard, active: keyboardNavigation, onToggle: () => toggleOption('keyboard-navigation') },
    { key: 'voiceNavigation', label: 'ניווט קולי', description: 'מאפשר למשתמשים לשלוט באתר באמצעות פקודות קוליות.', icon: Mic, active: voiceNavigation, onToggle: () => toggleOption('voice-navigation') },
    { key: 'textReader', label: 'קורא טקסט', description: 'מספק דרך קלה לקריאת הטקסט בקול רם.', icon: MessageSquareText, active: textReader, onToggle: () => toggleOption('text-reader') },
    { key: 'highContrast', label: 'אפשרויות ניגודיות', description: 'מעבר בין ניגודיות כהה לבהירה בהתאם להעדפות הויזואליות.', icon: Contrast, active: highContrast, onToggle: () => toggleOption('contrast') },
    { key: 'saturation', label: 'הגדרות רוויה', description: 'התאמה בין רוויה גבוהה לנמוכה או מעבר למצב שחור-לבן לפשטות ויזואלית.', icon: Palette, active: saturation, onToggle: () => toggleOption('saturation') },
    { key: 'contentAdjustments', label: 'התאמות תוכן', description: 'שינוי גודל טקסט, ריווח טקסט, ריווח גובה וריווח אותיות לשיפור הקריאות.', icon: Type, active: contentAdjustments, onToggle: () => toggleOption('content-adjustments') },
    { key: 'textAlignment', label: 'מיקום טקסט', description: 'יישור טקסט לשמאל, לימין או למרכז לנוחיותך.', icon: AlignLeft, active: textAlignment !== 'center', onToggle: () => applyTextAlignment(textAlignment === 'center' ? 'right' : textAlignment === 'right' ? 'left' : 'center') },
    { key: 'highlightLinks', label: 'הדגשת קישורים וכותרות', description: 'הדגשת קישורים וכותרות לאיתור קל של מידע חשוב.', icon: Link, active: highlightLinks, onToggle: () => toggleOption('links') },
    { key: 'readableFont', label: 'גופנים קריאים', description: 'הפעלת גופנים קריאים יותר לבהירות טובה יותר.', icon: FileText, active: readableFont, onToggle: () => toggleOption('font') },
    { key: 'largeCursor', label: 'סמן גדול', description: 'הגדלת הסמן לשיפור הנראות.', icon: MousePointer2, active: largeCursor, onToggle: () => toggleOption('large-cursor') },
    { key: 'stopAnimations', label: 'עצירת אנימציות', description: 'השהיית כל האנימציות להפחתת הסחות דעת.', icon: Ban, active: stopAnimations, onToggle: () => toggleOption('animations') },
    { key: 'readingMask', label: 'עזר קריאה', description: 'שימוש במסיכת קריאה או מדריך קריאה לעזרה בהתמקדות בחלקים ספציפיים של הטקסט.', icon: Eye, active: readingMask, onToggle: () => toggleOption('reading-mask') },
    { key: 'pageStructure', label: 'מבנה דף', description: 'ניווט קל דרך מבנה הדף.', icon: LayoutGrid, active: pageStructure, onToggle: () => toggleOption('page-structure') },
    { key: 'dictionary', label: 'מילון', description: 'קבלת הגדרות למילים קשות ישירות בדף.', icon: Languages, active: dictionary, onToggle: () => toggleOption('dictionary') },
    { key: 'hideImages', label: 'הסתרת תמונות', description: 'הסתרת תמונות להתמקדות בתוכן הטקסטואלי.', icon: EyeOff, active: hideImages, onToggle: () => toggleOption('hide-images') },
    { key: 'infoPanels', label: 'חלוניות מידע', description: 'הפעלת חלוניות מידע להסברים נוספים על אלמנטים.', icon: Info, active: infoPanels, onToggle: () => toggleOption('info-panels') }
  ];

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        {isOpen && (
          <div
            className="absolute bottom-16 right-0 mb-3 w-[22rem] bg-white rounded-3xl shadow-2xl border border-slate-200 p-5 animate-in fade-in zoom-in-95 duration-200 text-slate-800"
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

            <div className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto pr-1">
              {settings.map(({ key, label, description, icon: Icon, active, onToggle }) => (
                <button
                  key={key}
                  onClick={onToggle}
                  className={`flex items-start justify-between gap-2 p-3 rounded-2xl transition-all text-right cursor-pointer border ${
                    active
                      ? 'bg-slate-900 text-white shadow-xs border-slate-900'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                  }`}
                  aria-pressed={active}
                >
                  <div className="flex items-start gap-2.5 flex-1 min-w-0">
                    <div className={`mt-0.5 flex-shrink-0 ${active ? 'text-red-300' : 'text-red-500'}`}>
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] md:text-xs font-black leading-5">{label}</div>
                      <div className={`mt-1 text-[10px] leading-relaxed ${active ? 'text-slate-300' : 'text-slate-500'}`}>
                        {description}
                      </div>
                    </div>
                  </div>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full whitespace-nowrap ${active ? 'bg-white/10 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}>
                    {active ? 'פעיל' : 'כבוי'}
                  </span>
                </button>
              ))}

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

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-slate-900 hover:bg-slate-800 text-white p-3.5 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all focus:outline-none focus:ring-4 focus:ring-red-200"
          aria-label={isOpen ? 'סגור תפריט נגישות' : 'פתח תפריט נגישות'}
          aria-expanded={isOpen}
        >
          <Accessibility className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>

      <AccessibilityModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default AccessibilityMenu;
