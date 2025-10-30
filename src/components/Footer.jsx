import { Link } from "react-router-dom"
import "./Footer.css"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">TL</div>
              <span className="logo-text">Trade Legend</span>
            </div>
            <p className="footer-description">
              The UK's trusted directory for finding quality tradespeople with verified reviews.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Popular Trades</h3>
            <ul className="footer-links">
              <li>
                <Link to="/electricians">Electricians</Link>
              </li>
              <li>
                <Link to="/plumbers">Plumbers</Link>
              </li>
              <li>
                <Link to="/builders">Builders</Link>
              </li>
              <li>
                <Link to="/gardeners">Gardeners</Link>
              </li>
              <li>
                <Link to="/browse" className="footer-link-bold">
                  View All Trades →
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/submit">List Your Business</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li>
                <Link to="/help">Help Center</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link to="/complaints">Complaints</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Trade Legend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
