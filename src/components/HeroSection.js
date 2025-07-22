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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 container-custom text-center text-white w-full py-8 md:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline with SplitText */}
          <div className="mb-4 md:mb-6 lg:mb-8">
            <SplitText
              text="Hotel Marami"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold text-shadow-lg leading-tight block"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <SplitText
              text="Locul în care te simți ca acasă, la poalele Castelului Peleș"
              className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-display font-semibold text-primary-300 text-shadow-lg leading-tight block mt-1 sm:mt-2"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
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
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 lg:mb-10 text-gray-200 text-shadow max-w-4xl mx-auto leading-relaxed space-y-2 md:space-y-3"
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
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mt-4 sm:mt-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/rezervare"
                className="btn-secondary text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 flex items-center space-x-2 group"
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
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 transition-all duration-300 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg"
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