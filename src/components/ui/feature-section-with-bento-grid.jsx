import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, SparklesIcon, HeartIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

import castelulPeles from '../../assets/attractions/castelul-peles.jpg';
import manastireaSinaia from '../../assets/attractions/manastirea-Sinaia.jpg';
import telegondolaSinaia from '../../assets/attractions/telegondola-sinaia.jpg';
import cota1400 from '../../assets/attractions/Cota-1400-min.png';

function Feature() {
  const attractions = [
    {
      icon: HomeIcon,
      title: 'Castelul Peleș',
      description: 'Castelul regal cu arhitectură neorenascentistă, la doar 300m de hotel. O capodoperă arhitecturală care te va transporta în epoca de aur a României.',
      distance: '5 min',
      type: 'Istoric',
      category: 'Monument',
      backgroundImage: castelulPeles
    },
    {
      icon: SparklesIcon,
      title: 'Mânăstirea Sinaia',
      description: 'Mânăstire ortodoxă cu istorie bogată, la 10 minute de mers pe jos. Un loc de liniște și spiritualitate în inima munților.',
      distance: '10 min',
      type: 'Religios',
      category: 'Cult',
      backgroundImage: manastireaSinaia
    },
    {
      icon: ArrowUpIcon,
      title: 'Telegondola Sinaia',
      description: 'Telecabina care duce la Cota 1400, accesibilă din apropierea hotelului. O experiență panoramică de neuitat.',
      distance: '8 min',
      type: 'Transport',
      category: 'Aventură',
      backgroundImage: telegondolaSinaia
    },
    {
      icon: HeartIcon,
      title: 'Cota 1400',
      description: 'Stațiunea de schi cu priveliști panoramice, accesibilă cu telegondola. Perfectă pentru sporturi de iarnă și relaxare.',
      distance: '15 min',
      type: 'Sport',
      category: 'Recreere',
      backgroundImage: cota1400
    }
  ];

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
                                <div className="flex gap-4 flex-col items-start">
                        <div>
                          <span className="inline-flex items-center rounded-full bg-primary-500 text-white px-3 py-1 text-sm font-semibold">Atracții Turistice</span>
                        </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left text-text-primary">
                Împrejurimi & Atracții
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-text-light text-left">
                Explorează atracțiile turistice din zona Sinaia și împrejurimi, de la monumente istorice la peisaje naturale spectaculoase.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primul card - mare */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative bg-white rounded-xl shadow-lg h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col border border-gray-100 overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `url(${attractions[0].backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay pentru text */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-300 ease-in-out z-10"></div>
              
              {/* Conținut text */}
              <div className="relative z-20 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                <div className="flex flex-col">
                  <h3 className="text-xl tracking-tight font-semibold text-white mb-3">
                    {attractions[0].title}
                  </h3>
                  <p className="text-white/90 max-w-xs text-base leading-relaxed">
                    {attractions[0].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Al doilea card - mic */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-white rounded-xl shadow-lg aspect-square p-6 flex justify-between flex-col border border-gray-100 overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `url(${attractions[1].backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay pentru text */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-300 ease-in-out z-10"></div>
              
              {/* Conținut text */}
              <div className="relative z-20 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                <div className="flex flex-col">
                  <h3 className="text-xl tracking-tight font-semibold text-white mb-3">
                    {attractions[1].title}
                  </h3>
                  <p className="text-white/90 max-w-xs text-base leading-relaxed">
                    {attractions[1].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Al treilea card - mic */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative bg-white rounded-xl shadow-lg aspect-square p-6 flex justify-between flex-col border border-gray-100 overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `url(${attractions[2].backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay pentru text */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-300 ease-in-out z-10"></div>
              
              {/* Conținut text */}
              <div className="relative z-20 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                <div className="flex flex-col">
                  <h3 className="text-xl tracking-tight font-semibold text-white mb-3">
                    {attractions[2].title}
                  </h3>
                  <p className="text-white/90 max-w-xs text-base leading-relaxed">
                    {attractions[2].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Al patrulea card - mare */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative bg-white rounded-xl shadow-lg h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col border border-gray-100 overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `url(${attractions[3].backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay pentru text */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-300 ease-in-out z-10"></div>
              
              {/* Conținut text */}
              <div className="relative z-20 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                <div className="flex flex-col">
                  <h3 className="text-xl tracking-tight font-semibold text-white mb-3">
                    {attractions[3].title}
                  </h3>
                  <p className="text-white/90 max-w-xs text-base leading-relaxed">
                    {attractions[3].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature }
