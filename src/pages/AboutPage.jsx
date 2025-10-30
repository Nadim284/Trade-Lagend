import React from 'react';
import { Shield, Star, Users, CheckCircle, Award, Target, Heart, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "We only list tradespeople with a minimum 4.5★ rating and verified credentials.",
  },
  {
    icon: Star,
    title: "Verified Reviews",
    description: "Every review is checked and verified across multiple trusted platforms.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction and peace of mind are at the heart of everything we do.",
  },
  {
    icon: CheckCircle,
    title: "Transparency",
    description: "Clear pricing, honest reviews, and complete tradesperson profiles.",
  },
];

const stats = [
  { number: "4.5★+", label: "Minimum Rating", description: "Only the highest-rated professionals" },
  { number: "< 20%", label: "Acceptance Rate", description: "Less than 1 in 5 applicants make it" },
  { number: "100%", label: "Verified", description: "Every tradesperson is manually checked" },
  { number: "UK-Wide", label: "Coverage", description: "Serving customers across the UK" },
];

const process = [
  {
    step: "1",
    title: "Rigorous Application",
    description: "Tradespeople submit detailed applications with credentials, insurance, and work samples.",
  },
  {
    step: "2",
    title: "Multi-Platform Review Check",
    description: "We verify ratings across Google, Checkatrade, Trustpilot, and other trusted platforms.",
  },
  {
    step: "3",
    title: "Credential Verification",
    description: "All certifications, insurance, and qualifications are manually verified by our team.",
  },
  {
    step: "4",
    title: "Ongoing Monitoring",
    description: "We continuously monitor performance and customer feedback to maintain standards.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <a href="/" className="text-gray-500 hover:text-blue-900">
              Home
            </a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-blue-900 font-medium">About</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">We Don't List Everyone. Just the Legends.</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Trade Legend is the UK's most selective directory of tradespeople. We believe quality matters more than
              quantity, which is why we only feature the very best professionals with proven track records.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                Trade Legend was born from a simple frustration: finding a truly reliable tradesperson shouldn't be a
                gamble. Too many directories list anyone who pays a fee, regardless of their quality or customer
                satisfaction.
              </p>
              <p>
                We decided to do things differently. Instead of listing everyone, we created a platform that only
                features the legends – tradespeople with consistently excellent reviews, proper certifications, and a
                proven commitment to quality workmanship.
              </p>
              <p>
                Today, less than 20% of applicants make it onto our platform. This selective approach means when you
                find someone on Trade Legend, you can trust they're among the very best in their field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Standards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Standards</h2>
            <p className="text-gray-600 text-lg">Why our tradespeople are truly legendary</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">How We Select Our Legends</h2>
            <p className="text-gray-600 text-lg">Our rigorous 4-step verification process</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Commitment */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
              <p className="text-gray-200">Every tradesperson is vetted to our exacting standards.</p>
            </div>
            <div>
              <Target className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Ongoing Monitoring</h3>
              <p className="text-gray-200">We continuously track performance and customer feedback.</p>
            </div>
            <div>
              <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-200">Your satisfaction is our primary measure of success.</p>
            </div>
          </div>
          <p className="text-xl text-gray-200 mb-8">
            When you choose a tradesperson from Trade Legend, you're not just hiring someone good – you're hiring
            someone legendary.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium text-lg"
          >
            <Zap className="w-5 h-5 mr-2" />
            Find Your Legend
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Find Your Legend?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers who've found their perfect tradesperson through Trade Legend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium text-lg"
            >
              Start Your Search
            </a>
            <a 
              href="/submit" 
              className="inline-block border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-md font-medium text-lg"
            >
              List Your Business
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutPage;