import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
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

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
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
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="wait">
            {galleryImages.map((image, index) => (
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
                className="relative max-w-3xl max-h-full"
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

export default RestaurantGallerySection; 