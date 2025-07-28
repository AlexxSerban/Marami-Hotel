import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';
import doubleRoom from '../../assets/rooms/CameraDouble Standard.JPG';
import doubleLux from '../../assets/rooms/CamereDoublede Lux.jpg';
import doubleLux1 from '../../assets/rooms/CamereDoublede Lux2.jpg';
import matrimoniala from '../../assets/rooms/CameraMatrimoniala.JPG';
import matrimoniala2 from '../../assets/rooms/CameraMatrimoniala2.JPG';
import singleRoom from '../../assets/rooms/CameraSingle.JPG';
import singleRoom2 from '../../assets/rooms/CameraSingle2.JPG';
import doubleRoom2 from '../../assets/rooms/CameraDouble Standard2.JPG';
import doubleRoom3 from '../../assets/rooms/CameraDouble Standard3.JPG';
import baie from '../../assets/rooms/BaieDouble Standard.JPG';

const RoomGallerySection = () => {
  const handleAnimationComplete = () => {
    console.log('RoomGallery title animation completed!');
  };


  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);



  const galleryImages = [
    {
      id: 1,
      src: doubleRoom,
      alt: 'Cameră Double',
      category: 'double-standard',
      title: 'Cameră Double',
      description: 'Cameră confortabilă pentru 2 persoane'
    },
    {
      id: 2,
      src: doubleLux,
      alt: 'Cameră Double de Lux',
      category: 'double-lux',
      title: 'Cameră Double de Lux',
      description: 'Cameră elegantă cu design premium'
    },
    {
      id: 3,
      src: matrimoniala,
      alt: 'Cameră Matrimonială',
      category: 'matrimonial',
      title: 'Cameră Matrimonială',
      description: 'Cameră romantică cu pat mare'
    },
    {
      id: 4,
      src: singleRoom,
      alt: 'Cameră Single',
      category: 'single',
      title: 'Cameră Single',
      description: 'Cameră compactă pentru călători individuali'
    },
    {
      id: 5,
      src: baie,
      alt: 'Baie Cameră',
      category: 'double-standard',
      title: 'Baie Modernă',
      description: 'Baie elegantă cu toate facilitățile'
    },
    {
      id: 6,
      src: doubleLux1,
      alt: 'Cameră Double de Lux - Vedere',
      category: 'double-lux',
      title: 'Double de Lux',
      description: 'Cameră elegantă cu design premium și confort superior'
    },
    {
      id: 7,
      src: matrimoniala2,
      alt: 'Cameră Matrimonială - Interior',
      category: 'matrimonial',
      title: 'Matrimonială - Interior',
      description: 'Amenajare elegantă pentru momente speciale'
    },
    {
      id: 8,
      src: singleRoom2,
      alt: 'Cameră Single - Interior',
      category: 'single',
      title: 'Single - Interior',
      description: 'Spațiu optimizat pentru confort maxim'
    },
    {
      id: 9,
      src: doubleRoom2,
      alt: 'Cameră Double - Vedere',
      category: 'double-standard',
      title: 'Double - Vedere',
      description: 'Cameră cu vedere spre exterior'
    },
    {
      id: 10,
      src: doubleRoom3,
      alt: 'Cameră Double - Interior',
      category: 'double-standard',
      title: 'Double - Interior',
      description: 'Design modern și confortabil'
    }
  ];

  const filteredImages = galleryImages;

  // Reset current slide when component mounts
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
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
            text="Galerie Camere"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-xl md:text-2xl text-text-light max-w-4xl mx-auto mb-4">
            Lasă-te inspirat de atmosfera Marami
          </p>
          <p className="text-lg text-text-light max-w-3xl mx-auto mb-4">
            Descoperă camerele noastre așa cum sunt în realitate: primitoare, luminoase și gândite pentru relaxarea ta.
          </p>
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            O privire în interiorul locului unde te vei simți ca acasă.
          </p>
        </motion.div>



        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Carousel Container */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={filteredImages[currentSlide]?.src}
                  alt={filteredImages[currentSlide]?.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                      {filteredImages[currentSlide]?.title}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {filteredImages[currentSlide]?.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
            >
              <ChevronLeftIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
            >
              <ChevronRightIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Lightbox Button */}
            <button
              onClick={() => openLightbox(filteredImages[currentSlide])}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
            >
              <MagnifyingGlassIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {filteredImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary-500 scale-125'
                    : 'bg-gray-300 hover:bg-primary-300'
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4 text-text-secondary">
            <span className="text-sm">
              {currentSlide + 1} / {filteredImages.length}
            </span>
          </div>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <XMarkIcon className="w-8 h-8" />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <div className="mt-4 text-center text-white">
                  <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                  <p className="text-white/80">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RoomGallerySection; 