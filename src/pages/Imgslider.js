import React, { useEffect, useState } from "react";
import "./imageslider.css";

const slides = [
  {
    src: "https://picsum.photos/id/11/600/400",
    alt: "image 1 for slider",
  },
  {
    src: "https://picsum.photos/id/13/600/400",
    alt: "image 2 for slider",
  },
  {
    src: "https://picsum.photos/id/29/600/400",
    alt: "image 3 for slider",
  },
];

function Imgslider() {
  const [currentImg, setCurrentImg] = useState(0);

  const nextSlide = () => {
    setCurrentImg((currentImg + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentImg((currentImg - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentImg]);

  return (
    <div className="carousel">
      <i className="bx bx-chevron-left-circle" onClick={prevSlide}></i>
      {slides.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={item.src}
          className={idx === currentImg ? "slide" : "slide slide-hidden"}
        />
      ))}
      <i className="bx bx-chevron-right-circle" onClick={nextSlide}></i>
    </div>
  );
}

export default Imgslider;
