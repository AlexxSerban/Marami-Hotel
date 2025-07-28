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
      name: 'Alexandra D.',
      location: 'Local Guide',
      rating: 4,
      text: 'Am stat acum foarte multi ani aici, insa am fost recent la masa, pe terasa restaurantului. Preturile sunt decente (este mult mai accesibil decat restaurantele din centrul orasului). E foarte frumos hotelul, bine pozitionat, cu priveliste, curat. Felicitari!',
      date: 'acum o săptămână',
      platform: 'Google'
    },
    {
      id: 2,
      name: 'Alexandra Salajan',
      location: 'București',
      rating: 5,
      text: 'Am mancat la restaurantul hotelului. Mancarea foarte buna, proaspata, gustoasa. Servirea promptă, personalul extrem de amabil, ne a ajutat chiar si cu cateva indicatii turistice. Preturile normale, decente, deloc piperate. Recomandam cu incredere!',
      date: 'acum o lună',
      platform: 'Google'
    },
    {
      id: 3,
      name: 'Mihaela Udrea',
      location: 'Cluj-Napoca',
      rating: 5,
      text: 'Este un hotel cu camere mici, dar plăcute și îngrijite. Hotelul se afla in apropiere de castelul Peleș. Domnul de la recepție a fost foarte amabil si ne-a oferit răspunsuri la toate întrebările.',
      date: 'acum 3 luni',
      platform: 'Google'
    },
    {
      id: 4,
      name: 'Diana',
      location: 'România',
      rating: 5,
      text: 'Totul a fost extraordinar! Recomand cu toata increderea! Personal foarte amabil, curatenie, mancare foarte buna, preturi accesibile, foarte aproape de castelul Peles. Va fi mereu alegerea noastra in Sinaia!',
      date: '2024',
      platform: 'Booking.com'
    },
    {
      id: 5,
      name: 'Sulina73',
      location: 'Germania',
      rating: 5,
      text: 'Hotelul este f frumos ,calduros,linistit, curat,tv cu netflix, pat comfortabil cu perne multe ptr toate gusturile,lenjerie impecabila,caldura in camera si baie, locatia chiar linga Peleș ',
      date: '2024',
      platform: 'Booking.com'
    },
    {
      id: 6,
      name: 'Vasile',
      location: 'România',
      rating: 5,
      text: 'Locația super, curățenie,mic dejun, personal primitor,totul la superlativ. Mulțumim,vom reveni.',
      date: '2024',
      platform: 'Booking.com'
    }
  ];

  const overallRating = 4.3;
  const totalReviews = 775;

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
                {overallRating}/5
              </span>
            </div>
            <p className="text-text-light text-sm mb-4">
              Notă medie din {totalReviews} recenzii
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <ChatBubbleLeftIcon className="w-4 h-4 text-primary-500" />
                <span className="text-text-secondary">Google</span>
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
            <motion.a
              href="https://www.google.com/maps/place/Marami/@45.3574447,25.5398979,15z/data=!4m11!3m10!1s0x40b310d34e8642e5:0x1396870e25205b19!5m2!4m1!1i2!8m2!3d45.3574801!4d25.5398897!9m1!1b1!16s%2Fg%2F1hc2637yc?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Recenzii Google Maps
            </motion.a>
            <motion.a
              href="https://www.booking.com/hotel/ro/marami.ro.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Recenzii Booking
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 