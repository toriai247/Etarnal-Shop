
import React from 'react';

const Hero: React.FC = () => {
  const mainShopUrl = "https://etarnel-shop.scommerz.com";

  return (
    <section className="relative overflow-hidden px-4 py-12 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-6xl md:text-9xl font-black leading-none mb-6 bubbly-text-3d">
            ETERNAL <br /> <span className="text-white drop-shadow-lg">SHOP</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#2D5A27] font-semibold mb-8 max-w-lg">
            Whatever you want, we've got it! Experience the puffiest, glossiest shop in the metaverse.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href={mainShopUrl} className="px-10 py-4 text-xl font-bold rounded-full btn-3d-orange text-white border-4 border-black inline-block">
              SHOP NOW
            </a>
            <a href={mainShopUrl} className="px-10 py-4 text-xl font-bold rounded-full bg-white text-black border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
              EXPLORE
            </a>
          </div>
        </div>

        <div className="flex-1 relative group">
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500 bubbly-border bg-white">
            <img 
              src="https://kuggmxhagvxdmhbjlmys.supabase.co/storage/v1/object/public/Products/file_00000000c44c71fd82f3fac37e8f1c6f.png" 
              alt="Shop Banner" 
              className="w-full h-auto object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur px-8 py-4 rounded-3xl border-4 border-black -rotate-6">
              <span className="text-2xl font-black text-[#1a1a1a]">NEW SEASON!</span>
            </div>
          </div>
          
          <div className="absolute -top-10 -right-10 w-full h-full bg-[#2D5A27]/20 rounded-[3rem] -rotate-3 -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-400 rounded-full opacity-50 blur-3xl -z-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
