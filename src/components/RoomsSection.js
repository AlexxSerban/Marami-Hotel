import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import BlurText from './BlurText';
import doubleRoom from '../assets/rooms/CameraDouble Standard.JPG';
import doubleLux from '../assets/rooms/CamereDoublede Lux.jpg';
import matrimoniala from '../assets/rooms/CameraMatrimoniala.JPG';
import singleRoom from '../assets/rooms/CameraSingle.JPG';

// Import additional images for each room type
import doubleRoom2 from '../assets/rooms/CameraDouble Standard2.JPG';
import doubleRoom3 from '../assets/rooms/CameraDouble Standard3.JPG';
import doubleLux2 from '../assets/rooms/CamereDoublede Lux2.jpg';
import doubleLux3 from '../assets/rooms/CamereDoublede Lux3.jpg';
import doubleLux4 from '../assets/rooms/CamereDoublede Lux4.jpg';
import matrimoniala2 from '../assets/rooms/CameraMatrimoniala2.JPG';
import matrimoniala3 from '../assets/rooms/CameraMatrimoniala3.JPG';
import singleRoom2 from '../assets/rooms/CameraSingle2.JPG';
import singleRoom3 from '../assets/rooms/CameraSingle3.JPG';
import singleRoom4 from '../assets/rooms/CameraSingle4.JPG';

// Import bathroom images
import baieDouble from '../assets/rooms/BaieDouble Standard.JPG';
import baieDoubleLux from '../assets/rooms/BaieDoublede Lux.jpg';
import baieDoubleLux2 from '../assets/rooms/BaieDoublede Lux2.jpg';
import baieMatrimoniala from '../assets/rooms/BaieMatrimoniala.JPG';
import baieMatrimoniala2 from '../assets/rooms/BaieMatrimoniala2.JPG';
import baieMatrimoniala3 from '../assets/rooms/BaieMatrimoniala3.JPG';
import baieSingle from '../assets/rooms/BaieSingle.JPG';
import baieSingle2 from '../assets/rooms/BaieSingle2.JPG';

const RoomsSection = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      image: doubleRoom,
      images: [
        { src: doubleRoom, alt: 'Camera Double Standard' },
        { src: doubleRoom2, alt: 'Camera Double Standard - Vedere 2' },
        { src: doubleRoom3, alt: 'Camera Double Standard - Vedere 3' },
        { src: baieDouble, alt: 'Baie Double Standard' }
      ]
    },
    {
      id: 2,
      name: 'Double de lux',
      persons: '2 persoane',
      bathroom: 'Baie privată',
      price: '420',
      image: doubleLux,
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
      id: 3,
      name: 'Matrimonială',
      persons: '2 persoane',
      bathroom: 'Baie privată',
      price: '380',
      image: matrimoniala,
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
      id: 4,
      name: 'Single',
      persons: '1 persoană',
      bathroom: 'Baie privată',
      price: '180',
      image: singleRoom,
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
              className="relative min-h-80 rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer group"
              onClick={() => openLightbox(room)}
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

              {/* Click indicator */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs">👁</span>
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
                  <p className="text-lg opacity-90">{selectedRoom.persons} | {selectedRoom.bathroom}</p>
                  <p className="text-xl font-semibold mt-2">{selectedRoom.price} RON / noapte</p>
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

export default RoomsSection; 