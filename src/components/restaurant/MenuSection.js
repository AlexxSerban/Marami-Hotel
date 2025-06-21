import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from '../BlurText';

const menuData = [
  {
    id: 'aperitive',
    label: 'Aperitive',
    icon: '🥗',
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
          <BlurText
            text="Meniul Restaurantului"
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Descoperă preparatele noastre, de la aperitive proaspete la deserturi delicioase și vinuri selecte.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-lg flex items-center gap-2 ${
                activeTab === cat.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-text-secondary hover:bg-primary-50 hover:text-primary-500'
              }`}
            >
              <span>{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {menuData.map((cat) =>
              activeTab === cat.id ? (
                <motion.ul
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  {cat.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="bg-white rounded-xl shadow p-4 text-lg text-text-primary flex items-center gap-3"
                    >
                      <span className="text-2xl">{cat.icon}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </motion.ul>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MenuSection; 