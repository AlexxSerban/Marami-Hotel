import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AccommodationPage from './pages/AccommodationPage';
import RestaurantPage from './pages/RestaurantPage';
import MenuPage from './pages/MenuPage';
import FacilitiesPage from './pages/FacilitiesPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import CookiesPage from './pages/CookiesPage';
import CookieConsent from './components/CookieConsent';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App no-overflow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cazare" element={<AccommodationPage />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/meniu" element={<MenuPage />} />
          <Route path="/dotari" element={<FacilitiesPage />} />
          <Route path="/activitati" element={<ActivitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/rezervare" element={<BookingPage />} />
          <Route path="/politica-confidentialitate" element={<PrivacyPolicyPage />} />
          <Route path="/termeni-conditii" element={<TermsAndConditionsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Routes>
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App; 