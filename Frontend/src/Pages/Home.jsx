import React from "react";
import Header from "../Components/Header";
import Testimonial from "../Components/Testimonial";
import About from "../Components/About";
import ExplorePackage from "../Components/ExplorePackage";
import Contact from "../Components/Contact";

function Home() {
  return (
    <div>
      <Header />
      <ExplorePackage />
      <Testimonial />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
