import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FacilitiesIntroSection from '../components/facilities/FacilitiesIntroSection';
import ComfortableRoomsSection from '../components/facilities/ComfortableRoomsSection';
import RestaurantBarSection from '../components/facilities/RestaurantBarSection';
import RelaxationCenterSection from '../components/facilities/RelaxationCenterSection';
import ConferenceRoomSection from '../components/facilities/ConferenceRoomSection';
import FitnessRoomSection from '../components/facilities/FitnessRoomSection';
import AdditionalServicesSection from '../components/facilities/AdditionalServicesSection';

const FacilitiesPage = () => {
  return (
    <div className="FacilitiesPage">
      <Navbar />
      <main>
        <FacilitiesIntroSection />
        <ComfortableRoomsSection />
        <RestaurantBarSection />
        <RelaxationCenterSection />
        <ConferenceRoomSection />
        <FitnessRoomSection />
        <AdditionalServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default FacilitiesPage; 