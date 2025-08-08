import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AarthiPage = () => {
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [selectedDeity, setSelectedDeity] = useState(null);

  const handleDeityClick = (deity) => {
    setSelectedDeity(deity);
  };

  const handleAarthiClick = (aarthiNumber) => {
    if (aarthiNumber === 1) {
      setShowVideo1(true);
    } else {
      setShowVideo2(true);
    }
  };

  const closeVideo = () => {
    setShowVideo1(false);
    setShowVideo2(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Amita:wght@700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <div className="bg-white text-gray-800 py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-center flex-1 font-sans" style={{ fontFamily: 'Montserrat, Open Sans, Arial, sans-serif' }}>
              आरती
            </h1>
            <div className="flex-1 flex justify-end">
              <Link 
                to="/" 
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-sans"
                style={{ fontFamily: 'Montserrat, Open Sans, Arial, sans-serif' }}
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!selectedDeity ? (
          // Deity Selection Grid
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Vyadeshwar */}
            <div 
              className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => handleDeityClick('vyadeshwar')}
            >
              <div className="text-center">
                <img 
                  src="/Vyadeshwar_swamy.jpg" 
                  alt="Vyadeshwar" 
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-6 border-4 border-amber-200"
                />
                <h2 className="text-2xl font-bold text-amber-800 mb-4 font-sans" style={{ fontFamily: 'Montserrat, Open Sans, Arial, sans-serif' }}>
                  व्यादेश्वर, गुहागर
                </h2>
                <p className="text-gray-600 mb-4 font-sans" style={{ fontFamily: 'Montserrat, Open Sans, Arial, sans-serif' }}>
                  Click to view Aarthi options
                </p>
                <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg font-sans" style={{ fontFamily: 'Montserrat, Open Sans, Arial, sans-serif' }}>
                  Click to Select
                </div>
              </div>
            </div>

            {/* Yogeshwari Devi */}
            <div 
              className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => handleDeityClick('yogeshwari')}
            >
              <div className="text-center">
                <img 
                  src="/Yogeshwari_devi.jpg" 
                  alt="Yogeshwari Devi" 
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-6 border-4 border-amber-200"
                />
                <h2 className="text-2xl font-bold text-amber-800 mb-4 font-sans" style={{ fontFamily: 'Montserrat, Open Sans, Arial, sans-serif' }}>
                  योगेश्वरी देवी, अंबाजोगाई
                </h2>
                <p className="text-gray-600 mb-4 font-sans" style={{ fontFamily: 'Montserrat, Open Sans, Arial, sans-serif' }}>
                  Click to view Aarthi options
                </p>
                <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg font-sans" style={{ fontFamily: 'Montserrat, Open Sans, Arial, sans-serif' }}>
                  Click to Select
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Aarthi Options
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <button 
                onClick={() => setSelectedDeity(null)}
                className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors mb-4 font-sans"
                style={{ fontFamily: 'Montserrat, Open Sans, Arial, sans-serif' }}
              >
                ← Back to Deity Selection
              </button>
              <h2 className="text-3xl font-bold text-amber-800 font-sans" style={{ fontFamily: 'Montserrat, Open Sans, Arial, sans-serif' }}>
                {selectedDeity === 'vyadeshwar' ? 'व्यादेश्वर आरती' : 'योगेश्वरी देवी आरती'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Aarthi 1 */}
              <div 
                className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => handleAarthiClick(1)}
              >
                <div className="text-center">
                  <img 
                    src="/aarthi_plate.jpg" 
                    alt="Aarthi Plate" 
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-amber-200"
                  />
                  <h3 className="text-2xl font-bold text-amber-800 mb-4 font-sans" style={{ fontFamily: 'Montserrat, Open Sans, Arial, sans-serif' }}>
                    आरती १
                  </h3>
                  <p className="text-gray-600 mb-4 font-sans" style={{ fontFamily: 'Montserrat, Open Sans, Arial, sans-serif' }}>
                    Click to play Aarthi 1
                  </p>
                  <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg font-sans" style={{ fontFamily: 'Montserrat, Open Sans, Arial, sans-serif' }}>
                    Play Video
                  </div>
                </div>
              </div>

              {/* Aarthi 2 */}
              <div 
                className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => handleAarthiClick(2)}
              >
                <div className="text-center">
                  <img 
                    src="/aarthi_plate.jpg" 
                    alt="Aarthi Plate" 
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-amber-200"
                  />
                  <h3 className="text-2xl font-bold text-amber-800 mb-4 font-sans" style={{ fontFamily: 'Montserrat, Open Sans, Arial, sans-serif' }}>
                    आरती २
                  </h3>
                  <p className="text-gray-600 mb-4 font-sans" style={{ fontFamily: 'Montserrat, Open Sans, Arial, sans-serif' }}>
                    Click to play Aarthi 2
                  </p>
                  <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg font-sans" style={{ fontFamily: 'Montserrat, Open Sans, Arial, sans-serif' }}>
                    Play Video
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* YouTube Video Modal */}
      {(showVideo1 || showVideo2) && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
            >
              ✕
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/dVTUUtOHUCA?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AarthiPage; 