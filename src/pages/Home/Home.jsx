import React from "react";
import "./Home.css";
import { Hero } from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Logos from "../../components/Logos/Logos";
import FeedBacks from "../../components/FeedBacks/FeedBacks";
import Connect from "../../components/Connect/Connect";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="Home-container">
      <Header />
      <Hero />
      <About />
      <Services />
      <Logos />
      <FeedBacks />
      <Connect />
      <Footer />
    </div>
  );
};

export default Home;
