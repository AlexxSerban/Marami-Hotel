import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const RecommendationsSection = () => {
  const handleAnimationComplete = () => {
    console.log('Recommendations title animation completed!');
  };

  const recommendations = [
    {
      icon: HomeIcon,
      title: 'Castelul Peleș',
      description: 'Castelul regal cu arhitectură neorenascentistă',
      duration: '2-3 ore',
      distance: '5 min cu mașina'
    },
    {
      icon: SparklesIcon,
      title: 'Mânăstirea Sinaia',
      description: 'Mânăstire ortodoxă cu istorie bogată',
      duration: '1-2 ore',
      distance: '10 min cu mașina'
    },
    {
      icon: HeartIcon,
      title: 'Cota 1400',
      description: 'Stațiunea de schi cu priveliști panoramice',
      duration: '4-6 ore',
      distance: '15 min cu mașina'
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
            text="Recomandări Turistice"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Descoperă atracțiile turistice din zona Sinaia și împrejurimi, 
            de la monumente istorice la peisaje naturale spectaculoase.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {recommendations.map((item, index) => {
            const Icon = item.icon;
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
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {item.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-secondary">Durată:</span>
                    <span className="font-medium text-text-primary">{item.duration}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-text-secondary">Distanță:</span>
                    <span className="font-medium text-text-primary">{item.distance}</span>
                  </div>
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
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              Ghidare Turistică
            </h3>
            <p className="text-text-light max-w-2xl mx-auto">
              Oferim servicii de ghidare pentru vizitarea atracțiilor turistice. 
              Contactează-ne pentru programări și detalii.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecommendationsSection; 