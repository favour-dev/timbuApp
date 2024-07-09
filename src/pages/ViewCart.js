import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/viewcart.css'; 
import productImage1 from '../assets/images/image 11.png';
import productImage2 from '../assets/images/image 12.png';
import productImage3 from '../assets/images/image 23.png';
import productImage4 from '../assets/images/image 13.png';
import productImage5 from '../assets/images/image 15.png';
import productImage6 from '../assets/images/image 16.png';
import productImage7 from '../assets/images/image 17.png';
import productImage8 from '../assets/images/image 14 (1).png';
import productImage9 from '../assets/images/image 11.png';
import productImage10 from '../assets/images/image 25.png';
import productImage11 from '../assets/images/image 24.png';
import productImage12 from '../assets/images/image 14 (1).png';


const products = [
  { id: 1, name: 'Multivitamin Syrup', price: 2050, image: productImage1, description: 'Emzor Paracetamol, 500g', descriptions: 'Tabs blister X 12' },
  { id: 2, name: 'Vitamins & Supplement', price: 8120, image: productImage2, description: 'Feroglobin Capsule', descriptions: 'Tabs blister X 12' },
  { id: 3, name: 'Reproductive Health', price: 6450, image: productImage3, description: 'Cod Liver Oil', descriptions: '120ml' },
  { id: 4, name: 'Pain Relief', price: 10450, image: productImage4, description: 'Natures Field Vitamin C', descriptions: '120ml' },
  { id: 5, name: 'AntiBacterial', price: 10450, image: productImage5, description: 'Natures Field Vitamin C', descriptions: '120ml' },
  { id: 6, name: 'AntiMalaria', price: 8120, image: productImage6, description: 'Feroglobin Capsule', descriptions: 'Tab X 14' },
  { id: 7, name: 'Emzor Paracetamol', price: 10450, image: productImage7, description: 'Natures Field Vitamin C', descriptions: '100ml' },
  { id: 8, name: 'Feroglobin Capsule', price: 10450, image: productImage8, description: 'Natures Field Vitamin C', descriptions: '100ml' },
  { id: 9, name: 'Natures Field Vitamin C', price: 2050, image: productImage9, description: 'Emzor Paracetamol, 500g', descriptions: 'Tabs blister X 12' },
  { id: 10, name: 'Vitabiotic', price: 8120, image: productImage10, description: 'Augumentin Capsule',descriptions: '120ml'  },
  { id: 11, name: 'Biosea', price: 38450, image: productImage11, description: 'CardioacePlus Capsule' ,descriptions: 'X 60' },
  { id: 12, name: 'Natures Field', price: 7450, image: productImage12,description: 'Emzoe Evening Primerose' ,descriptions: 'Oil 100ml' },
];

const ViewCart = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="view-cart-page">
      <h2>Your cart details</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Items</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="product-info">
              <img src={product.image} alt={product.name} className="product-image " />
              <span>{product.description}</span>
            </td>
            <td>1</td>
            <td>₦ {product.price}</td>
            <td>₦ {product.price}</td>
          </tr>
        </tbody>
      </table>
      {/* <div className="cart-summary">
        <div className='cart-subtotal'><p>Cart subtotal</p></div>
        <div className='cart-price'><p>₦ {product.price}</p></div>
      </div> */}
      <div className='cart-summary'>
        <div className='cart-subtotal'>
            <p>Cart subtotal</p>
        </div>
        <div className='cart-price'>
            <div><p>₦ {product.price}</p></div>
        </div>
      </div>
      <div className="cart-actions">
        <Link to ='/available-products' >
            <button className="btn btn-secondary">Get more items</button>
        </Link>
        <Link to={`/delivery-details/${product.id}`}>
            <button className="btn btn-primary">Checkout now</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewCart;

