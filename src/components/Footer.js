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
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/HotelMarami',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/HotelMarami',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'Booking',
      href: 'https://www.booking.com/hotel/ro/marami.ro.html',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize="22"
            fontWeight="bold"
          >
            B
          </text>
        </svg>
      )
    },
    {
      name: 'Google Maps',
      href: 'https://goo.gl/maps/YOUR_MAPS_LINK',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12 0C7.8 0 4 3.8 4 8.5c0 5.1 8 15.5 8 15.5s8-10.4 8-15.5C20 3.8 16.2 0 12 0zm0 11.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
        </svg>
      )
    }
  ];

  const contactInfo = [
    {
      icon: PhoneIcon,
      text: '+40 759 033 047',
      subtitle: 'Recepție 24/7'
    },
    {
      icon: EnvelopeIcon,
      text: 'info@hotelmarami.ro',
      subtitle: 'Răspuns în 24h'
    },
    {
      icon: MapPinIcon,
      text: 'Marami, Strada Furnica 52, Sinaia 106100',
      subtitle: 'România'
    },
    {
      icon: ClockIcon,
      text: 'Check-in: 15:00 | Check-out: 12:00',
      subtitle: 'Recepție 24/7'
    }
  ];

  return (
    <footer className="bg-text-primary text-white no-overflow">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center lg:text-left">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6 justify-center lg:justify-start">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-display font-bold text-xl">
                Hotel Marami
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-center lg:text-left">
              Eleganță regală la poalele Peleșului. Descoperă luxul și confortul 
              în inima munților, la doar 300m de Castelul Peleș.
            </p>

            {/* Contact Details */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start space-y-1 lg:space-y-0 lg:space-x-3">
                    <IconComponent className="w-5 h-5 text-primary-400 lg:mt-0.5 flex-shrink-0" />
                    <div className="text-center lg:text-left">
                      <p className="text-white font-medium">{info.text}</p>
                      <p className="text-gray-400 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-6 text-center lg:text-left">
              <p className="text-gray-300 text-sm mb-3">Urmărește-ne:</p>
              <div className="flex space-x-3 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
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

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
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