import { useState, useEffect } from 'react';

const languages: string[] = [
  'Techverse 3.0',      // English
  'টেকভার্স 3.0',       // Bengali
  'تکورس 3.0',        // Urdu
  'टेकवर्स 3.0',         // Hindi
  'टेक्वर्से 3.0',         // Sanskrit
  'టెక్వర్స్ 3.0',       // Telegu
  'டெக்வர்ஸ் 3.0',   // Tamil
  'ടെക്‌വേർസ് 3.0', // Malayalam
  'ಟೆಕ್ವರ್ಸ್ 3.0',      // Kannada
  'テックバース 3.0',      // Japanese
  '테크버스 3.0',           // Korean
  '技术宇宙 3.0',           // Chinese (Simplified)
  'Техверс 3.0',           // Russian
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
