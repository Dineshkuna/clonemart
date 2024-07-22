import React from 'react';
import './Featuregrid.css';

const Features = () => {
  const features = [
    { title: 'Free Shipping', icon: '🚚', description: 'Lorem ipsum dolor sit amet.' },
    { title: 'Safe Payment', icon: '💳', description: 'Lorem ipsum dolor sit amet.' },
    { title: 'Secure Payment', icon: '🛡️', description: 'Lorem ipsum dolor sit amet.' },
    { title: 'Back Guarantee', icon: '🔄', description: 'Lorem ipsum dolor sit amet.' },
  ];

  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <div key={index} className="feature">
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
