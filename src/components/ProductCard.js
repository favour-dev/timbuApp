// import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/productcard.css'; 

const ProductCard = ({ product, showAddToCart, showPrice, alignText }) => {
  return (
    <div className='product-card-container'>
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className='product-details' style={{ textAlign: alignText }}>
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-descriptions">{product.descriptions}</p>
        {showPrice && <p className="product-price">${product.price}</p>}
        {showAddToCart && (
          <Link to={`/viewcart/${product.id}`} className="buy-button">
            Add to Cart
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductCard;