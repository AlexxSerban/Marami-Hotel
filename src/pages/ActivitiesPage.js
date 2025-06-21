import React from 'react';
import Navbar from '../components/Navbar';
import ActivitiesHeroSection from '../components/activities/ActivitiesHeroSection';
import AvailableActivitiesSection from '../components/activities/AvailableActivitiesSection';
import RecommendationsSection from '../components/activities/RecommendationsSection';
import SurroundingsSection from '../components/activities/SurroundingsSection';
import SeasonalInfoSection from '../components/activities/SeasonalInfoSection';
import LogisticsTipsSection from '../components/activities/LogisticsTipsSection';
import ActivitiesCTASection from '../components/activities/ActivitiesCTASection';
import Footer from '../components/Footer';

const ActivitiesPage = () => {
  return (
    <div className="ActivitiesPage">
      <Navbar />
      <main>
        <ActivitiesHeroSection />
        <AvailableActivitiesSection />
        <RecommendationsSection />
        <SurroundingsSection />
        <SeasonalInfoSection />
        <LogisticsTipsSection />
        <ActivitiesCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ActivitiesPage; 