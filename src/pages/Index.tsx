
import { useState, useEffect } from 'react';
import { Cake, Star, Balloon, Ribbon } from 'lucide-react';

const Index = () => {
  const [showGreeting, setShowGreeting] = useState(false);
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    // Show greeting with delay
    const timer = setTimeout(() => setShowGreeting(true), 500);
    
    // Create floating balloons
    const balloonArray = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      left: Math.random() * 100,
    }));
    setBalloons(balloonArray);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 overflow-hidden relative">
      {/* Floating Balloons */}
      {balloons.map(balloon => (
        <div
          key={balloon.id}
          className="absolute animate-bounce"
          style={{
            left: `${balloon.left}%`,
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${balloon.duration}s`,
            top: '100%'
          }}
        >
          <Balloon 
            className="text-pink-400 w-8 h-8 md:w-10 md:h-10 animate-float" 
            fill="currentColor"
          />
        </div>
      ))}

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
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

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with Birthday Greeting */}
        <div className="text-center mb-12">
          <div className={`transform transition-all duration-1000 ${showGreeting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4 animate-bounce">
              🎉 Selamat Ulang Tahun! 🎉
            </h1>
            <p className="text-lg md:text-xl text-pink-500 font-medium">
              Semoga hari spesialmu penuh kebahagiaan dan cinta ✨
            </p>
          </div>
        </div>

        {/* Birthday Photos Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-12">
          {/* First Photo */}
          <div className="relative group">
            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-pink-200">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/lovable-uploads/e1cae620-6c72-4bd0-acdc-1034b9065fc6.png" 
                  alt="Birthday Person 1"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Cake className="text-pink-500 w-8 h-8 animate-bounce" fill="currentColor" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Ribbon className="text-rose-400 w-6 h-6 animate-pulse" />
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full">
                  <Star className="text-pink-500 w-4 h-4" fill="currentColor" />
                  <span className="text-pink-600 font-semibold">Happy Birthday!</span>
                  <Star className="text-pink-500 w-4 h-4" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          {/* Second Photo */}
          <div className="relative group">
            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-pink-200">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/lovable-uploads/fdc34809-c59b-43e9-80f9-f1355c41658b.png" 
                  alt="Birthday Person 2"
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Balloon className="text-pink-500 w-8 h-8 animate-bounce" fill="currentColor" />
                </div>
                <div className="absolute bottom-4 right-4">
                  <Star className="text-yellow-400 w-6 h-6 animate-spin" fill="currentColor" />
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full">
                  <Cake className="text-pink-500 w-4 h-4" fill="currentColor" />
                  <span className="text-pink-600 font-semibold">Selamat Ulang Tahun!</span>
                  <Cake className="text-pink-500 w-4 h-4" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Birthday Message */}
        <div className="text-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-200 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6">
              🎂 Ucapan Spesial Untuk Kalian 🎂
            </h2>
            <p className="text-lg md:text-xl text-pink-500 leading-relaxed mb-6">
              Di hari yang istimewa ini, semoga kalian selalu dikelilingi kebahagiaan, 
              kesehatan, dan cinta dari orang-orang terkasih. Semoga semua impian kalian 
              menjadi kenyataan dan tahun ini membawa kejutan-kejutan indah! 
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-3xl">
              🎉 🎈 🎂 🌟 💕 🎁 🌈 ✨
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 text-pink-400">
            <Ribbon className="w-8 h-8 animate-pulse" />
            <Cake className="w-10 h-10 animate-bounce" fill="currentColor" />
            <Star className="w-6 h-6 animate-spin" fill="currentColor" />
            <Balloon className="w-8 h-8 animate-bounce" fill="currentColor" />
            <Star className="w-6 h-6 animate-spin" fill="currentColor" />
            <Cake className="w-10 h-10 animate-bounce" fill="currentColor" />
            <Ribbon className="w-8 h-8 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            💖
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
