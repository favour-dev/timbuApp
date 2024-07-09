import React from 'react';
import ProductCard from './ProductCard';
import '../styles/productgrid.css'; 

// 
const ProductGrid = ({ products, className, showAddToCart, showPrice, alignText }) => {
    return (
      
      <div className={`product-grid ${className}`}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} showAddToCart={showAddToCart} showPrice={showPrice} alignText={alignText} />
        ))}
      </div>
    );
  };
export default ProductGrid;