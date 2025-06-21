import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const SocialLinksSection = () => {
  const handleAnimationComplete = () => {
    console.log('SocialLinks title animation completed!');
  };

  const socialPlatforms = [
    {
      icon: HomeIcon,
      title: 'Facebook',
      description: 'Urmărește-ne pentru noutăți și oferte',
      link: 'https://facebook.com/hotelmarami',
      color: 'bg-blue-500'
    },
    {
      icon: SparklesIcon,
      title: 'Instagram',
      description: 'Vezi poze din hotel și din zona Sinaia',
      link: 'https://instagram.com/hotelmarami',
      color: 'bg-pink-500'
    },
    {
      icon: HeartIcon,
      title: 'TripAdvisor',
      description: 'Citește recenziile oaspeților noștri',
      link: 'https://tripadvisor.com/hotelmarami',
      color: 'bg-green-500'
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
            text="Urmărește-ne"
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Conectează-te cu noi pe rețelele sociale pentru a fi la curent cu ultimele noutăți, 
            oferte speciale și momente frumoase din hotel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover text-center block"
              >
                <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-semibold text-text-primary mb-3">
                  {platform.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {platform.description}
                </p>
                <div className="text-primary-500 font-medium text-sm">
                  Urmărește-ne →
                </div>
              </motion.a>
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
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              Rămâi Conectat
            </h3>
            <p className="text-text-light max-w-2xl mx-auto">
              Abonează-te la newsletter-ul nostru pentru oferte exclusive și noutăți despre hotel.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
              >
                Abonează-te
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinksSection; 