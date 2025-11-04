import React from "react";
import ReactDom from "react-dom/client";
import Netflix_card from "./MyComponents/netflix/Netflix_card";
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
// import Time from "./Time";
// import Card from "./MyComponents/Card"

//  const data = [
//     { title: "Lion", description: "With supporting text below as a natural lead-in to additional content.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlO97dcJrFi3bWy2QqpPuecz2h-FZ4gCbWqQ&s" },
//    { title: "Lion", description: "With supporting text below as a natural lead-in to additional content.", image: "https://www.indianapoliszoo.com/wp-content/uploads/2024/04/Tiger-Pavel-Carla-Knapp-2048x1595.webp" },
//    { title: "Lion", description: "With supporting text below as a natural lead-in to additional content.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlO97dcJrFi3bWy2QqpPuecz2h-FZ4gCbWqQ&s" },
//    { title: "Lion", description: "With supporting text below as a natural lead-in to additional content.", image: "https://img.freepik.com/free-photo/african-lion-portrait-warm-light_475641-46.jpg?semt=ais_hybrid&w=740&q=80" },
//    { title: "Lion", description: "With supporting text below as a natural lead-in to additional content.", image: "https://www.indianapoliszoo.com/wp-content/uploads/2024/04/Tiger-Pavel-Carla-Knapp-2048x1595.webp" },
//    { title: "Lion", description: "With supporting text below as a natural lead-in to additional content.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlO97dcJrFi3bWy2QqpPuecz2h-FZ4gCbWqQ&s" },
//    { title: "Lion", description: "With supporting text below as a natural lead-in to additional content.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlO97dcJrFi3bWy2QqpPuecz2h-FZ4gCbWqQ&s" },
//    { title: "Lion", description: "With supporting text below as a natural lead-in to additional content.", image: "https://www.indianapoliszoo.com/wp-content/uploads/2024/04/Tiger-Pavel-Carla-Knapp-2048x1595.webp" },
//    { title: "Lion", description: "With supporting text below as a natural lead-in to additional content.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlO97dcJrFi3bWy2QqpPuecz2h-FZ4gCbWqQ&s" },
//    { title: "Lion", description: "With supporting text below as a natural lead-in to additional content.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlO97dcJrFi3bWy2QqpPuecz2h-FZ4gCbWqQ&s" },
//    { title: "Lion", description: "With supporting text below as a natural lead-in to additional content.", image: "https://img.freepik.com/free-photo/african-lion-portrait-warm-light_475641-46.jpg?semt=ais_hybrid&w=740&q=80" },
//    { title: "Lion", description: "With supporting text below as a natural lead-in to additional content.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlO97dcJrFi3bWy2QqpPuecz2h-FZ4gCbWqQ&s" },
//   ];


class App extends React.Component {
  render() {
    return (
      <>
        
    {/* netflix cards */}
        {/* <Netflix_card CardData = {data} /> */}
        {/* portfolio */}
        <Header_pf />
        <Hero_section />
        <About_pf />
        <WorkEx_pf />
        <Education_pf />
        <Skills />
        <Footer_pf />
        {/* <Project_pf /> */}
        {/* <Contact_pf /> */}
      </>
    );
  }
}
export default App;

