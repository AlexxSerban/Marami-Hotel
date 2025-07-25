import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, PhoneIcon, CalendarIcon } from '@heroicons/react/24/outline';

const MenuCTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Rezervă o masă la Restaurant
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Experimentează autenticitatea bucătăriei românești și rafinamentul mediteranean 
            într-un cadru elegant și relaxant.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display font-semibold text-white mb-2">
                Rezervare Simplă
              </h3>
              <p className="text-white/80 text-sm">
                Rezervă online sau prin telefon în câteva minute
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display font-semibold text-white mb-2">
                Contact Direct
              </h3>
              <p className="text-white/80 text-sm">
                Sună-ne pentru rezervări și întrebări speciale
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRightIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display font-semibold text-white mb-2">
                Experiență Completă
              </h3>
              <p className="text-white/80 text-sm">
                Bucură-te de meniul nostru în atmosfera elegantă a restaurantului
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/rezervare"
                className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300 text-lg"
              >
                <span>Rezervă o masă</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="tel:+40759033047"
                className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 transition-all duration-300 px-8 py-4 rounded-xl font-medium text-lg"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Sună-ne</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6"
          >
            <h3 className="font-display font-semibold text-white mb-4">
              Program Restaurant
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
              <div className="flex justify-between">
                <span>Mic dejun:</span>
                <span className="font-medium">08:00 - 11:00</span>
              </div>
              <div className="flex justify-between">
                <span>Prânz:</span>
                <span className="font-medium">12:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Cină:</span>
                <span className="font-medium">18:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Bar:</span>
                <span className="font-medium">10:00 - 02:00</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuCTASection; 