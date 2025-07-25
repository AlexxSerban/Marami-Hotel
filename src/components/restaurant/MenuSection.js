import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const MenuSection = () => {
  const handleAnimationComplete = () => {
    console.log('Menu title animation completed!');
  };

  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <BlurText
            text="Meniul"
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text-primary mb-6 tracking-tight"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <h3 className="text-xl md:text-2xl font-display font-semibold text-primary-500 mb-4">
            Gustul mâncării de acasă, pregătit cu grijă și ingrediente proaspete
          </h3>
          <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed font-sans mb-8">
            Mâncarea noastră te invită să te relaxezi, să te simți bine și să savurezi momentele petrecute alături de cei dragi, exact ca la tine acasă.
          </p>
          <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed font-sans mb-8">
            Descoperă autenticitatea bucătăriei românești îmbinată cu rafinamentul mediteranean. 
            Fiecare preparat spune o poveste despre tradiție, gust și pasiune.
          </p>
          <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed font-sans mb-12">
            Ingrediente proaspete, tehnici culinare tradiționale și o atenție deosebită la detalii.
          </p>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Link
              to="/meniu"
              className="inline-flex items-center space-x-3 bg-primary-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-primary-600 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              <span>Vezi meniul complet</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection; 