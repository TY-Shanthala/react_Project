import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import img1 from "../utils/images/1.webp"
import img2 from '../utils/images/2.webp';
import img3 from '../utils/images/soldier.webp';


const Carousel = () => {
  const images = [
    {
      src: img1 ,
      title: "First slide label",
      text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      src:  img2 ,
      title: "Second slide label",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      src:  img1 ,
      title: "Third slide label",
      text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      src:  img3 ,
      title: "Fifth slide label",
      text: "Cras ultricies ligula sed magna dictum porta.",
    },
    {
      src:  img2 ,
      title: "Fourth slide label",
      text: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
    },
    {
      src:  img3 ,
      title: "Fifth slide label",
      text: "Cras ultricies ligula sed magna dictum porta.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle next slide
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle previous slide
  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Box
      position="relative"
      top="15%"
      // width="100%"
      bgcolor="black"
      overflow="hidden"
      className="h-[100vh] sm:60vh md:70vh"
    //   sx={{ height: { xs: "60vh", md: "70vh" } }}
    >
      {/* Carousel Inner */}
      {images.map((image, index) => (
        <Box
          key={index}
          className={`absolute top-1 left-0 w-full ${index === activeIndex ? "block" : "hidden"} z-[1]`}
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-screen h-screen object-cover"
          />
          <Box
            className="absolute bottom-0 left-0 right-0 py-2 px-3 bg-black bg-opacity-50 text-white text-center"
          >
            <Typography variant="h6">{image.title}</Typography>
            <Typography variant="body2">{image.text}</Typography>
          </Box>
        </Box>
      ))}

      {/* Left control */}
      <IconButton
        onClick={handlePrev}
        size="large"
        sx={{
          position: "absolute",
          top: "50%",
          left: "16px",
          transform: "translateY(-50%)",
          color: "white",
          zIndex: 2,
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Right control */}
      <IconButton
        onClick={handleNext}
        size="large"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white z-[2]"
        // sx={{
        //   position: "absolute",
        //   top: "50%",
        //   right: "16px",
        //   transform: "translateY(-50%)",
        //   color: "white",
        //   zIndex: 2,
        // }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;
