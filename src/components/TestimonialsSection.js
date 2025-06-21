import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import BlurText from './BlurText';

const TestimonialsSection = () => {
  const handleAnimationComplete = () => {
    console.log('Testimonials title animation completed!');
  };

  const testimonials = [
    {
      id: 1,
      name: 'Maria Popescu',
      location: 'București',
      rating: 5,
      text: 'Camera mare, curată și elegantă… personal amabil! Vederea spre Castelul Peleș este spectaculoasă. Recomand cu încredere!',
      date: '2024',
      platform: 'Booking.com'
    },
    {
      id: 2,
      name: 'Ioan Dumitrescu',
      location: 'Cluj-Napoca',
      rating: 5,
      text: 'Vedere superbă spre munte și Castelul Peleș. Camerele sunt spațioase și curate, iar personalul este foarte prietenos și de ajutor.',
      date: '2024',
      platform: 'TripAdvisor'
    },
    {
      id: 3,
      name: 'Elena Ionescu',
      location: 'Timișoara',
      rating: 5,
      text: 'Excelentă experiență! Hotelul este foarte bine poziționat, la doar 300m de Castelul Peleș. Camerele sunt moderne și confortabile.',
      date: '2024',
      platform: 'Google Reviews'
    }
  ];

  const overallRating = 9.2;
  const totalReviews = 847;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="section-padding bg-background-primary">
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
            text="Recenzii & Testimoniale"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-text-light max-w-2xl mx-auto mb-8">
            Descoperă ce spun oaspeții noștri despre experiența lor la Hotel Marami.
          </p>

          {/* Overall Rating */}
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {renderStars(Math.floor(overallRating))}
              <span className="text-lg font-bold text-text-primary ml-2">
                {overallRating}/10
              </span>
            </div>
            <p className="text-text-light text-sm mb-4">
              Notă medie din {totalReviews} recenzii
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <ChatBubbleLeftIcon className="w-4 h-4 text-primary-500" />
                <span className="text-text-secondary">Booking.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <ChatBubbleLeftIcon className="w-4 h-4 text-primary-500" />
                <span className="text-text-secondary">TripAdvisor</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
                <span className="text-sm text-text-secondary ml-2">
                  {testimonial.rating}/5
                </span>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-text-light mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-semibold text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-text-secondary">
                    {testimonial.date}
                  </p>
                  <p className="text-xs text-primary-500 font-medium">
                    {testimonial.platform}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-text-light mb-6">
            Vrei să îți împărtășești și tu experiența? Lasă-ne o recenzie!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Lasă o Recenzie
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Vezi Toate Recenziile
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 