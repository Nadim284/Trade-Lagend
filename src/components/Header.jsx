import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <div className="logo-icon">
            <img src="..\public\logos\logo.png" alt="" />
          </div>
          <span className="logo-text">Trade Legend</span>
        </Link>

        <nav className="header-nav">
          <Link to="/browse" className="nav-link">
            Browse Trades
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/submit" className="nav-link">
            List Your Business
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        <Link to="/admin" className="admin-button">
          Admin
        </Link>
      </div>
    </header>
  )
}

export default Header
