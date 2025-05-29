
import { useState, useEffect } from 'react';
import FirstPage from '../components/FirstPage';
import SecondPage from '../components/SecondPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNextPage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(2);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrevPage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(1);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 overflow-hidden relative">
      {/* Page Content */}
      <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {currentPage === 1 ? (
          <FirstPage onNext={goToNextPage} />
        ) : (
          <SecondPage onPrev={goToPrevPage} />
        )}
      </div>

      {/* Floating Background Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
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

      <style>{`
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
