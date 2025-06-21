import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Acasă', href: '/', isLink: true },
    { name: 'Cazare', href: '/cazare', isLink: true },
    { name: 'Restaurant', href: '/restaurant', isLink: true },
    { name: 'Dotări', href: '/dotari', isLink: true },
    { name: 'Activități', href: '/activitati', isLink: true },
    { name: 'Contact', href: '/contact', isLink: true },
    { name: 'Rezervare', href: '/rezervare', isLink: true },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'WhatsApp', href: '#', icon: '💬' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleNavClick = (item) => {
    if (item.isLink) {
      setIsOpen(false);
    } else {
      scrollToSection(item.href);
    }
  };

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="bg-primary-600 text-white py-2 hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4" />
                <span>+40 244 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-4 h-4" />
                <span>info@hotelmarami.ro</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>💬</span>
                <span>WhatsApp: +40 700 123 456</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:text-primary-200 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
          isScrolled 
            ? 'bg-white/80 shadow-lg border-b border-white/20' 
            : 'bg-black/20'
        } ${isScrolled ? 'top-0' : 'top-10'}`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 px-4 md:px-8">
            {/* Logo */}
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className={`font-display font-bold text-xl ${
                  isScrolled ? 'text-text-primary' : 'text-white'
                }`}>
                  Hotel Marami
                </span>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.isLink ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-colors duration-200 hover:text-primary-500 ${
                      isScrolled ? 'text-text-secondary' : 'text-white'
                    } ${location.pathname === item.href ? 'text-primary-500' : ''}`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`font-medium transition-colors duration-200 hover:text-primary-500 ${
                      isScrolled ? 'text-text-secondary' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              ))}
              <Link to="/rezervare" className="btn-primary">
                Rezervă Acum
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className={`w-6 h-6 ${
                  isScrolled ? 'text-text-primary' : 'text-white'
                }`} />
              ) : (
                <Bars3Icon className={`w-6 h-6 ${
                  isScrolled ? 'text-text-primary' : 'text-white'
                }`} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white/80 backdrop-blur-md border-t border-white/20"
              >
                <div className="px-4 py-6 space-y-4">
                  {/* Mobile Contact Info */}
                  <div className="space-y-2 pb-4 border-b border-gray-200">
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <PhoneIcon className="w-4 h-4" />
                      <span>+40 244 123 456</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <EnvelopeIcon className="w-4 h-4" />
                      <span>info@hotelmarami.ro</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <span>💬</span>
                      <span>WhatsApp: +40 700 123 456</span>
                    </div>
                  </div>
                  
                  {navItems.map((item) => (
                    item.isLink ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block w-full text-left font-medium py-2 transition-colors ${
                          location.pathname === item.href 
                            ? 'text-primary-500' 
                            : 'text-text-secondary hover:text-primary-500'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item)}
                        className="block w-full text-left text-text-secondary font-medium py-2 hover:text-primary-500 transition-colors"
                      >
                        {item.name}
                      </button>
                    )
                  ))}
                  <Link to="/rezervare" className="btn-primary w-full mt-4">
                    Rezervă Acum
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar; 