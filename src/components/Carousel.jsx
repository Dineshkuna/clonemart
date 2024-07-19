import React, { useState, useEffect } from 'react';
import './Carousel.css';
import heroImage from '../Assets/Images/hero-img.png';
import phoneImage from '../Assets/Images/phone-08.png';
import watchImage from '../Assets/Images/watch-07.png';
import wirelessImage from '../Assets/Images/wireless-01.png';


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "50% Off For Your First Shopping",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      image: heroImage, 
    },
    {
      title: "50% Off For Your First Shopping",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      image: phoneImage, 
    },
    {
      title: "50% Off For Your First Shopping",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      image: watchImage, 
    },
    {
      title: "50% Off For Your First Shopping",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      image: wirelessImage, 
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div className="carousel-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <button className="visit-button">Visit Collections</button>
          </div>
          <div className="carousel-image">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
          </div>
        </div>
      ))}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;