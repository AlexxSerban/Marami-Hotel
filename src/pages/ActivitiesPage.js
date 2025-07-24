import React from 'react';
import Navbar from '../components/Navbar';
import ActivitiesHeroSection from '../components/activities/ActivitiesHeroSection';
import AvailableActivitiesSection from '../components/activities/AvailableActivitiesSection';
import RecommendationsSection from '../components/activities/RecommendationsSection';
import SurroundingsSection from '../components/activities/SurroundingsSection';
import SeasonalInfoSection from '../components/activities/SeasonalInfoSection';
import ActivitiesCTASection from '../components/activities/ActivitiesCTASection';
import Footer from '../components/Footer';

const ActivitiesPage = () => {
  return (
    <div className="ActivitiesPage no-overflow">
      <Navbar />
      <main className="no-overflow">
        <ActivitiesHeroSection />
        <AvailableActivitiesSection />
        <RecommendationsSection />
        <SurroundingsSection />
        <SeasonalInfoSection />
        <ActivitiesCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ActivitiesPage; 