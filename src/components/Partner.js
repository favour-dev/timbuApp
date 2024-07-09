import React from 'react';
import '../styles/partner.css'; 
import HealthXcale from '../assets/images/HealthXcale.png';


const Partner = () => {
    return (
            <div>
                <div className='partner-container'>
                    <div><h2 className='our-partner'>Our Partners</h2></div>
                    <div className='partner-logo'>
                        <div className=''><img className='' alt='StandardCharatered' src={HealthXcale}/></div>
                        <div className=''><img className='' alt='SendStack' src={HealthXcale}/></div>
                        <div className=''><img className='' alt='Gokada' src={HealthXcale}/></div>
                        <div className=''><img className='' alt='Glovo' src={HealthXcale}/></div>
                        <div className=''><img className='' alt='Kwik' src={HealthXcale}/></div>
                        <div className=''><img className='' alt='Fez' src={HealthXcale}/></div>
                    </div>
                </div>
            </div>
    )
}

export default Partner;