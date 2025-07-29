import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const PresidentsThoughtsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-pink-50 to-amber-100">
      <div className="flex-1 flex flex-col items-center justify-center py-10 px-2 w-full">
        <div className="w-full flex justify-end max-w-2xl mb-6">
          <Link
            to="/"
            className="inline-block px-7 py-2 bg-amber-500 text-white font-semibold rounded-full shadow hover:bg-amber-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 animate-bounce-in"
          >
            ← Back to Home
          </Link>
        </div>
        <div className="flex flex-col items-center w-full max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-amber-700">अध्यक्षांचे मनोगत</h2>
          <div className="w-full flex justify-center">
            <div className="w-full max-w-xl aspect-video bg-gray-200 border-4 border-pink-300 rounded-2xl flex items-center justify-center text-2xl text-pink-700 font-semibold">
              {/* Placeholder for YouTube Video */}
              YouTube Video Placeholder
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PresidentsThoughtsPage;
