import React from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const ContactInfoSection = () => {
  const handleAnimationComplete = () => {
    console.log('ContactInfo title animation completed!');
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Telefon',
      value: '+40 759 033 047',
      description: 'Recepție 24/7',
      href: 'tel:+40759033047'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'hotel@marami.ro',
      description: 'Răspuns în 24h',
      href: 'mailto:hotel@marami.ro'
    },
    {
      icon: MapPinIcon,
      title: 'Adresă',
      value: 'Marami, Strada Furnica 52, Sinaia 106100',
      description: 'România',
      href: 'https://maps.google.com/?q=Marami,+Strada+Furnica+52,+Sinaia,+Romania'
    },
    {
      icon: ClockIcon,
      title: 'Program',
      value: 'Check-in: 15:00 | Check-out: 12:00',
      description: 'Recepție 24/7',
      href: null
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
            text="Informații de Contact"
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Suntem aici să te ajutăm cu orice întrebări ai avea. 
            Contactează-ne prin orice metodă preferi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const Content = info.href ? (
              <motion.a
                href={info.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block h-full"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg card-hover text-center h-full flex flex-col justify-between min-h-[200px]">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2 text-lg">{info.title}</h3>
                    <p className="text-primary-500 font-medium mb-1 text-sm leading-relaxed">{info.value}</p>
                    <p className="text-text-secondary text-sm">{info.description}</p>
                  </div>
                </div>
              </motion.a>
            ) : (
              <div className="bg-white rounded-xl p-6 shadow-lg card-hover text-center h-full flex flex-col justify-between min-h-[200px]">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2 text-lg">{info.title}</h3>
                  <p className="text-primary-500 font-medium mb-1 text-sm leading-relaxed">{info.value}</p>
                  <p className="text-text-secondary text-sm">{info.description}</p>
                </div>
              </div>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                {Content}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-background-secondary rounded-2xl p-8">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              Răspuns Rapid
            </h3>
            <p className="text-text-light max-w-2xl mx-auto">
              Echipa noastră răspunde în maxim 24 de ore la toate solicitările. 
              Pentru urgențe, sună-ne direct la numărul de telefon.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfoSection; 