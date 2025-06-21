import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon,
  HomeIcon,
  BuildingOfficeIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import BlurText from './BlurText';

const AboutLocationSection = () => {
  const handleAnimationComplete = () => {
    console.log('AboutLocation title animation completed!');
  };

  const locationFeatures = [
    {
      icon: MapPinIcon,
      title: 'Locație Excepțională',
      description: 'La doar 300m de Castelul Peleș, într-o zonă liniștită, de poveste'
    },
    {
      icon: HomeIcon,
      title: 'Vedere Panoramică',
      description: 'Priveliști spectaculoase spre munții Bucegi și Castelul Peleș'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Arhitectură Regală',
      description: 'Stil inspirat din reședințele regale, cu detalii elegante'
    },
    {
      icon: StarIcon,
      title: 'Ambianță Exclusivă',
      description: 'Atmosferă intimă și sofisticată, perfectă pentru o escapadă memorabilă'
    }
  ];

  return (
    <section id="location" className="section-padding bg-background-primary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="mb-6">
            <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Locație & Ambianță
            </span>
          </div>
          
          <BlurText
            text="La doar 300m de Castelul Peleș"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Hotel Marami se află într-o zonă liniștită, de poveste, la doar 300 de metri de Castelul Peleș. 
            Poziționarea noastră excepțională îți oferă accesul ușor la principalele atracții turistice, 
            păstrând în același timp intimitatea și liniștea necesare pentru o ședere relaxantă.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-text-light mb-8 leading-relaxed">
              Arhitectura hotelului este inspirată din stilul reședințelor regale, cu detalii elegante 
              și o ambianță sofisticată care se potrivește perfect cu atmosfera nobilă a Sinaiei.
            </p>

            {/* Location Features */}
            <div className="space-y-4 mb-8">
              {locationFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <IconComponent className="w-3 h-3 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-text-primary mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-text-light text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Vezi Pe Hartă
            </motion.button>
          </motion.div>

          {/* Map and Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Interactive Map */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps?q=Hotel+Marami,+Strada+Furnica+52,+Sinaia,+Romania&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația Hotel Marami - Strada Furnica 52, Sinaia"
                className="w-full"
              ></iframe>
            </div>

            {/* Hotel Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Hotel Marami și împrejurimile - Peleș, pădure, munte"
                className="w-full h-48 md:h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Floating Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-text-primary">Vedere spre Castelul Peleș</p>
                    <p className="text-sm text-text-light">Munții Bucegi în fundal</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary-500">300m</p>
                    <p className="text-xs text-text-light">distanță</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutLocationSection; 