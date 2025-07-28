import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AccommodationIntroSection from '../components/accommodation/AccommodationIntroSection';
import RoomTypesSection from '../components/accommodation/RoomTypesSection';

import RoomSummaryTable from '../components/accommodation/RoomSummaryTable';
import AccommodationCTASection from '../components/accommodation/AccommodationCTASection';

const AccommodationPage = () => {
  return (
    <div className="AccommodationPage no-overflow">
      <Navbar />
      <main className="no-overflow">
        <AccommodationIntroSection />
        <RoomTypesSection />

        <RoomSummaryTable />
        <AccommodationCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AccommodationPage; 