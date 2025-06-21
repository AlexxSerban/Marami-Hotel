import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const AccommodationCTASection = () => {
  const handleAnimationComplete = () => {
    console.log('AccommodationCTA title animation completed!');
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
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'rezervari@hotelmarami.ro',
      action: 'Trimite email',
      href: 'mailto:rezervari@hotelmarami.ro'
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
            text="Gata să Rezervi Camera Ta?"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Nu rata oportunitatea de a te bucura de confortul și eleganța Hotel Marami. 
            Rezervă acum și asigură-ți locul în inima munților Bucegi.
          </p>
        </motion.div>

        {/* Main CTA Buttons */}
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
            <span>Rezervă Acum</span>
            <ArrowRightIcon className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <PhoneIcon className="w-6 h-6" />
            <span>Vezi Disponibilitatea</span>
            <ArrowRightIcon className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
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

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-white/80 text-lg">
            Te așteptăm cu drag la Hotel Marami pentru o experiență de cazare memorabilă! 🏔️
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AccommodationCTASection; 