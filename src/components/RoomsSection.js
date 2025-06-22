import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlurText from './BlurText';

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
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 2,
      name: 'Double de lux',
      persons: '2 persoane',
      bathroom: 'Baie privată',
      price: '420',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 3,
      name: 'Matrimonială',
      persons: '2 persoane',
      bathroom: 'Baie privată',
      price: '380',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80'
    },
    {
      id: 4,
      name: 'Single',
      persons: '1 persoană',
      bathroom: 'Baie privată',
      price: '180',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80'
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
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Fiecare cameră este gândită pentru a-ți oferi confortul și liniștea de care ai nevoie, cu facilități moderne și tarife competitive. Fie că ești în căutarea unei escapade relaxante sau a unui loc primitor pentru a te simți ca acasă, te așteptăm cu opțiuni potrivite pentru tine.
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
              className="relative h-80 rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-text-light mb-4">
            Nu găsești ce cauți? Contactează-ne pentru opțiuni personalizate.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/cazare"
                className="btn-secondary"
              >
                Vezi Toate Camerele
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/rezervare"
                className="btn-primary"
              >
                Rezervă
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsSection; 