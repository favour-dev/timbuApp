import React from 'react';
import HealthXcale from '../assets/images/HealthXcale.png';
import '../styles/footer.css'


const Footer = () => {
    return (
        <footer>
            <div className='footer-color'>
                <div className='footer-container'>
                    <div>
                        <div className='logo footer-menu'><img className='logo-img' alt='Logo' src={HealthXcale} /></div>
                        <div className='footer-menu'><p className='footer-writing'>Keeping you healthy <br></br> one supply at a time</p></div>
                    </div>
                    <div>
                        <div><h5 className='footer-writing'>Address</h5></div>
                        <div className='footer-menu'><p className='footer-writing'>2, William Street, <br></br>Yaba, Lagos</p></div>
                    </div>
                    <div>
                        <div><h5 className='footer-writing'>Quick Links</h5></div>
                        <div className='footer-menu'>
                            <div><a className='footer-writing' href='www.github.com'>About Us</a></div>
                            <div><a className='footer-writing' href='www.github.com'>Products</a></div>
                            <div><a className='footer-writing' href='www.github.com'>FAQs</a></div>
                        </div>
                    </div>
                    <div>
                        <div><h5 className='footer-writing'>Contact Us</h5></div>
                        <div className='footer-menu'>
                            <p className='footer-writing'>support@HealthXcale.ng <br></br> +234-70-123-456 <br></br> +234-70-123-456</p>
                        </div>
                    </div>
                </div>
               <hr/>
               <div className='rights-reserved'><p>AllrightsReserved@HealthXcale2024</p></div>
            </div>
        </footer>

    )
}
export default Footer;
