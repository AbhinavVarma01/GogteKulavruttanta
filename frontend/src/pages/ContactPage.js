import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="flex-1 flex flex-col items-center justify-center py-10 px-2 w-full">
        <div className="w-full flex justify-end max-w-2xl mb-6">
          <Link
            to="/"
            className="inline-block px-7 py-2 bg-amber-500 text-white font-semibold rounded-full shadow hover:bg-amber-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 animate-bounce-in"
          >
            ← Back to Home
          </Link>
        </div>
        <div className="flex flex-col items-center w-full max-w-xl">
          <div className="bg-white rounded-2xl shadow-xl p-10 w-full flex flex-col items-center border border-amber-200">
            <h2 className="text-2xl md:text-3xl font-extrabold text-amber-700 mb-4 tracking-wide text-center">
              गोगटे कुलवृत्तांत समिती तर्फे
            </h2>
            <div className="flex flex-col items-center gap-2 mb-6">
              <span className="text-xl md:text-2xl font-bold text-gray-900">श्री. अभिनव वर्मा – अध्यक्ष</span>
              <span className="text-base md:text-lg text-gray-700 text-center">घर क्र. २१०, गोकुळ नगर, हनुमान मंदिराजवळ, गुहागर – ४१५७०३</span>
            </div>
            <div className="flex flex-col items-center gap-3 mt-2">
              <div className="flex items-center gap-2 text-lg text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515l.516 2.064a2 2 0 01-1.516 2.485l-2.197.44c.273.894.707 1.746 1.283 2.522a11.042 11.042 0 004.522 4.522c.776.576 1.628 1.01 2.522 1.283l.44-2.197A2 2 0 0115.42 13.26l2.064.516A2 2 0 0119 15.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" /></svg>
                <span className="font-medium">भ्रमणध्वनी:</span>
                <span className="ml-1">९८७६५ ४३२१०</span>
              </div>
              <div className="flex items-center gap-2 text-lg text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm2 0a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
                <span className="font-medium">ई-मेल:</span>
                <a href="mailto:info@gogtekul.com" className="ml-1 text-blue-700 underline">info@gogtekul.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
