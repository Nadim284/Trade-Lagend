import React, { useState } from 'react';
import { CheckCircle, Shield, Star, Users, ChevronsUpDown, Check } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const ukTrades = [
  "Electrician",
  "Plumber",
  "Builder",
  "Roofer",
  "Painter & Decorator",
  "Handyman",
  "Carpenter / Joiner",
  "Gas Engineer",
  "Heating Engineer",
  "Tiler",
  "Plasterer",
  "Flooring Specialist",
  "Locksmith",
  "Drain Specialist",
  "Pest Control",
  "Glazier / Window Installer",
  "Kitchen Fitter",
  "Bathroom Installer",
  "Landscape Gardener",
  "Tree Surgeon",
  "Fence Installer",
  "Driveway Specialist",
  "Boiler Engineer",
  "Air Conditioning Installer",
  "Scaffolder",
  "Cleaning Service",
  "TV / Aerial Installer",
  "Alarm / CCTV Installer",
  "General Maintenance",
  "Solar Panel Installer",
  "EV Charger Installer",
  "Bricklayer",
  "Groundworker",
  "Demolition Contractor",
  "Structural Engineer",
  "Chimney Sweep",
  "Stonemason",
  "Metal Fabricator / Welder",
  "Skip Hire",
  "Garage Door Installer",
  "Interior Designer",
  "Flatpack Assembler",
  "Smart Home Installer",
  "Patio / Decking Installer",
  "Loft Conversion Specialist",
  "Soundproofing Specialist",
  "Waterproofing / Damp Proofer",
];

function SubmitBusinessPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    tradeType: "",
    location: "",
    postcode: "",
    phone: "",
    email: "",
    website: "",
    description: "",
    certifications: [],
    reviewLinks: {
      google: "",
      checkatrade: "",
      trustpilot: "",
      trustatrader: "",
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [tradeTypeOpen, setTradeTypeOpen] = useState(false);
  const [tradeSearchTerm, setTradeSearchTerm] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleCertificationChange = (certification, checked) => {
    setFormData((prev) => ({
      ...prev,
      certifications: checked
        ? [...prev.certifications, certification]
        : prev.certifications.filter((cert) => cert !== certification),
    }));
  };

  const filteredTrades = ukTrades.filter(trade => 
    trade.toLowerCase().includes(tradeSearchTerm.toLowerCase())
  );

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="/" className="flex items-center space-x-2">
                  <div className="h-10 w-10 bg-blue-600 rounded-lg"></div>
                  <span className="text-xl font-bold text-blue-900">Trade Legend</span>
                </a>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="/browse" className="text-gray-700 hover:text-blue-900 font-medium">
                  Browse Trades
                </a>
                <a href="/about" className="text-gray-700 hover:text-blue-900 font-medium">
                  About
                </a>
                <a href="/submit" className="text-gray-700 hover:text-blue-900 font-medium">
                  List Your Business
                </a>
                <a href="/contact" className="text-gray-700 hover:text-blue-900 font-medium">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Success Message */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-blue-900 mb-4">Submission Received!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for submitting your business to Trade Legend. Our team will review your application and get back
              to you within 2-3 business days.
            </p>
            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                We'll contact you at <strong>{formData.email}</strong> with updates on your application status.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="/" className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
                  Return Home
                </a>
                <a href="/browse" className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  Browse Trades
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Become a Trade Legend</h1>
          <p className="text-xl text-gray-200 mb-4">
            We don't list everyone. Only 4.5★+ rated professionals make the cut.
          </p>
          <p className="text-lg text-orange-500 mb-8">👉 Think you're legend material?</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Benefits Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Why Join Trade Legend?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Verified Listings</h4>
                      <p className="text-xs text-gray-600">All businesses are manually verified for quality</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Review Aggregation</h4>
                      <p className="text-xs text-gray-600">We showcase your reviews from multiple platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm">Quality Customers</h4>
                      <p className="text-xs text-gray-600">Connect with customers who value quality work</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-semibold text-blue-900 mb-4">Requirements</h3>
                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Minimum 4.5/5 star rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Valid trade certifications</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Active business registration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Public liability insurance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-blue-900">Business Information</h2>
                <p className="text-gray-600 mt-1">Tell us about your business and we'll review your application</p>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-blue-900">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="businessName" className="block text-sm font-medium mb-1">Business Name *</label>
                        <input
                          id="businessName"
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData((prev) => ({ ...prev, businessName: e.target.value }))}
                          placeholder="ABC Electrical Ltd"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="tradeType" className="block text-sm font-medium mb-1">Trade Type *</label>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setTradeTypeOpen(!tradeTypeOpen)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
                          >
                            <span>{formData.tradeType || "Select your trade..."}</span>
                            <ChevronsUpDown className="w-4 h-4 text-gray-400" />
                          </button>
                          {tradeTypeOpen && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                              <div className="p-2 border-b border-gray-200">
                                <input
                                  type="text"
                                  placeholder="Search trades..."
                                  value={tradeSearchTerm}
                                  onChange={(e) => setTradeSearchTerm(e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </div>
                              <div className="py-1">
                                {filteredTrades.length > 0 ? (
                                  filteredTrades.map((trade) => (
                                    <button
                                      key={trade}
                                      type="button"
                                      onClick={() => {
                                        setFormData((prev) => ({ ...prev, tradeType: trade }));
                                        setTradeTypeOpen(false);
                                        setTradeSearchTerm("");
                                      }}
                                      className="w-full px-3 py-2 text-left hover:bg-gray-100 flex items-center"
                                    >
                                      <Check
                                        className={`w-4 h-4 mr-2 ${formData.tradeType === trade ? 'opacity-100' : 'opacity-0'}`}
                                      />
                                      {trade}
                                    </button>
                                  ))
                                ) : (
                                  <div className="px-3 py-2 text-gray-500">No trade found.</div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium mb-1">Location/Area *</label>
                        <input
                          id="location"
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                          placeholder="London, Birmingham, etc."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="postcode" className="block text-sm font-medium mb-1">Postcode *</label>
                        <input
                          id="postcode"
                          type="text"
                          value={formData.postcode}
                          onChange={(e) => setFormData((prev) => ({ ...prev, postcode: e.target.value }))}
                          placeholder="SW1A 1AA"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-blue-900">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number *</label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                          placeholder="020 7946 1234"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address *</label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          placeholder="info@yourbusiness.co.uk"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium mb-1">Website (Optional)</label>
                      <input
                        id="website"
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
                        placeholder="https://www.yourbusiness.co.uk"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Business Description */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-blue-900">Business Description</h3>
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium mb-1">Tell us about your business *</label>
                      <textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                        placeholder="Describe your services, experience, and what makes your business special..."
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-blue-900">Certifications & Accreditations</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        "NICEIC",
                        "Part P",
                        "Which? Trusted",
                        "Gas Safe",
                        "NAPIT",
                        "ECA",
                        "FMB",
                        "Checkatrade Approved",
                      ].map((cert) => (
                        <div key={cert} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={cert}
                            checked={formData.certifications.includes(cert)}
                            onChange={(e) => handleCertificationChange(cert, e.target.checked)}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor={cert} className="text-sm">
                            {cert}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Review Links */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-blue-900">Existing Review Profiles</h3>
                    <p className="text-sm text-gray-600">
                      Help us showcase your existing reviews by providing links to your profiles
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="google" className="block text-sm font-medium mb-1">Google Business Profile</label>
                        <input
                          id="google"
                          type="url"
                          value={formData.reviewLinks.google}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              reviewLinks: { ...prev.reviewLinks, google: e.target.value },
                            }))
                          }
                          placeholder="Google Business URL"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="checkatrade" className="block text-sm font-medium mb-1">Checkatrade Profile</label>
                        <input
                          id="checkatrade"
                          type="url"
                          value={formData.reviewLinks.checkatrade}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              reviewLinks: { ...prev.reviewLinks, checkatrade: e.target.value },
                            }))
                          }
                          placeholder="Checkatrade URL"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="trustpilot" className="block text-sm font-medium mb-1">Trustpilot Profile</label>
                        <input
                          id="trustpilot"
                          type="url"
                          value={formData.reviewLinks.trustpilot}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              reviewLinks: { ...prev.reviewLinks, trustpilot: e.target.value },
                            }))
                          }
                          placeholder="Trustpilot URL"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="trustatrader" className="block text-sm font-medium mb-1">TrustATrader Profile</label>
                        <input
                          id="trustatrader"
                          type="url"
                          value={formData.reviewLinks.trustatrader}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              reviewLinks: { ...prev.reviewLinks, trustatrader: e.target.value },
                            }))
                          }
                          placeholder="TrustATrader URL"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        required
                      />
                      <label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <a href="/terms" className="text-orange-500 hover:underline">
                          Terms of Service
                        </a>{" "}
                        and confirm that all information provided is accurate and up-to-date.
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium text-lg"
                    >
                      Submit Application
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      We'll review your application within 2-3 business days
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SubmitBusinessPage;