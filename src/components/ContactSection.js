import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';
import BlurText from './BlurText';

const ContactSection = () => {
  const handleAnimationComplete = () => {
    console.log('Contact title animation completed!');
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      newsletter: false
    });
    
    alert('Mulțumim pentru mesaj! Vom răspunde în cel mai scurt timp.');
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Telefon',
      value: '+40 244 123 456',
      subtitle: 'Recepție 24/7',
      link: 'tel:+40244123456'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'info@hotelmarami.ro',
      subtitle: 'Răspuns în 24h',
      link: 'mailto:info@hotelmarami.ro'
    },
    {
      icon: MapPinIcon,
      title: 'Adresă',
      value: 'Strada Peleșului, nr. 15',
      subtitle: 'Sinaia, Județul Prahova',
      link: '#'
    },
    {
      icon: ClockIcon,
      title: 'Program',
      value: 'Check-in: 14:00',
      subtitle: 'Check-out: 11:00',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background-secondary">
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
            text="Contact & Newsletter"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Suntem aici să te ajutăm să planifici șederea perfectă. 
            Contactează-ne pentru orice întrebare sau rezervare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-display font-bold text-text-primary mb-6">
                Formular de Contact
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Nume complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Introdu numele tău"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="email@exemplu.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Cum te putem ajuta?"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="newsletter" className="text-sm text-text-light">
                    Vreau să mă înscriu la newsletter pentru oferte speciale și noutăți
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Se trimite...' : 'Trimite Întrebarea'}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-text-primary mb-1">
                        {info.title}
                      </h4>
                      <p className="text-text-primary font-medium">
                        {info.value}
                      </p>
                      <p className="text-sm text-text-light">
                        {info.subtitle}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* WhatsApp Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg">
                    WhatsApp
                  </h4>
                  <p className="text-primary-100 text-sm">
                    Răspuns rapid
                  </p>
                </div>
              </div>
              <p className="text-primary-100 mb-4">
                Vrei să ne scrii rapid? Contactează-ne pe WhatsApp pentru răspunsuri instant și rezervări.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                Scrie pe WhatsApp
              </motion.button>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h4 className="font-display font-semibold text-text-primary mb-4">
                Program de Funcționare
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Recepție:</span>
                  <span className="font-medium text-text-primary">24/7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Restaurant:</span>
                  <span className="font-medium text-text-primary">07:00 - 23:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Bar:</span>
                  <span className="font-medium text-text-primary">10:00 - 02:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Spa:</span>
                  <span className="font-medium text-text-primary">09:00 - 21:00</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 