import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, HelpCircle, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const contactInfo = {
  phone: "0800 123 4567",
  email: "hello@tradelegend.co.uk",
  address: "123 Business Street, London, EC1A 1BB",
  hours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
    weekends: "Saturday: 10:00 AM - 4:00 PM",
    sunday: "Sunday: Closed",
  },
};

const faqData = [
  {
    question: "How do you verify tradespeople?",
    answer:
      "We verify all tradespeople through a comprehensive process including checking certifications, insurance, and aggregating reviews from multiple platforms like Google, Checkatrade, and Trustpilot.",
  },
  {
    question: "Is Trade Legend free to use?",
    answer:
      "Yes, Trade Legend is completely free for customers. We help you find and compare top-rated tradespeople at no cost to you.",
  },
  {
    question: "How do I list my business?",
    answer:
      "You can submit your business through our 'List Your Business' page. We'll review your application and verify your credentials before adding you to our directory.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We cover all major UK cities and towns. Our directory includes tradespeople from London, Birmingham, Manchester, Glasgow, Leeds, Liverpool, and many more locations.",
  },
  {
    question: "How are ratings calculated?",
    answer:
      "Our ratings are aggregated from multiple review platforms including Google, Checkatrade, Trustpilot, and TrustATrader to give you the most comprehensive view of each tradesperson's reputation.",
  },
  {
    question: "Can I get quotes through Trade Legend?",
    answer:
      "While we don't provide quotes directly, we connect you with verified tradespeople who can provide detailed quotes for your specific requirements.",
  },
];

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        inquiryType: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Have questions about Trade Legend? Need help finding the right tradesperson? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-semibold text-blue-900">Send us a Message</h2>
                  <p className="text-gray-600 mt-1">We'll get back to you within 24 hours</p>
                </div>
                <div className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Your full name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="your.email@example.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="Your phone number"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                            Inquiry Type *
                          </label>
                          <select
                            id="inquiryType"
                            value={formData.inquiryType}
                            onChange={(e) => handleInputChange("inquiryType", e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select inquiry type</option>
                            <option value="general">General Inquiry</option>
                            <option value="business">Business Listing</option>
                            <option value="technical">Technical Support</option>
                            <option value="partnership">Partnership</option>
                            <option value="complaint">Complaint</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          id="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          placeholder="Brief subject of your message"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Please provide details about your inquiry..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium flex items-center justify-center disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-blue-900">Contact Information</h2>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                      <p className="text-sm text-gray-500">Free to call from UK landlines and mobiles</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">{contactInfo.email}</p>
                      <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">{contactInfo.address}</p>
                      <p className="text-sm text-gray-500">By appointment only</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>{contactInfo.hours.weekdays}</p>
                        <p>{contactInfo.hours.weekends}</p>
                        <p>{contactInfo.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-blue-900">Quick Links</h2>
                </div>
                <div className="p-6 space-y-4">
                  <a
                    href="/submit"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5 text-orange-500" />
                    <div>
                      <h4 className="font-medium">List Your Business</h4>
                      <p className="text-sm text-gray-600">Join our directory of trusted tradespeople</p>
                    </div>
                  </a>
                  <a
                    href="/browse"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <HelpCircle className="w-5 h-5 text-orange-500" />
                    <div>
                      <h4 className="font-medium">Browse Trades</h4>
                      <p className="text-sm text-gray-600">Find tradespeople in your area</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about Trade Legend</p>
          </div>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ContactPage;