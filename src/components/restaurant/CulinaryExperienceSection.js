import React from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const CulinaryExperienceSection = () => {
  const handleAnimationComplete = () => {
    console.log('CulinaryExperience title animation completed!');
  };

  return (
    <section className="section-padding bg-background-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <BlurText
            text="Experiență Culinară"
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            „La Hotel Marami, fiecare masă devine un moment de răsfăț și relaxare, într-un cadru care combină savoarea cu rafinamentul."
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col items-center"
        >
          <ChatBubbleLeftEllipsisIcon className="w-10 h-10 text-primary-500 mb-4" />
          <blockquote className="italic text-lg text-text-secondary mb-4 text-center">
            "O experiență culinară de excepție! Atmosferă plăcută, preparate delicioase și personal atent. Recomand cu drag!"
          </blockquote>
          <div className="font-semibold text-primary-700">— Andreea, clientă</div>
        </motion.div>
      </div>
    </section>
  );
};

export default CulinaryExperienceSection; 