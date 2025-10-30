"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Card from "../components/Card"
import Button from "../components/Button"
import Input from "../components/Input"
import "./HomePage.css"

const popularTrades = [
  { name: "Electricians", icon: "⚡", count: "2,847" },
  { name: "Plumbers", icon: "🔧", count: "3,124" },
  { name: "Builders", icon: "🏗️", count: "1,956" },
  { name: "Roofers", icon: "🏠", count: "987" },
  { name: "Gardeners", icon: "🌱", count: "1,432" },
  { name: "Painters", icon: "🎨", count: "1,654" },
  { name: "Decorators", icon: "🖌️", count: "1,234" },
  { name: "Carpenters", icon: "🔨", count: "1,098" },
]

const topRegions = [
  { name: "London", count: "4,521 trades", path: "/london" },
  { name: "Birmingham", count: "2,134 trades", path: "/birmingham" },
  { name: "Manchester", count: "1,876 trades", path: "/manchester" },
  { name: "Glasgow", count: "1,543 trades", path: "/glasgow" },
  { name: "Leeds", count: "1,234 trades", path: "/leeds" },
  { name: "Liverpool", count: "1,098 trades", path: "/liverpool" },
]

const featuredTradespeople = [
  {
    id: 1,
    name: "ABC Electrical",
    trade: "Electrician",
    location: "SW1, London",
    rating: 4.8,
    reviewCount: 247,
    certifications: ["NICEIC", "Which? Trusted"],
    availability: ["Next Day", "Emergency"],
    phone: "020 7946 1234",
  },
  {
    id: 2,
    name: "Premier Plumbing",
    trade: "Plumber",
    location: "M1, Manchester",
    rating: 4.9,
    reviewCount: 189,
    certifications: ["Gas Safe", "Which? Trusted"],
    availability: ["Emergency", "Weekend"],
    phone: "0161 234 5678",
  },
  {
    id: 3,
    name: "Quality Builders Ltd",
    trade: "Builder",
    location: "B1, Birmingham",
    rating: 4.7,
    reviewCount: 156,
    certifications: ["FMB", "Which? Trusted"],
    availability: ["Next Day"],
    phone: "0121 345 6789",
  },
]

function HomePage() {
  const [searchTrade, setSearchTrade] = useState("")
  const [searchLocation, setSearchLocation] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for:", searchTrade, "in", searchLocation)
  }

  return (
    <div className="home-page">
      <Header />

      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Only the UK's top-rated tradespeople make it here.</h1>
          <p className="hero-subtitle">Rated 4.5★+ across Google, Checkatrade, Trustpilot and more.</p>
          <p className="hero-cta">👉 Find your legend.</p>

          <Card className="search-card">
            <form onSubmit={handleSearch} className="search-form">
              <Input
                placeholder="I need a... (e.g. electrician, plumber)"
                value={searchTrade}
                onChange={(e) => setSearchTrade(e.target.value)}
                className="search-input"
              />
              <Input
                placeholder="in... (postcode or city)"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="search-input"
              />
              <Button type="submit" size="large">
                🔍 Search Now
              </Button>
            </form>
            <div className="search-footer">
              <Link to="/browse">
                <Button variant="outline">Browse by Trade</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <section className="popular-trades">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Popular Trades</h2>
            <p className="section-description">Browse by category to find the right tradesperson</p>
          </div>
          <div className="trades-grid">
            {popularTrades.map((trade) => (
              <Card key={trade.name} className="trade-card clickable">
                <div className="trade-icon">{trade.icon}</div>
                <h3 className="trade-name">{trade.name}</h3>
                <p className="trade-count">{trade.count} available</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Top-Rated Tradespeople</h2>
            <p className="section-description">Handpicked professionals with verified reviews</p>
          </div>
          <div className="tradespeople-grid">
            {featuredTradespeople.map((person) => (
              <Card key={person.id} className="tradesperson-card">
                <div className="tradesperson-header">
                  <div className="tradesperson-info">
                    <div className="tradesperson-avatar">{person.name.charAt(0)}</div>
                    <div>
                      <h3 className="tradesperson-name">{person.name}</h3>
                      <p className="tradesperson-trade">{person.trade}</p>
                      <p className="tradesperson-location">📍 {person.location}</p>
                    </div>
                  </div>
                  <div className="tradesperson-rating">
                    <span className="rating-score">⭐ {person.rating}</span>
                    <span className="rating-count">{person.reviewCount} reviews</span>
                  </div>
                </div>
                <div className="tradesperson-badges">
                  {person.certifications.map((cert) => (
                    <span key={cert} className="badge badge-cert">
                      🛡️ {cert}
                    </span>
                  ))}
                </div>
                <div className="tradesperson-badges">
                  {person.availability.map((avail) => (
                    <span key={avail} className="badge badge-avail">
                      {avail}
                    </span>
                  ))}
                </div>
                <div className="tradesperson-actions">
                  <Button variant="secondary" size="small">
                    📞 Call Now
                  </Button>
                  <Button variant="outline" size="small">
                    Get Quote
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/browse">
              <Button size="large">View All Tradespeople</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="regions-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Top Regions</h2>
            <p className="section-description">Find trusted trades in major UK cities</p>
          </div>
          <div className="regions-grid">
            {topRegions.map((region) => (
              <Link key={region.name} to={region.path}>
                <Card className="region-card clickable">
                  <h3 className="region-name">{region.name}</h3>
                  <p className="region-count">{region.count}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">How We Find Your Legend</h2>
            <p className="section-description">Your trusted path to quality tradespeople</p>
          </div>
          <div className="steps-grid">
            <div className="step">
              <div className="step-icon">🔍</div>
              <h3 className="step-title">1. Search & Browse</h3>
              <p className="step-description">
                Find tradespeople by trade type and location. Filter by ratings and certifications.
              </p>
            </div>
            <div className="step">
              <div className="step-icon">👥</div>
              <h3 className="step-title">2. Compare & Review</h3>
              <p className="step-description">
                View aggregated reviews from Google, Checkatrade, and other trusted platforms.
              </p>
            </div>
            <div className="step">
              <div className="step-icon">✅</div>
              <h3 className="step-title">3. Connect & Hire</h3>
              <p className="step-description">
                Contact verified tradespeople directly. All providers are vetted and certified.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title trust-title">Only the Legends Make the Cut</h2>
            <p className="section-description trust-description">
              Strict standards. Verified quality. Trusted results.
            </p>
          </div>
          <div className="trust-stats">
            <div className="trust-stat">
              <div className="stat-value">4.5★+</div>
              <div className="stat-label">Minimum Rating</div>
            </div>
            <div className="trust-stat">
              <div className="stat-value">100%</div>
              <div className="stat-label">Verified Reviews</div>
            </div>
            <div className="trust-stat">
              <div className="stat-value">5,000+</div>
              <div className="stat-label">Legend Tradespeople</div>
            </div>
            <div className="trust-stat">
              <div className="stat-value">UK-Wide</div>
              <div className="stat-label">Coverage</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
