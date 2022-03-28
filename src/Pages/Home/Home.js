import React from "react";
import "./Home.css";
import HeroSection from "../../Components/HeroSection/HeroSection";
import BlogPostsCards from "../../Components/BlogPostsCards/BlogPostsCards";
import Footer from "../../Components/Footer/Footer"

const Home = () => {
  return (
    <>
      <HeroSection />
      <BlogPostsCards />
      <Footer />
    </>
  );
};

export default Home;
