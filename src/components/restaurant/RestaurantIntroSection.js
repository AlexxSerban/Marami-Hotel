import React from 'react';
import { motion } from 'framer-motion';
import SplitText from '../SplitText';

const RestaurantIntroSection = () => {
  const handleAnimationComplete = () => {
    console.log('Restaurant title animation completed!');
  };

  return (
    <section className="section-padding bg-background-primary relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80"
          alt="Grădina de vară Restaurant Marami"
          className="w-full h-full object-cover object-center opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
      </div>
      <div className="container-custom relative z-10 flex flex-col items-center justify-center min-h-[400px] py-24">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          <SplitText
            text="Restaurant & Grădină de Vară"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 text-center drop-shadow-2xl"
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
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-white max-w-2xl mx-auto text-center drop-shadow-xl font-medium"
          >
            Răsfăț culinar într-un colț de natură la poalele Castelului Peleș.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default RestaurantIntroSection; 