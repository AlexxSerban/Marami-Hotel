import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const RestaurantReservationSection = () => {
  const handleAnimationComplete = () => {
    console.log('RestaurantReservation title animation completed!');
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600">
      <div className="container-custom text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <BlurText
            text="Rezervări & Contact"
            className="text-3xl md:text-4xl font-display font-bold mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Rezervă o masă sau contactează-ne pentru evenimente private, cine romantice sau brunch-uri speciale.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <a
            href="tel:+40759033047"
            className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
          >
            <PhoneIcon className="w-6 h-6" />
            Rezervă o masă
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="mb-4">
            <span className="font-semibold">Program restaurant:</span> Luni - Duminică: 08:00 - 22:00
          </div>
          <div className="text-white/80">
            Disponibil și pentru evenimente private, cine romantice, brunch-uri.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantReservationSection; 