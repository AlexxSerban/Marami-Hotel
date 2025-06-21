import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const HowToReachSection = () => {
  const handleAnimationComplete = () => {
    console.log('HowToReach title animation completed!');
  };

  const transportOptions = [
    {
      icon: HomeIcon,
      title: 'Cu Mașina',
      description: 'Din București pe DN1, aproximativ 1h 30min',
      details: ['Parcare gratuită disponibilă', 'Acces ușor din centrul orașului']
    },
    {
      icon: SparklesIcon,
      title: 'Cu Trenul',
      description: 'Tren direct din București Nord, 1h 45min',
      details: ['Stația Sinaia la 10 min de hotel', 'Trenuri regulate']
    },
    {
      icon: HeartIcon,
      title: 'Transfer Organizat',
      description: 'Serviciu de transfer de la aeroport',
      details: ['De la Otopeni în 2h', 'Rezervare anticipată necesară']
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
            text="Cum să Ajungi"
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Hotel Marami este ușor accesibil din București și din alte orașe din România. 
            Alege metoda de transport care îți convine cel mai mult.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {transportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="font-display font-semibold text-text-primary mb-3">
                  {option.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {option.description}
                </p>
                <div className="space-y-2">
                  {option.details.map((detail, idx) => (
                    <div key={idx} className="text-xs text-text-secondary">
                      • {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-background-primary rounded-2xl p-8">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              Informații Suplimentare
            </h3>
            <p className="text-text-light max-w-2xl mx-auto">
              Pentru informații detaliate despre rute și programe de transport, 
              contactează-ne și te vom ajuta să planifici călătoria.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToReachSection; 