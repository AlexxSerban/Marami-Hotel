import React from 'react';
import { motion } from 'framer-motion';
import BlurText from '../BlurText';
import food1 from '../../assets/food/food1.JPG';
import food2 from '../../assets/food/food2.JPG';
import food3 from '../../assets/food/food3.JPG';
import food4 from '../../assets/food/food4.JPG';

const CuisineSection = () => {
  const handleAnimationComplete = () => {
    console.log('Cuisine title animation completed!');
  };

  return (
    <section className="section-padding bg-background-primary">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <BlurText
            text="Bucătărie rafinată românească & mediteraneană"
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light mb-6">
            Fiecare farfurie spune o poveste despre grijă, simplitate și bucuria gustului bine făcut.
          </p>
          <p className="text-lg text-text-light mb-6">
            Folosim ingrediente locale, de sezon, atent alese, pentru a oferi preparate echilibrate, aromate și mereu proaspete.
          </p>
          
          <ul className="list-disc pl-5 text-text-light mb-6 space-y-3">
            <li>Mâncăruri inspirate din tradiția românească și din bucătăria mediteraneană</li>
            <li>Ingrediente locale, proaspete și de sezon</li>
            <li>Vinuri selecte din crame românești, potrivite fiecărui fel de mâncare</li>
            <li>Deserturi ușoare, făcute în casă, cu gust autentic</li>
          </ul>
          <p className="text-lg text-text-light">
            Un meniu creat pentru a te face să încetinești ritmul și să te bucuri de fiecare îmbucătură.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-4"
        >
          <img
            src={food1}
            alt="Preparat principal - Bucătărie românească"
            className="rounded-xl shadow-lg object-cover h-36 w-full"
            loading="lazy"
          />
          <img
            src={food2}
            alt="Preparat mediteranean - Hotel Marami"
            className="rounded-xl shadow-lg object-cover h-36 w-full"
            loading="lazy"
          />
          <img
            src={food3}
            alt="Deserturi de casă - Restaurant Marami"
            className="rounded-xl shadow-lg object-cover h-36 w-full"
            loading="lazy"
          />
          <img
            src={food4}
            alt="Arome rafinate - Bucătărie Marami"
            className="rounded-xl shadow-lg object-cover h-36 w-full"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CuisineSection; 