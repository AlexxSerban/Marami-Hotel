import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, PlayIcon } from '@heroicons/react/24/outline';
import doubleRoom from '../assets/rooms/CameraDouble Standard.JPG';
import doubleRoom4 from '../assets/rooms/CameraDouble Standard4.JPG';
import doubleLux from '../assets/rooms/CamereDoublede Lux.jpg';
import salaConferinta3 from '../assets/salaConferinta3.jpg';
import salaConferinta4 from '../assets/salaConferinta4.jpg';
import salaConferinta5 from '../assets/salaConferinta5.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const galleryImages = [
    {
      id: 1,
      src: doubleRoom,
      alt: 'Camera Standard - Hotel Marami',
      category: 'camere'
    },
    {
      id: 2,
      src: doubleRoom4,
      alt: 'Camera Standard - Hotel Marami - Vedere 4',
      category: 'camere'
    },
    {
      id: 3,
      src: doubleLux,
      alt: 'Camera Lux - Hotel Marami',
      category: 'camere'
    },
    {
      id: 4,
      src: salaConferinta3,
      alt: 'Sala de conferințe Hotel Marami - Vedere 1',
      category: 'facilitati'
    },
    {
      id: 5,
      src: salaConferinta4,
      alt: 'Sala de conferințe Hotel Marami - Vedere 2',
      category: 'facilitati'
    },
    {
      id: 6,
      src: salaConferinta5,
      alt: 'Sala de conferințe Hotel Marami - Vedere 3',
      category: 'facilitati'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Restaurant Hotel Marami',
      category: 'restaurant'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Bar Hotel Marami',
      category: 'bar'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Spa & Wellness Hotel Marami',
      category: 'spa'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Vedere spre Castelul Peleș',
      category: 'imprejurimi'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1551524164-4876eb6e4a09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Munții Bucegi din Sinaia',
      category: 'imprejurimi'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Hotel Marami - Vedere exterioară',
      category: 'exterior'
    }
  ];

  const categories = [
    { id: 'all', name: 'Toate', count: galleryImages.length },
    { id: 'camere', name: 'Camere', count: galleryImages.filter(img => img.category === 'camere').length },
    { id: 'facilitati', name: 'Facilități', count: galleryImages.filter(img => img.category === 'facilitati').length },
    { id: 'restaurant', name: 'Restaurant', count: galleryImages.filter(img => img.category === 'restaurant').length },
    { id: 'spa', name: 'Spa', count: galleryImages.filter(img => img.category === 'spa').length },
    { id: 'imprejurimi', name: 'Împrejurimi', count: galleryImages.filter(img => img.category === 'imprejurimi').length }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <section id="gallery" className="section-padding bg-background-primary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4">
            Galerie Foto
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Descoperă frumusețea Hotel Marami prin ochii noștri. 
            De la camere elegante până la priveliști spectaculoase.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <PlayIcon className="w-16 h-16 mx-auto mb-4 text-primary-400" />
                <h3 className="text-xl font-display font-semibold text-text-primary mb-2">
                  Video de Prezentare
                </h3>
                <p className="text-text-light mb-4">
                  Descoperă atmosfera unică a Hotel Marami
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openVideo}
                  className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center space-x-2 mx-auto"
                >
                  <PlayIcon className="w-5 h-5" />
                  <span>Vezi Video</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-text-secondary hover:bg-primary-50'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-medium text-text-primary">
                      Click pentru a mări
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
              <div className="relative max-w-4xl max-h-full">
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6 text-white" />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white font-medium">{selectedImage.alt}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video Modal */}
        <AnimatePresence>
          {showVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeVideo}
            >
              <div className="relative max-w-4xl w-full">
                <button
                  onClick={closeVideo}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6 text-white" />
                </button>
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <PlayIcon className="w-16 h-16 mx-auto mb-4 text-primary-400" />
                    <p className="text-lg">Video de prezentare Hotel Marami</p>
                    <p className="text-sm text-gray-300 mt-2">
                      (Video-ul va fi integrat aici)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-text-light mb-6">
            Vrei să vezi mai multe imagini? Contactează-ne pentru o prezentare personalizată!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Vezi Mai Multe
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection; 