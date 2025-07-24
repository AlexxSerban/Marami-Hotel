import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, StarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';
import comfortableRoom from '../../assets/rooms/CamereDoublede Lux.jpg';

const ComfortableRoomsSection = () => {
  const handleAnimationComplete = () => {
    console.log('ComfortableRooms title animation completed!');
  };

  const features = [
    {
      icon: HomeIcon,
      title: 'Design Modern',
      description: 'Camere amenajate cu gust și eleganță, combinând confortul cu estetica'
    },
    {
      icon: StarIcon,
      title: 'Dotări Complete',
      description: 'Toate facilitățile necesare pentru o ședere plăcută și relaxantă'
    },
    {
      icon: CheckCircleIcon,
      title: 'Siguranță Garantată',
      description: 'Sisteme de securitate moderne și personal atent la nevoile tale'
    }
  ];

  return (
    <section className="section-padding bg-background-primary">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <BlurText
            text="Camere Confortabile"
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light mb-6">
            Camerele noastre sunt proiectate pentru a oferi confortul și relaxarea pe care le meriți. 
            Fiecare cameră este curățată zilnic și întreținută conform celor mai înalte standarde.
          </p>
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">{feature.title}</h3>
                    <p className="text-text-secondary text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={comfortableRoom}
            alt="Camere confortabile Hotel Marami - Design modern și elegant"
            className="rounded-xl shadow-lg w-full h-80 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComfortableRoomsSection; 