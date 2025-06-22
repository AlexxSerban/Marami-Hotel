import React from 'react';
import { motion } from 'framer-motion';
import BlurText from '../BlurText';

const SocialLinksSection = () => {
  const handleAnimationComplete = () => {
    console.log('SocialLinks title animation completed!');
  };

  const socialPlatforms = [
    {
      title: 'Facebook',
      description: 'Urmărește-ne pentru noutăți și oferte',
      link: 'https://facebook.com/hotelmarami',
      color: 'bg-blue-500',
      logo: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      title: 'Instagram',
      description: 'Vezi poze din hotel și din zona Sinaia',
      link: 'https://instagram.com/hotelmarami',
      color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500',
      logo: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      title: 'Booking',
      description: 'Vezi recenziile și rezervă pe Booking.com',
      link: 'https://www.booking.com/hotel/ro/marami.ro.html',
      color: 'bg-blue-600',
      logo: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-white">
          <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize="22"
            fontWeight="bold"
          >
            B
          </text>
        </svg>
      )
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
          {socialPlatforms.map((platform, index) => (
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
                {platform.logo}
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
          ))}
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