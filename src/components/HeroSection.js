import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import SplitText from './SplitText';
import exteriorView1 from '../assets/exteriorViewImages/Exterior_View1.jpg';

const HeroSection = () => {
  const handleAnimationComplete = () => {
    console.log('Title animation completed!');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 md:py-16 lg:py-24 pb-16 md:pb-20 lg:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={exteriorView1}
          alt="Hotel Marami Sinaia - Vedere exterioară"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline with SplitText */}
          <div className="mb-6 md:mb-8 lg:mb-12">
            <SplitText
              text="Hotel Marami"
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-shadow-lg leading-tight block break-words hyphens-none"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <SplitText
              text="Locul în care te simți ca acasă, la poalele Castelului Peleș"
              className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-display font-semibold text-primary-300 text-shadow-lg leading-tight block mt-2 break-words hyphens-none"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 lg:mb-12 text-gray-200 text-shadow max-w-4xl mx-auto leading-relaxed space-y-3 md:space-y-4"
          >
            <p>
              Situat la doar 300 de metri de Peleș, într-o zonă liniștită și înconjurată de natură, Hotel Marami îți oferă tot ce ai nevoie pentru un sejur confortabil: aer curat, priveliști superbe către munți și o atmosferă relaxantă.
            </p>
            <p className="text-primary-300 font-semibold">
              Bine ai venit acasă, la Marami.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 justify-center items-center pb-8 md:pb-12 lg:pb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/rezervare"
                className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center space-x-2 group"
              >
                <span>Rezervă Acum</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/cazare"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
              >
                Vezi Camerele
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 