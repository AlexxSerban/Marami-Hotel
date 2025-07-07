import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingFormSection from '../components/booking/BookingFormSection';
import BookingConfirmationSection from '../components/booking/BookingConfirmationSection';

const BookingPage = () => {
  return (
    <div className="BookingPage no-overflow">
      <Navbar />
      <main className="pt-24 no-overflow">
        <BookingFormSection />
        <BookingConfirmationSection />
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage; 