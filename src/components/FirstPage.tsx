
import { useState, useEffect } from 'react';
import { Cake, Star, Heart } from 'lucide-react';

interface FirstPageProps {
  onNext: () => void;
}

const FirstPage = ({ onNext }: FirstPageProps) => {
  const [showGreeting, setShowGreeting] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowGreeting(true), 500);
    const timer2 = setTimeout(() => setShowPhoto(true), 1000);
    const timer3 = setTimeout(() => setShowButton(true), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center">
      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <Star
            key={i}
            className="absolute text-pink-300 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${0.8 + Math.random() * 0.8}rem`
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Header Greeting */}
      <div className="text-center mb-8">
        <div className={`transform transition-all duration-1000 ${showGreeting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-3xl md:text-5xl font-bold text-pink-600 mb-4 animate-bounce">
            🎉 Happy Birthday! 🎉
          </h1>
          <p className="text-lg md:text-xl text-pink-500 font-medium">
            Untuk seseorang yang sangat spesial ✨
          </p>
        </div>
      </div>

      {/* Photo Section */}
      <div className="flex justify-center mb-8">
        <div className={`transform transition-all duration-1000 ${showPhoto ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-pink-200 max-w-md mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="/lovable-uploads/e1cae620-6c72-4bd0-acdc-1034b9065fc6.png" 
                alt="Erica Meliani"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute top-4 right-4">
                <Cake className="text-pink-500 w-8 h-8 animate-bounce" fill="currentColor" />
              </div>
              <div className="absolute top-4 left-4">
                <Heart className="text-pink-500 w-8 h-8 animate-bounce" fill="currentColor" />
              </div>
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2">
                Erica Meliani
              </h2>
              <div className="inline-flex items-center gap-2 bg-pink-100 px-6 py-3 rounded-full">
                <Star className="text-pink-500 w-5 h-5" fill="currentColor" />
                <span className="text-pink-600 font-semibold text-lg">Happy Birthday!</span>
                <Star className="text-pink-500 w-5 h-5" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Message */}
      <div className="text-center mb-8">
        <div className={`transform transition-all duration-1000 ${showPhoto ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border-2 border-pink-200 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-pink-600 leading-relaxed font-medium">
              Hari ini adalah hari yang sangat spesial untuk seseorang yang luar biasa! 🌸
            </p>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="text-center">
        <div className={`transform transition-all duration-1000 ${showButton ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button
            onClick={onNext}
            className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:from-pink-500 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
          >
            Lihat Ucapan Spesial 💕
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-4 text-pink-400">
          <Heart className="w-6 h-6 animate-bounce" fill="currentColor" />
          <Cake className="w-8 h-8 animate-bounce" fill="currentColor" />
          <Heart className="w-6 h-6 animate-bounce" fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
