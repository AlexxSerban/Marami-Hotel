import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const LogisticsTipsSection = () => {
  const handleAnimationComplete = () => {
    console.log('LogisticsTips title animation completed!');
  };

  const tips = [
    {
      icon: HomeIcon,
      title: 'Transport',
      description: 'Informații despre cum să ajungi la Hotel Marami',
      details: ['Tren din București', 'Mașină personală', 'Transfer organizat']
    },
    {
      icon: SparklesIcon,
      title: 'Echipamente',
      description: 'Ce să îți aduci pentru activități',
      details: ['Îmbrăcăminte potrivită', 'Echipament de siguranță', 'Provizii']
    },
    {
      icon: HeartIcon,
      title: 'Rezervări',
      description: 'Cum să îți organizezi activitățile',
      details: ['Rezervări anticipate', 'Ghiduri locali', 'Echipamente închiriate']
    }
  ];

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
          <BlurText
            text="Sfaturi Logistice"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Sfaturi practice pentru a-ți organiza perfect călătoria și activitățile în zona Sinaia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="font-display font-semibold text-text-primary mb-3">
                  {tip.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {tip.description}
                </p>
                <div className="space-y-2">
                  {tip.details.map((detail, idx) => (
                    <div key={idx} className="text-xs text-text-secondary">
                      • {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-background-secondary rounded-2xl p-8">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              Asistență Personalizată
            </h3>
            <p className="text-text-light max-w-2xl mx-auto">
              Echipa noastră este aici să te ajute cu orice întrebări ai avea despre 
              organizarea activităților și călătoria ta.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogisticsTipsSection; 