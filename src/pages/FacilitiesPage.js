import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FacilitiesIntroSection from '../components/facilities/FacilitiesIntroSection';
import ComfortableRoomsSection from '../components/facilities/ComfortableRoomsSection';
import RestaurantBarSection from '../components/facilities/RestaurantBarSection';
import ConferenceRoomSection from '../components/facilities/ConferenceRoomSection';
// import AdditionalServicesSection from '../components/facilities/AdditionalServicesSection';

const FacilitiesPage = () => {
  return (
    <div className="FacilitiesPage no-overflow">
      <Navbar />
      <main className="no-overflow">
        <FacilitiesIntroSection />
        <ComfortableRoomsSection />
        <RestaurantBarSection />
        <ConferenceRoomSection />
        {/* <AdditionalServicesSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default FacilitiesPage; 