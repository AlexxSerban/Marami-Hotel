import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const SeasonalInfoSection = () => {
  const handleAnimationComplete = () => {
    console.log('SeasonalInfo title animation completed!');
  };

  const seasons = [
    {
      icon: HomeIcon,
      title: 'Iarnă',
      description: 'Schi și snowboard pe pârtiile din Sinaia',
      activities: ['Schi', 'Snowboard', 'Sanie']
    },
    {
      icon: SparklesIcon,
      title: 'Primăvară',
      description: 'Drumetii și explorarea naturii în înflorire',
      activities: ['Drumetii', 'Ciclism', 'Fotografie']
    },
    {
      icon: HeartIcon,
      title: 'Vară',
      description: 'Activități în aer liber și relaxare',
      activities: ['Hiking', 'Ciclism', 'Picnic']
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
            text="Informații Sezoniere"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Descoperă ce activități sunt disponibile în fiecare anotimp 
            și planifică-ți vizita în funcție de preferințele tale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {seasons.map((season, index) => {
            const Icon = season.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover text-center lg:text-left"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0">
                  <Icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="font-display font-semibold text-text-primary mb-3">
                  {season.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {season.description}
                </p>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-text-primary mb-2 text-center lg:text-left">Activități:</div>
                  <div className="flex justify-center">
                    <div className="text-left inline-block">
                      {season.activities.map((activity, idx) => (
                        <div key={idx} className="text-xs text-text-secondary">
                          • {activity}
                        </div>
                      ))}
                    </div>
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
            <div className="text-4xl mb-4">🌤️</div>
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              Vremea și Condițiile
            </h3>
            <p className="text-text-light max-w-2xl mx-auto">
              Verifică condițiile meteo înainte de a planifica activitățile. 
              Contactează-ne pentru informații actualizate.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SeasonalInfoSection; 