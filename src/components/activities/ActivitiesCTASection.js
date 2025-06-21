import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const ActivitiesCTASection = () => {
  const handleAnimationComplete = () => {
    console.log('ActivitiesCTA title animation completed!');
  };

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: 'Telefon',
      value: '+40 244 315 000',
      action: 'Suna acum',
      href: 'tel:+40244315000'
    },
    {
      icon: CalendarIcon,
      title: 'Rezervare Online',
      value: 'Disponibilitate instant',
      action: 'Verifică disponibilitatea',
      href: '#booking'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <BlurText
            text="Gata pentru Aventură?"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Nu rata oportunitatea de a explora munții Bucegi și de a experimenta 
            activitățile pe care le oferă zona Sinaia. Contactează-ne pentru a-ți organiza aventura perfectă.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <CalendarIcon className="w-6 h-6" />
            <span>Rezervă Activități</span>
            <ArrowRightIcon className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <PhoneIcon className="w-6 h-6" />
            <span>Vezi Programul</span>
            <ArrowRightIcon className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                <p className="text-white/80 mb-4">{method.value}</p>
                <motion.a
                  href={method.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                >
                  {method.action}
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-white/80">Activități Disponibile</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Asistență Disponibilă</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/80">Siguranță Garantată</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-white/80 text-lg">
            Te așteptăm cu drag pentru o experiență de aventură memorabilă în munții Bucegi! 🏔️
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesCTASection; 