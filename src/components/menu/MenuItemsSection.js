import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon, FireIcon } from '@heroicons/react/24/outline';
import food1 from '../../assets/food/food1.JPG';
import food2 from '../../assets/food/food2.JPG';
import food3 from '../../assets/food/food3.JPG';
import food4 from '../../assets/food/food4.JPG';
import food5 from '../../assets/food/food5.JPG';
import food6 from '../../assets/food/food6.JPG';

const MenuItemsSection = ({ selectedCategory }) => {
  const menuItems = [
    // Mic dejun
    {
      id: 1,
      name: 'Omletă cu brânză și ciuperci',
      description: 'Ouă proaspete cu brânză de oaie și ciuperci de pădure',
      price: '25 RON',
      category: 'breakfast',
      image: food2,
      tags: ['vegetarian', 'popular']
    },
    {
      id: 2,
      name: 'Pâine prăjită cu avocado',
      description: 'Pâine integrală cu avocado, ou poșat și semințe de chia',
      price: '22 RON',
      category: 'breakfast',
      image: food3,
      tags: ['vegetarian', 'healthy']
    },
    {
      id: 3,
      name: 'Cereale cu lapte și fructe',
      description: 'Cereale integrale cu lapte proaspăt și fructe de sezon',
      price: '18 RON',
      category: 'breakfast',
      image: food4,
      tags: ['vegetarian', 'healthy']
    },
    {
      id: 4,
      name: 'Croissant cu unt și gem',
      description: 'Croissant proaspăt cu unt și gem de căpșuni',
      price: '15 RON',
      category: 'breakfast',
      image: food5,
      tags: ['vegetarian']
    },
    {
      id: 5,
      name: 'Ochiuri cu bacon',
      description: 'Ouă ochiuri cu bacon crocant și pâine prăjită',
      price: '28 RON',
      category: 'breakfast',
      image: food6,
      tags: ['popular']
    },
    {
      id: 6,
      name: 'Bowl cu iaurt și granola',
      description: 'Iaurt natural cu granola de casă și fructe proaspete',
      price: '20 RON',
      category: 'breakfast',
      image: food1,
      tags: ['vegetarian', 'healthy']
    },

    // Aperitive
    {
      id: 7,
      name: 'Salată Cezar',
      description: 'Salată cu pui la grătar, crutoane, parmezan și dressing Cezar',
      price: '35 RON',
      category: 'starters',
      image: food5,
      tags: ['popular']
    },
    {
      id: 8,
      name: 'Bruschete cu roșii și busuioc',
      description: 'Pâine prăjită cu roșii cherry, busuioc proaspăt și ulei de măsline',
      price: '28 RON',
      category: 'starters',
      image: food6,
      tags: ['vegetarian', 'vegan']
    },
    {
      id: 9,
      name: 'Antipasti mediteraneene',
      description: 'Selecție de antipasti: prosciutto, mozzarella, măsline și ardei copți',
      price: '42 RON',
      category: 'starters',
      image: food1,
      tags: ['popular']
    },
    {
      id: 10,
      name: 'Supa de pui cu taitei',
      description: 'Supă tradițională cu pui și taitei de casă',
      price: '32 RON',
      category: 'starters',
      image: food2,
      tags: ['traditional']
    },
    {
      id: 11,
      name: 'Ciorbă de burtă',
      description: 'Ciorbă tradițională cu burtă de vită și smântână',
      price: '38 RON',
      category: 'starters',
      image: food3,
      tags: ['traditional']
    },
    {
      id: 12,
      name: 'Supa cremă de ciuperci',
      description: 'Supă cremă cu ciuperci de pădure și crutoane',
      price: '30 RON',
      category: 'starters',
      image: food4,
      tags: ['vegetarian']
    },

    // Feluri principale
    {
      id: 13,
      name: 'Sarmale în foi de viță',
      description: 'Sarmale tradiționale cu carne de porc și orez, servite cu smântână',
      price: '45 RON',
      category: 'main-courses',
      image: food2,
      tags: ['traditional', 'popular']
    },
    {
      id: 14,
      name: 'Piept de pui la grătar',
      description: 'Piept de pui marinat cu rozmarin și usturoi, servit cu legume la grătar',
      price: '38 RON',
      category: 'main-courses',
      image: food3,
      tags: ['healthy']
    },
    {
      id: 15,
      name: 'Paste Carbonara',
      description: 'Paste cu ouă, parmezan, guanciale și piper negru proaspăt',
      price: '32 RON',
      category: 'main-courses',
      image: food4,
      tags: ['popular']
    },
    {
      id: 16,
      name: 'Scoici la grătar',
      description: 'Scoici proaspete la grătar cu unt cu usturoi și pătrunjel',
      price: '55 RON',
      category: 'main-courses',
      image: food5,
      tags: ['seafood']
    },
    {
      id: 17,
      name: 'Muschi de vită la grătar',
      description: 'Muschi de vită la grătar cu sos de roșii și cartofi wedges',
      price: '65 RON',
      category: 'main-courses',
      image: food6,
      tags: ['popular']
    },
    {
      id: 18,
      name: 'Somon la grătar',
      description: 'Somon la grătar cu legume la grătar și sos de lămâie',
      price: '48 RON',
      category: 'main-courses',
      image: food1,
      tags: ['seafood', 'healthy']
    },
    {
      id: 19,
      name: 'Snitel de pui',
      description: 'Snitel de pui cu cartofi prăjiți și salată de varză',
      price: '35 RON',
      category: 'main-courses',
      image: food2,
      tags: ['popular']
    },
    {
      id: 20,
      name: 'Ciorbă de fasole cu ciolan',
      description: 'Ciorbă tradițională cu fasole și ciolan afumat',
      price: '40 RON',
      category: 'main-courses',
      image: food3,
      tags: ['traditional']
    },
    {
      id: 21,
      name: 'Mamaligă cu brânză',
      description: 'Mămăligă cu brânză de burduf și smântână',
      price: '28 RON',
      category: 'main-courses',
      image: food4,
      tags: ['traditional', 'vegetarian']
    },

    // Deserturi
    {
      id: 22,
      name: 'Papanăși tradiționali',
      description: 'Papanăși cu smântână și dulceață de vișine, poliveri cu zahăr pudră',
      price: '25 RON',
      category: 'desserts',
      image: food6,
      tags: ['traditional', 'popular']
    },
    {
      id: 23,
      name: 'Tiramisu clasic',
      description: 'Tiramisu cu mascarpone, cafea și cacao, servit rece',
      price: '28 RON',
      category: 'desserts',
      image: food1,
      tags: ['popular']
    },
    {
      id: 24,
      name: 'Gelato artigianale',
      description: 'Gelato făcut în casă cu vanilie, ciocolată sau căpșuni',
      price: '20 RON',
      category: 'desserts',
      image: food2,
      tags: ['vegetarian']
    },
    {
      id: 25,
      name: 'Clătite cu ciocolată',
      description: 'Clătite cu ciocolată topită și frișcă',
      price: '22 RON',
      category: 'desserts',
      image: food3,
      tags: ['popular']
    },
    {
      id: 26,
      name: 'Cheesecake cu fructe',
      description: 'Cheesecake cu topping de fructe proaspete',
      price: '30 RON',
      category: 'desserts',
      image: food4,
      tags: ['vegetarian']
    },
    {
      id: 27,
      name: 'Baklava',
      description: 'Baklava cu nuci și sirop de miere',
      price: '26 RON',
      category: 'desserts',
      image: food5,
      tags: ['traditional']
    },
    {
      id: 28,
      name: 'Înghețată cu topping',
      description: 'Înghețată cu topping de ciocolată și alune',
      price: '18 RON',
      category: 'desserts',
      image: food6,
      tags: ['vegetarian']
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const getTagIcon = (tag) => {
    switch (tag) {
      case 'popular':
        return <StarIcon className="w-4 h-4 text-yellow-500" />;
      case 'traditional':
        return <FireIcon className="w-4 h-4 text-orange-500" />;
      case 'vegetarian':
      case 'vegan':
      case 'healthy':
        return <span className="w-4 h-4 text-green-500">🌱</span>;
      default:
        return null;
    }
  };

  const getTagLabel = (tag) => {
    switch (tag) {
      case 'popular':
        return 'Popular';
      case 'traditional':
        return 'Tradițional';
      case 'vegetarian':
        return 'Vegetarian';
      case 'vegan':
        return 'Vegan';
      case 'healthy':
        return 'Sănătos';
      case 'seafood':
        return 'Fructe de mare';
      default:
        return tag;
    }
  };

  return (
    <section className="section-padding bg-background-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-8 lg:mb-10"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-display font-bold text-text-primary mb-2 md:mb-3 lg:mb-4">
            Preparatele Noastre
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-text-light max-w-2xl lg:max-w-3xl mx-auto">
            Fiecare preparat este gătit cu atenție și ingrediente proaspete
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-3 md:space-y-4 lg:space-y-5"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 max-w-4xl mx-auto"
              >
                <div className="p-4 md:p-5 lg:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 lg:gap-4">
                    {/* Content */}
                    <div className="flex-1 space-y-2 lg:space-y-3">
                      <div className="flex items-start justify-between sm:justify-start gap-3 lg:gap-4">
                        <h3 className="font-display font-semibold text-sm md:text-base lg:text-lg text-text-primary leading-tight">
                          {item.name}
                        </h3>
                        <span className="font-bold text-primary-500 text-sm md:text-base lg:text-lg flex-shrink-0">
                          {item.price}
                        </span>
                      </div>
                      
                      <p className="text-text-light text-xs md:text-sm lg:text-base leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 lg:gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <div
                            key={tagIndex}
                            className="inline-flex items-center gap-1 bg-gray-50 px-2 py-0.5 md:px-2.5 md:py-1 rounded-full text-xs font-medium text-gray-600"
                          >
                            {getTagIcon(tag)}
                            <span>{getTagLabel(tag)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-text-light text-lg">
              Nu există preparate în această categorie momentan.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MenuItemsSection; 