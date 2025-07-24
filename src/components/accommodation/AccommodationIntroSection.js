import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, StarIcon, WifiIcon } from '@heroicons/react/24/outline';
import SplitText from '../SplitText';
import matrimoniala2 from '../../assets/rooms/CameraMatrimoniala2.JPG';

const AccommodationIntroSection = () => {
  const handleAnimationComplete = () => {
    console.log('Accommodation title animation completed!');
  };

  const highlights = [
    {
      icon: HomeIcon,
      title: '17 Camere',
      description: 'Amenajate modern în culori calde și elegante'
    },
    {
      icon: StarIcon,
      title: 'Confort Superior',
      description: 'Standarde înalte de igienă și confort'
    },
    {
      icon: WifiIcon,
      title: 'Facilități Complete',
      description: 'Wi-Fi gratuit și toate facilitățile necesare'
    }
  ];

  return (
    <section className="bg-background-primary pt-24 md:pt-32 lg:pt-40">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SplitText
            text="Cazare"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className="text-xl md:text-2xl text-text-light max-w-4xl mx-auto leading-relaxed mb-8">
            Camere primitoare, gândite pentru relaxarea ta
          </p>
          <p className="text-lg md:text-xl text-text-light max-w-4xl mx-auto leading-relaxed mb-8">
            La Marami, fiecare dintre cele 17 camere este un refugiu liniștit, unde confortul modern se îmbină cu o atmosferă caldă și plină de rafinament.
          </p>
          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="font-display font-semibold text-text-primary mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-text-light text-sm">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-50 to-background-secondary rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-4">
                O experiență de cazare excepțională
              </h2>
              <h3 className="text-xl md:text-2xl font-display font-semibold text-primary-500 mb-4">
                Mai mult decât o cameră — un loc în care te regăsești
              </h3>
              <p className="text-text-light mb-6 leading-relaxed">
                Fiecare spațiu de la Marami a fost gândit cu grijă pentru a-ți oferi acel sentiment de acasă, departe de agitația cotidiană.
              </p>
              
              <h4 className="text-lg md:text-xl font-display font-semibold text-text-primary mb-4">
                Totul pentru starea ta de bine
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <span className="text-text-secondary font-medium">Curățenie zilnică</span>
                    <p className="text-text-light text-sm mt-1">pentru ca tu să te bucuri de un spațiu impecabil și proaspăt în fiecare zi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <span className="text-text-secondary font-medium">Acces gratuit la centrul de relaxare</span>
                    <p className="text-text-light text-sm mt-1">locul ideal unde respiri adânc și te reconectezi cu tine</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <span className="text-text-secondary font-medium">Recepție deschisă 24/7</span>
                    <p className="text-text-light text-sm mt-1">mereu aici pentru tine, cu zâmbetul pe buze și dorința de a ajuta</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={matrimoniala2}
                alt="Cameră Matrimonială Hotel Marami"
                className="rounded-xl shadow-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccommodationIntroSection; 