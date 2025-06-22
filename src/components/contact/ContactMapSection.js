import React from 'react';
import { motion } from 'framer-motion';
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.1234567890123!2d25.5398897!3d45.3574801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b310d34e8642e5%3A0x1396870e25205b19!2sMarami!5e0!3m2!1sen!2sro!4v1234567890123"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația Hotel Marami - Marami, Strada Furnica 52, Sinaia 106100"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMapSection; 