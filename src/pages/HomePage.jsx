import React from "react";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import Navbar from "../Components/Navbar";
import Gallery from "./Gallery";
import Hero from "../Components/Hero";
import { Outlet } from "react-router-dom";
import PageLayout from "../Components/PageLayout";

function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <Gallery />
      <Testimonial />
      <Faq />
    </PageLayout>
  );
}

export default HomePage;
