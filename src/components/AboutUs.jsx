import React, { useEffect, useRef } from 'react';
import image1 from './images/gallery/1.jpg';
import image2 from './images/gallery/2.jpg';
import image3 from './images/gallery/3.jpg';
import image4 from './images/gallery/4.jpg';
import image5 from './images/gallery/5.jpg';
import image6 from './images/gallery/6.jpg';
import image7 from './images/gallery/7.jpg';
import image8 from './images/gallery/8.jpg';
import image9 from './images/gallery/9.jpg';
import instagram from './images/instagram.jpg';
import './styling.css';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

export const AboutUs = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let scrollAmount = 0;

    const scrollMarquee = () => {
      scrollAmount += 1;
      if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
        marquee.scrollLeft = 0; // Reset scroll to create a seamless loop
      } else {
        marquee.scrollLeft += 1; // Increment scroll position
      }
    };

    const interval = setInterval(scrollMarquee, 20); // Adjust speed by changing the interval time

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div id="about-us-container">
      <h2 id="about-us-title">About Monica's Food Studio</h2>
      <p id="about-us-description">
        Welcome to <span id="about-us-highlight">Monica's Food Studio</span>!
        <br />
        Hi, I'm Monica, and I am delighted to bring you the freshest, most indulgent treats—from cakes and cookies to bread and bons. My mission is to spread joy through my baked delights! All the items are freshly made <strong>without eggs</strong>.
      </p>
      <p>
        Follow me on Instagram{' '}
        <a href="https://www.instagram.com/monicasfoodstudio/#" target="_blank" rel="noopener noreferrer">
          @monicasfoodstudio
        </a>
      </p>
      <a href="https://www.instagram.com/monicasfoodstudio/#" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram: Monica's Food Studio" />
      </a>

      <div id="order-conditions" className="mt-6">
        <h3 className="text-lg font-bold">Order Conditions</h3>
        <ul className="custom-list pl-6 mt-2 text-gray-700">
          <li>Custom orders are to be placed on call.</li>
          <li>All orders must be placed at least one day prior to the expected delivery date.</li>
          <li>Placed orders cannot be cancelled.</li>
          <li>Delivery charges extra.</li>
          <li>Advance payment. No refunds</li>
        </ul>
      </div>

      <div id="image-marquee" ref={marqueeRef} className="marquee-container">
        <div className="marquee-content">
          {images.concat(images).map((image, index) => (
            <div key={index} className="marquee-item">
              <img src={image} alt={`Monica's Food Studio - Gallery ${index}`} className="marquee-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};