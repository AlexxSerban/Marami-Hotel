import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

// Import imaginile locale pentru sezoane
import iarnaSinaia from '../../assets/attractions/Iarnă Sinaia-min.jpg';
import primavaraSinaia from '../../assets/attractions/Primăvară Sinaia-min.jpg';
import varaSinaia from '../../assets/attractions/Vară Sinaia-min.jpg';

const SeasonalInfoSection = () => {
  const handleAnimationComplete = () => {
    console.log('SeasonalInfo title animation completed!');
  };

  const seasons = [
    {
      icon: HomeIcon,
      title: 'Iarnă',
      description: 'Schi și snowboard pe pârtiile din Sinaia',
      activities: ['Schi', 'Snowboard', 'Sanie'],
      image: iarnaSinaia
    },
    {
      icon: SparklesIcon,
      title: 'Primăvară',
      description: 'Drumetii și explorarea naturii în înflorire',
      activities: ['Drumetii', 'Ciclism', 'Fotografie'],
      image: primavaraSinaia
    },
    {
      icon: HeartIcon,
      title: 'Vară',
      description: 'Activități în aer liber și relaxare',
      activities: ['Hiking', 'Ciclism', 'Picnic'],
      image: varaSinaia
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
          className="text-center mb-16"
        >
          <BlurText
            text="Informații Sezoniere"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Descoperă ce activități sunt disponibile în fiecare anotimp 
            și planifică-ți vizita în funcție de preferințele tale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto"
        >
          {seasons.map((season, index) => {
            const Icon = season.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="w-full max-w-sm overflow-hidden h-full">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none h-48"
                  >
                    <img
                      src={season.image}
                      alt={season.title}
                      className="w-full h-full object-cover"
                    />
                  </CardHeader>
                  <CardBody className="flex-1">
                    <Typography variant="h4" color="blue-gray">
                      {season.title}
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 font-normal">
                      {season.description}
                    </Typography>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Fiecare anotimp îți oferă experiențe unice în munții Bucegi. 
            Planifică-ți vizita în funcție de activitățile preferate și de condițiile meteo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SeasonalInfoSection; 