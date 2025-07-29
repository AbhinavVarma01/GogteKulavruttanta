import React, { useState } from 'react';
import Footer from '../components/Footer';


const LoginRegisterPage = () => {
  const [showText, setShowText] = useState(false);
  const hoverText = `परशुराम हा जमदग्नी आणि रेणुकेचा मुलगा होता. जमदग्नी ब्राह्मण होता तर रेणुका क्षत्रिय अर्थात योद्धा कुळातील होती. परशुराम हा शिवाचा महान उपासक होता. शस्त्रविद्येत पारंगत असलेला परशुराम गुरु द्रोणाचार्य, कर्ण आणि अर्जुन या महापुरुषांचा तो शिक्षक होता असे मानले जाते. त्याने चित्पावन ब्राह्मण नावाच्या एका लहान समुदायाची चौदा गोत्र निर्माण केली. परशुरामाने चित्पावन ब्राह्मणांना वेद, युद्धनीती आणि युद्ध कला शिकवली. चित्पावन ब्राह्मण परशुरामांना "आदिपुरुष" किंवा मूळ पुरुष म्हणून संबोधतात.`;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
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
        {/* Main Content (title, subtitle, Parashurama image, and login/register form in one row) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between py-20 w-full">
            {/* Image + Text Block (HomePage style) */}
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
                  गोगटे कुलवृत्तांत
                </h1>
                <div className="h-4"></div>
                <p className="text-lg md:text-2xl text-white/90 max-w-2xl drop-shadow">
                  Discover the rich heritage and spiritual journey of the Gogte Family
                </p>
              </div>
            </div>
            {/* Login/Register Form (right-aligned) */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-end mt-12 lg:mt-0 lg:ml-auto lg:mr-[-60px] lg:pr-0">
              <div className="bg-white/90 rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl font-extrabold text-amber-700 mb-6" style={{ fontFamily: 'Amita, cursive' }}>Login / Register</h1>
                <form className="w-full space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-400 text-lg"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-400 text-lg"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-amber-500 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-amber-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-lg"
                  >
                    Login
                  </button>
                  <div className="text-center text-gray-600">or</div>
                  <button
                    type="button"
                    className="w-full bg-orange-100 text-amber-700 font-bold py-2 px-6 rounded-lg shadow hover:bg-orange-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-lg"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LoginRegisterPage;
