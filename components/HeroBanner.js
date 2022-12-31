import React from 'react';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  const handleClick = () => {
      window.scrollTo(
        {top: 500,
          left: 0,
          behavior: "smooth"
        });
    };

return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3 className='color-blue'>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />
 

        <div>
          <button onClick={handleClick}>{heroBanner.buttonText}</button>
       
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner