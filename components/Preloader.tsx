import { useState, useEffect } from 'react';

const languages: string[] = [
  'Techverse 3.0',         // English
  'टेकवर्स 3.0',           // Hindi
  'تکورس 3.0',             // Urdu
  'テックバース 3.0',      // Japanese
  '테크버스 3.0',           // Korean
  '技术宇宙 3.0',           // Chinese (Simplified)
  'Техверс 3.0',           // Russian
  'تكنولوجيا 3.0',         // Arabic (alternative for tech)
  'טֶכנווֶרס 3.0',        // Hebrew
  'टेकवर्स 3.0',           // Marathi
  'Τεχνοβέρσο 3.0',        // Greek
  'Tecnoverso 3.0',        // Italian
  'टेकवर्स 3.0',           // Nepali
  'เทคเวิร์ส 3.0',         // Thai
  'Техноверсум 3.0',       // Serbian
  'ტექვერს 3.0',           // Georgian
];

const Preloader: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLang((prevLang) => (prevLang + 1) % languages.length);
    }, 200); // Change language every 0.5 second
    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <h1 style={{ 
            fontFamily: 'AnotherFont',
            textShadow: '0 0 15px rgba(128, 0, 128, 1), 0 0 30px rgba(128, 0, 128, 0.9), 0 0 45px rgba(128, 0, 128, 0.7)', // Enhanced purple glow
            color: 'white' // Keeping the text itself white
          }} className="-mt-64 sm:-mt-40 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-widest text-gray-200 animate-none transition-transform transform hover:scale-105">
        {languages[currentLang]}
      </h1>
    </div>
  );
};

export default Preloader;
