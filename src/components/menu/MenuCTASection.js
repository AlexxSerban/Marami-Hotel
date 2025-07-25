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
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-4 md:mb-6">
            Rezervă o masă la Restaurant
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
            Experimentează autenticitatea bucătăriei românești și rafinamentul mediteranean 
            într-un cadru elegant și relaxant.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <CalendarIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-display font-semibold text-white mb-2 text-sm md:text-base">
                Rezervare Simplă
              </h3>
              <p className="text-white/80 text-xs md:text-sm">
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
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <PhoneIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-display font-semibold text-white mb-2 text-sm md:text-base">
                Contact Direct
              </h3>
              <p className="text-white/80 text-xs md:text-sm">
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
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <ArrowRightIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-display font-semibold text-white mb-2 text-sm md:text-base">
                Experiență Completă
              </h3>
              <p className="text-white/80 text-xs md:text-sm">
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
                className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300 text-base md:text-lg"
              >
                <span>Rezervă o masă</span>
                <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="tel:+40759033047"
                className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 transition-all duration-300 px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-medium text-base md:text-lg"
              >
                <PhoneIcon className="w-4 h-4 md:w-5 md:h-5" />
                <span>Sună-ne</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 md:mt-12 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6"
          >
            <h3 className="font-display font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">
              Program Restaurant
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-white/90 text-sm md:text-base">
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