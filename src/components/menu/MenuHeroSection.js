import React from 'react';
import { motion } from 'framer-motion';
import SplitText from '../SplitText';
import food1 from '../../assets/food/food1.JPG';

const MenuHeroSection = () => {
  const handleAnimationComplete = () => {
    console.log('MenuHero title animation completed!');
  };

  return (
    <section className="section-padding bg-background-primary relative overflow-hidden pt-20 md:pt-24 lg:pt-32">
      <div className="absolute inset-0 z-0">
        <img
          src={food1}
          alt="Meniul Restaurant Hotel Marami"
          className="w-full h-full object-cover object-center opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
      </div>
      <div className="container-custom relative z-10 flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px] py-16 md:py-24 text-center">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 border border-white/10 w-full max-w-4xl mx-auto">
          <SplitText
            text="Meniul Nostru"
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-4 md:mb-6 text-center drop-shadow-2xl break-words hyphens-none flex justify-center items-center"
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white max-w-4xl mx-auto text-center drop-shadow-xl space-y-3 md:space-y-4"
          >
            <p className="text-base md:text-lg lg:text-xl">
              Descoperă autenticitatea bucătăriei românești îmbinată cu rafinamentul mediteranean. 
              Fiecare preparat spune o poveste despre tradiție, gust și pasiune.
            </p>
            <p className="text-base md:text-lg lg:text-xl">
              Ingrediente proaspete, tehnici culinare tradiționale și o atenție deosebită la detalii.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuHeroSection; 