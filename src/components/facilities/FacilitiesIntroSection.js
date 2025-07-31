import React from 'react';
import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  CheckIcon, 
  StarIcon 
} from '@heroicons/react/24/outline';
import BlurText from '../BlurText';
import hotelExterior from '../../assets/exteriorViewImages/Exterior_View1.jpg';

const FacilitiesIntroSection = () => {
  const handleAnimationComplete = () => {
    console.log('Facilities title animation completed!');
  };

  const highlights = [
    {
      icon: HomeIcon,
      title: 'Confort Superior',
      description: 'Camere elegante cu toate facilitățile moderne'
    },
    {
      icon: CheckIcon,
      title: 'Conectivitate',
      description: 'Wi-Fi gratuit în toate zonele hotelului'
    },
    {
      icon: StarIcon,
      title: 'Servicii Premium',
      description: 'Servicii personalizate și facilități complete'
    }
  ];

  return (
    <section className="section-padding bg-background-primary pt-24 md:pt-32 lg:pt-40">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <BlurText
            text="Dotări & Servicii"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-xl md:text-2xl text-text-light max-w-4xl mx-auto leading-relaxed mb-8">
            Confort, eleganță și facilități moderne – totul pregătit pentru șederea ta perfectă la poalele Peleșului.
          </p>
          
          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="font-display font-semibold text-text-primary mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-text-light text-sm">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-50 to-background-secondary rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-4">
                Experiență Completă de Cazare
              </h2>
              <p className="text-text-light mb-6 leading-relaxed">
                Hotel Marami îți oferă toate facilitățile necesare pentru o ședere memorabilă. 
                De la camere confortabile la restaurant și sală de conferințe, 
                totul este gândit pentru confortul și satisfacția ta.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-text-secondary">Acces gratuit la toate facilitățile</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-text-secondary">Wi-Fi gratuit în toate zonele</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-text-secondary">Servicii personalizate</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={hotelExterior}
                alt="Hotel Marami - Experiență completă de cazare la poalele Peleșului"
                className="rounded-xl shadow-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesIntroSection; 