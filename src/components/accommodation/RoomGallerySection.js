import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';
import doubleRoom from '../../assets/rooms/Double_camera.jpg';
import doubleLux from '../../assets/rooms/Double de lux.jpg';
import doubleLux1 from '../../assets/rooms/Double de lux1.jpg';
import matrimoniala from '../../assets/rooms/Matrimoniala.jpg';
import matrimoniala2 from '../../assets/rooms/Matrimoniala2.jpg';
import singleRoom from '../../assets/rooms/Single.jpg';
import singleRoom2 from '../../assets/rooms/Single2.jpg';
import doubleRoom2 from '../../assets/rooms/Double2.jpg';
import doubleRoom3 from '../../assets/rooms/Double3.jpg';
import baie from '../../assets/rooms/baie.jpg';

const RoomGallerySection = () => {
  const handleAnimationComplete = () => {
    console.log('RoomGallery title animation completed!');
  };

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'Toate' },
    { id: 'double-standard', name: 'Double' },
    { id: 'double-lux', name: 'Double de Lux' },
    { id: 'matrimonial', name: 'Matrimonială' },
    { id: 'single', name: 'Single' }
  ];

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
      title: 'Double de Lux - Vedere',
      description: 'Priveliște panoramică spre munții Bucegi'
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

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

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

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-text-secondary hover:bg-primary-50 hover:text-primary-500'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
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
                    <p className="text-white/80 text-sm">{image.description}</p>
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