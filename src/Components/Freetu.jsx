import React, { useState } from "react";
import "./Freetu.css";

const tutorials = [
  {
    img: "/Slider1img.png",
    title: "Convert your web layout theming easily with sketch zeplin extension",
    students: "1,027 students watched",
    reviews: "5.0 (982 reviews)",
  },
  {
    img: "/Slider2img.png",
    title: "Master responsive design using Figma components",
    students: "890 students watched",
    reviews: "4.8 (630 reviews)",
  },
  {
    img: "/Slider3img.png",
    title: "Create amazing UI animations using Framer Motion",
    students: "1,120 students watched",
    reviews: "4.9 (743 reviews)",
  },
];

function Freetu() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % tutorials.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + tutorials.length) % tutorials.length);
  };

  return (
    <div className="main-layout">
      {/* Slider Section */}
      <div className="slider-section">
        <div className="slider-window">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {tutorials.map((item, i) => (
              <div className="slide" key={i}>
                <img src={item.img} alt="Tutorial" />
                <div className="card-content">
                  <p className="reviews">⭐ {item.reviews}</p>
                  <h3>{item.title}</h3>
                  <span className="free-tag">Free tutorial</span>
                  <p className="students">{item.students}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="nav-buttons">
          <button onClick={prevSlide}>←</button>
          <button onClick={nextSlide}>→</button>
        </div>
      </div>

      {/* Fixed Text */}
      <div className="fixed-text">
        <h5 className="sub-title">FREE TUTORIAL</h5>
        <h2>
          More than thousand <br />
          of free tutorial upload <br />
          every weeks
        </h2>
        <p>
          Get your tests delivered at let home collect sample <br />
          from the victory of the managments that supplies <br />
          best design system guidelines ever. Get your tests <br />
          delivered at let home collect samples.
        </p>
        <button className="explore-button">Explore details</button>
      </div>
    </div>
  );
}

export default Freetu;
