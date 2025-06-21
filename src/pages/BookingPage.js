import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingFormSection from '../components/booking/BookingFormSection';
import BookingConfirmationSection from '../components/booking/BookingConfirmationSection';

const BookingPage = () => {
  return (
    <div className="BookingPage">
      <Navbar />
      <main className="pt-24">
        <BookingFormSection />
        <BookingConfirmationSection />
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage; 