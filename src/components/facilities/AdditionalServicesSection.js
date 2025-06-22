import React from 'react';
import { motion } from 'framer-motion';

const AdditionalServicesSection = () => {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-background-primary rounded-2xl p-8">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              Servicii Personalizate
            </h3>
            <p className="text-text-light max-w-2xl mx-auto mb-6">
              Toate serviciile suplimentare pot fi personalizate în funcție de nevoile tale. 
              Contactează-ne pentru mai multe detalii și rezervări.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Contactează-ne
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection; 