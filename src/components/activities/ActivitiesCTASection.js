import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const ActivitiesCTASection = () => {
  const handleAnimationComplete = () => {
    console.log('ActivitiesCTA title animation completed!');
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <BlurText
            text="Gata pentru Aventură?"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Rezervă o cameră la Hotel Marami și beneficiezi de 10% reducere! 
            Poziția noastră strategică în Sinaia îți oferă acces direct la toate activitățile din munții Bucegi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <CalendarIcon className="w-6 h-6" />
            <span>Rezervă Cameră cu 10% Reducere</span>
            <ArrowRightIcon className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesCTASection; 