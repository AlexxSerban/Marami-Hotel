import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AccommodationPage from './pages/AccommodationPage';
import RestaurantPage from './pages/RestaurantPage';
import FacilitiesPage from './pages/FacilitiesPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <Router>
      <div className="App">
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