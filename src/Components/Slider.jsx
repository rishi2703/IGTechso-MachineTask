import "../Components/Slider.css";
import { useState } from "react";


const tutorials = [
  {
    title: "How to work with prototype design with adobe xd featuring tools",
    rating: " ⭐⭐⭐⭐⭐5.0(292 reviews)",
    views: "2,588 students watched",
    img: "/Slider1img.png",
  },
  {
    title:
      "create multiple artboard by using figma prototyping tools development ",
    rating: " ⭐⭐⭐⭐4 (324)",
    views: "3,532 student watched",
    img: "/Slider2img.png",
  },
  {
    title:
      "Convert your web layout theming easily with sketch zeplin extension",
    rating: " ⭐⭐⭐⭐⭐ 5.0 (392 reviews)",
    views: "1,037 student watched",
    img:"/Slider3img.png"
  },

  {
    title:
      "create multiple artboard by using figma prototyping tools development ",
    rating: "⭐⭐⭐⭐  4 (324)",
    views: "3,532 student watched",
    img: "/Slider2img.png",
  },
  {
    title:
      "Convert your web layout theming easily with sketch zeplin extension",
    rating: " ⭐⭐⭐⭐⭐ 5.0 (392 reviews)",
    views: "1,037 student watched",
    img:"/Slider3img.png"
  },
    {
    title: "How to work with prototype design with adobe xd featuring tools",
    rating: " ⭐⭐⭐⭐⭐ 5.0(292 reviews)",
    views: "2,588 students watched",
    img: "/Slider1img.png",
  },
];

export default function Slider() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

 const nextSlide = () => {
    setStartIndex((prev) => (prev + visibleCount) % tutorials.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      (prev - visibleCount + tutorials.length) % tutorials.length
    );
  };

 const visibleSlides = Array.from({ length: visibleCount }).map((_, i) => {
    return tutorials[(startIndex + i) % tutorials.length];
  
  })
   return (
    <div className="Slider-Container">
        <p className="gold"> QUALITY FEATURE </p>
      <h2 className="Slider-Title">Tutorials that people love most</h2>
      <div className="Slider-wrapper">
        <button className="nav-btn left" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="card-wrapper">
          {visibleSlides.map((tutorial, i) => (
            <div className="card" key={i}>
              <img className="card-img" src={tutorial.img} alt={tutorial.title} />
              <div className="card-content">
                <p className="rating">{tutorial.rating}</p>
                <h3>{tutorial.title}</h3>
                <p className="views">{tutorial.views}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-btn right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
