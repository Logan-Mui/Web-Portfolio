import React, { useEffect, useRef, useState } from "react";
import "../styles/community/carousel.css"; // we'll style separately

interface Slide {
  id: number;
  content: React.ReactNode;
}

interface VerticalCarouselProps {
  slides: Slide[];
  autoSlideInterval?: number; // milliseconds
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({
  slides,
  autoSlideInterval = 5000,
}) => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = slides.length;

  // Auto-slide
  useEffect(() => {
    if (autoSlideInterval > 0) {
      timeoutRef.current = setInterval(() => {
        handleNext();
      }, autoSlideInterval);
    }

    return () => {
      if (timeoutRef.current) 
        clearInterval(timeoutRef.current);
    };
  }, [current]);

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
      setAnimating(false);
    }, 500); // match fade duration in CSS
  };

  const handlePrev = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + total) % total);
      setAnimating(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 500);
  };

  return (
    <div className="carousel-container">
      <button className="prev" onClick={handlePrev}>
        &#9650;
      </button>
      <button className="next" onClick={handleNext}>
        &#9660;
      </button>

      <div className="slides-wrapper">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`slide ${i === current ? "active" : ""} ${
              animating ? "fade" : ""
            }`}
          >
            {slide.content}
          </div>
        ))}
      </div>

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default VerticalCarousel;
