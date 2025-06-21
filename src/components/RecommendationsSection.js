import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
  StarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const RecommendationsSection = () => {
  const tips = [
    {
      icon: '🌤️',
      title: 'Sezonul Ideal',
      content: 'Lunile mai puțin aglomerate: septembrie, noiembrie',
      description: 'Pentru o experiență mai liniștită și prețuri mai bune, recomandăm perioada de toamnă târzie.',
      category: 'timing'
    },
    {
      icon: '📅',
      title: 'Rezervări',
      content: 'Cere cameră cu balcon și vedere la munte din timp',
      description: 'Camerele cu vedere la munte sunt foarte solicitate, așa că rezervă cu cel puțin 2-3 săptămâni în avans.',
      category: 'booking'
    },
    {
      icon: '🅿️',
      title: 'Parcare',
      content: 'Parcarea e limitată – verifică disponibilitatea din timp',
      description: 'Hotelul are un număr limitat de locuri de parcare. Contactează-ne pentru a rezerva un loc.',
      category: 'parking'
    },
    {
      icon: '🎫',
      title: 'Bilete Turistice',
      content: 'Rezervă biletele la Castelul Peleș din timp',
      description: 'Pentru a evita cozile lungi, îți recomandăm să rezervi biletele online cu cel puțin o zi în avans.',
      category: 'tickets'
    },
    {
      icon: '🏔️',
      title: 'Trasee Montane',
      content: 'Verifică vremea înainte de excursii montane',
      description: 'Vremea în munți se poate schimba rapid. Verifică prognoza și echipamentul necesar.',
      category: 'hiking'
    },
    {
      icon: '🍽️',
      title: 'Restaurante',
      content: 'Rezervă la restaurantele populare din centru',
      description: 'În weekend-uri, restaurantele din centrul Sinaiei sunt foarte aglomerate.',
      category: 'dining'
    }
  ];

  const seasonalInfo = [
    {
      season: 'Primăvară',
      months: 'Martie - Mai',
      highlights: ['Înflorirea naturii', 'Trasee montane ușoare', 'Prețuri moderate'],
      activities: ['Vizitare Castelul Peleș', 'Trasee în Bucegi', 'Fotografie natură']
    },
    {
      season: 'Vară',
      months: 'Iunie - August',
      highlights: ['Vremea perfectă', 'Toate activitățile disponibile', 'Sezon de vârf'],
      activities: ['Schi de iarnă', 'Telecabina Cota 1400', 'Excursii montane']
    },
    {
      season: 'Toamnă',
      months: 'Septembrie - Noiembrie',
      highlights: ['Culori spectaculoase', 'Mai puțin aglomerat', 'Prețuri bune'],
      activities: ['Trasee montane', 'Vizitare mânăstire', 'Fotografie toamnă']
    },
    {
      season: 'Iarnă',
      months: 'Decembrie - Februarie',
      highlights: ['Schi și snowboard', 'Atmosferă de sărbători', 'Vedere zăpadă'],
      activities: ['Schi la Cota 1400', 'Castelul Peleș în zăpadă', 'Sărbători']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4">
            Recomandări & Sfaturi Utile
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Sfaturile noastre pentru a-ți face șederea la Hotel Marami cât mai plăcută și memorabilă.
          </p>
        </motion.div>

        {/* Tips Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{tip.icon}</div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-text-primary mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm font-medium text-primary-600 mb-2">
                    {tip.content}
                  </p>
                  <p className="text-sm text-text-light leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Seasonal Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-50 to-background-secondary rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-4">
              Informații Sezonale
            </h3>
            <p className="text-text-light max-w-2xl mx-auto">
              Descoperă ce face fiecare sezon special în Sinaia și planifică-ți vizita în funcție de preferințe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalInfo.map((season, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-center mb-4">
                  <h4 className="font-display font-bold text-text-primary mb-1">
                    {season.season}
                  </h4>
                  <p className="text-sm text-primary-600 font-medium">
                    {season.months}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-text-secondary mb-1">HIGHLIGHTS</p>
                    <ul className="space-y-1">
                      {season.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-text-light flex items-center space-x-1">
                          <CheckCircleIcon className="w-3 h-3 text-primary-500 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium text-text-secondary mb-1">ACTIVITĂȚI</p>
                    <ul className="space-y-1">
                      {season.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-text-light flex items-center space-x-1">
                          <StarIcon className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Important Notices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Check-in/Check-out */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <ClockIcon className="w-6 h-6 text-primary-500" />
              <h3 className="font-display font-bold text-text-primary">
                Check-in & Check-out
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Check-in:</span>
                <span className="font-medium text-text-primary">14:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Check-out:</span>
                <span className="font-medium text-text-primary">11:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Recepție:</span>
                <span className="font-medium text-text-primary">24/7</span>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <ExclamationTriangleIcon className="w-6 h-6 text-yellow-500" />
              <h3 className="font-display font-bold text-text-primary">
                Informații Importante
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-text-light">
                  Animalele de companie sunt permise cu taxă suplimentară
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-text-light">
                  Wi-Fi gratuit în toate zonele hotelului
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-text-light">
                  Parcare gratuită pentru oaspeți (locuri limitate)
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-text-light mb-6">
            Ai întrebări specifice? Contactează-ne pentru sfaturi personalizate!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Contactează-ne
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              FAQ
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecommendationsSection; 