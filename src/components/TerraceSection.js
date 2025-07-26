import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import BlurText from './BlurText';
import terrace1 from '../assets/terraceImages/Terrace1.jpg';
import terrace2 from '../assets/terraceImages/Terrace2.jpg';
import terrace3 from '../assets/terraceImages/Terrace3.jpg';
import terrace4 from '../assets/terraceImages/Terrace4.jpg';
import terrace5 from '../assets/terraceImages/Terrace5.jpg';
import terrace6 from '../assets/terraceImages/Terrace6.jpg';
import terrace7 from '../assets/terraceImages/Terrace7.jpg';
import terrace8 from '../assets/terraceImages/Terrace8.jpg';
import terrace9 from '../assets/terraceImages/Terrace9.jpg';
import terrace10 from '../assets/terraceImages/Terrace10.jpg';
import terrace11 from '../assets/terraceImages/Terrace11.jpg';
import terrace12 from '../assets/terraceImages/Terrace12.jpg';
import terrace13 from '../assets/terraceImages/Terrace13.jpg';
import terrace14 from '../assets/terraceImages/Terrace14.jpg';

const terraceImages = [
  {
    id: 1,
    src: terrace1,
    alt: 'Terasă Hotel Marami - Vedere panoramică',
    title: 'Vedere panoramică',
    description: 'Vedere spectaculoasă la munții Bucegi și Castelul Peleș'
  },
  {
    id: 2,
    src: terrace2,
    alt: 'Terasă Hotel Marami - Atmosferă relaxantă',
    title: 'Atmosferă relaxantă',
    description: 'Spațiu perfect pentru relaxare în inima naturii'
  },
  {
    id: 3,
    src: terrace3,
    alt: 'Terasă Hotel Marami - Mese în aer liber',
    title: 'Mese în aer liber',
    description: 'Experiență gastronomică unică în aer liber'
  },
  {
    id: 4,
    src: terrace4,
    alt: 'Terasă Hotel Marami - Decor elegant',
    title: 'Decor elegant',
    description: 'Design rafinat care combină eleganța cu natura'
  },
  {
    id: 5,
    src: terrace5,
    alt: 'Terasă Hotel Marami - Vedere la munți',
    title: 'Vedere la munți',
    description: 'Priveliște panoramică spre munții Bucegi'
  },
  {
    id: 6,
    src: terrace6,
    alt: 'Terasă Hotel Marami - Serile de vară',
    title: 'Serile de vară',
    description: 'Momente memorabile în serile de vară pe terasă'
  },
  {
    id: 7,
    src: terrace7,
    alt: 'Terasă Hotel Marami - Experiență outdoor',
    title: 'Experiență outdoor',
    description: 'Conectare cu natura în cel mai elegant mod'
  },
  {
    id: 8,
    src: terrace8,
    alt: 'Terasă Hotel Marami - Relaxare în natură',
    title: 'Relaxare în natură',
    description: 'Spațiu dedicat pentru odihnă și contemplare'
  },
  {
    id: 9,
    src: terrace9,
    alt: 'Terasă Hotel Marami - Atmosferă montană',
    title: 'Atmosferă montană',
    description: 'Autenticitatea atmosferei montane în Sinaia'
  },
  {
    id: 10,
    src: terrace10,
    alt: 'Terasă Hotel Marami - Detalii interioare',
    title: 'Detalii interioare',
    description: 'Atenția la detalii în fiecare colț al terasei'
  },
  {
    id: 11,
    src: terrace11,
    alt: 'Terasă Hotel Marami - Vedere la castel',
    title: 'Vedere la castel',
    description: 'Vedere directă la Castelul Peleș, la doar 300m'
  },
  {
    id: 12,
    src: terrace12,
    alt: 'Terasă Hotel Marami - Serile romantice',
    title: 'Serile romantice',
    description: 'Spațiu perfect pentru momente romantice'
  },
  {
    id: 13,
    src: terrace13,
    alt: 'Terasă Hotel Marami - Experiență completă',
    title: 'Experiență completă',
    description: 'O experiență completă de relaxare și gastronomie'
  },
  {
    id: 14,
    src: terrace14,
    alt: 'Terasă Hotel Marami - Momentul perfect',
    title: 'Momentul perfect',
    description: 'Fiecare moment pe terasă este o experiență unică'
  },
];

const TerraceSection = () => {
  const handleAnimationComplete = () => {
    console.log('TerraceSection title animation completed!');
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % terraceImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + terraceImages.length) % terraceImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <section className="section-padding bg-gradient-to-br from-background-secondary to-background-primary no-overflow">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <BlurText
            text="Terasă cu Vedere Panoramică"
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Descoperă terasa noastră cu vedere panoramică la munții Bucegi și Castelul Peleș. 
            O experiență unică de relaxare și gastronomie în aer liber, cu atmosferă montană autentică.
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
                  src={terraceImages[currentSlide]?.src}
                  alt={terraceImages[currentSlide]?.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                      {terraceImages[currentSlide]?.title}
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
              onClick={() => openLightbox(terraceImages[currentSlide])}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
            >
              <MagnifyingGlassIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {terraceImages.map((_, index) => (
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
              {currentSlide + 1} / {terraceImages.length}
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
                className="relative max-w-4xl max-h-full"
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

export default TerraceSection; 