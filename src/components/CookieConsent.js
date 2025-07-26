import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon, EyeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: true,
    marketing: true
  });

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

  const handlePreferenceChange = (type) => {
    if (type === 'essential') return; // Essential cookies cannot be unchecked
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleSavePreferences = () => {
    if (cookiePreferences.analytics && cookiePreferences.marketing) {
      localStorage.setItem('cookieConsent', 'all');
    } else if (cookiePreferences.analytics || cookiePreferences.marketing) {
      localStorage.setItem('cookieConsent', 'partial');
    } else {
      localStorage.setItem('cookieConsent', 'essential');
    }
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    setShowConsent(false);
  };

  const cookieTypes = [
    {
      type: 'essential',
      title: 'Cookie-uri esențiale',
      description: 'Necesare pentru funcționarea de bază a site-ului',
      examples: ['Sesiune de utilizator', 'Preferințe de limbă', 'Securitate'],
      required: true
    },
    {
      type: 'analytics',
      title: 'Cookie-uri de analiză',
      description: 'Ne ajută să înțelegem cum folosiți site-ul',
      examples: ['Google Analytics', 'Statistici de trafic', 'Performanță'],
      required: false
    },
    {
      type: 'marketing',
      title: 'Cookie-uri de marketing',
      description: 'Pentru publicitate personalizată și rețele sociale',
      examples: ['Facebook', 'Instagram', 'Publicitate'],
      required: false
    }
  ];

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
              <div className="container-custom py-6">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">🍪</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-semibold text-text-primary">
                          Politica de Cookie-uri
                        </h3>
                        <p className="text-sm text-text-light">
                          Folosim cookie-uri pentru a-ți oferi cea mai bună experiență pe site-ul nostru
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-text-light leading-relaxed mb-4">
                      Hotel Marami folosește cookie-uri pentru a îmbunătăți experiența ta de navigare, 
                      pentru a analiza traficul site-ului și pentru a personaliza conținutul. 
                      Prin continuarea navigării, ești de acord cu utilizarea cookie-urilor.
                    </p>

                    {/* Cookie Types Details with checkboxes */}
                    <div className="space-y-3 mb-6">
                      {cookieTypes.map((cookie) => (
                        <div key={cookie.type} className="flex items-start space-x-3 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20">
                          <div className="flex-shrink-0">
                            <button
                              onClick={() => handlePreferenceChange(cookie.type)}
                              disabled={cookie.required}
                              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                                cookie.required 
                                  ? 'bg-green-500 border-green-500 cursor-not-allowed' 
                                  : cookiePreferences[cookie.type]
                                    ? 'bg-primary-500 border-primary-500 hover:bg-primary-600'
                                    : 'border-gray-300 hover:border-primary-400'
                              }`}
                            >
                              {cookiePreferences[cookie.type] && (
                                <CheckIcon className="w-3 h-3 text-white" />
                              )}
                            </button>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-text-primary">{cookie.title}</h4>
                              {cookie.required && (
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                  Necesar
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-text-light mt-1">{cookie.description}</p>
                            <div className="mt-2">
                              <p className="text-xs text-text-secondary">
                                <strong>Exemple:</strong> {cookie.examples.join(', ')}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleAcceptAll}
                        className="flex-1 bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors shadow-lg"
                      >
                        Accept toate cookie-urile
                      </button>
                      <button
                        onClick={handleSavePreferences}
                        className="flex-1 bg-gray-100 text-text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors shadow-lg"
                      >
                        Salvează preferințele
                      </button>
                    </div>

                    <div className="mt-4 text-center">
                      <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="text-primary-500 hover:text-primary-600 text-sm font-medium flex items-center justify-center space-x-1 mx-auto"
                      >
                        <EyeIcon className="w-4 h-4" />
                        <span>Detalii despre cookie-uri</span>
                      </button>
                    </div>

                    {showDetails && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20"
                      >
                        <h4 className="font-medium text-text-primary mb-2">Informații detaliate</h4>
                        <div className="space-y-3 text-sm text-text-light">
                          <p>
                            <strong>Cookie-uri esențiale:</strong> Sunt necesare pentru funcționarea de bază a site-ului 
                            și nu pot fi dezactivate. Acestea nu stochează informații personale.
                          </p>
                          <p>
                            <strong>Cookie-uri de analiză:</strong> Ne ajută să înțelegem cum folosiți site-ul 
                            pentru a-l îmbunătăți. Datele sunt colectate anonim.
                          </p>
                          <p>
                            <strong>Cookie-uri de marketing:</strong> Folosite pentru publicitate personalizată 
                            și integrarea cu rețelele sociale.
                          </p>
                          <p className="text-xs text-text-secondary">
                            Pentru mai multe detalii, consultă{' '}
                            <Link to="/cookies" className="text-primary-500 hover:underline">
                              Politica noastră de Cookie-uri
                            </Link>
                            .
                          </p>
                        </div>
                      </motion.div>
                    )}
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