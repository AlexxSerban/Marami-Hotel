import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CalendarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const AccommodationCTASection = () => {
  const handleAnimationComplete = () => {
    console.log('AccommodationCTA title animation completed!');
  };

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
            Nu rata oportunitatea de a te bucura de confort și de o reducere de pana la 10% prin apel telefonic. 
            Rezervă acum și asigură-ți locul în inima munților Bucegi.
          </p>
        </motion.div>

        {/* Main CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/rezervare"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <CalendarIcon className="w-6 h-6" />
              <span>Rezervă Acum</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
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