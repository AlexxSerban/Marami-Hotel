import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuHeroSection from '../components/menu/MenuHeroSection';
import MenuCategoriesSection from '../components/menu/MenuCategoriesSection';
import MenuItemsSection from '../components/menu/MenuItemsSection';
import MenuCTASection from '../components/menu/MenuCTASection';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="MenuPage no-overflow">
      <Navbar />
      <main className="no-overflow">
        <MenuHeroSection />
        <MenuCategoriesSection 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />
        <MenuItemsSection selectedCategory={selectedCategory} />
        <MenuCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage; 