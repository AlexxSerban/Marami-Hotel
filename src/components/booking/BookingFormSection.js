import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { CalendarIcon, UserGroupIcon, HomeIcon, CheckIcon, StarIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const BookingFormSection = () => {
  const form = useRef();
  
  const handleAnimationComplete = () => {
    console.log('BookingForm title animation completed!');
  };

  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    rooms: 1,
    selectedRoom: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [breakfastFilter, setBreakfastFilter] = useState('with'); // 'with', 'without'

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const roomTypes = [
    {
      id: 'single-no-breakfast',
      name: 'Single',
      price: 320,
      priceNote: 'fara mic dejun',
      capacity: '1 persoană',
      features: ['Pat single', 'Baie privată', 'WiFi gratuit'],
      breakfast: false
    },
    {
      id: 'single-with-breakfast',
      name: 'Single',
      price: 350,
      priceNote: 'cu mic dejun',
      capacity: '1 persoană',
      features: ['Pat single', 'Baie privată', 'WiFi gratuit', 'Mic dejun inclus'],
      breakfast: true
    },
    {
      id: 'double-twin-no-breakfast',
      name: 'Dublă Twin',
      price: 330,
      priceNote: 'fara mic dejun',
      capacity: '2 persoane',
      features: ['Pat dublu', 'Baie privată', 'WiFi gratuit', 'Balcon'],
      breakfast: false
    },
    {
      id: 'double-twin-with-breakfast',
      name: 'Dublă Twin',
      price: 390,
      priceNote: 'cu mic dejun',
      capacity: '2 persoane',
      features: ['Pat dublu', 'Baie privată', 'WiFi gratuit', 'Balcon', 'Mic dejun inclus'],
      breakfast: true
    },
    {
      id: 'double-lux-no-breakfast',
      name: 'Dublă de Lux',
      price: 370,
      priceNote: 'fara mic dejun',
      capacity: '2 persoane',
      features: ['Pat dublu', 'Baie privată', 'WiFi gratuit', 'Jacuzzi'],
      breakfast: false
    },
    {
      id: 'double-lux-with-breakfast',
      name: 'Dublă de Lux',
      price: 430,
      priceNote: 'cu mic dejun',
      capacity: '2 persoane',
      features: ['Pat dublu', 'Baie privată', 'WiFi gratuit', 'Jacuzzi', 'Mic dejun inclus'],
      breakfast: true
    },
    {
      id: 'matrimonial-no-breakfast',
      name: 'Dublă Matrimonială',
      price: 330,
      priceNote: 'fara mic dejun',
      capacity: '2 persoane',
      features: ['Pat matrimonial', 'Baie privată', 'WiFi gratuit', 'Decor romantic'],
      breakfast: false
    },
    {
      id: 'matrimonial-with-breakfast',
      name: 'Dublă Matrimonială',
      price: 390,
      priceNote: 'cu mic dejun',
      capacity: '2 persoane',
      features: ['Pat matrimonial', 'Baie privată', 'WiFi gratuit', 'Decor romantic', 'Mic dejun inclus'],
      breakfast: true
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const result = await emailjs.sendForm(
        'service_hb4fqx9', // Service ID-ul tău
        'template_1mkmooe', // Template ID pentru booking form
        form.current,
        '0fpRZnYAsQkskOz54' // Public Key-ul tău
      );
      
      console.log('SUCCESS!', result.text);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        checkIn: '',
        checkOut: '',
        adults: 1,
        children: 0,
        rooms: 1,
        selectedRoom: null,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialRequests: ''
      });
      
    } catch (error) {
      console.log('FAILED...', error.text);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      const diffTime = Math.abs(checkOut - checkIn);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  const nights = calculateNights();
  const selectedRoomData = roomTypes.find(room => room.id === formData.selectedRoom);

  // Filter rooms based on breakfast preference
  const filteredRoomTypes = roomTypes.filter(room => {
    if (breakfastFilter === 'with') return room.breakfast === true;
    if (breakfastFilter === 'without') return room.breakfast === false;
    return false;
  });

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
            text="Rezervă Camera Ta"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Completează formularul de mai jos pentru a rezerva camera ta la Hotel Marami.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form ref={form} onSubmit={handleSubmit} className="space-y-8">
              {/* Date and Guest Selection */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-display font-bold text-text-primary mb-6 flex items-center">
                    <CalendarIcon className="w-6 h-6 text-primary-500 mr-3" />
                    Detalii Rezervare
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Date Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-text-primary font-semibold">Check-in *</label>
                        <input
                          type="date"
                          name="checkIn"
                          value={formData.checkIn}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-text-primary font-semibold">Check-out *</label>
                        <input
                          type="date"
                          name="checkOut"
                          value={formData.checkOut}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    {/* Guest Count */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-text-primary font-semibold">Adulți *</label>
                        <select
                          name="adults"
                          value={formData.adults}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        >
                          {[1, 2, 3, 4, 5, 6].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'adult' : 'adulți'}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-text-primary font-semibold">Copii</label>
                        <select
                          name="children"
                          value={formData.children}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        >
                          {[0, 1, 2, 3, 4].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'copil' : num === 0 ? 'copii' : 'copii'}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-text-primary font-semibold">Camere *</label>
                        <select
                          name="rooms"
                          value={formData.rooms}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        >
                          {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'cameră' : 'camere'}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Summary */}
                    {nights > 0 && (
                      <div className="bg-primary-50 rounded-xl p-4">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-xl font-bold text-primary-600">{nights}</div>
                            <div className="text-sm text-text-secondary">Nopți</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-primary-600">{formData.adults + formData.children}</div>
                            <div className="text-sm text-text-secondary">Oaspeți</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-primary-600">{formData.rooms}</div>
                            <div className="text-sm text-text-secondary">Camere</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Room Selection */}
                <div>
                  <h3 className="text-xl font-display font-bold text-text-primary mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <HomeIcon className="w-6 h-6 text-primary-500 mr-3" />
                      Tip Camera
                    </div>
                    {/* Breakfast Filter Buttons */}
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        onClick={() => setBreakfastFilter('without')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          breakfastFilter === 'without'
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        Fără mic dejun
                      </button>
                      <button
                        type="button"
                        onClick={() => setBreakfastFilter('with')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          breakfastFilter === 'with'
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        Cu mic dejun
                      </button>
                    </div>
                  </h3>
                  
                  <div className="space-y-4">
                    {filteredRoomTypes.map((room, index) => (
                      <motion.div
                        key={room.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.selectedRoom === room.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, selectedRoom: room.id }))}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-text-primary">{room.name}</h4>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-text-secondary">4.8</span>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              formData.selectedRoom === room.id
                                ? 'bg-primary-500 border-primary-500'
                                : 'border-gray-300'
                            }`}>
                              {formData.selectedRoom === room.id && (
                                <CheckIcon className="w-3 h-3 text-white" />
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-text-secondary">{room.capacity}</div>
                          <div className="text-right">
                            <div className="font-bold text-primary-600">{room.price} RON/noapte</div>
                            {room.priceNote && (
                              <div className="text-xs text-text-light">{room.priceNote}</div>
                            )}
                          </div>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {room.features.map((feature, featureIndex) => (
                            <span key={featureIndex} className="text-xs bg-gray-100 text-text-secondary px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-display font-bold text-text-primary mb-6 flex items-center">
                  <UserGroupIcon className="w-6 h-6 text-primary-500 mr-3" />
                  Informații Personale
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-text-primary font-semibold">Prenume *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-text-primary font-semibold">Nume *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-text-primary font-semibold">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-text-primary font-semibold">Telefon *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <label className="text-text-primary font-semibold">Cerințe Speciale</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Menționează orice cerințe speciale (dietă, accesibilitate, etc.)"
                  />
                </div>
              </div>

              {/* Price Summary */}
              {selectedRoomData && nights > 0 && (
                <div className="bg-primary-50 rounded-xl p-6">
                  <h4 className="font-semibold text-text-primary mb-4">Sumar Preț</h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-text-primary">
                        {selectedRoomData.name} x {nights} nopți x {formData.rooms} camere
                      </div>
                      <div className="text-sm text-text-secondary">
                        {selectedRoomData.price} RON/noapte per cameră
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary-600">
                      {selectedRoomData.price * nights * formData.rooms} RON
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-500 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Se trimite...' : 'Trimite Rezervarea'}
              </motion.button>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                >
                  ✅ Mulțumim pentru rezervare! Vom confirma în cel mai scurt timp.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
                >
                  ❌ A apărut o eroare. Te rugăm să încerci din nou sau să ne contactezi direct.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingFormSection; 