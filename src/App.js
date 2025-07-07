import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AccommodationPage from './pages/AccommodationPage';
import RestaurantPage from './pages/RestaurantPage';
import FacilitiesPage from './pages/FacilitiesPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';

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
          <Route path="/dotari" element={<FacilitiesPage />} />
          <Route path="/activitati" element={<ActivitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/rezervare" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 