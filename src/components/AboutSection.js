import React from 'react';
import { motion } from 'framer-motion';
import { 
  StarIcon,
  HeartIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const AboutSection = () => {
  const stats = [
    { number: '25+', label: 'Ani de Experiență', icon: ClockIcon },
    { number: '4.9', label: 'Rating Oaspeți', icon: StarIcon },
    { number: '50+', label: 'Camere Luxoase', icon: HeartIcon },
    { number: '1000+', label: 'Oaspeți Mulțumiți', icon: HeartIcon }
  ];

  return (
    <section id="about" className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Despre Hotel Marami
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6">
              O Poveste de 
              <span className="text-primary-500"> Ospitalitate</span>
            </h2>
            
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              Hotel Marami din Sinaia este mai mult decât un simplu loc de cazare - este o destinație 
              care îmbină tradiția cu modernitatea, oferind oaspeților o experiență autentică în inima munților.
            </p>
            
            <p className="text-text-light mb-8 leading-relaxed">
              Cu o istorie bogată de peste 25 de ani, hotelul nostru a devenit un simbol al ospitalității 
              românești, găzduind oaspeți din toate colțurile lumii și oferind servicii de calitate superioară.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-text-primary mb-1">
                    Locație Excepțională
                  </h4>
                  <p className="text-text-light text-sm">
                    Poziționat perfect în centrul Sinaiei, cu vedere panoramică la munții Bucegi
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-text-primary mb-1">
                    Servicii Personalizate
                  </h4>
                  <p className="text-text-light text-sm">
                    Echipa noastră dedicată este aici pentru a-ți oferi o experiență memorabilă
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-text-primary mb-1">
                    Calitate Premium
                  </h4>
                  <p className="text-text-light text-sm">
                    Standarde înalte de igienă și confort în toate camerele și facilitățile hotelului
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Află Mai Multe
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Hotel Marami Sinaia - Exterior"
                className="w-full h-96 md:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="w-5 h-5 text-primary-500" />
                  <div>
                    <p className="font-semibold text-text-primary">Sinaia, România</p>
                    <p className="text-sm text-text-light">Lângă Castelul Peleș</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary-500" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-text-light font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 