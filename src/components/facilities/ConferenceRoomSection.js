import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeIcon, StarIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';
import salaConferinta3 from '../../assets/salaConferinta3.jpg';
import salaConferinta4 from '../../assets/salaConferinta4.jpg';
import salaConferinta5 from '../../assets/salaConferinta5.jpg';

const ConferenceRoomSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);

  const handleAnimationComplete = () => {
    console.log('ConferenceRoom title animation completed!');
  };

  const features = [
    {
      icon: HomeIcon,
      title: 'Spațiu Versatil',
      description: 'Sala de conferințe se adaptează la diverse tipuri de evenimente'
    },
    {
      icon: CheckCircleIcon,
      title: 'Dotări Moderne',
      description: 'Echipamente audio-video și facilități pentru prezentări'
    },
    {
      icon: StarIcon,
      title: 'Capacitate Flexibilă',
      description: 'Poate găzdui între 20-50 de participanți'
    }
  ];

  const galleryImages = [
    { src: salaConferinta3, alt: 'Sala de conferințe Hotel Marami - Vedere 1' },
    { src: salaConferinta4, alt: 'Sala de conferințe Hotel Marami - Vedere 2' },
    { src: salaConferinta5, alt: 'Sala de conferințe Hotel Marami - Vedere 3' }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    setShowLightbox(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  return (
    <>
      <section className="section-padding bg-background-secondary">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BlurText
              text="Sala de Conferințe"
              className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
            <p className="text-lg text-text-light mb-6">
              Sala de conferințe este perfectă pentru întâlniri de business, seminarii, 
              training-uri sau evenimente corporative într-un cadru profesional și elegant.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">{feature.title}</h3>
                      <p className="text-text-secondary text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="mb-4 cursor-pointer" onClick={() => openLightbox(galleryImages[0])}>
              <img
                src={salaConferinta3}
                alt="Sala de conferințe Hotel Marami"
                className="rounded-xl shadow-lg w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-32 object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {showLightbox && selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
              onClick={closeLightbox}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            />
            
            {/* Lightbox Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                aria-label="Închide imaginea"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              
              {/* Image */}
              <div className="relative max-w-7xl max-h-full">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConferenceRoomSection; 