
import React from 'react';

const Footer: React.FC = () => {
  const facebookUrl = "https://www.facebook.com/share/1ZWDNa2GTo/";

  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 mt-20 relative overflow-hidden">
      {/* Decorative Top Curve */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-[#B9F4A8] rounded-b-[3rem]"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center overflow-hidden bubbly-border p-1">
                 <img 
                   src="https://kuggmxhagvxdmhbjlmys.supabase.co/storage/v1/object/public/Products/file_00000000fab071fd9a0696004a156a77.png" 
                   alt="Logo" 
                   className="w-full h-full object-contain"
                 />
               </div>
               <span className="text-3xl font-black tracking-tighter">ETERNAL SHOP</span>
            </div>
            <p className="text-gray-400 text-lg max-w-sm font-medium">
              Bringing the puffiest designs and glossiest products to your doorstep since the beginning of eternity.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-black mb-6 text-orange-500 underline underline-offset-8 decoration-4">QUICK LINKS</h4>
            <ul className="space-y-4 font-semibold text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-black mb-6 text-orange-500 underline underline-offset-8 decoration-4">SOCIALS</h4>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map(i => (
                <a 
                  key={i} 
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl border-2 border-gray-700 hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all cursor-pointer flex items-center justify-center group"
                >
                   <span className="font-bold group-hover:scale-125 transition-transform">
                     {i === 1 ? 'f' : '#'}
                   </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-gray-800 pt-10 text-center">
          <p className="text-gray-500 font-bold tracking-widest text-sm uppercase">
            © 2024 ETERNAL SHOP CO. • WHATEVER YOU WANT
          </p>
        </div>
      </div>

      {/* Glossy background detail */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px] -z-0"></div>
    </footer>
  );
};

export default Footer;
