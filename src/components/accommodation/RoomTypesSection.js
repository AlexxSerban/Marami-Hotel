import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon,
  CheckIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import BlurText from '../BlurText';
import doubleRoom from '../../assets/rooms/CameraDouble Standard.JPG';
import doubleLux from '../../assets/rooms/CamereDoublede Lux.jpg';
import matrimoniala from '../../assets/rooms/CameraMatrimoniala.JPG';
import singleRoom from '../../assets/rooms/CameraSingle.JPG';

// Import additional images for each room type
import doubleRoom2 from '../../assets/rooms/CameraDouble Standard2.JPG';
import doubleRoom3 from '../../assets/rooms/CameraDouble Standard3.JPG';
import doubleLux2 from '../../assets/rooms/CamereDoublede Lux2.jpg';
import doubleLux3 from '../../assets/rooms/CamereDoublede Lux3.jpg';
import doubleLux4 from '../../assets/rooms/CamereDoublede Lux4.jpg';
import matrimoniala2 from '../../assets/rooms/CameraMatrimoniala2.JPG';
import matrimoniala3 from '../../assets/rooms/CameraMatrimoniala3.JPG';
import singleRoom2 from '../../assets/rooms/CameraSingle2.JPG';
import singleRoom3 from '../../assets/rooms/CameraSingle3.JPG';
import singleRoom4 from '../../assets/rooms/CameraSingle4.JPG';

// Import bathroom images
import baieDouble from '../../assets/rooms/BaieDouble Standard.JPG';
import baieDoubleLux from '../../assets/rooms/BaieDoublede Lux.jpg';
import baieDoubleLux2 from '../../assets/rooms/BaieDoublede Lux2.jpg';
import baieMatrimoniala from '../../assets/rooms/BaieMatrimoniala.JPG';
import baieMatrimoniala2 from '../../assets/rooms/BaieMatrimoniala2.JPG';
import baieMatrimoniala3 from '../../assets/rooms/BaieMatrimoniala3.JPG';
import baieSingle from '../../assets/rooms/BaieSingle.JPG';
import baieSingle2 from '../../assets/rooms/BaieSingle2.JPG';

const RoomTypesSection = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      image: doubleRoom,
      size: '≈20 m²',
      images: [
        { src: doubleRoom, alt: 'Camera Double Standard' },
        { src: doubleRoom2, alt: 'Camera Double Standard - Vedere 2' },
        { src: doubleRoom3, alt: 'Camera Double Standard - Vedere 3' },
        { src: baieDouble, alt: 'Baie Double Standard' }
      ]
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
      image: doubleLux,
      size: '≈26 m²',
      images: [
        { src: doubleLux, alt: 'Camera Double de Lux' },
        { src: doubleLux2, alt: 'Camera Double de Lux - Vedere 2' },
        { src: doubleLux3, alt: 'Camera Double de Lux - Vedere 3' },
        { src: doubleLux4, alt: 'Camera Double de Lux - Vedere 4' },
        { src: baieDoubleLux, alt: 'Baie Double de Lux' },
        { src: baieDoubleLux2, alt: 'Baie Double de Lux - Vedere 2' }
      ]
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
      image: matrimoniala,
      size: '≈24 m²',
      images: [
        { src: matrimoniala, alt: 'Camera Matrimonială' },
        { src: matrimoniala2, alt: 'Camera Matrimonială - Vedere 2' },
        { src: matrimoniala3, alt: 'Camera Matrimonială - Vedere 3' },
        { src: baieMatrimoniala, alt: 'Baie Matrimonială' },
        { src: baieMatrimoniala2, alt: 'Baie Matrimonială - Vedere 2' },
        { src: baieMatrimoniala3, alt: 'Baie Matrimonială - Vedere 3' }
      ]
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
      image: singleRoom,
      size: '≈16 m²',
      images: [
        { src: singleRoom, alt: 'Camera Single' },
        { src: singleRoom2, alt: 'Camera Single - Vedere 2' },
        { src: singleRoom3, alt: 'Camera Single - Vedere 3' },
        { src: singleRoom4, alt: 'Camera Single - Vedere 4' },
        { src: baieSingle, alt: 'Baie Single' },
        { src: baieSingle2, alt: 'Baie Single - Vedere 2' }
      ]
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

  const openLightbox = (room) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedRoom(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedRoom) {
      setCurrentImageIndex((prev) => 
        prev === selectedRoom.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedRoom) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedRoom.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
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
              <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => openLightbox(room)}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Icon - Removed */}
                
                {/* Size Badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {room.size}
                </div>

                {/* Click indicator */}
                <div className="absolute top-4 left-16 bg-black/50 backdrop-blur-sm text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                     onClick={(e) => {
                       e.stopPropagation();
                       openLightbox(room);
                     }}>
                  <span className="text-xs">👁</span>
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

        {/* Lightbox */}
        <AnimatePresence>
          {selectedRoom && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <div className="relative max-w-4xl w-full max-h-full" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                {/* Image Container */}
                <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={selectedRoom.images[currentImageIndex].src}
                      alt={selectedRoom.images[currentImageIndex].alt}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                  >
                    <ChevronLeftIcon className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                  >
                    <ChevronRightIcon className="w-6 h-6" />
                  </button>
                </div>

                {/* Room Info */}
                <div className="mt-4 text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{selectedRoom.name}</h3>
                  <p className="text-lg opacity-90">{selectedRoom.size}</p>
                </div>

                {/* Image Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                  {selectedRoom.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-white scale-125'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>

                {/* Image Counter */}
                <div className="text-center mt-4 text-white/80">
                  <span className="text-sm">
                    {currentImageIndex + 1} / {selectedRoom.images.length}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RoomTypesSection; 