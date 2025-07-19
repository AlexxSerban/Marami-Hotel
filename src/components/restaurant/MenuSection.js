import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import BlurText from '../BlurText';

const menuData = [
  {
    id: 'mic-dejun',
    label: 'Mic Dejun',
    icon: '🍳',
    description: 'Începeți ziua cu un mic dejun complet și sănătos',
    items: [
      {
        name: 'Oua fierte - Boiled eggs',
        ingredients: 'Oua proaspete',
        nutrition: 'Valoare energetica: 133 KCal/556.47 Kj, Grasimi: 9.3 g, Acizi grasi saturati: 3.1 g, Glucide: 0.4 g, Zaharuri: 0.4 g, Proteine: 12 g, Sare: 0.4 g',
        allergens: 'Oua'
      },
      {
        name: 'Oua ochiuri - Fried eggs',
        ingredients: 'Oua proaspete, Ulei, Sare',
        nutrition: 'Valoare energetica: 228.97 KCal/957.99 Kj, Grasimi: 20.92 g, Acizi grasi saturati:3.84g, Glucide: 0.34g, Zaharuri: 0.34 g, Proteine: 10.34 g, Sare: 1.21 g',
        allergens: 'Oua'
      },
      {
        name: 'Omleta simpla - Simple omelette',
        ingredients: 'Oua proaspete, Ulei, Sare',
        nutrition: 'Valoare energetica: 199.46 KCal 834.54 Kj, Grasimi: 17.37 g, Acizi grasi saturati:3.6g, Glucide: 0.36g, Zaharuri: 0.36 g, Proteine: 10.81 g, Sare: 1.26 g',
        allergens: 'Oua'
      },
      {
        name: 'Omleta taraneasca - Peasant omelette',
        ingredients: 'Oua proaspete, Rosii, Ceapa, Ardei gras galben, Ulei, Sare',
        nutrition: 'Valoare energetica: 160.8 KCal/672.77 Kj, Grasimi: 13.85 g, Acizi grasi saturati: 2.53g, Glucide: 2.52g, Zaharuri: 0.56 g, Proteine: 7.14 g, Sare: 0.8 g',
        allergens: 'Oua'
      },
      {
        name: 'Crenvursti - Chicken Frankfurters',
        ingredients: 'Crenvursti pui',
        nutrition: 'Valoare energetica: 271.6 KCal/1124.3 Kj, Grasimi: 24 g, Acizi grasi saturati: 9 g, Glucide: 2.5 g, Zaharuri: 0.9 g, Proteine: 11.4 g, Sare: 2.2 g',
        allergens: '-'
      },
      {
        name: 'Branza telemea - White cheese',
        ingredients: 'Branza telemea de vaca',
        nutrition: 'Valoare energetica: 239 KCal /999.98 Kj, Grasimi: 18.5 g, Acizi grasi saturati: 11.5 g, Glucide: 0.5 g, Zaharuri: 0.6 g, Proteine: 17.3 g, Sare: 4 g',
        allergens: 'Lapte'
      },
      {
        name: 'Branza burduf - Romanian cheese',
        ingredients: 'Branza de burduf',
        nutrition: 'Valoare energetica: 291 KCal/1207 Kj, Grasimi: 22.5 g, Acizi grasi saturati: 13 g, Glucide: 2 g, Zaharuri: 2g, Proteine: 20 g, Sare: 2 g',
        allergens: 'Lapte'
      },
      {
        name: 'Branza topita - Cream cheese',
        ingredients: 'Branza topita triunghiuri',
        nutrition: 'Valoare energetica: 220 KCal/915 Kj, Grasimi: 17 g, Acizi grasi saturati: 11 g, Glucide:4.8 g, Zaharuri: 4.8 g, Proteine: 12 g, Sare: 2.4 g',
        allergens: 'Lapte'
      },
      {
        name: 'Cascaval - Cheese',
        ingredients: 'Cascaval',
        nutrition: 'Valoare energetica: 283 KCal/1184.07 Kj, Grasimi: 19 g, Acizi grasi saturati: 0 g, Glucide: 1 g, Zaharuri 0 g, Proteine: 25 g, Sare: 0 g',
        allergens: 'Lapte'
      },
      {
        name: 'Sunca presata - Ham',
        ingredients: 'Sunca presata porc',
        nutrition: 'Valoare energetica: 108 KCal/454 Kj, Grasimi: 4.8 g, Acizi grasi saturati: 2 g, Glucide:4g, Zaharuri: 0.5 g, Proteine: 12.2 g, Sare: 1.8 g',
        allergens: '-'
      },
      {
        name: 'Bacon - Bacon',
        ingredients: 'Bacon',
        nutrition: 'Valoare energetica: 228.97 KCal/957.99 Kj, Grasimi: 20.92 g, Acizi grasi saturati:3.84g, Glucide: 0.34g, Zaharuri: 0.34 g, Proteine: 10.34 g, Sare: 1.21 g',
        allergens: 'Oua'
      },
      {
        name: 'Salam secuiesc - Romanian salami',
        ingredients: 'Salam secuiesc',
        nutrition: 'Valoare energetica: 412 KCal/1707 Kj, Grasimi: 35.2g, Acizi grasi saturati:13.3g, Glucide: 2.1g, Zaharuri: 0.7g, Proteine: 21.7g, Sare: 3.2g',
        allergens: '-'
      },
      {
        name: 'Masline - Olives',
        ingredients: 'Masline negre',
        nutrition: 'Valoare energetica: 115 KCal/481.16 Kj, Grasimi: 10.7g, Acizi grasi saturati: 0g, Glucide: 6.3g, Zaharuri: 0g, Proteine: 0.8g, Sare: 0g',
        allergens: 'Oua'
      },
      {
        name: 'Cereale - Cereal/Corn flakes',
        ingredients: 'Corn flakes',
        nutrition: 'Valoare energetica: 393.34 KCal/1645.73 Kj, Grasimi: 7.05 g, Acizi grasi saturati:1.84g, Glucide:72.62 g, Zaharuri: 2.68 g, Proteine: 8.82 g, Sare: 0.01 g',
        allergens: '-'
      },
      {
        name: 'Croisant* - Croissant*',
        ingredients: 'Morarita Minicroissant*',
        nutrition: 'Valoare energetica: 357 KCal/1493.69 Kj, Grasimi: 20.4 g, Acizi grasi saturati: 9.4 g, Glucide: 35.76 g, Zaharuri: 0 g, Proteine: 7.5 g, Sare: 0.94 g',
        allergens: '-'
      },
      {
        name: 'Unt - Butter',
        ingredients: 'Unt 82% Meggle',
        nutrition: 'Valoare energetica: 748 KCal/3129.65 Kj, Grasimi: 82.5 g, Acizi grasi saturati: 0 g, Glucide: 0.6 g, Zaharuri: 0 g, Proteine: 0.7 g, Sare: 0 g',
        allergens: 'Lapte'
      },
      {
        name: 'Gem - Jam',
        ingredients: 'Dulceata de fructe asortata',
        nutrition: 'Valoare energetica: 252 KCal/1054.37 Kj, Grasimi: 0 g, Acizi grasi saturati: 0 g, Glucide: 60 g, Zaharuri: 0 g, Proteine: 1 g, Sare: 0 g',
        allergens: '-'
      },
      {
        name: 'Miere - Honey',
        ingredients: 'Miere poliflora',
        nutrition: 'Valoare energetica: 340 KCal/1422.55 Kj, Grasimi: 0 g, Acizi grasi saturati: 0 g, Glucide: 80 g, Zaharuri: 0 g, Proteine: 0.35 g, Sare: 0 g',
        allergens: '-'
      },
      {
        name: 'Legume - Vegetables',
        ingredients: 'Rosii, ardei graas, castravete',
        nutrition: 'Valoare energetica: 19 KCal /79.49 Kj, Grasimi: 0.2 g, Acizi grasi saturati: 0 g, Glucide:4.1 g, Zaharuri: 0.63 g, Proteine: 0.83 g, Sare: 0 g',
        allergens: '-'
      },
      {
        name: 'Lapte dulce - Milk',
        ingredients: 'Lapte 3.5%',
        nutrition: 'Valoare energetica: 65 KCal /271.96 Kj, Grasimi: 3.6 g, Acizi grasi saturati: 2.5 g, Glucide: 4.8 g, Zaharuri: 0 g, Proteine: 3.4 g, Sare: 0.01 g',
        allergens: 'Lapte'
      },
      {
        name: 'Iaurt natural - Yogurt',
        ingredients: 'Iaurt natural 3,5% grăsime, Lapte integral pasteurizat, fermenți de iaurt',
        nutrition: 'Valoare energetica: 60 KCal /251.04 Kj, Grasimi: 3.5 g, Acizi grasi saturati: 0 g, Glucide:3.9 g, Zaharuri: 3.9 g, Proteine: 3.1 g, Sare: 0.1 g',
        allergens: 'Lapte'
      },
      {
        name: 'Iaurt cu fructe - Fruit yogurt',
        ingredients: 'Iaurt cu fructe',
        nutrition: 'Valoare energetica: 81 KCal /338.9 Kj, Grasimi: 2 g, Acizi grasi saturati: 1.3 g, Glucide:12.1 g, Zaharuri: 0 g, Proteine: 3.6 g, Sare: 0.1 g',
        allergens: 'Lapte, Arahide, Oua'
      },
    ],
  },
  {
    id: 'sandwich-uri',
    label: 'Sandwich-uri',
    icon: '🥪',
    description: 'Sandwich-uri proaspete și gustoase',
    items: [
      {
        name: 'Sandwich cu salam Sibiu - Salami sandwich',
        ingredients: 'Bagheta, salam Sibiu, castravete, crema de branza, salata verde',
        nutrition: 'Valoare energetica: 250 KCal /1046.03 Kj, Grasimi: 12.4 g, Acizi grasi saturati: 5.2 g, Glucide: 22.8 g, Zaharuri: 0.3 g, Proteine: 11.2 g, Sare: 0.9 g',
        allergens: '-'
      },
      {
        name: 'Sandwich cu muschi file si cascaval - Ham and cheese sandwich',
        ingredients: 'Bagheta muschi file, rosii, cascaval, crema de branza, salata verde',
        nutrition: 'Valoare energetica: 200 KCal /836.82 Kj, Grasimi: 7.1 g, Acizi grasi saturati: 3 g, Glucide: 22.3 g, Zaharuri: 0.3 g, Proteine: 11.5 g, Sare: 0.7 g',
        allergens: '-'
      },
      {
        name: 'Sandwich cu snitel din piept de pui - Breaded chicken sandwich',
        ingredients: 'Bagheta, snitel din piept de pui, castraveti murati, sos Remulade, crema de branza, salata verde',
        nutrition: 'Valoare energetica: 231 KCal /966.53 Kj, Grasimi: 10.5 g, Acizi grasi saturati: 0.5 g, Glucide:25.5 g, Zaharuri: 0.5 g, Proteine: 8.2g, Sare: 0.3 g',
        allergens: '-'
      },
    ],
  },
  {
    id: 'supe',
    label: 'Supe & Ciorbe',
    icon: '🍲',
    description: 'Supele tradiționale românești, preparate cu ingrediente proaspete',
    items: [
      {
        name: 'Supa de pasare cu taitei de casa* - Chicken soup with homemade noodles*',
        ingredients: 'Carne pui*, Faina, Patrunjel verde, Ceapa, Telina, Morcov, Ou, Sare',
        nutrition: 'Valoare energetica: 173 KCal /723.81 Kj, Grasimi: 6.77 g, Acizi grasi saturati: 0.2 g, Glucide: 12.88 g, Zaharuri:0.81 g, Proteine: 14.4 g, Sare: 0.47 g',
        allergens: 'Gluten, Telina, Oua'
      },
      {
        name: 'Ciorba taraneasca de vacuta* - Beef and vegetables soup*',
        ingredients: 'Antricot de vita*, Cartofi albi, Rosii, Varza, Dovlecei, Ceapa, Ardei gras, Telina, Ulei, Bulion, Bors, Morcov, Sare',
        nutrition: 'Valoare energetica: 114.33 KCal/478.36 Kj, Grasimi: 7.8 g, Acizi grasi saturati: 1.99 g, Glucide: 6.09 g, Zaharuri:1.34 g, Proteine: 4.95 g, Sare: 0.52 g',
        allergens: 'Telina'
      },
      {
        name: 'Ciorba de perisoare* - Meatballs soup*',
        ingredients: 'Rosii, Carne tocata amestec*, Ceapa, Oua, Morcov, Ardei gras, Telina, Ulei, Bulion, Sare, Bors, Piper negru',
        nutrition: 'Valoare energetica: 129.43 KCal /541.53 Kj, Grasimi: 9.85 g, Acizi grasi saturati: 2.83 g, Glucide: 5.06g, Zaharuri:1.2 g, Proteine: 4.95 g, Sare: 0.52 g',
        allergens: 'Oua, Telina'
      },
      {
        name: 'Ciorba de burta* - Tripe soup*',
        ingredients: 'Burta de vita, Smantana, Oua proaspete, Morcov, Gogosari murati in otet, Ceapa, Telina, Ulei, Usturoi, Otet, Sare',
        nutrition: 'Valoare energetica: 129.43 KCal /541.53 Kj, Grasimi: 9.85 g, Acizi grasi saturati: 2.83 g, Glucide: 5.06g, Zaharuri:1.2 g, Proteine: 4.95 g, Sare: 0.52 g',
        allergens: 'Oua, Telina'
      },
      {
        name: 'Ciorba de fasole cu ciolan - Beans soup with smoked bacon',
        ingredients: 'Ciolan afumat dezosat, Rosii, Fasole boabe, Patrunjel verde, Morcov, Ceapa, Ardei gras, Telina, Pasta de Tomate, Ulei, Sare',
        nutrition: 'Valoare energetica: 109.14 KCal /456.63 Kj, Grasimi: 6.06 g, Acizi grasi saturati: 1.46 g, Glucide: 8.15g, Zaharuri:1.22 g, Proteine: 5.86 g, Sare: 0.69 g',
        allergens: 'Telina'
      },
      {
        name: 'Ciorba de legume - Vegetables soup',
        ingredients: 'Rosii, Cartofi albi, Telina, Varza alba, Pasta de Tomate, Morcov, Fasole verde, Dovlecei, Ceapa, Ardei gras, Ulei, Bors, Sare',
        nutrition: 'Valoare energetica: 81.88 KCal /342.59 Kj, Grasimi: 5.1 g, Acizi grasi saturati: 0.56 g, Glucide: 7.53 g, Zaharuri:1.66 g, Proteine: 1.35 g, Sare: 0.35 g',
        allergens: 'Telina'
      },
      {
        name: 'Supa crema de ciuperci - Mushroom soup',
        ingredients: 'Ciuperci, crema de branza, lapte, smantana pentru gatit, crutoane',
        nutrition: 'Valoare energetica: 129 KCal /539.75 Kj, Grasimi: 4.6 g, Acizi grasi saturati: 2.6 g, Glucide: 17.5 g, Zaharuri:2.3 g, Proteine: 4.5 g, Sare: 5.3 g',
        allergens: 'Lapte'
      },
    ],
  },
  {
    id: 'specialitati',
    label: 'Specialități',
    icon: '🍖',
    description: 'Felurile noastre speciale, preparate cu grijă și ingrediente proaspete',
    items: [
      {
        name: 'Ciolan afumat cu iahnie de fasole* - Smoked pork ham with beans*',
        ingredients: 'Ciolan afumat cu os, ardei gras, ceapa, fasole boabe',
        nutrition: 'Valoare energetica: 165 KCal /690.38 Kj, Grasimi: 9.8 g, Acizi grasi saturati: 0.3 g, Glucide: 2.6 g, Zaharuri: 0.1 g, Proteine: 16.2 g, Sare: 1.5g',
        allergens: '-'
      },
      {
        name: 'Coaste de porc cu cartofi Wedges* - Pork ribs with Wedges*',
        ingredients: 'Coaste de porc, cartofi Wedges',
        nutrition: 'Valoare energetica: 214 KCal /899.16 Kj, Grasimi: 15.1 g, Acizi grasi saturati: 5.4 g, Glucide:7.7 g, Zaharuri: 0.1g, Proteine: 11.9 g, Sare: 2.4 g',
        allergens: '-'
      },
      {
        name: 'Pulpa de curcan cu piure din cartofi* - Turkey thighs with mashed potatoes*',
        ingredients: 'Pulpa de curcan, cartofi, lapte, unt',
        nutrition: 'Valoare energetica: 133 KCal /556.49 Kj, Grasimi: 4.8 g, Acizi grasi saturati: 1.6g, Glucide: 7.4 g, Zaharuri: 0.02 g, Proteine: 14.3 g, Sare: 2.3 g',
        allergens: 'Lapte'
      },
      {
        name: 'Pastrav la gratar cu lamaie* - Grilled trout*',
        ingredients: 'Pastrav*, Lamaie, Ulei, Sare',
        nutrition: 'Valoare energetica: 135.07 KCal /565.14 Kj, Grasimi: 7.21 g, Acizi grasi saturati: 1.27 g, Glucide:2.16g, Zaharuri: 0.67 g, Proteine: 15.26 g, Sare: 1.48 g',
        allergens: 'Peste'
      },
      {
        name: 'Somon la gratar cu rosii concasse* - Grilled salmon with concasse tomato*',
        ingredients: 'Somon file*, Rosii, Lamaie, Ulei, Sare',
        nutrition: 'Valoare energetica: 89.80 KCal /375.71 Kj, Grasimi: 5.30 g, Acizi grasi saturati: 0.42 g, Glucide:3.31g, Zaharuri: 1.02 g, Proteine: 8.21 g, Sare: 0.58 g',
        allergens: 'Peste'
      },
      {
        name: 'File de salau parizian cu lamaie* - Meuniere pike-perch fillet*',
        ingredients: 'Salau file*, Oua, Faina, Lamaie, Ulei, Sare',
        nutrition: 'Valoare energetica: 249.46 KCal/1043.75 Kj, Grasimi: 19.95 g, Acizi grasi saturati: 2.24 g, Glucide:7.37g, Zaharuri: 0.72 g, Proteine: 10.76 g, Sare: 1.16 g',
        allergens: 'Peste, Oua, Gluten'
      },
      {
        name: 'Calamari pane* - Breaded calamari*',
        ingredients: 'Calamari inele pane*, Salata verde, Lamaie, Ulei',
        nutrition: 'Valoare energetica: 298.10 KCal/1247.25 Kj, Grasimi: 24.00 g, Acizi grasi saturati: 1.80 g, Glucide:17.03g, Zaharuri: 0.69 g, Proteine: 4.74 g, Sare: 0.00 g',
        allergens: 'Peste, Moluste'
      },
    ],
  },
  {
    id: 'gustari',
    label: 'Gustări',
    icon: '🥗',
    description: 'Gustări reci și calde pentru orice moment al zilei',
    items: [
      {
        name: 'Salata Capricciosa - Capricciosa Salad',
        ingredients: 'Ton conserva, Rosii, Salata verde, Ou fiert, Morcov crud, Masline negre, Lamaie, Ceapa Castraveti, Ardei gras, Porumb boabe, Ulei masline, Otet, Sare',
        nutrition: 'Valoare energetica: 72.04 KCal /301.43 Kj, Grasimi: 2.33 g, Acizi grasi saturati: 0.35 g, Glucide: 6.12 g, Zaharuri: 0.85 g, Proteine: 7.16 g, Sare: 0.58 g',
        allergens: 'Peste, Oua'
      },
      {
        name: 'Salata Caesar* - Caesar Salad*',
        ingredients: 'Carne de pui*, Sos Caesar, Salata verde, Ou fiert, Compot de ananas, Crutoane pâine, Lamaie, Cascaval, Ulei de masline, Sare de masa',
        nutrition: 'Valoare energetica: 206.68 KCal/864.75 Kj, Grasimi: 14.66 g, Acizi grasi saturati:1.56g, Glucide: 8.88g, Zaharuri: 0.45 g, Proteine: 11.13 g, Sare: 1.08 g',
        allergens: 'Oua, Gluten, Lapte'
      },
      {
        name: 'Mamaliga cu branza si smantana - Polenta with sour cream and cheese',
        ingredients: 'Smantana, Branza de vaci, Malai, Sare',
        nutrition: 'Valoare energetica: 172.12 KCal /720.17 Kj, Grasimi: 6.29 g, Acizi grasi saturati: 1.11 g, Glucide: 22.93g, Zaharuri: 22.93 g, Proteine: 6.64 g, Sare: 1.15 g',
        allergens: 'Lapte'
      },
      {
        name: 'Bulz muntenesc - Polenta romanian dish',
        ingredients: 'Branza de burduf, Malai, Oua, Bacon afumat, Unt, Sare',
        nutrition: 'Valoare energetica: 249.64 KCal /1044.5 Kj, Grasimi: 11.82 g, Acizi grasi saturati: 5.95 g, Glucide:21.25 g, Zaharuri: 20.39 g, Proteine: 15.16 g, Sare: 2.96 g',
        allergens: 'Lapte, Oua'
      },
      {
        name: 'Cascaval pane - Breadcrumbed cheese',
        ingredients: 'Cascaval, Ulei, Rosii, Pesmet, Oua, Faina',
        nutrition: 'Valoare energetica: 358.41 KCal /1499.60 Kj, Grasimi: 26.35 g, Acizi grasi saturati: 7.66g, Glucide: 18.60 g, Zaharuri: 1.01 g, Proteine: 12.31 g, Sare: 0.71 g',
        allergens: 'Lapte, Oua, Gluten'
      },
    ],
  },
  {
    id: 'preparate',
    label: 'Preparate la Grătar',
    icon: '🔥',
    description: 'Preparate proaspete la grătar, cu garnituri delicioase',
    items: [
      {
        name: 'Tochitura haiduceasca cu mamaliga, ou si branza* - Romanian dish*',
        ingredients: 'Muschi de vita crud*, Cotlet porc fara os*, Malai, Ou, Branza telemea vaca, Pasta de Tomate, Vin alb sec, Ulei, Sare',
        nutrition: 'Valoare energetica: 176.23 KCal /737.36 Kj, Grasimi: 10.91 g, Acizi grasi saturati: 1.69 g, Glucide: 11.91 g, Zaharuri: 0.12 g, Proteine: 15.1 g, Sare: 0.89 g',
        allergens: 'Lapte, Oua'
      },
      {
        name: 'Snitel pane de pui* - Chicken schnitzel*',
        ingredients: 'Piept de pui*, Ulei, Pesmet, Ou, Faina alba, Sare',
        nutrition: 'Valoare energetica: 480.81 KCal /2011.7 Kj, Grasimi: 29.49 g, Acizi grasi saturati: 3.93 g, Glucide: 26.22 g, Zaharuri: 1.14 g, Proteine: 26.14 g, Sare: 1.28 g',
        allergens: 'Gluten, Oua'
      },
      {
        name: 'Snitel pane de porc* - Pork schnitzel*',
        ingredients: 'Cotlet porc fara os*, Ulei, Pesmet, Ou, Faina, Sare',
        nutrition: 'Valoare energetica: 321.55 KCal /1345.35 Kj, Grasimi: 20.84 g, Acizi grasi saturati: 2.74 g, Glucide: 19.68 g, Zaharuri: 0.84 g, Proteine: 14.33 g, Sare: 0.97 g',
        allergens: 'Gluten, Oua'
      },
      {
        name: 'Muschi de vita la gratar* - Grilled beef steak*',
        ingredients: 'Muschi de vita crud*, Lamaie, Unt, Ulei, Sare',
        nutrition: 'Valoare energetica: 245.79 KCal /1028.41 Kj, Grasimi: 19.67 g, Acizi grasi saturati: 0.09 g, Glucide: 0.72 g, Zaharuri: 0.22 g, Proteine: 15.93 g, Sare: 0.40 g',
        allergens: '-'
      },
      {
        name: 'Muschi de porc la gratar* - Grilled pork fillet*',
        ingredients: 'Cotlet de porc fara os*, Ulei, Sare',
        nutrition: 'Valoare energetica: 161.75 KCal /676.77 Kj, Grasimi: 8.21g, Acizi grasi saturati: 2.11 g, Glucide: 0.48 g, Zaharuri:0g, Proteine: 22.13 g, Sare: 1.31 g',
        allergens: '-'
      },
      {
        name: 'Ceafa de porc la gratar* - Grilled pork scruff*',
        ingredients: 'Ceafa de porc*, Ulei, Piper negru, Sare',
        nutrition: 'Valoare energetica: 247.83 KCal /1036.93 Kj, Grasimi: 16.85g, Acizi grasi saturati: 0.31 g, Glucide: 0.15 g, Zaharuri:0 g, Proteine: 23.06 g, Sare: 0.34 g',
        allergens: '-'
      },
      {
        name: 'Piept de pui la gratar* - Grilled chicken breast*',
        ingredients: 'Piept de pui*, Salata verde, Ulei, Sare',
        nutrition: 'Valoare energetica: 177.2 KCal /741.4 Kj, Grasimi: 6.25 g, Acizi grasi saturati: 1.23 g, Glucide: 0.20 g, Zaharuri:0.08 g, Proteine: 28.88 g, Sare: 0.67 g',
        allergens: '-'
      },
      {
        name: 'Pulpe de pui dezosate la gratar* - Grilled boneless chicken thighs*',
        ingredients: 'Pulpe pui dezosate fara piele*, Salata verde, Ulei, Sare',
        nutrition: 'Valoare energetica: 163.19 KCal /682.80 Kj, Grasimi: 10.23 g, Acizi grasi saturati: 3.18 g, Glucide: 0.63 g, Zaharuri: 0.08 g, Proteine: 17.33 g, Sare: 0.71 g',
        allergens: '-'
      },
      {
        name: 'Carnati la gratar - Grilled sausages',
        ingredients: 'Carnati Cabanos, Mustar, Ulei',
        nutrition: 'Valoare energetica: 355.95 KCal /1489.30 Kj, Grasimi: 30.21 g, Acizi grasi saturati: 0.09 g, Glucide: 0.35 g, Zaharuri: 0.23 g, Proteine: 18.17 g, Sare: 0.08 g',
        allergens: 'Mustar'
      },
      {
        name: 'Pastrama de oaie* - Lamb pastrami*',
        ingredients: 'Pastrama de oaie*, Castraveti murati, Gogosari murati, Ulei',
        nutrition: 'Valoare energetica: 126.14 KCal /527.75 Kj, Grasimi: 3.55 g, Acizi grasi saturati: 0.31 g, Glucide: 1.14 g, Zaharuri:0.16 g, Proteine: 21.32 g, Sare: 0.16 g',
        allergens: '-'
      },
      {
        name: 'Mititei la gratar* - Mince meat sticks*',
        ingredients: 'Pasta de mici*, Mustar, Ulei',
        nutrition: 'Valoare energetica: 151.15 KCal /632.42 Kj, Grasimi: 10.96 g, Acizi grasi saturati: 3.11 g, Glucide: 3.33 g, Zaharuri: 1.66 g, Proteine: 10.17 g, Sare: 1.09 g',
        allergens: 'Mustar'
      },
    ],
  },
  {
    id: 'garnituri',
    label: 'Garnituri',
    icon: '🥔',
    description: 'Garnituri delicioase pentru a acompania felurile principale',
    items: [
      {
        name: 'Piure de cartofi - Mashed potatoes',
        ingredients: 'Cartofi, Lapte, Unt, Sare',
        nutrition: 'Valoare energetica: 114.73 KCal /480.01 Kj, Grasimi: 4.92 g, Acizi grasi saturati: 0.34 g, Glucide: 15.49 g, Zaharuri: 1.77 g, Proteine: 2.12 g, Sare: 0.55g',
        allergens: 'Lapte'
      },
      {
        name: 'Cartofi prajiti* - Fries*',
        ingredients: 'Cartofi*, Ulei, Sare',
        nutrition: 'Valoare energetica: 202.27 KCal /846.31 Kj, Grasimi: 14.26 g, Acizi grasi saturati: 1.28 g, Glucide: 16.79 g, Zaharuri: 0 g, Proteine: 1.62 g, Sare: 0.57g',
        allergens: '-'
      },
      {
        name: 'Cartofi natur - Boiled potatoes',
        ingredients: 'Cartofi, Patrunjel, Sare',
        nutrition: 'Valoare energetica: 81.12 KCal /339.41 Kj, Grasimi: 0.11 g, Acizi grasi saturati: 0 g, Glucide: 19.07 g, Zaharuri: 2.20 g, Proteine: 2.00 g, Sare: 0.87 g',
        allergens: '-'
      },
      {
        name: 'Orez salbatic cu legume - Wild rice with vegetables',
        ingredients: 'Orez, Rosii, Ceapa, Ardei gras, Piper, Sare',
        nutrition: 'Valoare energetica: 60.77 KCal /254.25 Kj, Grasimi: 0.27 g, Acizi grasi saturati: 0.05 g, Glucide: 12.89 g, Zaharuri: 1.80g, Proteine: 2.30 g, Sare: 1.56 g',
        allergens: '-'
      },
      {
        name: 'Legume la gratar - Grilled vegetables',
        ingredients: 'Rosii, Vinete, Dovlecei, Ardei gras, Ceapa, Ulei, Sare',
        nutrition: 'Valoare energetica: 34.88 KCal /145.94 Kj, Grasimi: 1.63 g, Acizi grasi saturati: 0.18 g, Glucide: 4.85 g, Zaharuri: 1.69 g, Proteine: 0.92 g, Sare: 0.60 g',
        allergens: '-'
      },
    ],
  },
  {
    id: 'salate',
    label: 'Salate',
    icon: '🥬',
    description: 'Salate proaspete și gustoase',
    items: [
      {
        name: 'Salata de rosii cu ceapa si telemea - Tomatoes salad with red onion and cheese',
        ingredients: 'Rosii, Branza telemea de vaca, Ceapa, Ulei, Sare',
        nutrition: 'Valoare energetica: 107.44 KCal /449.55 Kj, Grasimi: 9.19 g, Acizi grasi saturati: 2.11 g, Glucide: 3.98 g, Zaharuri: 1.10 g, Proteine: 3.00 g, Sare: 1.41 g',
        allergens: 'Lapte'
      },
      {
        name: 'Salata verde cu lamaie - Lettuce with lemon',
        ingredients: 'Salata verde, Lamaie, Otet, Ulei, Sare',
        nutrition: 'Valoare energetica: 50.37 KCal /210.77 Kj, Grasimi: 3.71 g, Acizi grasi saturati: 0.48 g, Glucide: 4.18 g, Zaharuri: 1.50 g, Proteine: 1.10 g, Sare: 0.77 g',
        allergens: '-'
      },
      {
        name: 'Salata de castraveti murati - Pickled cucumbers',
        ingredients: 'Castraveti murati',
        nutrition: 'Valoare energetica: 12 KCal /50.21 Kj, Grasimi: 0.20 g, Acizi grasi saturati: 0.10 g, Glucide: 3.00 g, Zaharuri:1.20 g, Proteine: 1.00 g, Sare: 1.21 g',
        allergens: '-'
      },
      {
        name: 'Salata de muraturi asortate - Pickles salad',
        ingredients: 'Sfecla rosie rondele, Gogosari in otet, Gogonele, Castraveti murati',
        nutrition: 'Valoare energetica: 29.25 KCal /122.38 Kj, Grasimi: 0.15 g, Acizi grasi saturati: 0.03 g, Glucide: 6.20 g, Zaharuri:1.08 g, Proteine: 0.95 g, Sare: 0.71 g',
        allergens: '-'
      },
      {
        name: 'Salata de sfecla rosie cu hrean - Beetrot salad with horseradish',
        ingredients: 'Sfecla rosie cuburi in otet, Hrean',
        nutrition: 'Valoare energetica: 36.30 KCal /151.89 Kj, Grasimi: 0.00 g, Acizi grasi saturati: 0.01g, Glucide: 7.23 g, Zaharuri:1.63 g, Proteine: 1.42 g, Sare: 0.02 g',
        allergens: '-'
      },
      {
        name: 'Salata de varza alba - Cabbage salad',
        ingredients: 'Varza alba, Rosii, Ulei, Otet, Marar, Sare',
        nutrition: 'Valoare energetica: 83.58 KCal /349.69 Kj, Grasimi: 6.32 g, Acizi grasi saturati: 0.59 g, Glucide: 4.99 g, Zaharuri:2.08 g, Proteine: 1.12 g, Sare: 0.95 g',
        allergens: '-'
      },
      {
        name: 'Mujdei - Garlic sauce',
        ingredients: 'Usturoi, ulei, sare',
        nutrition: 'Valoare energetica: 287.5 KCal /312.75 Kj, Grasimi: 19.42 g, Acizi grasi saturati: 2.19 g, Glucide: 25.38g, Zaharuri: 1.54 g, Proteine:4.92g, Sare: 3.85 g',
        allergens: 'Usturoi'
      },
    ],
  },
  {
    id: 'pizza',
    label: 'Pizza',
    icon: '🍕',
    description: 'Pizza proaspăt preparată cu ingrediente de calitate',
    items: [
      {
        name: 'Pizza Quatro Stagioni',
        ingredients: 'Cascaval, Faina, Sunca presata, Pasta de tomate, Lapte, Ketchup, Ciuperci, Salam, Rosii, Ardei gras, Ulei de masline, Oua, Drojdie, Zahar, Sare',
        nutrition: 'Valoare energetica: 240.10 KCal/1004.59 Kj, Grasimi: 10.80 g, Acizi grasi saturati: 0.89 g, Glucide: 22.15 g, Zaharuri: 0.28 g, Proteine: 12.76 g, Sare: 0.57 g',
        allergens: 'Lapte, Gluten, Oua'
      },
      {
        name: 'Pizza Tonno',
        ingredients: 'Cascaval, Faina, Ton conserva, Pasta de tomate, Lapte, Ketchup, Ceapa rosie, Ulei de masline, Oua, Drojdie, Zahar, Sare',
        nutrition: 'Valoare energetica: 226.78 KCal/948.83 Kj, Grasimi: 7.98 g, Acizi grasi saturati: 0.52 g, Glucide: 22.89 g, Zaharuri: 0.25 g, Proteine: 14.52 g, Sare: 0.70 g',
        allergens: 'Lapte, Gluten, Oua, Peste'
      },
      {
        name: 'Pizza Margherita',
        ingredients: 'Cascaval, Faina, Pasta de tomate, Lapte, Ketchup, Ulei de masline, Oua, Drojdie, Zahar, Sare',
        nutrition: 'Valoare energetica: 266.32 KCal/1114.27 Kj, Grasimi: 10.04 g, Acizi grasi saturati: 0.60 g, Glucide: 28.98 g, Zaharuri: 0.23 g, Proteine: 13.30 g, Sare: 0.37 g',
        allergens: 'Lapte, Gluten, Oua'
      },
      {
        name: 'Pizza Hawaii',
        ingredients: 'Cascaval, Faina, Sunca prestata, Ananas compot, Pasta de tomate, Ketchup, Ulei de masline, Oua, Lapte, Drojdie, Zahar, Sare',
        nutrition: 'Valoare energetica: 251.91 KCal/1054.00 Kj, Grasimi: 10.55 g, Acizi grasi saturati: 0.33 g, Glucide: 24.19 g, Zaharuri: 0.20 g, Proteine: 13.70 g, Sare: 0.14 g',
        allergens: 'Lapte, Gluten, Oua'
      },
      {
        name: 'Pizza Vegetariana',
        ingredients: 'Cascaval, Faina, Pasta de tomate, Masline, Lapte, Ketchup, Broccoli*, Rosii, Porumb boabe, Morcov, Ceapa rosie, Ardei gras, Ulei de masline, Oua, Drojdie, Zahar, Sare',
        nutrition: 'Valoare energetica: 214.69 KCal/898.24 Kj, Grasimi: 7.93 g, Acizi grasi saturati: 0.42 g, Glucide: 24.81 g, Zaharuri: 0.56 g, Proteine: 10.03 g, Sare: 0.27 g',
        allergens: 'Lapte, Gluten, Oua, Porumb'
      },
    ],
  },
  {
    id: 'deserturi',
    label: 'Deserturi',
    icon: '🍰',
    description: 'Deserturi delicioase pentru a încheia masa',
    items: [
      {
        name: 'Papanasi cu gem si smantana - Cheese doughnuts with jam and sour cream',
        ingredients: 'Smantana, Faina, Dulceata, Branza de vaci, Ulei, Oua, Zahar, Zahar pudra, Zahar vanilat, Sare',
        nutrition: 'Valoare energetica: 288.39 KCal/1206.60 Kj, Grasimi: 15.62 g, Acizi grasi saturati: 1.06 g, Glucide: 29.41 g, Zaharuri: 3.87 g, Proteine: 6.80 g, Sare: 0.41 g',
        allergens: 'Lapte, Gluten, Oua'
      },
      {
        name: 'Clatite cu dulceata - Pancakes with jam',
        ingredients: 'Dulceata, Lapte, Faina, Oua, Ulei, Zahar, Zahar pudra, Zahar vanilat, Sare',
        nutrition: 'Valoare energetica: 248.34 KCal/1039.06 Kj, Grasimi: 6.96 g, Acizi grasi saturati: 1.33 g, Glucide: 41.27 g, Zaharuri: 1.91 g, Proteine: 3.96 g, Sare: 0.40 g',
        allergens: 'Lapte, Gluten, Oua'
      },
      {
        name: 'Clatite cu ciocolata - Pancakes with chocolate',
        ingredients: 'Lapte, Crema de ciocolata, Faina, Oua, Ulei, Zahar, Zahar pudra, Zahar vanilat, Sare',
        nutrition: 'Valoare energetica: 319.19 KCal/1333.69 Kj, Grasimi: 15.47 g, Acizi grasi saturati: 4.97 g, Glucide: 38.39 g, Zaharuri: 17.03 g, Proteine: 5.23 g, Sare: 0.48 g',
        allergens: 'Lapte, Gluten, Oua'
      },
      {
        name: 'Inghetata asortata - Ice cream',
        ingredients: 'Lapte, Zer, Grasime vegetala, Arahide, Frisca, Zahar, Arome, Topping ciocolata',
        nutrition: 'Valoare energetica: 220.35 KCal/921.95 Kj, Grasimi: 11.74 g, Acizi grasi saturati: 8.89 g, Glucide: 24.94 g, Zaharuri: 21.81 g, Proteine: 3.62 g, Sare: 0',
        allergens: 'Lapte, Arahide'
      },
    ],
  },
  {
    id: 'bauturi',
    label: 'Băuturi',
    icon: '🍷',
    description: 'Băuturi calde și reci pentru orice moment',
    items: [
      {
        name: 'Espresso',
        ingredients: 'Cafea Espresso',
        nutrition: 'Valoare energetica: 2 KCal/8.38 Kj, Grasimi: 0.25 g, Acizi grasi saturati: 0.00 g, Glucide: 0.00 g, Zaharuri:0.00g, Proteine: 0.13 g, Sare: 0.00 g',
        allergens: '-'
      },
      {
        name: 'Caffe latte',
        ingredients: 'Cafea Espresso, Lapte',
        nutrition: 'Valoare energetica: 58.25 KCal/243.72Kj, Grasimi: 3.30 g, Acizi grasi saturati: 0.00 g, Glucide: 4.22 g, Zaharuri: 0.00 g, Proteine: 2.91 g, Sare: 0.00 g',
        allergens: 'Lapte'
      },
      {
        name: 'Cappuccino',
        ingredients: 'Cafea Espresso, Lapte',
        nutrition: 'Valoare energetica: 57.56 KCal/240.81 Kj, Grasimi: 3.26 g, Acizi grasi saturati: 0.00 g, Glucide: 4.17 g, Zaharuri: 0.00 g, Proteine: 2.88 g, Sare: 0.00 g',
        allergens: 'Lapte'
      },
      {
        name: 'Ciocolata calda - Hot chocolate',
        ingredients: 'Ciocolata calda instant, Frisca Spray',
        nutrition: 'Valoare energetica: 126.23 KCal/528.15 Kj, Grasimi: 5.95 g, Acizi grasi saturati: 2.51 g, Glucide: 14.63 g, Zaharuri: 0.00 g, Proteine: 3.15 g, Sare: 0.02 g',
        allergens: 'Lapte'
      },
      {
        name: 'Limonada - Lemonade',
        ingredients: 'Lamaie, Suc de lamaie',
        nutrition: 'Valoare energetica: 28.67KCal/119.95 Kj, Grasimi: 0.19 g, Acizi grasi saturati: 0.03 g, Glucide: 7.40 g, Zaharuri: 1.87g, Proteine: 0.63 g, Sare: 0.01 g',
        allergens: '-'
      },
      {
        name: 'Bere / Beer',
        ingredients: 'Stella Artois, Madri Excepcional, Beck\'s, Staropramen, Bergenbier, Caraiman, Corona, Leffe, Hoegaarden, Franszikaner',
        nutrition: 'Valoare energetica: 42-45 KCal/175-188 Kj per 100ml',
        allergens: '-'
      },
      {
        name: 'Vinuri albe - White wines',
        ingredients: 'Licorna Anno Sauvignon Blanc Chardonnay, Budureasca Feteasca Regala, Budureasca Sauvignon Blanc, Segarcea Chardonnay, Vinul Casei',
        nutrition: 'Valoare energetica: 85-90 KCal/355-376 Kj per 100ml',
        allergens: '-'
      },
      {
        name: 'Vinuri roze - Rose wines',
        ingredients: 'Licorna Anno Rose, Licorna Serafim Rose, Segarcea Sarut Rose, Budureasca Rose, Vinul Casei',
        nutrition: 'Valoare energetica: 85-90 KCal/355-376 Kj per 100ml',
        allergens: '-'
      },
      {
        name: 'Vinuri rosii - Red wines',
        ingredients: 'Licorna Anno Feteasca Neagra, Licorna Anno Merlot, Segarcea Cabernet Sauvignon, Segarcea Merlot, Budureasca Feteasca Neagra, Vinul Casei',
        nutrition: 'Valoare energetica: 85-90 KCal/355-376 Kj per 100ml',
        allergens: '-'
      },
      {
        name: 'Bauturi alcoolice tari - Strong alcoholic drinks',
        ingredients: 'Whisky Jack Daniel\'s, Johnnie Walker, Ballantines, JB, Vodka Smirnoff, Finlandia, Gin Beefeater, Tequila Camino, Martini, Campari, Rom Captain Morgan, Palinca Zetea, Tuica Zetea, Cognac Hennesey V.S.O.P., Martell VS, Metaxa 7*, Vinars Jidvei, Alexandrion 5*, Lichior Sheridan\'s, Amareto, Visinata, Unicum, Jagermeister',
        nutrition: 'Valoare energetica: 250-300 KCal/1045-1255 Kj per 100ml',
        allergens: '-'
      },
    ],
  },
];

