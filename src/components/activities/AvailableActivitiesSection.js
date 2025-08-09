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

// Import imaginile locale pentru activități
import schiSnowboard from '../../assets/attractions/Schi & Snowboard-min.jpg';
import drumetiiMunte from '../../assets/attractions/Drumetii în Munte-min.jpg';
import ciclismMontan from '../../assets/attractions/Ciclism Montan-min.jpg';

const AvailableActivitiesSection = () => {
  const handleAnimationComplete = () => {
    console.log('AvailableActivities title animation completed!');
  };

  const activities = [
    {
      icon: HomeIcon,
      title: 'Schi & Snowboard',
      description: 'Pârtii pentru toate nivelurile, de la începători la avansați',
      season: 'Iarnă',
      difficulty: 'Toate nivelurile',
      image: schiSnowboard
    },
    {
      icon: SparklesIcon,
      title: 'Drumetii în Munte',
      description: 'Trasee marcate prin munții Bucegi cu priveliști spectaculoase',
      season: 'Toate anotimpurile',
      difficulty: 'Ușor - Mediu',
      image: drumetiiMunte
    },
    {
      icon: HeartIcon,
      title: 'Ciclism Montan',
      description: 'Trasee pentru ciclism montan și downhill',
      season: 'Primăvară - Toamnă',
      difficulty: 'Mediu - Greu',
      image: ciclismMontan
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
            text="Activități Disponibile"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Descoperă varietatea de activități pe care le poți practica în zona Sinaia, 
            de la sporturi de iarnă la aventuri de vară în munții Bucegi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto"
        >
          {activities.map((activity, index) => {
            const Icon = activity.icon;
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
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                  </CardHeader>
                  <CardBody className="flex-1">
                    <Typography variant="h4" color="blue-gray">
                      {activity.title}
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 font-normal">
                      {activity.description}
                    </Typography>
                  </CardBody>
                  <CardFooter className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <div className="text-sm">
                        <span className="text-gray-600">Sezon:</span>
                        <span className="font-medium text-blue-gray ml-1">{activity.season}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">Dificultate:</span>
                        <span className="font-medium text-blue-gray ml-1">{activity.difficulty}</span>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AvailableActivitiesSection; 