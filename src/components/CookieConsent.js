import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Verifică dacă utilizatorul a dat deja consimțământul
    const savedConsent = localStorage.getItem('cookieConsent');
    if (!savedConsent) {
      setShowConsent(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowConsent(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowConsent(false);
  };

  return (
    <>
      {/* Cookie Consent Popup */}
      <AnimatePresence>
        {showConsent && (
          <>
            {/* Backdrop with frosted glass effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            
            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-white/20 shadow-2xl"
            >
              <div className="container-custom py-2 md:py-3 lg:py-4">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-start justify-between mb-2 md:mb-3">
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs md:text-sm">🍪</span>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-display font-semibold text-text-primary">
                          Politica de Cookie-uri
                        </h3>
                        <p className="text-xs md:text-sm text-text-light">
                          Folosim cookie-uri pentru a-ți oferi cea mai bună experiență pe site-ul nostru
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 md:mb-4">
                    <p className="text-sm md:text-base text-text-light leading-relaxed mb-3 md:mb-4">
                      Hotel Marami folosește cookie-uri pentru a îmbunătăți experiența ta de navigare, 
                      pentru a analiza traficul site-ului și pentru a personaliza conținutul. 
                      Prin continuarea navigării, ești de acord cu utilizarea cookie-urilor.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                      <button
                        onClick={handleAcceptAll}
                        className="flex-1 bg-primary-500 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-medium hover:bg-primary-600 transition-colors shadow-lg text-sm md:text-base"
                      >
                        Accept toate cookie-urile
                      </button>
                      <button
                        onClick={handleAcceptEssential}
                        className="flex-1 bg-gray-100 text-text-primary px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-colors shadow-lg text-sm md:text-base"
                      >
                        Accept doar cele necesare
                      </button>
                    </div>

                    <div className="mt-2 md:mt-3 text-center">
                      <p className="text-xs text-text-secondary">
                        Pentru mai multe detalii, consultă{' '}
                        <Link to="/cookies" className="text-primary-500 hover:underline">
                          Politica noastră de Cookie-uri
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent; 