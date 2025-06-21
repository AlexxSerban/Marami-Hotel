import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserIcon, EnvelopeIcon, PhoneIcon, IdentificationIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const GuestInfoSection = () => {
  const handleAnimationComplete = () => {
    console.log('GuestInfo title animation completed!');
  };

  const [guestInfo, setGuestInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'România',
    specialRequests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGuestInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
            text="Informații Personale"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Completează datele personale pentru a finaliza rezervarea. Toate informațiile sunt confidențiale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-display font-bold text-text-primary mb-6 flex items-center">
                  <UserIcon className="w-6 h-6 text-primary-500 mr-3" />
                  Date Personale
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-2"
                  >
                    <label className="text-text-primary font-semibold">
                      Prenume *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={guestInfo.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-2"
                  >
                    <label className="text-text-primary font-semibold">
                      Nume *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={guestInfo.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </motion.div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-display font-bold text-text-primary mb-6 flex items-center">
                  <EnvelopeIcon className="w-6 h-6 text-primary-500 mr-3" />
                  Informații Contact
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-2"
                  >
                    <label className="text-text-primary font-semibold">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={guestInfo.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-2"
                  >
                    <label className="text-text-primary font-semibold">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={guestInfo.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </motion.div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-xl font-display font-bold text-text-primary mb-6 flex items-center">
                  <IdentificationIcon className="w-6 h-6 text-primary-500 mr-3" />
                  Adresa
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="space-y-2"
                  >
                    <label className="text-text-primary font-semibold">
                      Adresa
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={guestInfo.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Strada, numărul"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="space-y-2"
                  >
                    <label className="text-text-primary font-semibold">
                      Oraș
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={guestInfo.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mt-6 space-y-2"
                >
                  <label className="text-text-primary font-semibold">
                    Țara
                  </label>
                  <select
                    name="country"
                    value={guestInfo.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="România">România</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Ungaria">Ungaria</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Ucraina">Ucraina</option>
                    <option value="Alte">Alte</option>
                  </select>
                </motion.div>
              </div>

              {/* Additional Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="space-y-2"
              >
                <label className="text-text-primary font-semibold">
                  Cerințe Speciale
                </label>
                <textarea
                  name="specialRequests"
                  value={guestInfo.specialRequests}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Menționează orice cerințe speciale (dietă, accesibilitate, etc.)"
                />
              </motion.div>

              {/* Privacy Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-primary-50 rounded-xl p-6"
              >
                <h4 className="font-semibold text-text-primary mb-2">
                  Confidențialitate și GDPR
                </h4>
                <p className="text-sm text-text-secondary">
                  Datele tale personale sunt protejate conform GDPR. Le folosim doar pentru procesarea rezervării și comunicarea cu tine. 
                  Nu le partajăm cu terți fără consimțământul tău explicit.
                </p>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestInfoSection; 