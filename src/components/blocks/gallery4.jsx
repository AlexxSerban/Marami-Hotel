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
    <div className="group rounded-xl">
      <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
        <img
          src={image}
          alt={title}
          className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-8 transition-all duration-300 group-hover:opacity-0">
          <div className="backdrop-blur-md bg-white/20 rounded-xl p-4 border border-white/30 shadow-lg">
            <div className="mb-2 text-xl font-semibold text-white">
              {title}
            </div>
            <div className="text-white/90 text-sm leading-relaxed line-clamp-4">
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
    <section className="py-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <BlurText
            text={title}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4"
            delay={150}
            animateBy="words"
            direction="top"
          />
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Gallery4Item key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
