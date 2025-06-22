import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const BookingHeroSection = () => {
  const handleAnimationComplete = () => {
    console.log('BookingHero title animation completed!');
  };

  const features = [
    {
      icon: CalendarIcon,
      title: 'Rezervare Instant',
      description: 'Confirmare imediată prin email'
    },
    {
      icon: ClockIcon,
      title: 'Disponibilitate 24/7',
      description: 'Rezervă oricând, de oriunde'
    },
    {
      icon: StarIcon,
      title: 'Prețuri Garantate',
      description: 'Cel mai bun preț garantat'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 pt-24 md:pt-32 lg:pt-40">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <BlurText
            text="Rezervă Camera Ta"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Rezervă-ți locul în inima munților Bucegi. Proces simplu și rapid pentru o experiență de cazare memorabilă.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Informații Importante
              </h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/80">Check-in: 15:00 - Check-out: 12:00</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/80">Rezervări garantate cu card bancar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/80">Anulare gratuită până la 24h înainte</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                alt="Rezervare Hotel Marami"
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

export default BookingHeroSection; 