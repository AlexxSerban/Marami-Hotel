import React from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';
import doubleRoom from '../assets/rooms/Double_camera.jpg';
import doubleLux from '../assets/rooms/Double de lux.jpg';
import matrimoniala from '../assets/rooms/Matrimoniala.jpg';
import singleRoom from '../assets/rooms/Single.jpg';

const RoomsSection = () => {
  const handleAnimationComplete = () => {
    console.log('Rooms title animation completed!');
  };

  const rooms = [
    {
      id: 1,
      name: 'Double',
      persons: '2 persoane',
      bathroom: 'Baie privată',
      price: '280',
      image: doubleRoom
    },
    {
      id: 2,
      name: 'Double de lux',
      persons: '2 persoane',
      bathroom: 'Baie privată',
      price: '420',
      image: doubleLux
    },
    {
      id: 3,
      name: 'Matrimonială',
      persons: '2 persoane',
      bathroom: 'Baie privată',
      price: '380',
      image: matrimoniala
    },
    {
      id: 4,
      name: 'Single',
      persons: '1 persoană',
      bathroom: 'Baie privată',
      price: '180',
      image: singleRoom
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="rooms" className="section-padding bg-background-secondary">
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
            text="Camere & Tarife"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-4xl mx-auto">
            Camerele Hotelului Marami sunt amenajate cu atenție pentru a oferi confort, funcționalitate și liniște. Ambientul este plăcut, liniștit și bine organizat, ideal pentru o ședere relaxantă.
          </p>
          <p className="text-lg text-text-light max-w-3xl mx-auto mt-4">
            Poți alege între mai multe tipuri de camere, în funcție de nevoile tale — cu prețuri echilibrate, adaptate confortului oferit.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              variants={cardVariants}
              className="relative min-h-80 rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={room.image}
                alt={room.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Price - Top Right */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="text-xs text-text-light">Începând de la</div>
                <div className="text-lg font-bold text-text-primary">{room.price} RON</div>
              </div>

              {/* Room Info - Bottom Left */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white rounded-lg px-3 py-2">
                <div className="font-semibold text-sm">{room.name}</div>
                <div className="text-xs opacity-90">{room.persons} | {room.bathroom}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default RoomsSection; 