import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
  StarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import BlurText from './BlurText';

const RecommendationsSection = () => {
  const handleAnimationComplete = () => {
    console.log('Recommendations title animation completed!');
  };

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

  const recommendations = [
    {
      title: 'Castelul Peleș',
      description: 'Reședința de vară a regilor României, cu arhitectură neorenascentistă și grădini spectaculoase.',
      distance: '300m',
      duration: '2-3 ore',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Istoric'
    },
    {
      title: 'Mânăstirea Sinaia',
      description: 'Mânăstire ortodoxă din secolul al XVII-lea, cu o arhitectură impresionantă și o istorie bogată.',
      distance: '1.2km',
      duration: '1-2 ore',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Religios'
    },
    {
      title: 'Telecabina Sinaia',
      description: 'Acces rapid spre vârfurile munților Bucegi pentru drumeții și priveliști panoramice.',
      distance: '2km',
      duration: '4-6 ore',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Aventură'
    },
    {
      title: 'Pădurea Regală',
      description: 'Rezervație naturală cu trasee pentru drumeții și ciclism, perfectă pentru relaxare.',
      distance: '500m',
      duration: '2-4 ore',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Natură'
    },
    {
      title: 'Muzeul de Istorie',
      description: 'Muzeu local cu exponate care prezintă istoria și tradițiile zonei Sinaia.',
      distance: '800m',
      duration: '1-1.5 ore',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Cultural'
    },
    {
      title: 'Stațiunea de Schi',
      description: 'Pârtii de schi pentru începători și avansați, cu facilități moderne.',
      distance: '3km',
      duration: '1 zi',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Sport'
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
          <BlurText
            text="Recomandări Turistice"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Descoperă atracțiile turistice din zona Sinaia și împrejurimi, 
            de la monumente istorice la peisaje naturale spectaculoase.
          </p>
        </motion.div>

        {/* Recommendations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {recommendations.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  {item.category}
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <div className="flex items-center space-x-1">
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Info */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="w-4 h-4 text-primary-500" />
                    <span className="text-sm text-text-secondary">{item.distance}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="w-4 h-4 text-primary-500" />
                    <span className="text-sm text-text-secondary">{item.duration}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary text-sm"
                >
                  Află Mai Multe
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-background-secondary rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-4">
              Sfaturi pentru Vizită
            </h3>
            <p className="text-text-light max-w-2xl mx-auto">
              Planifică-ți vizita perfectă cu sfaturile noastre pentru a profita la maximum de atracțiile din zona Sinaia.
            </p>
          </div>

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
              <div className="flex justify-between">
                <span>Check-in:</span>
                <span className="font-medium text-text-primary">15:00</span>
              </div>
              <div className="flex justify-between">
                <span>Check-out:</span>
                <span className="font-medium text-text-primary">12:00</span>
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="btn-primary"
              >
                Contactează-ne
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="btn-secondary"
              >
                FAQ
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecommendationsSection; 