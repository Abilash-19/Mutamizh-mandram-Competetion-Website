"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const sliderImageUrl = [
  {
    url: "/Assets/img/Pongal-Vizha-2024-15.jpeg",
  },
  {
    url: "/Assets/img/BIT02368.jpg",
  },
  {
    url: "/Assets/img/BIT02076.jpg",
  },
  {
    url: "/Assets/img/BIT02103.jpg",
  },
  {
    url: "/Assets/img/BIT02124.jpg",
  },
  {
    url: "/Assets/img/BIT04564.jpg",
  },
  {
    url: "/Assets/img/BIT09988.jpg",
  },
];

const Gallery = () => {
  return (
    <div className="container mx-auto min-h-[70vh]" id="gallery">
      <h1 className="text-3xl font-bold text-center my-12">காட்சிக்கூடம்</h1>

      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => (
          <div className="slider mx-3 " key={index}>
            {imageUrl.url ? (
              <img src={imageUrl.url} alt={`slider-image-${index}`} />
            ) : (
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
          </div>
        ))}
      </Carousel>

  
    </div>
  );
};

export default Gallery;
