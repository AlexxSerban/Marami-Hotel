import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RestaurantIntroSection from '../components/restaurant/RestaurantIntroSection';
import GardenSection from '../components/restaurant/GardenSection';
import CuisineSection from '../components/restaurant/CuisineSection';
import MenuSection from '../components/restaurant/MenuSection';
import CulinaryExperienceSection from '../components/restaurant/CulinaryExperienceSection';
import RestaurantGallerySection from '../components/restaurant/RestaurantGallerySection';
import RestaurantReservationSection from '../components/restaurant/RestaurantReservationSection';

const RestaurantPage = () => {
  return (
    <div className="RestaurantPage">
      <Navbar />
      <main>
        <RestaurantIntroSection />
        <GardenSection />
        <CuisineSection />
        <MenuSection />
        <CulinaryExperienceSection />
        <RestaurantGallerySection />
        <RestaurantReservationSection />
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantPage; 