import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, StarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const AdditionalServicesSection = () => {
  const handleAnimationComplete = () => {
    console.log('AdditionalServices title animation completed!');
  };

  const services = [
    {
      icon: HomeIcon,
      title: 'Transfer Aeroport',
      description: 'Serviciu de transfer de la și către aeroportul Otopeni'
    },
    {
      icon: StarIcon,
      title: 'Ghid Turistic',
      description: 'Ghiduri profesionale pentru explorarea zonei'
    },
    {
      icon: CheckCircleIcon,
      title: 'Servicii Spa',
      description: 'Tratamente spa și masaje relaxante (la cerere)'
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
            text="Servicii Suplimentare"
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Oferim o gamă completă de servicii suplimentare pentru a-ți face șederea 
            la Hotel Marami cât mai plăcută și confortabilă.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center card-hover"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="font-display font-semibold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {service.description}
                </p>
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