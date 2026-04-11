import { useState, useEffect } from "react";

function Slideshow() {
  const images = [
    "./assets/image1",
    "./assets/image2",
    "./assets/image3"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <img
        src={images[index]}
        alt="slideshow"
        style={{
          width: "100%",
          maxHeight: "300px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />
    </div>
  );
}

export default Slideshow;