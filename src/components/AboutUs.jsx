import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import image1 from './images/gallery/1.jpg';
import image2 from './images/gallery/2.jpg';
import image3 from './images/gallery/3.jpg';
import image4 from './images/gallery/4.jpg';
import image5 from './images/gallery/5.jpg';
import image6 from './images/gallery/6.jpg';
import image7 from './images/gallery/7.jpg';
import image8 from './images/gallery/8.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

export const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about-us-container">
      <h2 id="about-us-title">About Us</h2>
      <p id="about-us-description">
        Welcome to <span id="about-us-highlight">Bakery Addiction</span>!
        <br />
        We are a passionate team of bakers, dedicated to bringing you the freshest, most indulgent treats—from cakes and cookies to cheesecakes and bons. Our mission is to spread joy through our baked delights!
      </p>


      <div id="order-conditions" className="mt-6">
        <h3 className="text-lg font-bold">Order Conditions</h3>
        <ul className="custom-list pl-6 mt-2 text-gray-700">
          <li>Custom orders are to be placed on call.</li>
          <li>All orders must be placed at least one day prior to the expected delivery date.</li>
          <li>Placed orders cannot be cancelled.</li>
          <li>
            If <strong>Cash on Delivery</strong> is selected as the payment method, customers must bear the delivery charges.
          </li>
        </ul>
      </div>

      <div id="image-marquee">
        <div
          className="marquee-content"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`marquee-item ${index === currentIndex ? 'highlight' : ''
                }`}
            >
              <img src={image} alt={`Gallery ${index}`} className="marquee-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};