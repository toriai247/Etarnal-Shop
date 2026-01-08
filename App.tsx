
import React, { useState, useEffect } from 'react';
import { Product } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import PolicySection from './components/PolicySection';
import SKU25718 from './pages/products/SKU25718';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'sku25718'>('home');

  const products: Product[] = [
    { 
      id: 25718, 
      name: "Gents Hoodie for Winter", 
      price: 690, 
      image: "https://kuggmxhagvxdmhbjlmys.supabase.co/storage/v1/object/public/Products/1767253568_L_4.jpeg", 
      category: "Apparel", 
      isHot: true 
    },
    { id: 1, name: "Neon Glow Drone", price: 129, image: "https://picsum.photos/seed/drone/400/400", category: "Gadgets", isHot: true },
    { id: 2, name: "Chubby Cloud Pillow", price: 45, image: "https://picsum.photos/seed/pillow/400/400", category: "Home" },
    { id: 3, name: "3D Printed Lamp", price: 89, image: "https://picsum.photos/seed/lamp/400/400", category: "Decor", isHot: true },
    { id: 4, name: "Bubble Gaming Mouse", price: 65, image: "https://picsum.photos/seed/mouse/400/400", category: "Electronics" },
    { id: 5, name: "Pastel Headphones", price: 199, image: "https://picsum.photos/seed/audio/400/400", category: "Electronics" },
    { id: 6, name: "Glossy Water Bottle", price: 29, image: "https://picsum.photos/seed/bottle/400/400", category: "Life" },
    { id: 7, name: "Puffy Laptop Sleeve", price: 39, image: "https://picsum.photos/seed/case/400/400", category: "Gadgets" },
  ];

  const handleViewDetails = (product: Product) => {
    if (product.id === 25718) {
      setCurrentPage('sku25718');
      window.scrollTo(0, 0);
    } else {
      alert(`Details for ${product.name} coming soon!`);
    }
  };

  return (
    <div className="min-h-screen selection:bg-orange-500 selection:text-white">
      <Navbar 
        onLogoClick={() => setCurrentPage('home')}
      />
      
      <main className="pt-20">
        {currentPage === 'home' ? (
          <>
            <Hero />
            
            <div id="shop" className="max-w-7xl mx-auto px-4 py-16">
              <div className="flex flex-col items-center mb-12">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 bubbly-text-3d tracking-tight">
                  NEW ARRIVALS
                </h2>
                <div className="h-2 w-32 bg-orange-500 rounded-full bubbly-border"></div>
              </div>
              
              <ProductGrid 
                products={products} 
                onViewDetails={handleViewDetails}
              />
            </div>

            <PolicySection />
          </>
        ) : (
          <div className="py-12">
            <SKU25718 onBack={() => setCurrentPage('home')} />
          </div>
        )}
      </main>

      <Footer />
      
      {/* Decorative floating elements */}
      <div className="fixed top-1/4 -left-10 w-24 h-24 bg-orange-200 rounded-3xl rotate-12 opacity-30 floating -z-10"></div>
      <div className="fixed bottom-1/4 -right-10 w-32 h-32 bg-green-300 rounded-full opacity-30 floating -z-10" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-2/3 left-10 w-16 h-16 bg-white rounded-xl rotate-45 opacity-20 floating -z-10" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default App;
