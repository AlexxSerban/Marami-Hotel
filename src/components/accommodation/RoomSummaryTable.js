import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon,
  HomeIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const RoomSummaryTable = () => {
  const handleAnimationComplete = () => {
    console.log('RoomSummaryTable title animation completed!');
  };

  const roomTypes = [
            {
          id: 'double-twin',
          type: 'Dublă Twin',
          capacity: '2 persoane',
          mainAmenities: ['Pat matrimonial', 'Baie cu duș', 'Wi-Fi gratuit', 'TV prin cablu'],
          price: 'de la 330 RON',
          priceNote: 'fara mic dejun',
          priceWithBreakfast: 'de la 390 RON',
          size: '≈20 m²'
        },
            {
          id: 'double-lux',
          type: 'Dublă de Lux',
          capacity: '2 persoane',
          mainAmenities: ['Pat matrimonial', 'Baie cu cadă', 'Wi-Fi gratuit', 'TV prin cablu'],
          price: 'de la 370 RON',
          priceNote: 'fara mic dejun',
          priceWithBreakfast: 'de la 430 RON',
          size: '≈26 m²'
        },
            {
          id: 'matrimonial',
          type: 'Dublă Matrimonială',
          capacity: '2 persoane',
          mainAmenities: ['Pat matrimonial mare', 'Baie elegantă', 'Balcon privat', 'Decor romantic'],
          price: 'de la 330 RON',
          priceNote: 'fara mic dejun',
          priceWithBreakfast: 'de la 390 RON',
          size: '≈24 m²'
        },
            {
          id: 'single',
          type: 'Single',
          capacity: '1 persoană',
          mainAmenities: ['Pat single', 'Baie cu duș', 'Wi-Fi gratuit', 'Design funcțional'],
          price: 'de la 320 RON',
          priceNote: 'fara mic dejun',
          priceWithBreakfast: 'de la 350 RON',
          size: '≈16 m²'
        }
  ];

  return (
    <section className="section-padding bg-background-primary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <BlurText
            text="Tabel Sumar Tipuri Camere"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            O privire de ansamblu asupra tuturor tipurilor de camere disponibile și caracteristicilor lor principale.
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden no-overflow">
            <div className="overflow-x-auto max-w-full">
              <table className="w-full">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                      Tip Cameră
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                      Capacitate
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                      Dotări Principale
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                      Preț fără mic dejun
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                      Preț cu mic dejun
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                      Dimensiune
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {roomTypes.map((room, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">🛌</div>
                          <span className="font-medium text-text-primary">{room.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <UserGroupIcon className="w-4 h-4 text-primary-500" />
                          <span className="text-text-secondary">{room.capacity}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {room.mainAmenities.map((amenity, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700"
                            >
                              <CheckIcon className="w-3 h-3 mr-1" />
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-primary-500">{room.price}</span>
                        {room.priceNote && (
                          <div className="text-xs text-text-light mt-1">{room.priceNote}</div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-green-600">{room.priceWithBreakfast}</span>
                        <div className="text-xs text-text-light mt-1">cu mic dejun</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <HomeIcon className="w-4 h-4 text-primary-500" />
                          <span className="text-text-secondary">{room.size}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:hidden space-y-6"
        >
          {roomTypes.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🛌</div>
                  <h3 className="font-display font-semibold text-text-primary">{room.type}</h3>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-primary-500">{room.price}</div>
                  {room.priceNote && (
                    <div className="text-xs text-text-light">{room.priceNote}</div>
                  )}
                  <div className="font-semibold text-green-600 mt-2">{room.priceWithBreakfast}</div>
                  <div className="text-xs text-text-light">cu mic dejun</div>
                  <div className="text-sm text-text-secondary mt-2">{room.size}</div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <UserGroupIcon className="w-4 h-4 text-primary-500" />
                  <span className="text-sm text-text-secondary">{room.capacity}</span>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-text-primary mb-2">Dotări Principale:</h4>
                <div className="flex flex-wrap gap-1">
                  {room.mainAmenities.map((amenity, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700"
                    >
                      <CheckIcon className="w-3 h-3 mr-1" />
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={`/rezervare?room=${room.id}`}
                  className="w-full btn-primary text-sm block text-center"
                >
                  Rezervă Această Cameră
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RoomSummaryTable; 