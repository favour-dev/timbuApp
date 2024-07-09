import React from 'react';
import ProductGrid from '../components/ProductGrid'; // Adjust path based on actual location
import '../styles/availableproduct.css'; // Adjust path based on actual locatioimport productImage1 from '../assets/images/image 5.png';
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
  { id: 1, name: 'Paracetamol', price: 2050, image: productImage1 ,description: 'Emzor Paracetamol, 500g', descriptions: 'Tabs blister X 12' },
  { id: 2, name: 'Vitabiotic', price: 8120, image: productImage2, description: 'Feroglobin Capsule', descriptions: 'Tabs blister X 12' },
  { id: 3, name: 'Biosea', price: 6450, image: productImage3, description: 'Cod Liver Oil',descriptions: '120ml' },
  { id: 4, name: 'Natures Field', price: 10450, image: productImage4, description: 'Natures Field Vitamin C' ,descriptions: '120ml' },
  { id: 5, name: 'Paracetamol', price: 10450, image: productImage5, description: 'Natures Field Vitamin C',descriptions: '120ml' },
  { id: 6, name: 'Vitabiotic', price: 8120, image: productImage6, description: 'Feroglobin Capsule',descriptions: 'Tab X 14' },
  { id: 7, name: 'Biosea', price: 10450, image: productImage7, description: 'Natures Field Vitamin C' ,descriptions: '100ml' },
  { id: 8, name: 'Natures Field', price: 10450, image: productImage8, description: 'Natures Field Vitamin C' ,descriptions: '100ml'},
  { id: 9, name: 'Paracetamol', price: 2050, image: productImage9, description: 'Emzor Paracetamol, 500g',descriptions: 'Tabs blister X 12' },
  { id: 10, name: 'Vitabiotic', price: 8120, image: productImage10, description: 'Augumentin Capsule',descriptions: '120ml'  },
  { id: 11, name: 'Biosea', price: 38450, image: productImage11, description: 'CardioacePlus Capsule' ,descriptions: 'X 60' },
  { id: 12, name: 'Natures Field', price: 7450, image: productImage12,description: 'Emzoe Evening Primerose' ,descriptions: 'Oil 100ml' },
];

const AvailableProduct = () => {
  // console.log('Rendering AvailableProduct with products:', products);

  return (
    <div >
      <h2 className='availableproducts'>Available Products</h2>
      <div className="available-products-page four-column"> 
        <ProductGrid products={products} showAddToCart={true} className="four-column" showPrice={true} alignText="left" />
      </div>
    </div>
  );
};

export default AvailableProduct;