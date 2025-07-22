import React, { useState, useEffect } from 'react';
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

const TerraceSplitCarousel = ({ images, onImageClick }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 left, 1 right

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((image) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.onload = resolve;
          img.src = image.src;
        });
      });
      try {
        await Promise.all(imagePromises);
      } catch {
        // Continue even if some images fail to load
      }
    };
    preloadImages();
  }, [images]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  const next = () => {
    if (current < images.length - 1) {
      setDirection(1);
      setCurrent((c) => c + 1);
    }
  };
  const prev = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
    }
  };
  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-stretch">
      {/* Thumbnails */}
      <div className="order-2 md:order-1 flex md:flex-col gap-2 md:overflow-y-auto overflow-x-auto max-h-[600px] md:max-h-[600px] md:w-32 w-full pb-2 md:pb-0">
        {images.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => goTo(idx)}
            className={`shrink-0 border-2 rounded-md overflow-hidden cursor-pointer w-20 h-20 md:w-28 md:h-28 transition-all duration-200 ${idx === current ? 'border-primary-500 ring-2 ring-primary-400' : 'border-gray-200'}`}
            aria-label={`Miniatura ${img.title}`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
      {/* Main image + controls */}
      <div className="order-1 md:order-2 relative grow min-h-96 bg-white rounded-lg flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={current}
            src={images[current].src}
            alt={images[current].alt}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-xl"
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ willChange: 'transform, opacity' }}
            onClick={() => onImageClick(images[current])}
          />
        </AnimatePresence>
        {/* Overlay with title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none rounded-lg" />
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 drop-shadow-lg">
            {images[current].title}
          </h3>
          <div className="flex items-center space-x-2">
            <MagnifyingGlassIcon className="w-5 h-5 text-white" />
            <span className="text-white/90 text-sm">Click pentru a mări</span>
          </div>
        </div>
        {/* Prev/Next buttons */}
        <button
          type="button"
          onClick={prev}
          disabled={current === 0}
          className="absolute inset-y-0 left-0 flex items-center justify-center w-12 h-full text-white hover:bg-black/10 focus:outline-none focus:bg-black/10 rounded-s-lg disabled:opacity-50 disabled:pointer-events-none z-20"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button
          type="button"
          onClick={next}
          disabled={current === images.length - 1}
          className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-full text-white hover:bg-black/10 focus:outline-none focus:bg-black/10 rounded-e-lg disabled:opacity-50 disabled:pointer-events-none z-20"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
    </div>
  );
};

const TerraceSection = () => {
  const handleAnimationComplete = () => {
    console.log('TerraceSection title animation completed!');
  };

  const [selectedImage, setSelectedImage] = useState(null);

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

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={terrace1}
              alt="Terasă Hotel Marami - Vedere panoramică principală"
                              className="w-full min-h-96 md:min-h-[500px] object-cover"
              loading="eager"
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

        {/* Terrace Gallery Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <TerraceSplitCarousel images={terraceImages} onImageClick={openLightbox} />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mt-16"
        >
          <p className="text-lg text-text-light mb-6">
            Rezervă o masă pe terasă și bucură-te de experiența completă
          </p>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
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