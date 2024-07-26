import React, { useEffect, useRef, useState } from "react";

const Highlights = () => {
  // Ref to access the carousel items container
  const carouselItemsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of items to display in the carousel
  const items = [
    {
      src: "/images/annual_sports_day.jpg",
      alt: "Annual Sports Day",
      text: "Annual Sports Day - Celebrating Excellence in Sports",
    },
    {
      src: "/images/Science_Exhibition.jpg",
      alt: "Science Exhibition",
      text: "Science Exhibition - Showcasing Student Innovations",
    },
    {
      src: "/images/Cultural_Fest.jpg",
      alt: "Cultural Fest",
      text: "Cultural Fest - Embracing Diversity and Creativity",
    },
  ];

  // Function to handle the previous button click
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Function to handle the next button click
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  // useEffect to update the carousel's transform property whenever the current index changes
  useEffect(() => {
    const carouselItems = carouselItemsRef.current;
    const offset = -currentIndex * 100;
    if (carouselItems) {
      carouselItems.style.transform = `translateX(${offset}%)`;
    }
  }, [currentIndex]);

  return (
    <section id="highlights">
      <div className="highlights-content">
        <h2>Key Highlights</h2>
        <p>
          Here are some of the key events and highlights at Springdale Public
          School.
        </p>
      </div>
      <div className="carousel">
        <div className="carousel-items" ref={carouselItemsRef}>
          {items.map((item, index) => (
            <div className="carousel-item" key={index}>
              <img src={item.src} alt={item.alt} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <button className="carousel-prev" onClick={handlePrevClick}>
          &#10094;
        </button>
        <button className="carousel-next" onClick={handleNextClick}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Highlights;
