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

    // Aperitive
    {
      id: 4,
      name: 'Salată Cezar',
      description: 'Salată cu pui la grătar, crutoane, parmezan și dressing Cezar',
      price: '35 RON',
      category: 'starters',
      image: food5,
      tags: ['popular']
    },
    {
      id: 5,
      name: 'Bruschete cu roșii și busuioc',
      description: 'Pâine prăjită cu roșii cherry, busuioc proaspăt și ulei de măsline',
      price: '28 RON',
      category: 'starters',
      image: food6,
      tags: ['vegetarian', 'vegan']
    },
    {
      id: 6,
      name: 'Antipasti mediteraneene',
      description: 'Selecție de antipasti: prosciutto, mozzarella, măsline și ardei copți',
      price: '42 RON',
      category: 'starters',
      image: food1,
      tags: ['popular']
    },

    // Feluri principale
    {
      id: 7,
      name: 'Sarmale în foi de viță',
      description: 'Sarmale tradiționale cu carne de porc și orez, servite cu smântână',
      price: '45 RON',
      category: 'main-courses',
      image: food2,
      tags: ['traditional', 'popular']
    },
    {
      id: 8,
      name: 'Piept de pui la grătar',
      description: 'Piept de pui marinat cu rozmarin și usturoi, servit cu legume la grătar',
      price: '38 RON',
      category: 'main-courses',
      image: food3,
      tags: ['healthy']
    },
    {
      id: 9,
      name: 'Paste Carbonara',
      description: 'Paste cu ouă, parmezan, guanciale și piper negru proaspăt',
      price: '32 RON',
      category: 'main-courses',
      image: food4,
      tags: ['popular']
    },
    {
      id: 10,
      name: 'Scoici la grătar',
      description: 'Scoici proaspete la grătar cu unt cu usturoi și pătrunjel',
      price: '55 RON',
      category: 'main-courses',
      image: food5,
      tags: ['seafood']
    },

    // Deserturi
    {
      id: 11,
      name: 'Papanăși tradiționali',
      description: 'Papanăși cu smântână și dulceață de vișine, poliveri cu zahăr pudră',
      price: '25 RON',
      category: 'desserts',
      image: food6,
      tags: ['traditional', 'popular']
    },
    {
      id: 12,
      name: 'Tiramisu clasic',
      description: 'Tiramisu cu mascarpone, cafea și cacao, servit rece',
      price: '28 RON',
      category: 'desserts',
      image: food1,
      tags: ['popular']
    },
    {
      id: 13,
      name: 'Gelato artigianale',
      description: 'Gelato făcut în casă cu vanilie, ciocolată sau căpșuni',
      price: '20 RON',
      category: 'desserts',
      image: food2,
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
            Preparatele Noastre
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 flex gap-1">
                    {item.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium flex items-center gap-1"
                      >
                        {getTagIcon(tag)}
                        <span>{getTagLabel(tag)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display font-semibold text-lg text-text-primary">
                      {item.name}
                    </h3>
                    <span className="font-bold text-primary-500 text-lg">
                      {item.price}
                    </span>
                  </div>
                  
                  <p className="text-text-light text-sm leading-relaxed">
                    {item.description}
                  </p>
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