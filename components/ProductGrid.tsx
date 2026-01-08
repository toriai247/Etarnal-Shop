
import React from 'react';
import { Product } from '../types.ts';
import ProductCard from './ProductCard.tsx';

interface ProductGridProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onViewDetails }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-10">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
