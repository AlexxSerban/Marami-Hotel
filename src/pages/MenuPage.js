import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingBookButton from '../components/FloatingBookButton';
import BlurText from '../components/BlurText';

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
        allergens: 'Gluten'
      }
    ]
  },
  {
    id: 'sandwich-uri',
    label: 'Sandwich-uri',
    icon: '🥪',
    description: 'Sandwich-uri gustoase pentru orice moment al zilei',
    items: [
      {
        name: 'Sandwich cu sunca - Ham sandwich',
        ingredients: 'Paine, Sunca presata, Rosii, Salata verde',
        nutrition: 'Valoare energetica: 245 KCal/1025 Kj, Grasimi: 8.5 g, Acizi grasi saturati: 3.2 g, Glucide: 35.2 g, Zaharuri: 2.1 g, Proteine: 12.8 g, Sare: 1.5 g',
        allergens: 'Gluten'
      },
      {
        name: 'Sandwich cu cascaval - Cheese sandwich',
        ingredients: 'Paine, Cascaval, Rosii, Salata verde',
        nutrition: 'Valoare energetica: 320 KCal/1339 Kj, Grasimi: 15.2 g, Acizi grasi saturati: 8.1 g, Glucide: 35.8 g, Zaharuri: 2.3 g, Proteine: 18.5 g, Sare: 1.8 g',
        allergens: 'Gluten, Lapte'
      },
      {
        name: 'Sandwich cu salami - Salami sandwich',
        ingredients: 'Paine, Salam secuiesc, Rosii, Salata verde',
        nutrition: 'Valoare energetica: 380 KCal/1590 Kj, Grasimi: 22.5 g, Acizi grasi saturati: 8.9 g, Glucide: 35.5 g, Zaharuri: 2.0 g, Proteine: 15.2 g, Sare: 2.1 g',
        allergens: 'Gluten'
      }
    ]
  },
  {
    id: 'supe-ciorbe',
    label: 'Supe & Ciorbe',
    icon: '🥣',
    description: 'Supe și ciorbe tradiționale românești',
    items: [
      {
        name: 'Ciorba de burta - Tripe soup',
        ingredients: 'Burta de vita, Ceapa, Usturoi, Smantana, Otet',
        nutrition: 'Valoare energetica: 180 KCal/753 Kj, Grasimi: 12.5 g, Acizi grasi saturati: 5.2 g, Glucide: 8.3 g, Zaharuri: 1.2 g, Proteine: 15.8 g, Sare: 2.5 g',
        allergens: 'Lapte'
      },
      {
        name: 'Ciorba de perisoare - Meatball soup',
        ingredients: 'Carne de vita, Ceapa, Morcov, Telina, Smantana',
        nutrition: 'Valoare energetica: 220 KCal/920 Kj, Grasimi: 14.8 g, Acizi grasi saturati: 6.1 g, Glucide: 12.5 g, Zaharuri: 2.1 g, Proteine: 18.2 g, Sare: 2.8 g',
        allergens: 'Lapte'
      },
      {
        name: 'Supa de pui - Chicken soup',
        ingredients: 'Pui, Morcov, Telina, Ceapa, Pastarnac',
        nutrition: 'Valoare energetica: 165 KCal/690 Kj, Grasimi: 8.9 g, Acizi grasi saturati: 3.2 g, Glucide: 10.2 g, Zaharuri: 1.8 g, Proteine: 16.5 g, Sare: 2.1 g',
        allergens: '-'
      }
    ]
  },
  {
    id: 'specialitati',
    label: 'Specialități',
    icon: '🍽️',
    description: 'Preparate tradiționale românești',
    items: [
      {
        name: 'Sarmale - Stuffed cabbage rolls',
        ingredients: 'Varza, Carne de porc, Orez, Ceapa, Usturoi, Smantana',
        nutrition: 'Valoare energetica: 285 KCal/1192 Kj, Grasimi: 18.5 g, Acizi grasi saturati: 7.2 g, Glucide: 22.8 g, Zaharuri: 3.1 g, Proteine: 16.5 g, Sare: 2.8 g',
        allergens: 'Lapte'
      },
      {
        name: 'Mamaliga cu branza - Polenta with cheese',
        ingredients: 'Malai, Branza telemea, Smantana',
        nutrition: 'Valoare energetica: 320 KCal/1339 Kj, Grasimi: 22.1 g, Acizi grasi saturati: 12.8 g, Glucide: 25.5 g, Zaharuri: 1.2 g, Proteine: 12.8 g, Sare: 3.2 g',
        allergens: 'Lapte'
      },
      {
        name: 'Tocanita de pui - Chicken stew',
        ingredients: 'Pui, Ceapa, Usturoi, Rosii, Smantana',
        nutrition: 'Valoare energetica: 245 KCal/1025 Kj, Grasimi: 15.8 g, Acizi grasi saturati: 6.5 g, Glucide: 8.9 g, Zaharuri: 2.1 g, Proteine: 22.5 g, Sare: 2.5 g',
        allergens: 'Lapte'
      }
    ]
  },
  {
    id: 'gustari',
    label: 'Gustări',
    icon: '🥨',
    description: 'Gustări și aperitive',
    items: [
      {
        name: 'Branza cu masline - Cheese with olives',
        ingredients: 'Branza telemea, Masline negre',
        nutrition: 'Valoare energetica: 185 KCal/774 Kj, Grasimi: 14.2 g, Acizi grasi saturati: 8.9 g, Glucide: 3.2 g, Zaharuri: 0.8 g, Proteine: 12.5 g, Sare: 2.8 g',
        allergens: 'Lapte'
      },
      {
        name: 'Salam cu cascaval - Salami with cheese',
        ingredients: 'Salam secuiesc, Cascaval',
        nutrition: 'Valoare energetica: 320 KCal/1339 Kj, Grasimi: 25.8 g, Acizi grasi saturati: 12.5 g, Glucide: 2.8 g, Zaharuri: 1.2 g, Proteine: 18.9 g, Sare: 3.5 g',
        allergens: 'Lapte'
      }
    ]
  },
  {
    id: 'preparate-gratar',
    label: 'Preparate la Grătar',
    icon: '🔥',
    description: 'Preparate proaspete la grătar',
    items: [
      {
        name: 'Cotlet de porc la gratar - Grilled pork chop',
        ingredients: 'Cotlet de porc, Ulei, Sare, Piper',
        nutrition: 'Valoare energetica: 285 KCal/1192 Kj, Grasimi: 18.5 g, Acizi grasi saturati: 7.2 g, Glucide: 0 g, Zaharuri: 0 g, Proteine: 28.5 g, Sare: 2.1 g',
        allergens: '-'
      },
      {
        name: 'Piept de pui la gratar - Grilled chicken breast',
        ingredients: 'Piept de pui, Ulei, Sare, Piper',
        nutrition: 'Valoare energetica: 185 KCal/774 Kj, Grasimi: 8.9 g, Acizi grasi saturati: 2.8 g, Glucide: 0 g, Zaharuri: 0 g, Proteine: 25.8 g, Sare: 1.8 g',
        allergens: '-'
      },
      {
        name: 'Mici la gratar - Grilled minced meat rolls',
        ingredients: 'Carne de porc si vita, Ulei, Sare, Piper',
        nutrition: 'Valoare energetica: 320 KCal/1339 Kj, Grasimi: 25.2 g, Acizi grasi saturati: 9.8 g, Glucide: 2.1 g, Zaharuri: 0.5 g, Proteine: 22.5 g, Sare: 2.8 g',
        allergens: '-'
      }
    ]
  },
  {
    id: 'garnituri',
    label: 'Garnituri',
    icon: '🥔',
    description: 'Garnituri tradiționale',
    items: [
      {
        name: 'Cartofi prajiti - French fries',
        ingredients: 'Cartofi, Ulei, Sare',
        nutrition: 'Valoare energetica: 285 KCal/1192 Kj, Grasimi: 12.5 g, Acizi grasi saturati: 2.8 g, Glucide: 42.8 g, Zaharuri: 0.8 g, Proteine: 4.2 g, Sare: 1.5 g',
        allergens: '-'
      },
      {
        name: 'Orez cu legume - Rice with vegetables',
        ingredients: 'Orez, Morcov, Mazare, Ceapa, Ulei',
        nutrition: 'Valoare energetica: 185 KCal/774 Kj, Grasimi: 4.2 g, Acizi grasi saturati: 0.8 g, Glucide: 35.8 g, Zaharuri: 2.1 g, Proteine: 5.8 g, Sare: 1.2 g',
        allergens: '-'
      },
      {
        name: 'Salata de varza - Cabbage salad',
        ingredients: 'Varza, Ulei, Otet, Sare',
        nutrition: 'Valoare energetica: 85 KCal/356 Kj, Grasimi: 5.2 g, Acizi grasi saturati: 0.8 g, Glucide: 8.5 g, Zaharuri: 2.1 g, Proteine: 2.8 g, Sare: 1.5 g',
        allergens: '-'
      }
    ]
  },
  {
    id: 'salate',
    label: 'Salate',
    icon: '🥗',
    description: 'Salate proaspete și sănătoase',
    items: [
      {
        name: 'Salata Caesar - Caesar salad',
        ingredients: 'Salata verde, Piept de pui, Cascaval, Crutoane, Dressing Caesar',
        nutrition: 'Valoare energetica: 245 KCal/1025 Kj, Grasimi: 18.5 g, Acizi grasi saturati: 8.2 g, Glucide: 8.9 g, Zaharuri: 2.1 g, Proteine: 16.8 g, Sare: 2.5 g',
        allergens: 'Gluten, Lapte'
      },
      {
        name: 'Salata greceasca - Greek salad',
        ingredients: 'Rosii, Castraveti, Masline, Branza feta, Ulei de masline',
        nutrition: 'Valoare energetica: 185 KCal/774 Kj, Grasimi: 15.8 g, Acizi grasi saturati: 6.2 g, Glucide: 8.5 g, Zaharuri: 4.2 g, Proteine: 8.9 g, Sare: 2.1 g',
        allergens: 'Lapte'
      },
      {
        name: 'Salata de rosii - Tomato salad',
        ingredients: 'Rosii, Ceapa, Ulei de masline, Sare',
        nutrition: 'Valoare energetica: 85 KCal/356 Kj, Grasimi: 6.2 g, Acizi grasi saturati: 0.8 g, Glucide: 8.5 g, Zaharuri: 4.2 g, Proteine: 2.1 g, Sare: 1.5 g',
        allergens: '-'
      }
    ]
  },
  {
    id: 'pizza',
    label: 'Pizza',
    icon: '🍕',
    description: 'Pizza tradițională italiană',
    items: [
      {
        name: 'Pizza Margherita - Margherita pizza',
        ingredients: 'Aluat, Sos de rosii, Mozzarella, Busuioc',
        nutrition: 'Valoare energetica: 285 KCal/1192 Kj, Grasimi: 12.5 g, Acizi grasi saturati: 6.8 g, Glucide: 35.8 g, Zaharuri: 2.1 g, Proteine: 12.5 g, Sare: 2.8 g',
        allergens: 'Gluten, Lapte'
      },
      {
        name: 'Pizza Quattro Stagioni - Four seasons pizza',
        ingredients: 'Aluat, Sos de rosii, Mozzarella, Sunca, Ciuperci, Artichoke, Masline',
        nutrition: 'Valoare energetica: 320 KCal/1339 Kj, Grasimi: 15.8 g, Acizi grasi saturati: 8.2 g, Glucide: 35.5 g, Zaharuri: 2.8 g, Proteine: 16.8 g, Sare: 3.2 g',
        allergens: 'Gluten, Lapte'
      },
      {
        name: 'Pizza Diavola - Spicy pizza',
        ingredients: 'Aluat, Sos de rosii, Mozzarella, Salam picant, Ardei iuti',
        nutrition: 'Valoare energetica: 345 KCal/1443 Kj, Grasimi: 18.5 g, Acizi grasi saturati: 9.8 g, Glucide: 35.2 g, Zaharuri: 2.5 g, Proteine: 18.5 g, Sare: 3.5 g',
        allergens: 'Gluten, Lapte'
      }
    ]
  },
  {
    id: 'deserturi',
    label: 'Deserturi',
    icon: '🍰',
    description: 'Deserturi gustoase și dulci',
    items: [
      {
        name: 'Papanasi - Romanian donuts',
        ingredients: 'Branza de vaci, Faina, Oua, Smantana, Dulceata',
        nutrition: 'Valoare energetica: 385 KCal/1611 Kj, Grasimi: 22.5 g, Acizi grasi saturati: 12.8 g, Glucide: 35.8 g, Zaharuri: 18.5 g, Proteine: 12.5 g, Sare: 1.8 g',
        allergens: 'Gluten, Lapte, Oua'
      },
      {
        name: 'Clatite cu dulceata - Pancakes with jam',
        ingredients: 'Faina, Oua, Lapte, Dulceata, Smantana',
        nutrition: 'Valoare energetica: 285 KCal/1192 Kj, Grasimi: 12.5 g, Acizi grasi saturati: 6.8 g, Glucide: 42.8 g, Zaharuri: 22.5 g, Proteine: 8.9 g, Sare: 1.5 g',
        allergens: 'Gluten, Lapte, Oua'
      },
      {
        name: 'Baklava - Turkish pastry',
        ingredients: 'Foaie, Nuci, Miere, Zahar',
        nutrition: 'Valoare energetica: 485 KCal/2029 Kj, Grasimi: 28.5 g, Acizi grasi saturati: 8.9 g, Glucide: 55.2 g, Zaharuri: 35.8 g, Proteine: 8.5 g, Sare: 0.8 g',
        allergens: 'Gluten, Nuci'
      }
    ]
  },
  {
    id: 'bauturi',
    label: 'Băuturi',
    icon: '🥤',
    description: 'Băuturi reci și calde',
    items: [
      {
        name: 'Cafea - Coffee',
        ingredients: 'Cafea, Apa',
        nutrition: 'Valoare energetica: 2 KCal/8 Kj, Grasimi: 0 g, Acizi grasi saturati: 0 g, Glucide: 0.3 g, Zaharuri: 0 g, Proteine: 0.3 g, Sare: 0 g',
        allergens: '-'
      },
      {
        name: 'Ceai - Tea',
        ingredients: 'Ceai, Apa',
        nutrition: 'Valoare energetica: 1 KCal/4 Kj, Grasimi: 0 g, Acizi grasi saturati: 0 g, Glucide: 0.2 g, Zaharuri: 0 g, Proteine: 0.1 g, Sare: 0 g',
        allergens: '-'
      },
      {
        name: 'Limonada - Lemonade',
        ingredients: 'Lamaie, Zahar, Apa',
        nutrition: 'Valoare energetica: 85 KCal/356 Kj, Grasimi: 0 g, Acizi grasi saturati: 0 g, Glucide: 22.5 g, Zaharuri: 22.5 g, Proteine: 0 g, Sare: 0 g',
        allergens: '-'
      },
      {
        name: 'Suc de portocale - Orange juice',
        ingredients: 'Portocale',
        nutrition: 'Valoare energetica: 95 KCal/397 Kj, Grasimi: 0 g, Acizi grasi saturati: 0 g, Glucide: 22.8 g, Zaharuri: 18.5 g, Proteine: 1.8 g, Sare: 0 g',
        allergens: '-'
      },
      {
        name: 'Bere - Beer',
        ingredients: 'Malta, Hamei, Apa',
        nutrition: 'Valoare energetica: 45 KCal/188 Kj, Grasimi: 0 g, Acizi grasi saturati: 0 g, Glucide: 3.5 g, Zaharuri: 0 g, Proteine: 0.5 g, Sare: 0 g',
        allergens: 'Gluten'
      },
      {
        name: 'Vin rosu - Red wine',
        ingredients: 'Struguri rosii',
        nutrition: 'Valoare energetica: 85 KCal/356 Kj, Grasimi: 0 g, Acizi grasi saturati: 0 g, Glucide: 2.5 g, Zaharuri: 0.5 g, Proteine: 0.2 g, Sare: 0 g',
        allergens: '-'
      }
    ]
  }
];

