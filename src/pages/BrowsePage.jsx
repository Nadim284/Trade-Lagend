import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const tradeCategories = {
  "Building & Construction": [
    "Builders",
    "Roofers",
    "Carpenters",
    "Bricklayers",
    "Scaffolders"
  ],
  "Electrical & Gas": [
    "Electricians",
    "Gas Engineers",
    "Boiler Installers"
  ],
  "Plumbing & Water": [
    "Plumbers",
    "Kitchen Installers",
    "Bathroom Fitters"
  ],
  "Interior & Finishing": [
    "Painters",
    "Decorators",
    "Plasterers",
    "Tilers",
    "Flooring Specialists"
  ],
  "Outdoor & Landscaping": [
    "Gardeners",
    "Landscapers",
    "Tree Surgeons",
    "Patios & Paving",
    "Fencing Contractors"
  ],
  "Windows & Doors": [
    "Window Installers",
    "Door Specialists",
    "Conservatories"
  ],
  "Removal & Clearance": [
    "House Removals",
    "Rubbish Clearance",
    "Waste Disposal"
  ],
  "General": [
    "Handymen",
    "Property Maintenance"
  ]
};

const allTrades = [
  { name: "Electricians", icon: "⚡", count: "2,847", href: "/electricians", category: "Electrical & Gas" },
  { name: "Plumbers", icon: "🔧", count: "3,124", href: "/plumbers", category: "Plumbing & Water" },
  { name: "Builders", icon: "🏗️", count: "1,956", href: "/builders", category: "Building & Construction" },
  { name: "Roofers", icon: "🏠", count: "987", href: "/roofers", category: "Building & Construction" },
  { name: "Gardeners", icon: "🌱", count: "1,432", href: "/gardeners", category: "Outdoor & Landscaping" },
  { name: "Painters", icon: "🎨", count: "1,654", href: "/painters", category: "Interior & Finishing" },
  { name: "Decorators", icon: "🖌️", count: "1,234", href: "/decorators", category: "Interior & Finishing" },
  { name: "Carpenters", icon: "🔨", count: "1,098", href: "/carpenters", category: "Building & Construction" },
  { name: "Plasterers", icon: "🧱", count: "876", href: "/plasterers", category: "Interior & Finishing" },
  { name: "Handymen", icon: "🛠️", count: "2,345", href: "/handymen", category: "General" },
  {
    name: "Window & Door Specialists",
    icon: "🚪",
    count: "654",
    href: "/window-door-specialists",
    category: "Windows & Doors",
  },
  { name: "Landscapers", icon: "🌿", count: "1,123", href: "/landscapers", category: "Outdoor & Landscaping" },
  { name: "Tilers", icon: "⬜", count: "789", href: "/tilers", category: "Interior & Finishing" },
  { name: "Kitchen Installers", icon: "🏠", count: "567", href: "/kitchen-installers", category: "Plumbing & Water" },
  { name: "Gas Engineers", icon: "🔥", count: "1,432", href: "/gas-engineers", category: "Electrical & Gas" },
  { name: "Tree Surgeons", icon: "🌳", count: "432", href: "/tree-surgeons", category: "Outdoor & Landscaping" },
  { name: "House Removals", icon: "📦", count: "345", href: "/house-removals", category: "Removal & Clearance" },
  { name: "Rubbish Clearance", icon: "🗑️", count: "678", href: "/rubbish-clearance", category: "Removal & Clearance" },
  { name: "Patios & Paving", icon: "🧱", count: "543", href: "/patios-paving", category: "Outdoor & Landscaping" },
];

function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <a href="/" className="text-gray-500 hover:text-blue-900">
              Home
            </a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-blue-900 font-medium">Browse Trades</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Browse All Trade Categories</h1>
            <p className="text-xl text-gray-200 mb-2">Find the perfect tradesperson for your project</p>
            <p className="text-lg text-orange-500 mb-8">👉 All our legends, organized by trade</p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="p-4 bg-white/95 backdrop-blur rounded-lg border border-gray-200">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Search for a specific trade..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 h-10 px-4 border-2 border-gray-200 rounded-md focus:border-orange-500 focus:outline-none"
                  />
                  <button className="h-10 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-md flex items-center">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Trade Categories */}
        {Object.entries(tradeCategories).map(([categoryName, trades]) => (
          <div key={categoryName} className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">{categoryName}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {allTrades
                .filter((trade) => trades.some((t) => trade.name.toLowerCase().includes(t.toLowerCase().split(" ")[0])))
                .map((trade) => (
                  <a key={trade.name} href={trade.href}>
                    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer h-full p-6 text-center">
                      <div className="text-4xl mb-3">{trade.icon}</div>
                      <h3 className="font-semibold text-blue-900 mb-2 text-sm">{trade.name}</h3>
                      <p className="text-xs text-gray-600">{trade.count} available</p>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        ))}

        {/* All Trades Grid */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">All Available Trades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {allTrades.map((trade) => (
              <a key={trade.name} href={trade.href}>
                <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer h-full p-6 text-center">
                  <div className="text-4xl mb-3">{trade.icon}</div>
                  <h3 className="font-semibold text-blue-900 mb-2 text-sm">{trade.name}</h3>
                  <p className="text-xs text-gray-600">{trade.count} available</p>
                  <span className="inline-block mt-2 px-2 py-1 text-xs border border-gray-300 rounded-full text-gray-700">
                    {trade.category}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 mb-6">
            We're constantly adding new trade categories and professionals to our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium text-lg"
            >
              Request a Trade Category
            </a>
            <a 
              href="/submit" 
              className="inline-block border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-md font-medium text-lg"
            >
              List Your Business
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default BrowsePage;