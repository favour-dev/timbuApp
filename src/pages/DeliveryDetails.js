import React from 'react';
import '../styles/deliverydetails.css'; 
import { useParams } from 'react-router-dom';
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

const DeliveryDetails = () => {
    const { id } = useParams(); 
    const product = products.find(p => p.id === parseInt(id)); 

  

  if (!product) {
    return <div>Product not found</div>;
  }
    return(
        <div className='delivery-container'>
            <div className="delivery-form">
                <h3>Select delivery option</h3>
                <div className="delivery-options">
                    <div className="delivery-option">
                        <input type="radio" id="ship-to-you" name="delivery" defaultChecked />
                        <label htmlFor="ship-to-you">Ship to you</label>
                    </div>
                    <div className="delivery-option">
                        <input type="radio" id="pick-up" name="delivery" />
                        <label htmlFor="pick-up">Pick up yourself</label>
                    </div>
                </div>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="First Name" required />
                        <input type="text" placeholder="Last Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Address" required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="City (e.g., Lekki)" required />
                        <select >
                            <option className='select' value="Lagos">Lagos</option>
                            <option className='select' value="Abuja">Abuja</option>
                            <option className='select' value="Portharcourt">Portharcourt</option>
                            <option className='select' value="Uyo">Uyo</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Phone Number" required />
                    </div>
                    <div className="form-group">
                        <input type="checkbox" id="save-info" />
                        <label htmlFor="save-info">Save this information for next time</label>
                    </div>
                    <div className="form-group">
                        <label>Shipping method</label>
                        <div className="shipping-method">
                            <input type="radio" id="standard-shipping" name="shipping" defaultChecked />
                            <label htmlFor="standard-shipping">Standard shipping (delivered within 1 to 2 days) <span>₦ 4,156</span></label>
                        </div>
                    </div>
                </form>
            </div>
            <div className="order-summary">
                <div className="order-item">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div>
                        <p>{product.description}</p>
                        <p>₦ {product.price}</p>
                    </div>
                </div>
                <div className="discount-code">
                    <input type="text" placeholder="Discount code" />
                    <button className='Apply'>Apply</button>
                </div>
                <div className="summary">
                    <div className="summary-item">
                        <span>Subtotal</span>
                        <span>₦ 8,120</span>
                    </div>
                    <div className="summary-item">
                        <span>Shipping</span>
                        <span>₦ 4,156</span>
                    </div>
                    <div className="summary-item">
                        <span>VAT</span>
                        <span>₦ 801.72</span>
                    </div>
                    <div className="total">
                        <span>Total</span>
                        <span>₦ 13,077.72</span>
                    </div>
                </div>
                <button className="proceed-btn">Proceed to pay</button>
            </div>
        </div>
    )
} 

export default DeliveryDetails;