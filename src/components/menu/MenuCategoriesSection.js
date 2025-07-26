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

        <div className="flex flex-row flex-wrap justify-center gap-1 md:gap-2 lg:gap-3">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`
                  px-3 md:px-4 py-1 md:py-1.5 rounded-full font-display font-semibold text-xs md:text-sm lg:text-base transition-all duration-200
                  border border-primary-500
                  ${isSelected ? 'bg-primary-500 text-white' : 'bg-white text-primary-500 hover:bg-primary-100'}
                `}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuCategoriesSection; 