import { useState, useEffect, type JSX } from 'react';

import headshot from "../../public/photos/headshot.jpg";
import singing from "../../public/photos/singing.jpg";
import career_fair from "../../public/photos/career_fair.jpg";
import bear from "../../public/photos/bear.jpg";

import "../styles/splash/menu.css";

function Menu(): JSX.Element {
  // For now, just use pork multiple times to test the rotation
  // Replace with your actual images once they're imported
  const images: string[] = [headshot,singing,career_fair,bear]; // Add more images here: [pork, image2, image3, image4]
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    // Only run interval if we have multiple images
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex: number) => 
        (prevIndex + 1) % images.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="Menu">
      <div className="MenuLinks">
        <a href="#Community">COMMUNITY</a>
        <a href="#AboutMe">ABOUT ME</a>
        <a href="#WorkCv">WORK/CV</a>
        <a href="#Projects">PROJECTS</a>
      </div>
      <div className="PicOfMe">
        {images.map((img: string, index: number) => (
          <img 
            key={index}
            src={img} 
            alt={`Slide ${index + 1}`}
            className={index === currentImageIndex ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu;