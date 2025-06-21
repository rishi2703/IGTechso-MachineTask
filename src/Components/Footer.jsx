
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <h2>Ready to learn design<br />with Nia Matos</h2>
        <button>Start Learning Today</button>
      </div>

      <hr className="footer-divider" />

      <div className="footer-links">
        <div className="footer-column">
          <h4>About Us</h4>
          <ul>
            <li>Support Center</li>
            <li>Customer Support</li>
            <li>About Us</li>
            <li>Copyright</li>
            <li>Popular Campaign</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Our Information</h4>
          <ul>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Site Map</li>
            <li>Store Hours</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>My Account</h4>
          <ul>
            <li>Press Inquiries</li>
            <li>Social media</li>
            <li>Directories</li>
            <li>Images & B-roll</li>
            <li>Permissions</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Policy</h4>
          <ul>
            <li>Application security</li>
            <li>Software principles</li>
            <li>Unwanted software policy</li>
            <li>Responsible supply chain</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
