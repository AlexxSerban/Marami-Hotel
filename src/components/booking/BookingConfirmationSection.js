import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const BookingConfirmationSection = () => {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Telefon',
      value: '+40 244 315 000',
      description: 'Disponibil 24/7'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'rezervari@hotelmarami.ro',
      description: 'Răspuns în 2 ore'
    },
    {
      icon: MapPinIcon,
      title: 'Adresa',
      value: 'Strada Furnica 52, Sinaia',
      description: 'România, 106100'
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
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-display font-bold text-text-primary mb-6 text-center">
              Ai Întrebări?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-text-primary mb-1">
                      {contact.title}
                    </h4>
                    <p className="text-text-primary font-medium">
                      {contact.value}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {contact.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 bg-primary-50 rounded-xl p-6 text-center"
            >
              <h4 className="font-semibold text-text-primary mb-2">
                Asistență 24/7
              </h4>
              <p className="text-sm text-text-secondary">
                Echipa noastră este disponibilă oricând pentru a te ajuta cu rezervarea sau orice întrebări ai avea.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingConfirmationSection; 