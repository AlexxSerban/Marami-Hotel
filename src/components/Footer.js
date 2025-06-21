import React from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Hotel Marami',
      links: [
        { name: 'Despre Noi', href: '#about' },
        { name: 'Camere & Tarife', href: '#rooms' },
        { name: 'Facilități', href: '#amenities' },
        { name: 'Galerie', href: '#gallery' },
        { name: 'Recenzii', href: '#testimonials' }
      ]
    },
    {
      title: 'Servicii',
      links: [
        { name: 'Rezervări Online', href: '#booking' },
        { name: 'Transfer Aeroport', href: '#transfer' },
        { name: 'Restaurant', href: '#restaurant' },
        { name: 'Spa & Wellness', href: '#spa' },
        { name: 'Evenimente', href: '#events' }
      ]
    },
    {
      title: 'Atracții',
      links: [
        { name: 'Castelul Peleș', href: '#peles' },
        { name: 'Mânăstirea Sinaia', href: '#monastery' },
        { name: 'Telecabina Cota 1400', href: '#cablecar' },
        { name: 'Trasee Montane', href: '#hiking' },
        { name: 'Schi & Snowboard', href: '#skiing' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'WhatsApp', href: '#', icon: '💬' },
    { name: 'TripAdvisor', href: '#', icon: '⭐' }
  ];

  const contactInfo = [
    {
      icon: PhoneIcon,
      text: '+40 244 123 456',
      subtitle: 'Recepție 24/7'
    },
    {
      icon: EnvelopeIcon,
      text: 'info@hotelmarami.ro',
      subtitle: 'Răspuns în 24h'
    },
    {
      icon: MapPinIcon,
      text: 'Strada Peleșului, nr. 15',
      subtitle: 'Sinaia, Județul Prahova'
    },
    {
      icon: ClockIcon,
      text: 'Check-in: 14:00 | Check-out: 11:00',
      subtitle: 'Recepție 24/7'
    }
  ];

  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-display font-bold text-xl">
                Hotel Marami
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Eleganță regală la poalele Peleșului. Descoperă luxul și confortul 
              în inima munților, la doar 300m de Castelul Peleș.
            </p>

            {/* Contact Details */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <IconComponent className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">{info.text}</p>
                      <p className="text-gray-400 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-gray-300 text-sm mb-3">Urmărește-ne:</p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-display font-semibold text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-700 py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display font-semibold text-xl mb-2">
                Newsletter
              </h3>
              <p className="text-gray-300">
                Înscrie-te pentru oferte speciale și noutăți despre Hotel Marami.
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
              >
                Înscrie-te
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Hotel Marami. Toate drepturile rezervate.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Politica de Confidențialitate
              </a>
              <a href="#terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                Termeni și Condiții
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-primary-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 