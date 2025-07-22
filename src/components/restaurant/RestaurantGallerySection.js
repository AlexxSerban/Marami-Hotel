import React, { useState, useEffect } from 'react';
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

const GalleryCarousel = ({ images, onImageClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = image.src;
        });
      });
      
      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Continue anyway
      }
    };
    
    preloadImages();
  }, [images]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 cursor-pointer"
          onClick={() => onImageClick(images[currentImageIndex])}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ willChange: 'transform, opacity' }}
        >
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ willChange: 'transform, opacity' }}
          />
          
          {/* Overlay with title */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                {images[currentImageIndex].title}
              </h3>
              <div className="flex items-center space-x-2">
                <MagnifyingGlassIcon className="w-5 h-5 text-white" />
                <span className="text-white/90 text-sm">Click pentru a mări</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const RestaurantGallerySection = () => {
  const handleAnimationComplete = () => {
    console.log('RestaurantGallery title animation completed!');
  };

  const [selectedImage, setSelectedImage] = useState(null);

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

        {/* Gallery Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <GalleryCarousel images={galleryImages} onImageClick={openLightbox} />
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