import React from 'react';
import { motion } from 'framer-motion';
import { 
  UsersIcon,
  BeakerIcon,
  HomeIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import BlurText from './BlurText';
import restaurant1 from '../assets/restaurantImages/restaurant1.jpg';
import salaConferinta3 from '../assets/salaConferinta3.jpg';
import terrace11 from '../assets/terraceImages/Terrace11.jpg';
import cameraMatrimoniala2 from '../assets/rooms/CameraMatrimoniala2.JPG';

const AmenitiesSection = () => {
  const handleAnimationComplete = () => {
    console.log('Amenities title animation completed!');
  };

  const amenities = [
    {
      icon: UsersIcon,
      title: 'Sală de Conferințe',
      description: 'Spațiu modern pentru evenimente și conferințe, cu capacitate de 40 de persoane.',
      capacity: '40 persoane',
      image: salaConferinta3
    },
    {
      icon: BeakerIcon,
      title: 'Bar',
      description: 'Bar modern cu cocktailuri și băuturi de calitate, perfect pentru relaxare.',
      capacity: 'Cocktailuri & Băuturi',
      image: restaurant1
    },
    {
      icon: HomeIcon,
      title: 'Camere Confortabile',
      description: 'Fiecare cameră este gândită pentru confortul tău, spațioase și toate facilitățile necesare.',
      capacity: '4 tipuri',
      image: cameraMatrimoniala2
    },
    {
      icon: StarIcon,
      title: 'Terasă Liniștită',
      description: 'Ideală pentru micul dejun în aer liber sau seara cu o băutură răcoritoare.',
      capacity: 'Zonă liniștită',
      image: terrace11
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="amenities" className="section-padding bg-background-primary">
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
            text="Facilități & Servicii"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-4xl mx-auto">
            Ne dorim ca timpul petrecut la Hotel Marami să fie cât mai plăcut, lipsit de griji și adaptat nevoilor tale. Punem la dispoziție toate facilitățile esențiale pentru un sejur confortabil, într-un cadru liniștit și primitor.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative min-h-80 rounded-2xl overflow-hidden shadow-lg card-hover group cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Capacity Badge - Top Right */}
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-lg text-sm font-medium z-10">
                  {amenity.capacity}
                </div>

                {/* Content - Frosted Glass Rectangle */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/20 backdrop-blur-md rounded-lg p-3 border border-white/30 transition-all duration-300 group-hover:opacity-0 group-hover:scale-95">
                  <h3 className="text-lg font-display font-bold text-white mb-1 drop-shadow-lg">
                    {amenity.title}
                  </h3>
                  <p className="text-white/90 text-xs leading-relaxed drop-shadow-md">
                    {amenity.description}
                  </p>
                </div>
              </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection; 