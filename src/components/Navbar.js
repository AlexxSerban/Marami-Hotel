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
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/HotelMaramiSinaia',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/hotelmaramisinaia/',
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
      href: 'https://www.google.com/maps/place/Marami/@45.3574447,25.5398979,15z/data=!4m22!1m12!3m11!1s0x40b310d34e8642e5:0x1396870e25205b19!2sMarami!5m2!4m1!1i2!8m2!3d45.3574801!4d25.5398897!9m1!1b1!16s%2Fg%2F1hc2637yc!3m8!1s0x40b310d34e8642e5:0x1396870e25205b19!5m2!4m1!1i2!8m2!3d45.3574801!4d25.5398897!16s%2Fg%2F1hc2637yc?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12 0C7.8 0 4 3.8 4 8.5c0 5.1 8 15.5 8 15.5s8-10.4 8-15.5C20 3.8 16.2 0 12 0zm0 11.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
        </svg>
      )
    }
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
      <div className="bg-primary-600 text-white py-2 hidden lg:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4" />
                <span>+40 759 033 047</span>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-4 h-4" />
                <span>hotel@marami.ro</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>💬</span>
                <span>WhatsApp: +40 759 033 047</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-200 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
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
        className={`fixed left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
          isScrolled 
            ? 'bg-white/80 shadow-lg border-b border-white/20 top-0' 
            : 'bg-black/20'
        } ${isScrolled ? 'top-0' : 'lg:top-10 top-0'}`}
      >
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-16 max-w-full overflow-hidden">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 items-center h-16">
            {/* Logo - Left */}
            <div className="flex justify-start">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <span className={`font-display font-bold text-xl ${
                  isScrolled ? 'text-text-primary' : 'text-white'
                }`}>
                  Hotel Marami
                </span>
              </motion.div>
            </Link>
            </div>

            {/* Desktop Menu - Center */}
            <div className="flex items-center justify-center space-x-8">
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
            </div>

            {/* Button - Right */}
            <div className="flex justify-end items-center">
              <Link to="/rezervare" className="btn-primary">
                Rezervă Acum
              </Link>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center justify-between h-16">
            {/* Logo - Left */}
            <div className="flex justify-start">
              <Link to="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <span className={`font-display font-bold text-xl ${
                    isScrolled ? 'text-text-primary' : 'text-white'
                  }`}>
                    Hotel Marami
                  </span>
                </motion.div>
              </Link>
            </div>

            {/* Mobile Menu Button - Right */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg"
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
                className="lg:hidden bg-white/80 backdrop-blur-md border-t border-white/20"
              >
                <div className="px-4 py-6 space-y-4">
                  {/* Mobile Contact Info */}
                  <div className="space-y-2 pb-4 border-b border-gray-200">
                    <a 
                      href="tel:+40759033047" 
                      className="flex items-center justify-center space-x-2 text-sm text-text-secondary hover:text-primary-500 transition-colors"
                    >
                      <PhoneIcon className="w-4 h-4" />
                      <span>+40 759 033 047</span>
                    </a>
                    <a 
                      href="mailto:hotel@marami.ro" 
                      className="flex items-center justify-center space-x-2 text-sm text-text-secondary hover:text-primary-500 transition-colors"
                    >
                      <EnvelopeIcon className="w-4 h-4" />
                      <span>hotel@marami.ro</span>
                    </a>
                    <a 
                      href="https://wa.me/40759033047" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 text-sm text-text-secondary hover:text-primary-500 transition-colors"
                    >
                      <span>💬</span>
                      <span>WhatsApp: +40 759 033 047</span>
                    </a>
                  </div>
                  
                  {navItems.map((item) => (
                    item.isLink ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block w-full text-center font-medium py-2 transition-colors ${
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
                        className="block w-full text-center text-text-secondary font-medium py-2 hover:text-primary-500 transition-colors"
                      >
                        {item.name}
                      </button>
                    )
                  ))}
                  <div className="flex justify-center pt-4">
                    <Link 
                      to="/rezervare" 
                      className="btn-primary"
                      onClick={() => {
                        console.log('Rezervă Acum clicked from mobile menu');
                        setIsOpen(false);
                        if (location.pathname === '/rezervare') {
                          window.scrollTo(0, 0);
                        }
                      }}
                    >
                      Rezervă Acum
                    </Link>
                  </div>
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