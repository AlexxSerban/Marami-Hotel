import React from 'react';
import { motion } from 'framer-motion';
import { 
  TvIcon,
  WifiIcon,
  PhoneIcon,
  ShieldCheckIcon,
  HomeIcon,
  SparklesIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const RoomAmenitiesSection = () => {
  const handleAnimationComplete = () => {
    console.log('RoomAmenities title animation completed!');
  };

  const amenities = [
    {
      icon: HomeIcon,
      title: 'Design Elegant',
      description: 'Tonuri moderne și amenajare rafinată în fiecare cameră',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: TvIcon,
      title: 'TV prin Cablu',
      description: 'Televizor modern cu programe internaționale',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: WifiIcon,
      title: 'Wi-Fi Gratuit',
      description: 'Conectivitate rapidă în toate camerele',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: PhoneIcon,
      title: 'Telefon',
      description: 'Comunicare directă cu recepția și serviciile hotelului',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Seif',
      description: 'Seif electronic pentru valorile tale (la cerere)',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: SparklesIcon,
      title: 'Balcon',
      description: 'Balcon cu vedere spre munte (la majoritatea camerelor)',
      color: 'bg-indigo-50 text-indigo-600'
    }
  ];

  const additionalServices = [
    'Curățenie zilnică profesională',
    'Schimb de prosoape la cerere',
    'Serviciu de room service',
    'Acces la centrul de relaxare',
    'Parcare gratuită',
    'Recepție 24/7'
  ];

  return (
    <section className="section-padding bg-background-primary">
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
            text="Facilități Comune ale Camerelor"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Fiecare cameră este curățată zilnic și respectă standarde înalte de igienă și confort. 
            Toate facilitățile sunt incluse în prețul de cazare.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${amenity.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-text-primary mb-2">
                  {amenity.title}
                </h3>
                <p className="text-text-light text-sm">
                  {amenity.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-50 to-background-secondary rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-6">
                Servicii Suplimentare
              </h3>
              <div className="space-y-4">
                {additionalServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-text-secondary">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                alt="Servicii Hotel Marami"
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

export default RoomAmenitiesSection; 