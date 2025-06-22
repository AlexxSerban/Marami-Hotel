import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const RoomTypesSection = () => {
  const handleAnimationComplete = () => {
    console.log('RoomTypes title animation completed!');
  };

  const roomTypes = [
    {
      id: 'double',
      name: 'Camere Double Standard',
      icon: '🛌',
      description: 'Camere spațioase și luminoase, dotate cu toate facilitățile necesare pentru o ședere confortabilă.',
      features: [
        'Baie cu cabină de duș',
        'Minibar',
        'Wi-Fi gratuit',
        'TV prin cablu',
        'Telefon',
        'Balcon cu vedere spre munte'
      ],
      target: 'Cupluri, turiști relaxați',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      price: '65 USD',
      size: '≈20 m²'
    },
    {
      id: 'double-lux',
      name: 'Camere Double de Lux',
      icon: '🛌',
      description: 'Camere mai mari, pentru un plus de confort și eleganță, perfecte pentru oaspeții care apreciază luxul.',
      features: [
        'Pat matrimonial',
        'Baie cu cadă',
        'Toate dotările standard',
        'Vedere panoramică',
        'Spațiu de relaxare',
        'Design premium'
      ],
      target: 'Cupluri, escapade romantice, oaspeți premium',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      price: '95 USD',
      size: '≈26 m²'
    },
    {
      id: 'matrimonial',
      name: 'Cameră Matrimonială',
      icon: '🛌',
      description: 'Ideală pentru 2 persoane, confort superior, cu pat mare și priveliște excepțională.',
      features: [
        'Pat matrimonial mare',
        'Baie elegantă',
        'Balcon privat',
        'Vedere la munte',
        'Decor romantic',
        'Spațiu generos'
      ],
      target: 'Cupluri, escapade romantice',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      price: '85 USD',
      size: '≈24 m²'
    },
    {
      id: 'single',
      name: 'Cameră Single',
      icon: '🛏️',
      description: 'Cameră compactă pentru o singură persoană, cu toate dotările standard și confortul necesar.',
      features: [
        'Pat single confortabil',
        'Baie cu duș',
        'Wi-Fi gratuit',
        'TV prin cablu',
        'Minibar',
        'Design funcțional'
      ],
      target: 'Călători individuali, business',
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      price: '45 USD',
      size: '≈16 m²'
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
    <section className="section-padding bg-background-secondary">
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
            text="Tipuri de Camere Disponibile"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Alege tipul de cameră care se potrivește cel mai bine nevoilor tale.
          </p>
        </motion.div>

        {/* Room Types Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {roomTypes.map((room, index) => (
            <motion.div
              key={room.id}
              variants={cardVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-4 left-4 text-3xl">
                  {room.icon}
                </div>
                
                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  {room.price}
                </div>
                
                {/* Size Badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {room.size}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-text-primary mb-3">
                  {room.name}
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-4">
                  {room.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-text-secondary">
                      <CheckIcon className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Target Audience */}
                <div className="bg-primary-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <UserGroupIcon className="w-4 h-4 text-primary-500" />
                    <span className="text-sm font-medium text-primary-700">
                      Public țintă: {room.target}
                    </span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={`/rezervare?room=${room.id}`}
                    className="w-full btn-primary block text-center"
                  >
                    Rezervă Această Cameră
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RoomTypesSection; 