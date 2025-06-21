import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, StarIcon, CheckIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const SpecialRequestsSection = () => {
  const handleAnimationComplete = () => {
    console.log('SpecialRequests title animation completed!');
  };

  const [requests, setRequests] = useState({
    earlyCheckIn: false,
    lateCheckOut: false,
    airportTransfer: false,
    parking: false,
    petFriendly: false,
    smoking: false,
    dietaryRestrictions: '',
    accessibility: false,
    roomLocation: 'standard',
    specialOccasion: ''
  });

  const handleCheckboxChange = (name) => {
    setRequests(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRequests(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const specialOptions = [
    {
      id: 'earlyCheckIn',
      title: 'Check-in Devreme',
      description: 'Sosire înainte de ora 14:00',
      icon: '🌅'
    },
    {
      id: 'lateCheckOut',
      title: 'Check-out Târziu',
      description: 'Plecare după ora 11:00',
      icon: '🌆'
    },
    {
      id: 'airportTransfer',
      title: 'Transfer Aeroport',
      description: 'Transport de la/la aeroport',
      icon: '✈️'
    },
    {
      id: 'parking',
      title: 'Parcare Privată',
      description: 'Loc de parcare rezervat',
      icon: '🚗'
    },
    {
      id: 'petFriendly',
      title: 'Prietenos cu Animale',
      description: 'Cazare cu animal de companie',
      icon: '🐕'
    },
    {
      id: 'smoking',
      title: 'Cameră pentru Fumători',
      description: 'Cameră specială pentru fumători',
      icon: '🚬'
    },
    {
      id: 'accessibility',
      title: 'Accesibilitate',
      description: 'Cameră adaptată pentru persoane cu dizabilități',
      icon: '♿'
    }
  ];

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <BlurText
            text="Cerințe Speciale"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Personalizează-ți șederea cu servicii și cerințe speciale pentru o experiență perfectă.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Special Options Grid */}
            <div className="mb-12">
              <h3 className="text-xl font-display font-bold text-text-primary mb-8 flex items-center">
                <StarIcon className="w-6 h-6 text-primary-500 mr-3" />
                Servicii și Opțiuni
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specialOptions.map((option, index) => (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      requests[option.id]
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                    onClick={() => handleCheckboxChange(option.id)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{option.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-text-primary">
                            {option.title}
                          </h4>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            requests[option.id]
                              ? 'bg-primary-500 border-primary-500'
                              : 'border-gray-300'
                          }`}>
                            {requests[option.id] && (
                              <CheckIcon className="w-3 h-3 text-white" />
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-text-secondary">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Room Preferences */}
            <div className="mb-12">
              <h3 className="text-xl font-display font-bold text-text-primary mb-6 flex items-center">
                <HeartIcon className="w-6 h-6 text-primary-500 mr-3" />
                Preferințe Cameră
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-4"
                >
                  <label className="text-text-primary font-semibold">
                    Locația Camerei
                  </label>
                  <select
                    name="roomLocation"
                    value={requests.roomLocation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="standard">Standard (orice etaj)</option>
                    <option value="high-floor">Etaj înalt (vedere mai bună)</option>
                    <option value="low-floor">Etaj jos (acces mai ușor)</option>
                    <option value="quiet">Zonă liniștită</option>
                    <option value="mountain-view">Vedere la munte</option>
                    <option value="garden-view">Vedere la grădină</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-4"
                >
                  <label className="text-text-primary font-semibold">
                    Restricții Dietetice
                  </label>
                  <input
                    type="text"
                    name="dietaryRestrictions"
                    value={requests.dietaryRestrictions}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Ex: vegetarian, fără gluten, alergie la lactoză"
                  />
                </motion.div>
              </div>
            </div>

            {/* Special Occasion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <label className="text-text-primary font-semibold">
                Ocasie Specială
              </label>
              <textarea
                name="specialOccasion"
                value={requests.specialOccasion}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Menționează dacă este o ocazie specială (aniversare, luna de miere, etc.) pentru a te surprinde cu ceva special"
              />
            </motion.div>

            {/* Information Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 bg-blue-50 rounded-xl p-6"
            >
              <h4 className="font-semibold text-blue-800 mb-2">
                Informații Importante
              </h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Serviciile suplimentare pot implica costuri extra</li>
                <li>• Cerințele speciale sunt supuse disponibilității</li>
                <li>• Vom confirma toate cerințele înainte de sosire</li>
                <li>• Pentru cerințe complexe, te rugăm să ne contactezi direct</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialRequestsSection; 