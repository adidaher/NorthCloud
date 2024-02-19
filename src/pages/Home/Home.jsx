import React, { lazy, Suspense } from "react";
import "./Home.css";
import { Hero } from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
//import About from "../../components/About/About";
//import Services from "../../components/Services/Services";
//import Logos from "../../components/Logos/Logos";
//import FeedBacks from "../../components/FeedBacks/FeedBacks";
//import Connect from "../../components/Connect/Connect";
//import Footer from "../../components/Footer/Footer";

const About = lazy(() => import("../../components/About/About"));
const Services = lazy(() => import("../../components/Services/Services"));
const Logos = lazy(() => import("../../components/Logos/Logos"));
const FeedBacks = lazy(() => import("../../components/FeedBacks/FeedBacks"));
const Connect = lazy(() => import("../../components/Connect/Connect"));
const Footer = lazy(() => import("../../components/Footer/Footer"));

const Home = () => {
  return (
    <div className="Home-container">
      <Header />
      <Hero />
      <Suspense fallback={<h1>Loading...</h1>}>
        <About />
        <Services />
        <Logos />
        <FeedBacks />
        <Connect />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
