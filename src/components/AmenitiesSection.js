import React from 'react';
import { motion } from 'framer-motion';
import { 
  UsersIcon,
  SparklesIcon,
  BeakerIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import BlurText from './BlurText';

const AmenitiesSection = () => {
  const handleAnimationComplete = () => {
    console.log('Amenities title animation completed!');
  };

  const amenities = [
    {
      icon: UsersIcon,
      title: 'Sală de Conferințe',
      description: 'Spațiu modern pentru evenimente și conferințe, cu capacitate de până la 40 de persoane.',
      capacity: '40 persoane',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: SparklesIcon,
      title: 'Centru de Relaxare',
      description: 'Centru spa complet cu saună, jacuzzi și masaj pentru relaxare și recuperare.',
      capacity: 'Saună, Jacuzzi, Masaj',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Sală Fitness',
      description: 'Sală de fitness modernă cu echipamente de ultimă generație pentru menținerea formei.',
      capacity: 'Echipamente moderne',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: BeakerIcon,
      title: 'Bar',
      description: 'Bar modern cu cocktailuri și băuturi de calitate, perfect pentru relaxare.',
      capacity: 'Cocktailuri & Băuturi',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="amenities" className="section-padding bg-background-primary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <BlurText
            text="Facilități & Servicii"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Descoperă toate facilitățile și serviciile pe care le oferim pentru a-ți face șederea 
            cât mai confortabilă și memorabilă.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Capacity Badge */}
                  <div className="absolute bottom-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                    {amenity.capacity}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-text-primary mb-3">
                    {amenity.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed mb-4">
                    {amenity.description}
                  </p>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-primary-500 font-medium text-sm hover:text-primary-600 transition-colors"
                  >
                    Află mai multe →
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection; 