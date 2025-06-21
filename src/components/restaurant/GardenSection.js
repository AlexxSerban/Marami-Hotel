import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon, SparklesIcon, HomeIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const GardenSection = () => {
  const handleAnimationComplete = () => {
    console.log('Garden title animation completed!');
  };

  const features = [
    { icon: SunIcon, text: 'Atmosferă relaxantă' },
    { icon: HomeIcon, text: 'Decor natural, înconjurat de flori și vegetație' },
    { icon: SparklesIcon, text: 'Potrivit pentru mic dejun, prânz și cină' },
  ];

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <BlurText
            text="Grădina de vară"
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light mb-6">
            Spațiu verde, umbros și liniștit, ideal pentru mese în aer liber în sezonul cald.
          </p>
          <ul className="space-y-3 mb-6">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <li key={idx} className="flex items-center space-x-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-primary-100 rounded-full">
                    <Icon className="w-5 h-5 text-primary-500" />
                  </span>
                  <span className="text-text-secondary">{f.text}</span>
                </li>
              );
            })}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80"
            alt="Grădina de vară Hotel Marami"
            className="rounded-xl shadow-lg w-full h-80 object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GardenSection; 