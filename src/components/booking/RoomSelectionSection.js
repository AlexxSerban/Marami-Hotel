import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { CheckIcon, StarIcon, UserIcon, HomeIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const RoomSelectionSection = () => {
  const handleAnimationComplete = () => {
    console.log('RoomSelection title animation completed!');
  };

  const [searchParams] = useSearchParams();
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Pre-select room based on URL parameter
  useEffect(() => {
    const roomParam = searchParams.get('room');
    if (roomParam && roomTypes.find(room => room.id === roomParam)) {
      setSelectedRoom(roomParam);
    }
  }, [searchParams]);

  const roomTypes = [
    {
      id: 'single-no-breakfast',
      name: 'Single',
      description: 'Cameră confortabilă pentru o persoană',
      price: 320,
      priceNote: 'fara mic dejun',
      capacity: '1 persoană',
      size: '18 m²',
      features: ['Pat single', 'Baie privată', 'WiFi gratuit', 'Vedere la munte'],
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      breakfast: false
    },
    {
      id: 'single-with-breakfast',
      name: 'Single',
      description: 'Cameră confortabilă pentru o persoană',
      price: 350,
              priceNote: 'cu mic dejun',
      capacity: '1 persoană',
      size: '18 m²',
      features: ['Pat single', 'Baie privată', 'WiFi gratuit', 'Vedere la munte', 'Mic dejun inclus'],
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      breakfast: true
    },
    {
      id: 'double-twin-no-breakfast',
      name: 'Dublă Twin',
      description: 'Cameră elegantă cu pat dublu',
      price: 330,
      priceNote: 'fara mic dejun',
      capacity: '2 persoane',
      size: '25 m²',
      features: ['Pat dublu', 'Baie privată', 'WiFi gratuit', 'Vedere la munte', 'Balcon'],
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      breakfast: false
    },
    {
      id: 'double-twin-with-breakfast',
      name: 'Dublă Twin',
      description: 'Cameră elegantă cu pat dublu',
      price: 390,
      priceNote: 'cu mic dejun',
      capacity: '2 persoane',
      size: '25 m²',
      features: ['Pat dublu', 'Baie privată', 'WiFi gratuit', 'Vedere la munte', 'Balcon', 'Mic dejun inclus'],
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      breakfast: true
    },
    {
      id: 'double-lux-no-breakfast',
      name: 'Dublă de Lux',
      description: 'Cameră premium cu amenități superioare',
      price: 370,
      priceNote: 'fara mic dejun',
      capacity: '2 persoane',
      size: '30 m²',
      features: ['Pat dublu', 'Baie privată', 'WiFi gratuit', 'Vedere panoramică', 'Balcon mare', 'Jacuzzi'],
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
      breakfast: false
    },
    {
      id: 'double-lux-with-breakfast',
      name: 'Dublă de Lux',
      description: 'Cameră premium cu amenități superioare',
      price: 430,
      priceNote: 'cu mic dejun',
      capacity: '2 persoane',
      size: '30 m²',
      features: ['Pat dublu', 'Baie privată', 'WiFi gratuit', 'Vedere panoramică', 'Balcon mare', 'Jacuzzi', 'Mic dejun inclus'],
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
      breakfast: true
    },
    {
      id: 'matrimonial-no-breakfast',
      name: 'Dublă Matrimonială',
      description: 'Cameră romantică cu pat matrimonial',
      price: 330,
      priceNote: 'fara mic dejun',
      capacity: '2 persoane',
      size: '28 m²',
      features: ['Pat matrimonial', 'Baie privată', 'WiFi gratuit', 'Vedere la munte', 'Balcon', 'Decor romantic'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      breakfast: false
    },
    {
      id: 'matrimonial-with-breakfast',
      name: 'Dublă Matrimonială',
      description: 'Cameră romantică cu pat matrimonial',
      price: 390,
      priceNote: 'cu mic dejun',
      capacity: '2 persoane',
      size: '28 m²',
      features: ['Pat matrimonial', 'Baie privată', 'WiFi gratuit', 'Vedere la munte', 'Balcon', 'Decor romantic', 'Mic dejun inclus'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      breakfast: true
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
            text="Alege Camera Ta"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Selectează tipul de cameră care se potrivește cel mai bine nevoilor tale și bugetului.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {roomTypes.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedRoom === room.id ? 'ring-2 ring-primary-500 shadow-xl' : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedRoom(room.id)}
            >
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full font-semibold text-center">
                  <div>{room.price} RON/noapte</div>
                  {room.priceNote && (
                    <div className="text-xs opacity-90">{room.priceNote}</div>
                  )}
                </div>
                {selectedRoom === room.id && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white p-2 rounded-full">
                    <CheckIcon className="w-5 h-5" />
                  </div>
                )}
              </div>

              {/* Room Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-display font-bold text-text-primary">
                    {room.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-sm text-text-secondary">4.8</span>
                  </div>
                </div>

                <p className="text-text-light mb-4">
                  {room.description}
                </p>

                {/* Room Info */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <UserIcon className="w-4 h-4 text-primary-500" />
                    <span className="text-sm text-text-secondary">{room.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <HomeIcon className="w-4 h-4 text-primary-500" />
                    <span className="text-sm text-text-secondary">{room.size}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-text-primary mb-2">Amenități incluse:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {room.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Select Button */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary-600">
                        {room.price} RON
                      </div>
                      <div className="text-sm text-text-secondary">per noapte</div>
                      {room.priceNote && (
                        <div className="text-xs text-text-light">{room.priceNote}</div>
                      )}
                    </div>
                    <button
                      className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        selectedRoom === room.id
                          ? 'bg-green-500 text-white'
                          : 'bg-primary-500 text-white hover:bg-primary-600'
                      }`}
                    >
                      {selectedRoom === room.id ? 'Selectată' : 'Selectează'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selection Summary */}
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-primary-50 rounded-2xl p-6"
          >
            <div className="text-center">
              <h3 className="text-xl font-display font-bold text-text-primary mb-2">
                Camera selectată: {roomTypes.find(r => r.id === selectedRoom)?.name}
              </h3>
              <p className="text-text-secondary">
                Poți continua cu completarea datelor personale în secțiunea următoare.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RoomSelectionSection; 