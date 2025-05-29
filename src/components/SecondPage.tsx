
import { useState, useEffect } from 'react';
import { Heart, Star, Cake } from 'lucide-react';

interface SecondPageProps {
  onPrev: () => void;
}

const SecondPage = ({ onPrev }: SecondPageProps) => {
  const [showContent, setShowContent] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowContent(true), 500);
    const timer2 = setTimeout(() => setShowMusic(true), 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Note: Actual music playback would require audio file implementation
    console.log(isPlaying ? 'Pausing music' : 'Playing "Love" by Wave to Earth');
  };

  return (
    <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen">
      {/* Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {i % 3 === 0 ? (
              <Star className="text-pink-300 w-4 h-4" fill="currentColor" />
            ) : i % 3 === 1 ? (
              <span className="text-pink-300 text-xl">🎀</span>
            ) : (
              <span className="text-pink-300 text-lg">🌸</span>
            )}
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <div className={`transform transition-all duration-1000 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-3xl md:text-5xl font-bold text-pink-600 mb-4">
            💝 Ucapan Spesial 💝
          </h1>
          <h2 className="text-xl md:text-2xl text-pink-500 font-medium">
            Untuk Erica Meliani yang terkasih
          </h2>
        </div>
      </div>

      {/* Music Player */}
      <div className="text-center mb-8">
        <div className={`transform transition-all duration-1000 ${showMusic ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border-2 border-pink-200 max-w-sm mx-auto">
            <p className="text-pink-600 font-medium mb-3">🎵 "Love" - Wave to Earth</p>
            <button
              onClick={toggleMusic}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isPlaying 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
              }`}
            >
              {isPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Message Section */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className={`transform transition-all duration-1000 delay-300 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/85 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-3 border-pink-200">
            <div className="text-center mb-8">
              <img 
                src="/lovable-uploads/fdc34809-c59b-43e9-80f9-f1355c41658b.png" 
                alt="Erica Meliani Birthday"
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto mb-6 border-4 border-pink-300 shadow-lg"
              />
            </div>
            
            <div className="space-y-6 text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6 text-center">
                🎂 Selamat Ulang Tahun Erica! 🎂
              </h3>
              
              <div className="text-base md:text-lg text-pink-700 leading-relaxed space-y-6">
                <p>
                  Terlahir sebagai manusia yang ceritanya dirangkai dengan hebat oleh Sang Penulis Semesta, aku bersyukur dengan dihadirkannya engkau di waktu yang tak terduga. Kau sungguh tertulis indah di halaman paling menyenangkan dalam hidupku.
                </p>
                
                <p>
                  Senang mengenal manusia penuh kejutan sepertimu,<br/>
                  yang bisa membuat tawa hanya lewat tingkah sederhana,<br/>
                  yang kadang membuat kesal dengan seribu keusilannya.<br/>
                  Tapi di situlah letak pesonamu—tak pernah bisa ditebak, tapi selalu menyenangkan.
                </p>
                
                <p>
                  Walaupun kita belum pernah benar-benar ngobrol secara langsung,<br/>
                  rasanya seperti sudah lama saling kenal.<br/>
                  Kehadiranmu tetap terasa hangat,<br/>
                  seperti pelangi yang muncul diam-diam setelah hujan.
                </p>
                
                <p>
                  Aku tahu, Erica…<br/>
                  kamu sering menyembunyikan banyak hal di balik senyummu.<br/>
                  Ada banyak rasa yang kamu pendam sendiri,<br/>
                  banyak hal yang kamu tahan demi nggak bikin orang lain khawatir.<br/>
                  Kamu takut kehilangan, tapi tetap memilih bertahan dan jadi kuat,<br/>
                  meski di dalam kamu sedang berjuang sendirian.
                </p>
                
                <p>
                  Di hari spesialmu ini, aku cuma ingin bilang:<br/>
                  Kamu hebat. Kamu layak dipeluk oleh dunia,<br/>
                  layak untuk didengarkan, dipahami, dan dicintai tanpa syarat.<br/>
                  Jangan terlalu sering menahan semuanya sendiri, ya.<br/>
                  Kamu nggak harus selalu jadi kuat sendirian.
                </p>
                
                <p>
                  Selamat ulang tahun, Erica Meliani.<br/>
                  Semoga tahun ini hatimu jauh lebih tenang,<br/>
                  dan kamu bisa merasa cukup… tanpa harus menyembunyikan luka.<br/>
                  Semoga kamu diberi keberanian untuk terus mencintai hidup,<br/>
                  meskipun kadang dunia terasa berat.
                </p>
                
                <p className="text-center font-semibold text-pink-600 text-lg">
                  Tetap jadi kamu, dengan seluruh keunikan dan hangatnya.<br/>
                  Karena dirimu, bahkan dalam diam, sudah cukup indah. ✨
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-3xl mt-8">
                🎉 🎈 🎂 🌟 💕 🎁 🌈 ✨ 🌸 💝
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Button */}
      <div className="text-center">
        <button
          onClick={onPrev}
          className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:from-pink-500 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
        >
          ← Kembali ke Halaman Pertama
        </button>
      </div>

      {/* Bottom Decorations */}
      <div className="text-center mt-8">
        <div className="inline-flex items-center gap-4 text-pink-400">
          <Heart className="w-8 h-8 animate-bounce" fill="currentColor" />
          <Cake className="w-10 h-10 animate-bounce" fill="currentColor" />
          <Star className="w-6 h-6 animate-spin" fill="currentColor" />
          <Heart className="w-8 h-8 animate-bounce" fill="currentColor" />
          <Star className="w-6 h-6 animate-spin" fill="currentColor" />
          <Cake className="w-10 h-10 animate-bounce" fill="currentColor" />
          <Heart className="w-8 h-8 animate-bounce" fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
