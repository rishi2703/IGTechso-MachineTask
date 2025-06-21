import './HeroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
function HeroSection() {
  return (
    <div className="hero-container">
      <header className="navbar">
        <div className="logo">
          <FontAwesomeIcon icon={faCrown} />LandGuru</div>
        <nav>
          <ul>
            <li>Home         
</li>
   
            <li>Advertise  <FontAwesomeIcon icon={faAngleDown} /></li>
            <li>Support  <FontAwesomeIcon icon={faAngleDown} /></li>
            <li>Contact</li>
          </ul>
        </nav>
        <button className="try-button"> Try for free</button>
      </header>
      <div className="hero-content">
        <div className="hero-text">
          <p className="rate"> Trusted by over 4332 student</p>
           <h1>Learn Design<br />with Nia Matos</h1>
          <hr className="uline" />
          <p className="desc">
            Get your blood tests delivered at let home collect sample <br /><br />
            from the victory of the managments that supplies best <br /> <br />
            design system guidelines ever.
          </p>
          <div className="SearchBox">
            <input type="text" placeholder="Search Course Name" />
            <span className="Search-icon"></span>
          </div>
          <div className="sponser">
            
            <img src="/logo.png" alt="" />
           
          </div>
        </div>

        <div className="heroImage">
          <div className="imageFrame">
            <img src="../Public/girl.png" alt="Girl With Laptop" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
