import { useState } from "react";
import "./QualityFeature.css";

const courseData = [
  {
    title: "Professional graphic design tutorial full course with exercise file",
    description: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    rating: 5,
    reviews: 392,
    students: 2538,
    
    details: [ "How to reduce file pixel dimentions without loosing quality",
      "Create vector file from restarize layer styles",
      "How to make logo pixel perfects with different extension",
      "Make color gradient with photoshop build-in tools"]
  },
  {
    title: "Become ultimate photoshop expert within 30 days",
    description: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    rating: 5,
    reviews: 392,
    students: 2538,
    
    details: [
      "How to reduce file pixel dimentions without loosing quality",
      "Create vector file from restarize layer styles",
      "How to make logo pixel perfects with different extension",
      "Make color gradient with photoshop build-in tools"
    ]
  },
  {
    title: "After effects animation tutorial with photoshop documents",
    description: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    rating: 5,
    reviews: 392,
    students: 2538,
  
    details: ["How to reduce file pixel dimentions without loosing quality",
      "Create vector file from restarize layer styles",
      "How to make logo pixel perfects with different extension",
      "Make color gradient with photoshop build-in tools"]
  },
  {
    title: "Adobe illustrator vector art design mockup",
    description: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    rating: 5,
    reviews: 392,
    students: 2538,
   
    details: ["How to reduce file pixel dimentions without loosing quality",
      "Create vector file from restarize layer styles",
      "How to make logo pixel perfects with different extension",
      "Make color gradient with photoshop build-in tools"]
  }
];

export default function QualityFeature() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleExpand = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="course-list-wrapper">
      <h4 className="section-label">QUALITY FEATURES</h4>
      <h2 className="section-title">Popular Designing Course</h2>

      <div className="course-list">
        {courseData.map((course, idx) => (
          <div className="course-item" key={idx}>
            <div className="course-main">
              <div className="course-icon">▶</div>
              <div className="course-info">
                <div className="course-meta">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating">{course.rating} ({course.reviews} reviews)</span>
                  <span className="students">👁️ {course.students} students watched</span>
                </div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.description}</p>
              </div>
              <div className="course-stats">
                
                {course.details.length > 0 && (
                  <button
                    className="expand-btn"
                    onClick={() => toggleExpand(idx)}
                  >
                    {activeIndex === idx ? "⬆️" : "⬇️"}
                  </button>
                )}
              </div>
            </div>
            {activeIndex === idx && course.details.length > 0 && (
              <ul className="course-details">
                {course.details.map((detail, i) => (
                  <li key={i}>✔ {detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
