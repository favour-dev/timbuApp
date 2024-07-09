import React from 'react';
import '../styles/hero.css'; 
import Pharmacist from '../assets/images/Pharmacist.webp';
import Image1 from '../assets/images/pexels-pixabay-39866.jpg';
import Image2 from '../assets/images/pexels-pixabay-354951.jpg';
import Image3 from '../assets/images/pexels-olly-762080.jpg';
import Image4 from '../assets/images/pexels-hasibullah-zhowandai-248954-819530.jpg';
import HealthXcale from '../assets/images/HealthXcale.png';
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <div className='hero-section'>
            <div className='hero-container'>
                <div className='hero-content'>
                    <div className='hero-writing'>
                        <h1>Waste no time on the Queue, We will bring the pharmacy to you</h1>
                    </div>
                    <div>
                        <p className='shop-prescription'>Shop for prescription, medication, vitamins and over-the-counter supplies, all in one place</p>
                    </div>
                    <div className='hero-image mobile-img'>
                        <img className='pharmacist-img'alt='Pharmacist' src={Pharmacist} />
                    </div>
                    <div>
                        <Link to ='/available-products' >
                            <button className='start-shopping'>Start Shopping Now</button>
                        </Link>
                    </div>
                    <div>
                        <div><p className='satisfied-customer'>24,000+ <br/>customers satisfied</p></div>
                        <div className='small-circles'>
                            <div>
                                <div className='circle'><img className='circle-image' alt='cirlceImage' src={Image1}/></div>
                            </div>
                            <div>
                                <div className='circle'><img className='circle-image' alt='cirlceImage' src={Image2}/></div>
                            </div>
                            <div>
                                <div className='circle'><img className='circle-image' alt='cirlceImage' src={Image3}/></div>
                            </div>
                            <div>
                                <div className='circle'><img className='circle-image' alt='cirlceImage' src={Image4}/></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='hero-image desktop-img'>
                    <img className='pharmacist-img'alt='Pharmacist' src={Pharmacist} />
                </div>
            </div>
            <div className='good-price-container'>
                <div className='good-price'>
                    <div><h2>Good Price</h2></div>
                    <div><img className='logo-img logo-line' alt='Logo' src={HealthXcale} /></div>
                    <div><h2>Super Fast</h2></div>
                    <div><img className='logo-img logo-line' alt='Logo' src={HealthXcale} /></div>
                    <div><h2>Easy Shopping</h2></div>
                </div>
            </div>
        </div>
        

    )
}

export default Hero;