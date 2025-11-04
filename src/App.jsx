import React from "react";
import ReactDom from "react-dom/client";
import Header_pf from "./MyComponents/portfolio/Header_pf";
import Carousel_pf from "./MyComponents/portfolio/Hero_section";
import About_pf from "./MyComponents/portfolio/About_pf";
import WorkEx_pf from "./MyComponents/portfolio/WorkEx_pf";
import Education_pf from "./MyComponents/portfolio/Education_pf";
import Skills from "./MyComponents/portfolio/Skills_pf";
import Contact_pf from "./MyComponents/portfolio/Contact_pf";
import Project_pf from "./MyComponents/portfolio/Projects_pf";
import Hero_section from "./MyComponents/portfolio/Hero_section";
import Footer_pf from "./MyComponents/portfolio/Footer_pf";

class App extends React.Component {
  render() {
    return (
      <>
        <Header_pf />
        <Hero_section />
        <About_pf />
        <WorkEx_pf />
        <Education_pf />
        <Skills />
        <Footer_pf />
      </>
    );
  }
}
export default App;
