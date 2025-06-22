import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from '../BlurText';

const menuData = [
  {
    id: 'aperitive',
    label: 'Aperitive',
    icon: '🥗',
    description: 'Începeți experiența culinară cu aperitivele noastre',
    items: [
      'Zacuscă de casă cu pâine prăjită',
      'Platou tradițional românesc (brânzeturi, mezeluri, legume)',
      'Bruschete cu roșii și busuioc',
      'Salată caprese cu mozzarella și pesto',
    ],
  },
  {
    id: 'supe',
    label: 'Supe & Ciorbe',
    icon: '🍲',
    description: 'Supele tradiționale românești, preparate cu ingrediente proaspete',
    items: [
      'Ciorbă de burtă',
      'Ciorbă țărănească de legume',
      'Supă cremă de ciuperci',
    ],
  },
  {
    id: 'feluri',
    label: 'Feluri principale',
    icon: '🍝',
    description: 'Felurile principale, de la tradițional la internațional',
    items: [
      'Tochitură moldovenească cu mămăliguță',
      'File de doradă cu legume la grătar',
      'Piept de pui cu sos de lămâie și ierburi',
      'Paste cu fructe de mare',
    ],
  },
  {
    id: 'deserturi',
    label: 'Deserturi',
    icon: '🍰',
    description: 'Încheiați masa cu deserturile noastre delicioase',
    items: [
      'Papanași cu smântână și dulceață de afine',
      'Tiramisu',
      'Tartă cu fructe de sezon',
      'Lava cake cu înghețată',
    ],
  },
  {
    id: 'bauturi',
    label: 'Băuturi & Vinuri',
    icon: '🍷',
    description: 'Vinuri selecte și băuturi rafinate pentru a acompania masa',
    items: [
      'Vinuri românești de cramă (Fetească, Merlot, Sauvignon Blanc etc.)',
      'Cocktailuri clasice (Mojito, Aperol, Negroni)',
      'Cafea espresso, cappuccino',
      'Sucuri naturale & apă minerală',
    ],
  },
];

const MenuSection = () => {
  const handleAnimationComplete = () => {
    console.log('Menu title animation completed!');
  };

  const [activeTab, setActiveTab] = useState(menuData[0].id);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-background-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <BlurText
            text="Meniul Restaurantului"
            className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Descoperă preparatele noastre, de la aperitive proaspete la deserturi delicioase și vinuri selecte.
          </p>
        </motion.div>

        {/* Modern Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
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
              className={`group relative px-8 py-4 rounded-2xl font-medium transition-all duration-500 text-lg flex items-center gap-3 border-2 ${
                activeTab === cat.id
                  ? 'bg-primary-500 text-white border-primary-600 shadow-2xl shadow-primary-500/20 scale-105'
                  : 'bg-white text-text-secondary border-gray-200 hover:bg-primary-50 hover:text-primary-500 hover:border-primary-200 hover:scale-105'
              }`}
            >
              <span className="text-2xl transition-transform duration-300 group-hover:scale-110">{cat.icon}</span>
              <span>{cat.label}</span>
              {activeTab === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {menuData.map((cat) =>
              activeTab === cat.id ? (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="space-y-8"
                >
                  {/* Category Header */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-center mb-8"
                  >
                    <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 border border-gray-200 shadow-lg">
                      <span className="text-4xl">{cat.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary mb-2">{cat.label}</h3>
                        <p className="text-text-light text-lg">{cat.description}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Menu Items Grid */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {cat.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="group relative"
                      >
                        <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:bg-primary-50 hover:border-primary-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                              {idx + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-lg text-text-primary font-medium leading-relaxed group-hover:text-text-primary group-hover:font-semibold transition-all duration-300">
                                {item}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Rezervă o masă la restaurant
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Pentru a vă asigura o experiență culinară de neuitat, vă recomandăm să faceți o rezervare.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-500 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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