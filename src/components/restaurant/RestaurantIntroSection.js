import React from 'react';
import { motion } from 'framer-motion';
import SplitText from '../SplitText';
import restaurant3 from '../../assets/restaurantImages/restaurant3.jpg';

const RestaurantIntroSection = () => {
  const handleAnimationComplete = () => {
    console.log('Restaurant title animation completed!');
  };

  return (
    <section className="section-padding bg-background-primary relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={restaurant3}
          alt="Restaurant Hotel Marami - Interior elegant"
          className="w-full h-full object-cover object-center opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
      </div>
      <div className="container-custom relative z-10 flex flex-col items-center justify-center min-h-[400px] py-24">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          <SplitText
            text="Răsfăț culinar într-un colț liniștit de natură"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 text-center drop-shadow-2xl break-words hyphens-none"
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white max-w-4xl mx-auto text-center drop-shadow-xl space-y-4"
          >

            <p className="text-lg md:text-xl">
              La Marami, mesele nu sunt doar momente ale zilei, ci experiențe care aduc gust, relaxare și bucurie.  Meniul îmbină savoarea bucătăriei tradiționale românești cu influențe internaționale, într-un echilibru care încântă fiecare simț.
            </p>
            <p className="text-lg md:text-xl">
              Un loc unde timpul pare să încetinească, iar fiecare masă devine o amintire plăcută.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantIntroSection; 