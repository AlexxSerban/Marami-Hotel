import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutLocationSection from '../components/AboutLocationSection';
import RoomsSection from '../components/RoomsSection';
import AmenitiesSection from '../components/AmenitiesSection';
import EatAndDrinkSection from '../components/EatAndDrinkSection';
import TerraceSection from '../components/TerraceSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingBookButton from '../components/FloatingBookButton';

const HomePage = () => {
  return (
    <div className="HomePage">
      <Navbar />
      <main>
        <HeroSection />
        <AboutLocationSection />
        <RoomsSection />
        <AmenitiesSection />
        <EatAndDrinkSection />
        <TerraceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default HomePage; 