import React from 'react';
import './AboutUs.scss';

const AboutUs: React.FC = () => {

  return (
    <div className={'about-container'}>
      <h2>About Us</h2>
      <div className={'about-content'}>
        <span>
        Karma Canvas Australia are a family-run and Australian-owned 
        bell tent hire and sales company based conveniently in Sydney’s 
        Inner West. We specialise exclusively in the design, sales and 
        rental of our beautiful ‘ZIG’ (Zipped-In Groundsheet) 100% 
        cotton canvas bell tents, wood-burning stoves and bell tent camping accessories.
        At Karma Canvas we’re very proud of our carefully sourced, sustainable 
        products and hope that you too take inspiration from the outdoor glamping 
        lifestyle. Spending large amounts of time outdoors living and breathing 
        our gear means we have a huge amount of bell tent knowledge and many years 
        of camping experience to share, so please contact us if you have any questions 
        and we’ll be happy to help!
        </span>
      </div>
    </div>
  )
}

export default AboutUs