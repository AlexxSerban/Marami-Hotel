import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, StarIcon, CheckIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const RestaurantBarSection = () => {
  const handleAnimationComplete = () => {
    console.log('RestaurantBar title animation completed!');
  };

  const features = [
    {
      icon: HomeIcon,
      title: 'Bucătărie Tradițională',
      description: 'Preparate românești autentice și arome mediteraneene'
    },
    {
      icon: StarIcon,
      title: 'Atmosferă Elegantă',
      description: 'Decor rafinat și serviciu de calitate superioară'
    },
    {
      icon: CheckIcon,
      title: 'Bar Modern',
      description: 'Cocktailuri și băuturi selecte într-un cadru relaxant'
    }
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
            text="Restaurant & Bar"
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light mb-6">
            Restaurantul nostru îmbină tradiția culinară românească cu rafinamentul modern. 
            Barul oferă o selecție variată de băuturi și cocktailuri într-o atmosferă relaxantă.
          </p>
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">{feature.title}</h3>
                    <p className="text-text-secondary text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
            alt="Restaurant Hotel Marami"
            className="rounded-xl shadow-lg w-full h-80 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantBarSection; 