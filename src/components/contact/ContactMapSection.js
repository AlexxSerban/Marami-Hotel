import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const ContactMapSection = () => {
  const handleAnimationComplete = () => {
    console.log('ContactMap title animation completed!');
  };

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <BlurText
            text="Locația Noastră"
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Găsește-ne ușor în centrul Sinaiei, la doar câteva minute de atracțiile turistice principale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Hotel+Marami,+Strada+Furnica+52,+Sinaia,+Romania&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Marami Location"
              className="w-full"
            ></iframe>
          </div>
          
          {/* Map Overlay Info */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-5 h-5 text-primary-500" />
              <div>
                <div className="font-semibold text-text-primary">Hotel Marami</div>
                <div className="text-sm text-text-secondary">Strada Furnica nr. 52, Sinaia</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-background-primary rounded-2xl p-6">
            <div className="text-2xl mb-3">📍</div>
            <h3 className="text-xl font-display font-bold text-text-primary mb-2">
              Adresa Completă
            </h3>
            <p className="text-text-light">
              Strada Furnica 52, Sinaia, România, 106100
            </p>
            <p className="text-text-secondary text-sm mt-2">
              La doar 5 minute de Castelul Peleș și 10 minute de Mânăstirea Sinaia
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMapSection; 