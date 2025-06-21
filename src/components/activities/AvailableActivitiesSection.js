import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const AvailableActivitiesSection = () => {
  const handleAnimationComplete = () => {
    console.log('AvailableActivities title animation completed!');
  };

  const activities = [
    {
      icon: HomeIcon,
      title: 'Schi & Snowboard',
      description: 'Pârtii pentru toate nivelurile, de la începători la avansați',
      season: 'Iarnă',
      difficulty: 'Toate nivelurile'
    },
    {
      icon: SparklesIcon,
      title: 'Drumetii în Munte',
      description: 'Trasee marcate prin munții Bucegi cu priveliști spectaculoase',
      season: 'Toate anotimpurile',
      difficulty: 'Ușor - Mediu'
    },
    {
      icon: HeartIcon,
      title: 'Ciclism Montan',
      description: 'Trasee pentru ciclism montan și downhill',
      season: 'Primăvară - Toamnă',
      difficulty: 'Mediu - Greu'
    }
  ];

  return (
    <section className="section-padding bg-background-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <BlurText
            text="Activități Disponibile"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Descoperă varietatea de activități pe care le poți practica în zona Sinaia, 
            de la sporturi de iarnă la aventuri de vară în munții Bucegi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {activities.map((activity, index) => {
            const Icon = activity.icon;
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
                  {activity.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {activity.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-secondary">Sezon:</span>
                    <span className="font-medium text-text-primary">{activity.season}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-text-secondary">Dificultate:</span>
                    <span className="font-medium text-text-primary">{activity.difficulty}</span>
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
          <div className="bg-gradient-to-r from-primary-50 to-background-secondary rounded-2xl p-8">
            <div className="text-4xl mb-4">🏔️</div>
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              Ghiduri și Echipamente
            </h3>
            <p className="text-text-light max-w-2xl mx-auto">
              Oferim servicii de ghidare și închirieri de echipamente pentru toate activitățile. 
              Contactează-ne pentru detalii și rezervări.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AvailableActivitiesSection; 