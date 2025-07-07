import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon, SparklesIcon, HomeIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';
import terrace10 from '../../assets/terraceImages/Terrace10.jpg';

const GardenSection = () => {
  const handleAnimationComplete = () => {
    console.log('Garden title animation completed!');
  };



  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <BlurText
            text="Grădina de vară"
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <h3 className="text-xl md:text-2xl font-display font-semibold text-primary-500 mb-4">
            Un colț de liniște în aer liber
          </h3>
          <p className="text-lg text-text-light mb-6">
            Fie că începi ziua cu un mic dejun în lumina blândă a dimineții, savurezi un prânz liniștit sau închei seara la cină, grădina de vară oferă un cadru natural și plin de farmec.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center space-x-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-primary-100 rounded-full">
                <SunIcon className="w-5 h-5 text-primary-500" />
              </span>
              <span className="text-text-secondary">Atmosferă relaxantă, departe de agitație</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-primary-100 rounded-full">
                <HomeIcon className="w-5 h-5 text-primary-500" />
              </span>
              <span className="text-text-secondary">Decor natural, cu flori, vegetație și aer curat</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-primary-100 rounded-full">
                <SparklesIcon className="w-5 h-5 text-primary-500" />
              </span>
              <span className="text-text-secondary">Potrivită pentru orice masă a zilei — mic dejun, prânz sau cină</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-primary-100 rounded-full">
                <SparklesIcon className="w-5 h-5 text-primary-500" />
              </span>
              <span className="text-text-secondary">Un loc unde mâncarea bună și natura se întâlnesc în armonie</span>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={terrace10}
            alt="Grădina de vară Hotel Marami - Terasă cu vedere panoramică"
            className="rounded-xl shadow-lg w-full h-80 object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GardenSection; 