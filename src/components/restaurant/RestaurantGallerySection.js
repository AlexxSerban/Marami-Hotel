import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';
import restaurant1 from '../../assets/restaurantImages/restaurant1.jpg';
import restaurant2 from '../../assets/restaurantImages/restaurant2.jpg';
import restaurant3 from '../../assets/restaurantImages/restaurant3.jpg';
import restaurant4 from '../../assets/restaurantImages/restaurant4.jpg';
import restaurant5 from '../../assets/restaurantImages/restaurant5.jpg';
import restaurant6 from '../../assets/restaurantImages/restaurant6.jpg';
import restaurant7 from '../../assets/restaurantImages/restaurant7.jpg';

const galleryImages = [
  {
    id: 1,
    src: restaurant1,
    alt: 'Restaurant Hotel Marami - Sala principală',
    title: 'Sala principală',
  },
  {
    id: 2,
    src: restaurant2,
    alt: 'Restaurant Hotel Marami - Atmosferă elegantă',
    title: 'Atmosferă elegantă',
  },
  {
    id: 3,
    src: restaurant3,
    alt: 'Restaurant Hotel Marami - Preparate culinare',
    title: 'Preparate culinare',
  },
  {
    id: 4,
    src: restaurant4,
    alt: 'Restaurant Hotel Marami - Detalii interioare',
    title: 'Detalii interioare',
  },
  {
    id: 5,
    src: restaurant5,
    alt: 'Restaurant Hotel Marami - Mese servite',
    title: 'Mese servite',
  },
  {
    id: 6,
    src: restaurant6,
    alt: 'Restaurant Hotel Marami - Decor elegant',
    title: 'Decor elegant',
  },
  {
    id: 7,
    src: restaurant7,
    alt: 'Restaurant Hotel Marami - Experiență culinară',
    title: 'Experiență culinară',
  },
];

const RestaurantGallerySection = () => {
  const handleAnimationComplete = () => {
    console.log('RestaurantGallery title animation completed!');
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <section className="section-padding bg-background-secondary no-overflow">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <BlurText
            text="Galerie Restaurant"
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Descoperă atmosfera autentică și preparatele restaurantului nostru prin aceste imagini reale.
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
                  src={galleryImages[currentSlide]?.src}
                  alt={galleryImages[currentSlide]?.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                      {galleryImages[currentSlide]?.title}
                    </h3>
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
              onClick={() => openLightbox(galleryImages[currentSlide])}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
            >
              <MagnifyingGlassIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryImages.map((_, index) => (
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
              {currentSlide + 1} / {galleryImages.length}
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
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative max-w-3xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
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
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RestaurantGallerySection; 