import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHeroSection from '../components/contact/ContactHeroSection';
import ContactInfoSection from '../components/contact/ContactInfoSection';
import ContactMapSection from '../components/contact/ContactMapSection';
import SocialLinksSection from '../components/contact/SocialLinksSection';
import ContactCTASection from '../components/contact/ContactCTASection';

const ContactPage = () => {
  return (
    <div className="ContactPage">
      <Navbar />
      <main>
        <ContactHeroSection />
        <ContactInfoSection />
        <ContactMapSection />
        <SocialLinksSection />
        <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage; 