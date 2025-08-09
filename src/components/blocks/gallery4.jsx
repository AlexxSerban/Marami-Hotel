"use client";

import React from "react";
import { motion } from "framer-motion";
import BlurText from "../BlurText";

// Import imaginile pentru atracții
import castelulPeles from '../../assets/attractions/castelul-peles.jpg';
import manastireaSinaia from '../../assets/attractions/manastirea-Sinaia.jpg';
import cota1400 from '../../assets/attractions/Cota-1400-min.png';
import telegondolaSinaia from '../../assets/attractions/telegondola-sinaia.jpg';

export function Gallery4Item({ id, title, description, image }) {
  return (
    <div className="group rounded-xl w-full h-full">
      <div className="group relative w-full h-full min-h-[16rem] sm:min-h-[20rem] md:min-h-[24rem] lg:min-h-[27rem] overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-3 sm:p-4 md:p-6 lg:p-8 transition-all duration-300 group-hover:opacity-0">
          <div className="backdrop-blur-md bg-white/20 rounded-xl p-2 sm:p-3 md:p-4 border border-white/30 shadow-lg w-full">
            <div className="mb-1 sm:mb-2 text-base sm:text-lg md:text-xl font-semibold text-white leading-tight">
              {title}
            </div>
            <div className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2 sm:line-clamp-3 md:line-clamp-4">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Gallery4 = ({
  title = "Împrejurimi & Atracții",
  description = "Descoperă locurile minunate din apropierea hotelului nostru, perfecte pentru excursii de o zi și aventuri memorabile.",
  items = [
    {
      id: "castelul-peles",
      title: "Castelul Peleș",
      description: "Unul dintre cele mai frumoase castele din România, Castelul Peleș te va transporta într-o lume de basm cu arhitectura sa neo-renascentistă și grădinile luxuriante.",
      image: castelulPeles,
    },
    {
      id: "manastirea-sinaia",
      title: "Mănăstirea Sinaia",
      description: "Construită în stil brâncovenesc, mănăstirea te va impresiona cu arhitectura sa tradițională și atmosfera de liniște spirituală.",
      image: manastireaSinaia,
    },
    {
      id: "telegondola-sinaia",
      title: "Telegondola Sinaia",
      description: "Experimentează o călătorie panoramică cu telegondola, admirând peisajele spectaculoase ale munților Bucegi și ale orașului Sinaia.",
      image: telegondolaSinaia,
    },
    {
      id: "cota-1400",
      title: "Cota 1400",
      description: "Destinația perfectă pentru iubitorii de sporturi de iarnă și de munte, cu pârtii moderne și facilități excelente pentru toate nivelurile.",
      image: cota1400,
    },
  ],
}) => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <BlurText
            text={title}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
          />
          <p className="text-base sm:text-lg text-text-light max-w-2xl sm:max-w-3xl mx-auto px-2">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full">
          {items.map((item) => (
            <Gallery4Item key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
