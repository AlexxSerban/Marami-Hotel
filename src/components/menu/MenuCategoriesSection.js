import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClockIcon, 
  CakeIcon, 
  FireIcon, 
  BeakerIcon,
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
      icon: ClockIcon,
      description: 'Cereale, ouă, pâine proaspătă'
    },
    {
      id: 'starters',
      name: 'Aperitive',
      icon: BeakerIcon,
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
          className="text-center mb-4 md:mb-6 lg:mb-8"
        >
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-display font-bold text-text-primary mb-2 md:mb-3 lg:mb-4">
            Categorii
          </h2>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-text-light max-w-2xl lg:max-w-3xl mx-auto">
            Navighează ușor prin meniul nostru și descoperă preparatele care îți plac
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4">
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
                  flex flex-col items-center p-3 md:p-4 lg:p-5 rounded-lg transition-all duration-300 cursor-pointer min-w-[100px] md:min-w-[120px] lg:min-w-[140px]
                  ${isSelected 
                    ? 'bg-primary-500 text-white shadow-md' 
                    : 'bg-white text-text-primary hover:bg-primary-50 border border-gray-200'
                  }
                `}
              >
                <IconComponent className={`w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mb-1.5 md:mb-2 lg:mb-2.5 ${isSelected ? 'text-white' : 'text-primary-500'}`} />
                <h3 className="font-display font-semibold text-xs md:text-sm lg:text-base mb-0.5 text-center">
                  {category.name}
                </h3>
                <p className={`text-xs text-center ${isSelected ? 'text-white/80' : 'text-text-light'}`}>
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