const MenuPage = () => {
  const [expandedCategories, setExpandedCategories] = useState(new Set());

  const handleAnimationComplete = () => {
    console.log('Menu title animation completed!');
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  return (
    <div className="MenuPage no-overflow">
      <Navbar />
      <main className="no-overflow">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 relative overflow-hidden">
          <div className="container-custom relative z-10 flex flex-col items-center justify-center min-h-[400px] py-24">
            <BlurText
              text="Meniul Complet"
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 text-center drop-shadow-2xl"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <p className="text-xl md:text-2xl text-white/90 text-center max-w-4xl mx-auto leading-relaxed">
              Descoperă toate preparatele noastre, organizate pe categorii pentru o experiență culinară completă
            </p>
          </div>
        </section>

        {/* Menu Content */}
        <section className="section-padding bg-white relative">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              {menuData.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  className="mb-12"
                >
                  {/* Category Header */}
                  <motion.div
                    onClick={() => toggleCategory(category.id)}
                    className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl">{category.icon}</span>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                            {category.label}
                          </h3>
                          <p className="text-white/90 text-sm md:text-base">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <ChevronDownIcon 
                        className={`w-6 h-6 text-white transition-transform duration-300 ${
                          expandedCategories.has(category.id) ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </motion.div>

                  {/* Category Items */}
                  <AnimatePresence>
                    {expandedCategories.has(category.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6 space-y-4"
                      >
                        {category.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                            className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                              {/* Item Name and Ingredients */}
                              <div className="flex-1">
                                <h4 className="text-lg md:text-xl font-display font-semibold text-text-primary mb-2">
                                  {item.name}
                                </h4>
                                <p className="text-text-light text-sm mb-3">
                                  <span className="font-medium">Ingrediente:</span> {item.ingredients}
                                </p>
                              </div>

                              {/* Nutrition and Allergens */}
                              <div className="lg:w-1/3 space-y-3">
                                {/* Nutrition */}
                                <div className="bg-white rounded-lg p-4 border border-gray-200">
                                  <h5 className="font-semibold text-text-primary mb-2 text-sm">
                                    Valori Nutriționale (per 100g)
                                  </h5>
                                  <p className="text-text-light text-xs leading-relaxed">
                                    {item.nutrition}
                                  </p>
                                </div>

                                {/* Allergens */}
                                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                                  <h5 className="font-semibold text-red-700 mb-2 text-sm">
                                    Alergeni
                                  </h5>
                                  <p className="text-red-600 text-xs">
                                    {item.allergens}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default MenuPage; 