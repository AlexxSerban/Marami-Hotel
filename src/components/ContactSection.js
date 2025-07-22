import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import BlurText from './BlurText';

const ContactSection = () => {
  const form = useRef();
  
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
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

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
    setSubmitStatus(null);
    
    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Înlocuiește cu Service ID-ul tău
        'YOUR_TEMPLATE_ID', // Înlocuiește cu Template ID-ul tău
        form.current,
        'YOUR_PUBLIC_KEY' // Înlocuiește cu Public Key-ul tău
      );
      
      console.log('SUCCESS!', result.text);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        newsletter: false
      });
      
    } catch (error) {
      console.log('FAILED...', error.text);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Telefon',
      value: '+40 759 033 047',
      subtitle: 'Recepție 24/7',
      link: 'tel:+40759033047'
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
      value: 'Marami, Strada Furnica 52, Sinaia 106100',
      subtitle: 'România',
      link: 'https://www.google.com/maps/place/Marami/@45.3574447,25.5398979,15z/data=!4m22!1m12!3m11!1s0x40b310d34e8642e5:0x1396870e25205b19!2sMarami!5m2!4m1!1i2!8m2!3d45.3574801!4d25.5398897!9m1!1b1!16s%2Fg%2F1hc2637yc!3m8!1s0x40b310d34e8642e5:0x1396870e25205b19!5m2!4m1!1i2!8m2!3d45.3574801!4d25.5398897!16s%2Fg%2F1hc2637yc?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      icon: ClockIcon,
      title: 'Program',
      value: 'Check-in: 15:00',
      subtitle: 'Check-out: 12:00',
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
            Contactează-ne pentru orice rezervare si obtine pana la 10% reducere.
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
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
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
                
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                  >
                    ✅ Mulțumim pentru mesaj! Vom răspunde în cel mai scurt timp.
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

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary">{info.title}</h4>
                        <p className="text-sm text-text-secondary">{info.value}</p>
                        <p className="text-xs text-text-light">{info.subtitle}</p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* WhatsApp Card */}
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
              <motion.a
                href="https://wa.me/40759033047"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                Scrie pe WhatsApp
              </motion.a>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h4 className="font-display font-semibold text-text-primary mb-4">
                Program de Funcționare
              </h4>
              <div className="space-y-2 text-sm text-text-secondary">
                <div className="flex justify-between">
                  <span>Check-in:</span>
                  <span className="font-medium">15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-out:</span>
                  <span className="font-medium">12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Recepție:</span>
                  <span className="font-medium">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Restaurant:</span>
                  <span className="font-medium">08:00 - 22:00</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-text-light mb-6">
            Ai întrebări specifice? Contactează-ne pentru sfaturi personalizate!
          </p>
          <div className="flex justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="btn-primary"
              >
                Contactează-ne
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection; 