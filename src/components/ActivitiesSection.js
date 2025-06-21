import React from 'react';
import { motion } from 'framer-motion';
import { 
  HomeIcon,
  UserGroupIcon,
  MapIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const ActivitiesSection = () => {
  const activities = [
    {
      icon: HomeIcon,
      title: 'Cursuri de Schi',
      description: 'Cursuri de schi cu instructori locali experimentați, pentru toate nivelurile de experiență.',
      duration: '2-6 ore',
      price: 'de la 45€',
      image: 'https://images.unsplash.com/photo-1551524164-4876eb6e4a09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['Instructori locali', 'Echipamente incluse', 'Toate nivelurile', 'Grupuri mici']
    },
    {
      icon: UserGroupIcon,
      title: 'Excursii Montane',
      description: 'Organizare excursii montane și culturale în munții Bucegi și împrejurimi.',
      duration: '4-8 ore',
      price: 'de la 35€',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['Ghid local', 'Transport inclus', 'Trasee adaptate', 'Pranz inclus']
    },
    {
      icon: MapIcon,
      title: 'Trasee Recomandate',
      description: 'Recomandări pentru trasee și obiective turistice: Peleș, Sinaia, Cota 1400.',
      duration: 'Flexibil',
      price: 'Gratuit',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['Castelul Peleș', 'Mânăstirea Sinaia', 'Cota 1400', 'Trasee montane']
    }
  ];

  const recommendations = [
    {
      name: 'Castelul Peleș',
      distance: '300m',
      description: 'Castelul regal, una dintre cele mai frumoase reședințe din Europa',
      tip: 'Rezervă biletele din timp pentru a evita cozile'
    },
    {
      name: 'Mânăstirea Sinaia',
      distance: '500m',
      description: 'Mânăstire ortodoxă cu arhitectură tradițională românească',
      tip: 'Vizitează dimineața pentru o experiență mai liniștită'
    },
    {
      name: 'Telecabina Cota 1400',
      distance: '2km',
      description: 'Acces rapid la stațiunea de schi și trasee montane',
      tip: 'Verifică programul înainte de plecare'
    },
    {
      name: 'Trasee Bucegi',
      distance: 'Variate',
      description: 'Rețea vastă de trasee montane pentru toate nivelurile',
      tip: 'Însoțește-te de un ghid pentru traseele dificile'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4">
            Activități & Experiențe
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Descoperă activitățile și experiențele unice pe care le poți avea în Sinaia, 
            cu ajutorul nostru și al partenerilor locali.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary-500" />
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                    {activity.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-text-primary mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed mb-4">
                    {activity.description}
                  </p>
                  
                  {/* Duration */}
                  <div className="flex items-center space-x-2 text-sm text-text-secondary mb-4">
                    <span>⏱️</span>
                    <span>{activity.duration}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {activity.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-text-secondary">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary"
                  >
                    Rezervă Activitatea
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Recommendations Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-50 to-background-primary rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-4">
              Recomandări & Sfaturi Utile
            </h3>
            <p className="text-text-light max-w-2xl mx-auto">
              Descoperă obiectivele turistice din apropiere și sfaturile noastre pentru o experiență optimă.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-display font-semibold text-text-primary">
                    {rec.name}
                  </h4>
                  <span className="text-sm font-medium text-primary-500 bg-primary-100 px-2 py-1 rounded">
                    {rec.distance}
                  </span>
                </div>
                <p className="text-text-light text-sm mb-3">
                  {rec.description}
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r">
                  <p className="text-sm text-yellow-800">
                    <span className="font-medium">💡 Sfat:</span> {rec.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Tips */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🌤️',
                title: 'Sezonul Ideal',
                content: 'Lunile mai puțin aglomerate: septembrie, noiembrie'
              },
              {
                icon: '📅',
                title: 'Rezervări',
                content: 'Cere cameră cu balcon și vedere la munte din timp'
              },
              {
                icon: '🅿️',
                title: 'Parcare',
                content: 'Parcarea e limitată – verifică disponibilitatea din timp'
              }
            ].map((tip, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h4 className="font-display font-semibold text-text-primary mb-2">
                  {tip.title}
                </h4>
                <p className="text-sm text-text-light">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSection; 