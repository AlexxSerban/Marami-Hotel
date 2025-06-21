import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const SurroundingsSection = () => {
  const attractions = [
    {
      name: 'Castelul Peleș',
      distance: '300m',
      description: 'Castelul regal, una dintre cele mai frumoase reședințe din Europa, cu arhitectură neorenascentistă și grădini spectaculoase.',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 4.9,
      price: '45 RON',
      duration: '2-3 ore',
      tip: 'Rezervă biletele din timp pentru a evita cozile'
    },
    {
      name: 'Mânăstirea Sinaia',
      distance: '500m',
      description: 'Mânăstire ortodoxă cu arhitectură tradițională românească, fondată în secolul al XVII-lea.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 4.7,
      price: 'Gratuit',
      duration: '1-2 ore',
      tip: 'Vizitează dimineața pentru o experiență mai liniștită'
    },
    {
      name: 'Telecabina Cota 1400',
      distance: '2km',
      description: 'Acces rapid la stațiunea de schi și trasee montane, cu priveliști panoramice spre munții Bucegi.',
      image: 'https://images.unsplash.com/photo-1551524164-4876eb6e4a09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 4.6,
      price: '35 RON',
      duration: 'Flexibil',
      tip: 'Verifică programul înainte de plecare'
    },
    {
      name: 'Trasee Bucegi',
      distance: 'Variate',
      description: 'Rețea vastă de trasee montane pentru toate nivelurile, cu puncte de belvedere spectaculoase.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 4.8,
      price: 'Gratuit',
      duration: '2-8 ore',
      tip: 'Însoțește-te de un ghid pentru traseele dificile'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4">
            Împrejurimi & Atracții
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Descoperă obiectivele turistice din apropiere și planifică-ți vizita 
            pentru a explora frumusețile Sinaiei.
          </p>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-display font-bold text-text-primary mb-2">
                Hartă Interactivă
              </h3>
              <p className="text-text-light">
                Poziția Hotel Marami și obiectivele turistice din apropiere
              </p>
            </div>
            
            <div className="relative bg-gray-100 h-64 md:h-80 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="w-16 h-16 mx-auto mb-4 text-primary-400" />
                  <h4 className="text-lg font-display font-semibold text-text-primary mb-2">
                    Hotel Marami - Sinaia
                  </h4>
                  <p className="text-sm text-text-light mb-4">
                    Poziționat perfect pentru a explora zona
                  </p>
                  
                  {/* Map Markers */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                      <span>Hotel Marami</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Castelul Peleș</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Mânăstirea</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Telecabina</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Distance Lines */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-0.5 bg-primary-300 transform rotate-45 origin-left"></div>
                <div className="w-24 h-0.5 bg-red-300 transform -rotate-12 origin-left mt-4"></div>
                <div className="w-40 h-0.5 bg-blue-300 transform rotate-30 origin-left mt-8"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Attractions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {attractions.map((attraction, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Distance Badge */}
                <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  {attraction.distance}
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                  {renderStars(Math.floor(attraction.rating))}
                  <span className="text-sm font-medium text-text-primary">
                    {attraction.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-text-primary mb-3">
                  {attraction.name}
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-4">
                  {attraction.description}
                </p>
                
                {/* Info Grid */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-sm text-text-secondary mb-1">
                      <ClockIcon className="w-4 h-4" />
                      <span>Durată</span>
                    </div>
                    <p className="text-sm font-medium text-text-primary">
                      {attraction.duration}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-sm text-text-secondary mb-1">
                      <CurrencyDollarIcon className="w-4 h-4" />
                      <span>Preț</span>
                    </div>
                    <p className="text-sm font-medium text-text-primary">
                      {attraction.price}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-sm text-text-secondary mb-1">
                      <MapPinIcon className="w-4 h-4" />
                      <span>Distanță</span>
                    </div>
                    <p className="text-sm font-medium text-text-primary">
                      {attraction.distance}
                    </p>
                  </div>
                </div>

                {/* Tip */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r mb-4">
                  <p className="text-sm text-yellow-800">
                    <span className="font-medium">💡 Sfat:</span> {attraction.tip}
                  </p>
                </div>
                
                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary"
                >
                  Află Mai Multe
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-text-light mb-6">
            Vrei să organizezi o excursie personalizată? Contactează-ne pentru recomandări!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Organizează Excursia
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SurroundingsSection; 