import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const BookingConfirmationSection = () => {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Telefon',
      value: '+40 759 033 047',
      description: 'Disponibil 24/7',
      href: 'tel:+40759033047'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'hotel@marami.ro',
      description: 'Răspuns în 2 ore',
      href: 'mailto:hotel@marami.ro'
    },
    {
      icon: MapPinIcon,
      title: 'Adresa',
      value: 'Marami, Strada Furnica 52, Sinaia 106100',
      description: 'România',
      href: 'https://www.google.com/maps/search/?api=1&query=Marami%2C+Strada+Furnica+52%2C+Sinaia+106100'
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
                  <motion.a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-text-primary mb-1">
                      {contact.title}
                    </h4>
                    <p className="text-text-primary font-medium group-hover:text-primary-600 transition-colors">
                      {contact.value}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {contact.description}
                    </p>
                  </motion.a>
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