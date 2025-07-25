import React from 'react';
import { motion } from 'framer-motion';
import { 
  CoffeeIcon, 
  CakeIcon, 
  FireIcon, 
  WineIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const MenuCategoriesSection = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    {
      id: 'all',
      name: 'Toate',
      icon: SparklesIcon,
      description: 'Vizualizează întregul meniu'
    },
    {
      id: 'breakfast',
      name: 'Mic dejun',
      icon: CoffeeIcon,
      description: 'Cereale, ouă, pâine proaspătă'
    },
    {
      id: 'starters',
      name: 'Aperitive',
      icon: WineIcon,
      description: 'Salate, bruschete, antipasti'
    },
    {
      id: 'main-courses',
      name: 'Feluri principale',
      icon: FireIcon,
      description: 'Preparate românești și mediteraneene'
    },
    {
      id: 'desserts',
      name: 'Deserturi',
      icon: CakeIcon,
      description: 'Dulciuri de casă și gelato'
    }
  ];

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
            Categorii
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Navighează ușor prin meniul nostru și descoperă preparatele care îți plac
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategoryChange(category.id)}
                className={`
                  flex flex-col items-center p-6 rounded-2xl transition-all duration-300 cursor-pointer
                  ${isSelected 
                    ? 'bg-primary-500 text-white shadow-lg' 
                    : 'bg-white text-text-primary hover:bg-primary-50 border border-gray-200'
                  }
                `}
              >
                <IconComponent className={`w-8 h-8 mb-3 ${isSelected ? 'text-white' : 'text-primary-500'}`} />
                <h3 className="font-display font-semibold text-lg mb-1">
                  {category.name}
                </h3>
                <p className={`text-sm text-center ${isSelected ? 'text-white/80' : 'text-text-light'}`}>
                  {category.description}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuCategoriesSection; 