import { useState, useEffect } from "react";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.webp";
import image4 from "./assets/image4.webp";
import image5 from "./assets/image5.webp";
import image6 from "./assets/image6.png";
import image7 from "./assets/image7.webp";
import image8 from "./assets/image8.webp";
import "./slide.css";

function Slideshow() {
  const images = [image1, image2, image3,image4,image5,image6,image7,image8];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="slideshow-wrapper">

      {/* Images */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide-${i}`}
          className={`slideshow-img ${i === index ? "active" : ""}`}
        />
      ))}

      {/* Gradient overlay */}
      <div className="slideshow-overlay" />

      {/* Left / Right arrows */}
      <button className="slide-arrow left" onClick={prev}>‹</button>
      <button className="slide-arrow right" onClick={next}>›</button>

      {/* Dot indicators */}
      <div className="slideshow-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot-btn ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

    </div>
  );
}

export default Slideshow;