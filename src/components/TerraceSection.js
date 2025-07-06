import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
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
  },
  {
    id: 2,
    src: terrace2,
    alt: 'Terasă Hotel Marami - Atmosferă relaxantă',
    title: 'Atmosferă relaxantă',
  },
  {
    id: 3,
    src: terrace3,
    alt: 'Terasă Hotel Marami - Mese în aer liber',
    title: 'Mese în aer liber',
  },
  {
    id: 4,
    src: terrace4,
    alt: 'Terasă Hotel Marami - Decor elegant',
    title: 'Decor elegant',
  },
  {
    id: 5,
    src: terrace5,
    alt: 'Terasă Hotel Marami - Vedere la munți',
    title: 'Vedere la munți',
  },
  {
    id: 6,
    src: terrace6,
    alt: 'Terasă Hotel Marami - Serile de vară',
    title: 'Serile de vară',
  },
  {
    id: 7,
    src: terrace7,
    alt: 'Terasă Hotel Marami - Experiență outdoor',
    title: 'Experiență outdoor',
  },
  {
    id: 8,
    src: terrace8,
    alt: 'Terasă Hotel Marami - Relaxare în natură',
    title: 'Relaxare în natură',
  },
  {
    id: 9,
    src: terrace9,
    alt: 'Terasă Hotel Marami - Atmosferă montană',
    title: 'Atmosferă montană',
  },
  {
    id: 10,
    src: terrace10,
    alt: 'Terasă Hotel Marami - Detalii interioare',
    title: 'Detalii interioare',
  },
  {
    id: 11,
    src: terrace11,
    alt: 'Terasă Hotel Marami - Vedere la castel',
    title: 'Vedere la castel',
  },
  {
    id: 12,
    src: terrace12,
    alt: 'Terasă Hotel Marami - Serile romantice',
    title: 'Serile romantice',
  },
  {
    id: 13,
    src: terrace13,
    alt: 'Terasă Hotel Marami - Experiență completă',
    title: 'Experiență completă',
  },
  {
    id: 14,
    src: terrace14,
    alt: 'Terasă Hotel Marami - Momentul perfect',
    title: 'Momentul perfect',
  },
];

const TerraceSection = () => {
  const handleAnimationComplete = () => {
    console.log('TerraceSection title animation completed!');
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <section className="section-padding bg-gradient-to-br from-background-secondary to-background-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
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

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={terrace1}
              alt="Terasă Hotel Marami - Vedere panoramică principală"
              className="w-full h-96 md:h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                  Terasa cu Vedere la Castelul Peleș
                </h3>
                <p className="text-white/90 text-lg">
                  La doar 300m de Castelul Peleș, cu vedere panoramică la munții Bucegi
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="wait">
            {terraceImages.slice(1).map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4">
                    <MagnifyingGlassIcon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-text-light mb-6">
            Rezervă o masă pe terasă și bucură-te de experiența completă
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Rezervă o Masă
          </motion.button>
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