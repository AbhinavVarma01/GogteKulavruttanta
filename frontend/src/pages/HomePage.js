import React, { useState } from 'react';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const [showText, setShowText] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const hoverText = `परशुराम हा जमदग्नी आणि रेणुकेचा मुलगा होता. जमदग्नी ब्राह्मण होता तर रेणुका क्षत्रिय अर्थात योद्धा कुळातील होती. परशुराम हा शिवाचा महान उपासक होता. शस्त्रविद्येत पारंगत असलेला परशुराम गुरु द्रोणाचार्य, कर्ण आणि अर्जुन या महापुरुषांचा तो शिक्षक होता असे मानले जाते. त्याने चित्पावन ब्राह्मण नावाच्या एका लहान समुदायाची चौदा गोत्र निर्माण केली. परशुरामाने चित्पावन ब्राह्मणांना वेद, युद्धनीती आणि युद्ध कला शिकवली. चित्पावन ब्राह्मण परशुरामांना "आदिपुरुष" किंवा मूळ पुरुष म्हणून संबोधतात.`;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Amita:wght@700&display=swap" rel="stylesheet" />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/background.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.9)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80"></div>
        </div>

        {/* Grid of Quick Links - absolutely positioned in top right of hero section */}
        <div className="hidden lg:block absolute top-12 right-0 z-20">
          <div className="grid grid-cols-2 gap-0 max-w-md">
            {[
              { to: "/vyadeshwar", img: "/Vyadeshwar_swamy.jpg", title: t('homepage.grid.vyadeshwar') },
              { to: "/yogeshwaridevi", img: "/Yogeshwari_devi.jpg", title: t('homepage.grid.yogeshwari') },
              { img: "/aarthi.jpg", title: t('homepage.grid.aarthi') },
              { img: "/Mantropchar.jpg", title: t('homepage.grid.mantrapchar') }
            ].map((item, index) => (
              <a
                key={index}
                href={item.to || '#'}
                className={`group flex flex-col items-center p-4 rounded-2xl transition-all duration-300 opacity-80`}
              >
                <div className="relative mb-3 group">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="relative w-40 h-40 object-cover rounded-full shadow-lg z-10 border-4 border-white ring-0 group-hover:ring-4 group-hover:ring-amber-500 transition"
                  />
                </div>
                <span className="text-base font-semibold text-white text-center mt-2">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
        {/* Mobile/Tablet: grid below hero content */}
        <div className="block lg:hidden absolute left-1/2 transform -translate-x-1/2 top-[calc(100vw/2.5)] z-20">
          <div className="grid grid-cols-2 gap-0 max-w-md">
            {[
              { to: "/vyadeshwar", img: "/Vyadeshwar_swamy.jpg", title: t('homepage.grid.vyadeshwar') },
              { to: "/yogeshwaridevi", img: "/Yogeshwari_devi.jpg", title: t('homepage.grid.yogeshwari') },
              { img: "/aarthi.jpg", title: t('homepage.grid.aarthi') },
              { img: "/Mantropchar.jpg", title: t('homepage.grid.mantrapchar') }
            ].map((item, index) => (
              <a
                key={index}
                href={item.to || '#'}
                className={`group flex flex-col items-center p-4 rounded-2xl transition-all duration-300 opacity-80`}
              >
                <div className="relative mb-3 group">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="relative w-40 h-40 object-cover rounded-full shadow-lg z-10 border-4 border-white ring-0 group-hover:ring-4 group-hover:ring-amber-500 transition"
                  />
                </div>
                <span className="text-base font-semibold text-white text-center mt-2">{item.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between py-20">
            <div className="lg:w-1/2 flex flex-row items-center gap-12">
              <div
                className="flex-shrink-0 -ml-2 md:ml-4 relative inline-block"
                onMouseEnter={() => setShowText(true)}
                onMouseLeave={() => setShowText(false)}
                tabIndex={0}
                onFocus={() => setShowText(true)}
                onBlur={() => setShowText(false)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src="/parashurama.jpg"
                  alt="Parashurama"
                  className="h-[450px] w-auto rounded-xl object-contain shadow-xl border-4 border-white"
                />
                {showText && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-xl p-6 transition-opacity duration-300 opacity-100"
                    style={{ pointerEvents: 'none' }}>
                    <span
                      className="text-white text-base md:text-lg font-semibold text-center leading-relaxed"
                      style={{ fontFamily: 'Amita, serif', textShadow: '0 2px 8px #000' }}
                    >
                      {hoverText}
                    </span>
                  </div>
                )}
              </div>
              <div className="text-left space-y-6">
                <h1
                  className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight drop-shadow-lg"
                  style={{ fontFamily: 'Amita, cursive' }}
                >
                  {t('homepage.title')}
                </h1>
                <div className="h-4"></div>
                <p className="text-lg md:text-2xl text-white/90 max-w-2xl drop-shadow">
                  {t('homepage.subtitle')}
                </p>
              </div>
            </div>
            <div className="lg:w-1/2"></div>
          </div>
        </div>
      </section>

      {/* ध्येय Section - prominent card */}
      <section className="w-full flex justify-center mt-16">
        <div className="bg-gradient-to-br from-amber-50 to-orange-100 shadow-2xl rounded-3xl px-8 py-10 flex flex-col items-center max-w-xl w-full border-2 border-amber-200">
          <h2 className="text-4xl md:text-5xl font-extrabold text-amber-700 mb-2 tracking-tight drop-shadow-lg" style={{ fontFamily: 'Amita, cursive' }}>ध्येय</h2>
          <p className="text-lg text-gray-700 mb-6 text-center font-sans">गोगटे कुलवृत्तांत समितीचे ध्येय जाणून घ्या आणि प्रेरणा घ्या!</p>
          <button
            className="text-2xl md:text-3xl font-bold text-white bg-amber-500 px-10 py-4 rounded-full shadow-lg hover:bg-amber-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 animate-bounce-in"
            onClick={() => setShowVideo(true)}
          >
            ▶ ध्येय
          </button>
        </div>
      </section>

      {/* Video Popup Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-lg shadow-xl p-4 relative max-w-2xl w-full">
            <button
              className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-red-500"
              onClick={() => setShowVideo(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default HomePage;


