import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePageWithFooter from './pages/HomePage';
import VyadeshwarPage from './pages/VyadeshwarPage';
import YogeshwariDeviPage from './pages/YogeshwariDeviPage';
import KulvruttantSamitiPage from './pages/KulvruttantSamitiPage';
import PresidentsThoughtsPage from './pages/PresidentsThoughtsPage';
import ContactPage from './pages/ContactPage';
import LoginRegisterPage from './pages/LoginRegisterPage';
import AarthiPage from './pages/AarthiPage';
import MantrapcharPage from './pages/MantrapcharPage';
import LoadingSpinner from './components/LoadingSpinner';
console.log("React version at runtime:", React.version);

function AppRoutesWithLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setLoading(true);
    setShowContent(false);
    // Always show spinner for at least 600ms, then fade in content
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowContent(true), 100); // Small delay for fade transition
    }, 700);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="relative min-h-screen">
      <div
        className={`transition-opacity duration-500 ${loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} fixed inset-0 z-50 flex items-center justify-center bg-white/80`}
        style={{ display: loading ? 'flex' : 'none' }}
      >
        <LoadingSpinner />
      </div>
      <div
        className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}
      >
        <Routes>
          <Route path="/" element={<HomePageWithFooter />} />
          <Route path="/vyadeshwar" element={<VyadeshwarPage />} />
          <Route path="/yogeshwaridevi" element={<YogeshwariDeviPage />} />
          <Route path="/kulvruttantsamiti" element={<KulvruttantSamitiPage />} />
          <Route path="/presidentsthoughts" element={<PresidentsThoughtsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginRegisterPage />} />
          <Route path="/aarthi" element={<AarthiPage />} />
          <Route path="/mantrapchar" element={<MantrapcharPage />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 z-0"></div>
      
      <Router>
        <Navbar />
        <AppRoutesWithLoader />
      </Router>
    </div>
  );
}

export default App;