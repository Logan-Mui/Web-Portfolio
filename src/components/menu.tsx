import { useState, useEffect, type JSX } from 'react';
import headshot from "../assets/photos/headshot.jpg";
import singing from "../assets/photos/singing.jpg";
import career_fair from "../assets/photos/career_fair.jpg";
import bear from "../assets/photos/bear.jpg";
import "../styles/splash/menu.css";

function Menu(): JSX.Element {
  const images: string[] = [headshot, singing career_fair, bear];
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
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
        <a href="">COMMUNITY</a>
        <a href="">ABOUT ME</a>
        <a href="">WORK/CV</a>
        <a href="">PROJECTS</a>
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