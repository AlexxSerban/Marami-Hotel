import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AccommodationIntroSection from '../components/accommodation/AccommodationIntroSection';
import RoomTypesSection from '../components/accommodation/RoomTypesSection';
import RoomAmenitiesSection from '../components/accommodation/RoomAmenitiesSection';
import RoomGallerySection from '../components/accommodation/RoomGallerySection';
import RoomSummaryTable from '../components/accommodation/RoomSummaryTable';
import AccommodationCTASection from '../components/accommodation/AccommodationCTASection';

const AccommodationPage = () => {
  return (
    <div className="AccommodationPage">
      <Navbar />
      <main>
        <AccommodationIntroSection />
        <RoomTypesSection />
        <RoomAmenitiesSection />
        <RoomGallerySection />
        <RoomSummaryTable />
        <AccommodationCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AccommodationPage; 