const MenuSection = () => {
  const handleAnimationComplete = () => {
    console.log('Menu title animation completed!');
  };

  const [activeTab, setActiveTab] = useState(menuData[0].id);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <BlurText
            text="Meniul"
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text-primary mb-6 tracking-tight"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
          <h3 className="text-xl md:text-2xl font-display font-semibold text-primary-500 mb-4">
            Gustul mâncării de acasă, pregătit cu grijă și ingrediente proaspete
          </h3>
          <p className="text-lg text-text-light max-w-3xl mx-auto leading-relaxed font-sans mb-4">
            Mâncarea noastră te invită să te relaxezi, să te simți bine și să savurezi momentele petrecute alături de cei dragi, exact ca la tine acasă.
          </p>
        </motion.div>

        {/* Minimalist Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {menuData.map((cat) => (
            <motion.button
              key={cat.id}
              variants={itemVariants}
              onClick={() => setActiveTab(cat.id)}
              className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm tracking-wide font-button ${
                activeTab === cat.id
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-text-light hover:text-primary-500 hover:bg-gray-50'
              }`}
            >
              <span className="mr-2 text-base">{cat.icon}</span>
              <span className="font-medium">{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Content */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {menuData.map((cat) =>
              activeTab === cat.id ? (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-12"
                >
                  {/* Category Header */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="text-center mb-12"
                  >
                    <div className="inline-flex flex-col items-center space-y-4">
                      <span className="text-5xl mb-2">{cat.icon}</span>
                      <div>
                        <h3 className="text-3xl font-display font-bold text-text-primary mb-3 tracking-wide">{cat.label}</h3>
                        <p className="text-text-light text-lg font-sans max-w-md mx-auto leading-relaxed">{cat.description}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Menu Items - Apple Style */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                  >
                    {cat.items.map((item, idx) => {
                      const itemId = `${cat.id}-${idx}`;
                      const isExpanded = expandedItems[itemId];
                      
                      return (
                        <motion.div
                          key={idx}
                          variants={itemVariants}
                          className="group"
                        >
                          <div className="bg-gray-50/50 rounded-2xl border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 overflow-hidden">
                            <div className="p-8">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <p className="text-xl text-text-primary font-sans leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                                    {item.name}
                                  </p>
                                </div>
                                <div className="ml-6 flex-shrink-0">
                                  <button
                                    onClick={() => toggleItem(itemId)}
                                    className="w-8 h-8 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-500/20 transition-all duration-300 group-hover:bg-primary-500/20"
                                  >
                                    <ChevronDownIcon 
                                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            
                            {/* Expanded Content */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: "easeOut" }}
                                  className="border-t border-gray-100"
                                >
                                  <div className="p-8 pt-0">
                                                                      <div className="space-y-4">
                                    <div className="bg-white/50 rounded-xl p-6">
                                      <h4 className="text-sm font-button font-medium text-primary-500 mb-3 uppercase tracking-wide">
                                        Ingrediente
                                      </h4>
                                      <p className="text-text-light font-sans leading-relaxed">
                                        {item.ingredients}
                                      </p>
                                    </div>
                                    
                                    {item.nutrition && (
                                      <div className="bg-blue-50/50 rounded-xl p-6">
                                        <h4 className="text-sm font-button font-medium text-blue-600 mb-3 uppercase tracking-wide">
                                          Valori Nutritionale / 100g
                                        </h4>
                                        <p className="text-text-light font-sans leading-relaxed text-sm">
                                          {item.nutrition}
                                        </p>
                                      </div>
                                    )}
                                    
                                    {item.allergens && (
                                      <div className="bg-orange-50/50 rounded-xl p-6">
                                        <h4 className="text-sm font-button font-medium text-orange-600 mb-3 uppercase tracking-wide">
                                          Alergeni
                                        </h4>
                                        <p className="text-text-light font-sans leading-relaxed text-sm">
                                          {item.allergens}
                                        </p>
                                      </div>
                                    )}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Minimalist Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="bg-gray-50 rounded-3xl p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4 tracking-wide">
              Rezervă o masă
            </h3>
            <p className="text-text-light text-lg mb-8 font-sans leading-relaxed">
              Pentru o experiență culinară personalizată, vă recomandăm să faceți o rezervare.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary-500 text-white px-8 py-4 rounded-lg font-button font-medium text-lg shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() => window.open('tel:+40759033047', '_self')}
            >
              Rezervă acum
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection; 