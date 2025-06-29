import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const menuData = [
  {
    id: 'aperitive',
    label: 'Aperitive',
    icon: '🥗',
    description: 'Începeți experiența culinară cu aperitivele noastre',
    items: [
      {
        name: 'Zacuscă de casă cu pâine prăjită',
        ingredients: 'Vinete, roșii, ceapă, usturoi, ulei de măsline, pâine prăjită'
      },
      {
        name: 'Platou tradițional românesc (brânzeturi, mezeluri, legume)',
        ingredients: 'Brânză de oaie, telemea, salam de Sibiu, șuncă, roșii, castraveți, ardei'
      },
      {
        name: 'Bruschete cu roșii și busuioc',
        ingredients: 'Pâine prăjită, roșii cherry, busuioc proaspăt, mozzarella, ulei de măsline'
      },
      {
        name: 'Salată caprese cu mozzarella și pesto',
        ingredients: 'Mozzarella di bufala, roșii, busuioc, pesto, ulei de măsline, balsamic'
      },
    ],
  },
  {
    id: 'supe',
    label: 'Supe & Ciorbe',
    icon: '🍲',
    description: 'Supele tradiționale românești, preparate cu ingrediente proaspete',
    items: [
      {
        name: 'Ciorbă de burtă',
        ingredients: 'Burtă de vită, smântână, ouă, lămâie, pătrunjel, usturoi'
      },
      {
        name: 'Ciorbă țărănească de legume',
        ingredients: 'Cartofi, morcovi, pătrunjel, ceapă, roșii, smântână, ouă'
      },
      {
        name: 'Supă cremă de ciuperci',
        ingredients: 'Ciuperci proaspete, smântână, ceapă, usturoi, pătrunjel, crutoane'
      },
    ],
  },
  {
    id: 'feluri',
    label: 'Feluri principale',
    icon: '🍝',
    description: 'Felurile principale, de la tradițional la internațional',
    items: [
      {
        name: 'Tochitură moldovenească cu mămăliguță',
        ingredients: 'Carne de porc, cârnați, slănină, mămăligă, brânză, smântână'
      },
      {
        name: 'File de doradă cu legume la grătar',
        ingredients: 'Doradă proaspătă, ardei, dovlecei, roșii, ulei de măsline, lămâie'
      },
      {
        name: 'Piept de pui cu sos de lămâie și ierburi',
        ingredients: 'Piept de pui, lămâie, rozmarin, cimbru, usturoi, unt, vin alb'
      },
      {
        name: 'Paste cu fructe de mare',
        ingredients: 'Paste, creveți, scoici, calamari, usturoi, pătrunjel, vin alb'
      },
    ],
  },
  {
    id: 'deserturi',
    label: 'Deserturi',
    icon: '🍰',
    description: 'Încheiați masa cu deserturile noastre delicioase',
    items: [
      {
        name: 'Papanași cu smântână și dulceață de afine',
        ingredients: 'Branză dulce, ouă, făină, smântână, dulceață de afine, zahăr pudră'
      },
      {
        name: 'Tiramisu',
        ingredients: 'Mascarpone, ouă, zahăr, cafea espresso, biscuiți savoiardi, cacao'
      },
      {
        name: 'Tartă cu fructe de sezon',
        ingredients: 'Aluat de tartă, cremă de vanilie, fructe proaspete, jeleu de fructe'
      },
      {
        name: 'Lava cake cu înghețată',
        ingredients: 'Ciocolată neagră, unt, ouă, zahăr, făină, înghețată de vanilie'
      },
    ],
  },
  {
    id: 'bauturi',
    label: 'Băuturi & Vinuri',
    icon: '🍷',
    description: 'Vinuri selecte și băuturi rafinate pentru a acompania masa',
    items: [
      {
        name: 'Vinuri românești de cramă (Fetească, Merlot, Sauvignon Blanc etc.)',
        ingredients: 'Vinuri selecte din regiunile viticole românești, servite la temperatura optimă'
      },
      {
        name: 'Cocktailuri clasice (Mojito, Aperol, Negroni)',
        ingredients: 'Rom, mentă, lime, zahăr, Aperol, prosecco, gin, vermut roșu'
      },
      {
        name: 'Cafea espresso, cappuccino',
        ingredients: 'Boabe de cafea proaspete, lapte integral, spumă de lapte'
      },
      {
        name: 'Sucuri naturale & apă minerală',
        ingredients: 'Sucuri proaspete din fructe de sezon, apă minerală naturală'
      },
    ],
  },
];

const MenuSection = () => {
  const handleAnimationComplete = () => {
    console.log('Menu title animation completed!');
  };

  const [activeTab, setActiveTab] = useState(menuData[0].id);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <BlurText
            text="Meniul"
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text-primary mb-6 tracking-tight"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto leading-relaxed font-sans">
            Preparate rafinate, ingrediente proaspete, experiențe memorabile.
          </p>
        </motion.div>

        {/* Minimalist Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {menuData.map((cat) => (
            <motion.button
              key={cat.id}
              variants={itemVariants}
              onClick={() => setActiveTab(cat.id)}
              className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm tracking-wide font-button ${
                activeTab === cat.id
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-text-light hover:text-primary-500 hover:bg-gray-50'
              }`}
            >
              <span className="mr-2 text-base">{cat.icon}</span>
              <span className="font-medium">{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Content */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {menuData.map((cat) =>
              activeTab === cat.id ? (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-12"
                >
                  {/* Category Header */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="text-center mb-12"
                  >
                    <div className="inline-flex flex-col items-center space-y-4">
                      <span className="text-5xl mb-2">{cat.icon}</span>
                      <div>
                        <h3 className="text-3xl font-display font-bold text-text-primary mb-3 tracking-wide">{cat.label}</h3>
                        <p className="text-text-light text-lg font-sans max-w-md mx-auto leading-relaxed">{cat.description}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Menu Items - Apple Style */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                  >
                    {cat.items.map((item, idx) => {
                      const itemId = `${cat.id}-${idx}`;
                      const isExpanded = expandedItems[itemId];
                      
                      return (
                        <motion.div
                          key={idx}
                          variants={itemVariants}
                          className="group"
                        >
                          <div className="bg-gray-50/50 rounded-2xl border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 overflow-hidden">
                            <div className="p-8">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <p className="text-xl text-text-primary font-sans leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                                    {item.name}
                                  </p>
                                </div>
                                <div className="ml-6 flex-shrink-0">
                                  <button
                                    onClick={() => toggleItem(itemId)}
                                    className="w-8 h-8 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-500/20 transition-all duration-300 group-hover:bg-primary-500/20"
                                  >
                                    <ChevronDownIcon 
                                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            
                            {/* Expanded Content */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: "easeOut" }}
                                  className="border-t border-gray-100"
                                >
                                  <div className="p-8 pt-0">
                                    <div className="bg-white/50 rounded-xl p-6">
                                      <h4 className="text-sm font-button font-medium text-primary-500 mb-3 uppercase tracking-wide">
                                        Ingrediente
                                      </h4>
                                      <p className="text-text-light font-sans leading-relaxed">
                                        {item.ingredients}
                                      </p>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Minimalist Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="bg-gray-50 rounded-3xl p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4 tracking-wide">
              Rezervă o masă
            </h3>
            <p className="text-text-light text-lg mb-8 font-sans leading-relaxed">
              Pentru o experiență culinară personalizată, vă recomandăm să faceți o rezervare.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary-500 text-white px-8 py-4 rounded-lg font-button font-medium text-lg shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() => window.open('tel:+40759033047', '_self')}
            >
              Rezervă acum
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection; 