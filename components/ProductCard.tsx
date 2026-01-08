
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const isBDT = product.id === 25718;

  return (
    <div 
      onClick={() => onViewDetails(product)}
      className="group bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-3 md:p-4 bubbly-border product-card-glow transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col h-full cursor-pointer"
    >
      {/* Glossy Overlay */}
      <div className="absolute top-0 left-0 w-full h-full glossy-effect pointer-events-none opacity-50"></div>
      
      {/* Hot Badge */}
      {product.isHot && (
        <div className="absolute top-3 right-3 md:top-6 md:right-6 z-20 bg-orange-500 text-white font-black text-[10px] md:text-sm px-2 md:px-3 py-0.5 md:py-1 rounded-full border-2 border-black rotate-12 animate-pulse">
          HOT!
        </div>
      )}

      {/* Image Container */}
      <div className="aspect-square rounded-[1.2rem] md:rounded-[2rem] overflow-hidden mb-3 md:mb-6 bg-green-50 border-2 border-black/5 relative group">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Details */}
      <div className="px-1 flex flex-col flex-1">
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#2D5A27]/60 mb-0.5 md:mb-1 block">
          {product.category}
        </span>
        <h3 className="text-sm md:text-2xl font-black text-[#1a1a1a] mb-1 md:mb-2 leading-tight line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex flex-col">
            <span className="text-[10px] md:text-sm font-bold text-[#1a1a1a]/40">Price</span>
            <span className="text-lg md:text-3xl font-black text-orange-600">
              {isBDT ? `${product.price} TK` : `$${product.price}`}
            </span>
          </div>
          
          <div className="text-orange-500 font-black text-xs md:text-sm group-hover:underline">
            VIEW ITEM →
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
