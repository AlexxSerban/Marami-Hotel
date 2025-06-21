import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalculatorIcon, DocumentTextIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const BookingSummarySection = () => {
  const handleAnimationComplete = () => {
    console.log('BookingSummary title animation completed!');
  };

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedMarketing, setAcceptedMarketing] = useState(false);

  // Mock data - in a real app this would come from form state
  const bookingData = {
    checkIn: '2024-02-15',
    checkOut: '2024-02-18',
    nights: 3,
    adults: 2,
    children: 0,
    rooms: 1,
    roomType: 'Double',
    roomPrice: 220,
    selectedServices: ['Parcare Privată', 'Check-in Devreme'],
    servicePrices: {
      'Parcare Privată': 15,
      'Check-in Devreme': 0
    }
  };

  const calculateSubtotal = () => {
    return bookingData.roomPrice * bookingData.nights * bookingData.rooms;
  };

  const calculateServicesTotal = () => {
    return Object.values(bookingData.servicePrices).reduce((sum, price) => sum + price, 0) * bookingData.nights;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateServicesTotal();
  };

  const subtotal = calculateSubtotal();
  const servicesTotal = calculateServicesTotal();
  const total = calculateTotal();

  return (
    <section className="section-padding bg-background-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <BlurText
            text="Sumar Rezervare"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Verifică detaliile rezervării și acceptă termenii și condițiile pentru a finaliza.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Booking Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-display font-bold text-text-primary mb-6 flex items-center">
                  <DocumentTextIcon className="w-6 h-6 text-primary-500 mr-3" />
                  Detalii Rezervare
                </h3>

                <div className="space-y-6">
                  {/* Dates */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-text-secondary mb-1">Check-in</div>
                      <div className="font-semibold text-text-primary">
                        {new Date(bookingData.checkIn).toLocaleDateString('ro-RO')}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary mb-1">Check-out</div>
                      <div className="font-semibold text-text-primary">
                        {new Date(bookingData.checkOut).toLocaleDateString('ro-RO')}
                      </div>
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <div className="text-sm text-text-secondary mb-2">Oaspeți</div>
                    <div className="font-semibold text-text-primary">
                      {bookingData.adults} adulți
                      {bookingData.children > 0 && `, ${bookingData.children} copii`}
                    </div>
                  </div>

                  {/* Room */}
                  <div>
                    <div className="text-sm text-text-secondary mb-2">Camera</div>
                    <div className="font-semibold text-text-primary">
                      {bookingData.rooms}x {bookingData.roomType}
                    </div>
                  </div>

                  {/* Services */}
                  {bookingData.selectedServices.length > 0 && (
                    <div>
                      <div className="text-sm text-text-secondary mb-2">Servicii Selectate</div>
                      <div className="space-y-1">
                        {bookingData.selectedServices.map((service, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            <span className="text-text-primary">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-display font-bold text-text-primary mb-6 flex items-center">
                  <CalculatorIcon className="w-6 h-6 text-primary-500 mr-3" />
                  Calculul Prețului
                </h3>

                <div className="space-y-4">
                  {/* Room Cost */}
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <div>
                      <div className="font-semibold text-text-primary">
                        {bookingData.roomType} x {bookingData.nights} nopți
                      </div>
                      <div className="text-sm text-text-secondary">
                        {bookingData.roomPrice} RON/noapte
                      </div>
                    </div>
                    <div className="font-bold text-text-primary">
                      {subtotal} RON
                    </div>
                  </div>

                  {/* Services Cost */}
                  {servicesTotal > 0 && (
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <div>
                        <div className="font-semibold text-text-primary">
                          Servicii suplimentare
                        </div>
                        <div className="text-sm text-text-secondary">
                          {bookingData.nights} nopți
                        </div>
                      </div>
                      <div className="font-bold text-text-primary">
                        {servicesTotal} RON
                      </div>
                    </div>
                  )}

                  {/* Total */}
                  <div className="flex justify-between items-center py-4 border-t-2 border-primary-500">
                    <div className="text-lg font-bold text-text-primary">
                      Total
                    </div>
                    <div className="text-2xl font-bold text-primary-600">
                      {total} RON
                    </div>
                  </div>

                  {/* Price per night */}
                  <div className="text-center py-3 bg-primary-50 rounded-lg">
                    <div className="text-sm text-text-secondary">Preț mediu per noapte</div>
                    <div className="text-lg font-bold text-primary-600">
                      {Math.round(total / bookingData.nights)} RON
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Terms and Conditions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-display font-bold text-text-primary mb-6 flex items-center">
                <ShieldCheckIcon className="w-6 h-6 text-primary-500 mr-3" />
                Termeni și Condiții
              </h3>

              <div className="space-y-6">
                {/* Terms Checkboxes */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <input
                      type="checkbox"
                      id="terms"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="mt-1 w-5 h-5 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="terms" className="text-sm text-text-secondary">
                      Accept <span className="text-primary-600 font-semibold cursor-pointer hover:underline">termenii și condițiile</span> de rezervare și politica de confidențialitate. 
                      Înțeleg că rezervarea este supusă confirmării și că pot anula gratuit până la 24 de ore înainte de check-in.
                    </label>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-start space-x-3"
                  >
                    <input
                      type="checkbox"
                      id="marketing"
                      checked={acceptedMarketing}
                      onChange={(e) => setAcceptedMarketing(e.target.checked)}
                      className="mt-1 w-5 h-5 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="marketing" className="text-sm text-text-secondary">
                      Accept să primesc oferte speciale și noutăți despre Hotel Marami prin email. 
                      Pot renunța la orice moment.
                    </label>
                  </motion.div>
                </div>

                {/* Important Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-yellow-50 rounded-xl p-6"
                >
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    Informații Importante
                  </h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Rezervarea va fi confirmată în maxim 24 de ore</li>
                    <li>• Anularea gratuită până la 24h înainte de check-in</li>
                    <li>• Check-in: 14:00 - Check-out: 11:00</li>
                    <li>• Plățile se fac la hotel (numerar sau card)</li>
                    <li>• Toate prețurile includ TVA</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSummarySection; 