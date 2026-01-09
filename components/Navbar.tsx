
import React from 'react';

interface NavbarProps {
  onLogoClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  const facebookUrl = "https://www.facebook.com/share/1ZWDNa2GTo/";
  const mainShopUrl = "https://etarnel-shop.scommerz.com";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-full px-6 py-3 bubbly-border flex items-center justify-between">
        <div 
          onClick={() => window.location.href = mainShopUrl}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden bubbly-border group-hover:rotate-12 transition-transform p-1">
            <img 
              src="https://kuggmxhagvxdmhbjlmys.supabase.co/storage/v1/object/public/Products/file_00000000fab071fd9a0696004a156a77.png" 
              alt="Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#1a1a1a]">ETERNAL SHOP</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-semibold text-[#1a1a1a]">
          <a href={mainShopUrl} className="hover:text-orange-600 transition-colors">Home</a>
          <a href={mainShopUrl} className="hover:text-orange-600 transition-colors">Shop</a>
          <a href={mainShopUrl} className="hover:text-orange-600 transition-colors">Deals</a>
          <a href="#" className="hover:text-orange-600 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-2">
           <a 
             href={facebookUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="px-4 py-2 bg-orange-500 rounded-full text-white font-bold text-sm btn-3d-orange border-2 border-black inline-block text-center"
           >
             JOIN US
           </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
