import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import BlurText from './BlurText';

const EatAndDrinkSection = () => {
  const handleAnimationComplete = () => {
    console.log('EatAndDrink title animation completed!');
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <BlurText
            text="Restaurant"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary-500 mb-6">
            O experiență culinară autentică, într-un cadru relaxant
          </h3>
          <p className="text-lg text-text-light max-w-4xl mx-auto">
            Fie că iei micul dejun, prânzul sau cina, la restaurantul nostru te așteaptă preparate proaspete, gătite cu atenție și inspirație. Folosim ingrediente locale, de calitate, iar meniul îmbină gusturile tradiționale românești cu influențe internaționale, pentru o experiență echilibrată și savuroasă.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Kitchen Club Restaurant"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6"
          >
            {/* Features */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 w-full">
              <div className="flex flex-row items-center justify-center text-center lg:justify-start lg:text-left space-x-3 w-full">
                <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                <span className="text-text-primary font-medium">Mic dejun, ceai și cafea gratuite</span>
              </div>
              <div className="flex flex-row items-center justify-center text-center lg:justify-start lg:text-left space-x-3 w-full">
                <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                <span className="text-text-primary font-medium">Bucătărie complet utilată</span>
              </div>
              <div className="flex flex-row items-center justify-center text-center lg:justify-start lg:text-left space-x-3 w-full">
                <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                <span className="text-text-primary font-medium">Restaurant cu 40 de locuri</span>
              </div>
              <div className="flex flex-row items-center justify-center text-center lg:justify-start lg:text-left space-x-3 w-full">
                <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                <span className="text-text-primary font-medium">Bar modern cu cocktailuri speciale</span>
              </div>
              <div className="flex flex-row items-center justify-center text-center lg:justify-start lg:text-left space-x-3 w-full">
                <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                <span className="text-text-primary font-medium">Bucătărie românească și mediteraneană</span>
              </div>
              <div className="flex flex-row items-center justify-center text-center lg:justify-start lg:text-left space-x-3 w-full">
                <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                <span className="text-text-primary font-medium">Room service disponibil</span>
              </div>
              <div className="flex flex-row items-center justify-center text-center lg:justify-start lg:text-left space-x-3 w-full">
                <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                <span className="text-text-primary font-medium">Evenimente private și corporate</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex justify-center lg:justify-start"
            >
              <Link
                to="/restaurant"
                className="inline-flex items-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-600 transition-colors duration-300"
              >
                <span>Vezi meniul</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EatAndDrinkSection; 