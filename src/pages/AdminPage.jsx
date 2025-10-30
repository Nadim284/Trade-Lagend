import React, { useState } from 'react';
import { Plus, Eye, CheckCircle, XCircle, Star, Users, TrendingUp, BarChart3, Activity } from 'lucide-react';
import Header from '../components/Header';


// Mock data for admin dashboard
const mockListings = [
  {
    id: "1",
    name: "ABC Electrical",
    trade: "Electrician",
    location: "London, SW1",
    rating: 4.8,
    reviews: 247,
    status: "active",
    joinDate: "2023-01-15",
    phone: "020 7946 1234",
    email: "info@abcelectrical.co.uk",
    certifications: ["NICEIC", "Which? Trusted"],
    description: "Professional electrical services across London with 15+ years experience.",
  },
  {
    id: "2",
    name: "Premier Plumbing",
    trade: "Plumber",
    location: "Manchester, M1",
    rating: 4.9,
    reviews: 189,
    status: "active",
    joinDate: "2023-02-20",
    phone: "0161 234 5678",
    email: "contact@premierplumbing.co.uk",
    certifications: ["Gas Safe", "Which? Trusted"],
    description: "Emergency plumbing services available 24/7 across Greater Manchester.",
  },
  {
    id: "3",
    name: "Quality Builders",
    trade: "Builder",
    location: "Birmingham, B1",
    rating: 4.7,
    reviews: 156,
    status: "suspended",
    joinDate: "2023-03-10",
    phone: "0121 345 6789",
    email: "hello@qualitybuilders.co.uk",
    certifications: ["FMB"],
    description: "Comprehensive building services from extensions to renovations.",
  },
];

const mockPendingSubmissions = [
  {
    id: "p1",
    businessName: "Elite Roofing Solutions",
    contactName: "John Smith",
    trade: "Roofer",
    location: "Leeds, LS1",
    phone: "0113 456 7890",
    email: "john@eliteroofing.co.uk",
    submissionDate: "2024-01-05",
    certifications: ["NFRC", "Competent Roofer"],
    description: "Specialist roofing contractor with 20 years experience in commercial and residential projects.",
    businessAddress: "123 Roofing Street, Leeds, LS1 2AB",
    website: "www.eliteroofing.co.uk",
    insuranceDetails: "Public Liability: £2M, Employers Liability: £10M",
  },
  {
    id: "p2",
    businessName: "Green Garden Services",
    contactName: "Sarah Johnson",
    trade: "Gardener",
    location: "Bristol, BS1",
    phone: "0117 987 6543",
    email: "sarah@greengardens.co.uk",
    submissionDate: "2024-01-03",
    certifications: ["RHS Level 3"],
    description: "Eco-friendly garden maintenance and landscaping services.",
    businessAddress: "456 Garden Lane, Bristol, BS1 3CD",
    website: "www.greengardens.co.uk",
    insuranceDetails: "Public Liability: £1M",
  },
];

const analyticsData = {
  totalListings: 5247,
  activeListings: 4891,
  pendingSubmissions: 23,
  totalReviews: 45678,
  averageRating: 4.6,
  monthlyGrowth: 12.5,
  conversionRate: 68.3,
  topTrades: [
    { name: "Electricians", count: 1247, percentage: 23.8 },
    { name: "Plumbers", count: 1089, percentage: 20.8 },
    { name: "Builders", count: 856, percentage: 16.3 },
    { name: "Gardeners", count: 634, percentage: 12.1 },
    { name: "Painters", count: 421, percentage: 8.0 },
  ],
  topLocations: [
    { name: "London", count: 1456, percentage: 27.8 },
    { name: "Manchester", count: 678, percentage: 12.9 },
    { name: "Birmingham", count: 567, percentage: 10.8 },
    { name: "Leeds", count: 445, percentage: 8.5 },
    { name: "Glasgow", count: 334, percentage: 6.4 },
  ],
  monthlyTrends: [
    { month: "Jul", listings: 4650, reviews: 3200, searches: 12400 },
    { month: "Aug", listings: 4780, reviews: 3450, searches: 13100 },
    { month: "Sep", listings: 4920, reviews: 3680, searches: 13800 },
    { month: "Oct", listings: 5050, reviews: 3920, searches: 14500 },
    { month: "Nov", listings: 5180, reviews: 4150, searches: 15200 },
    { month: "Dec", listings: 5247, reviews: 4380, searches: 15900 },
  ],
};

function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedListing, setSelectedListing] = useState(null);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [showListingDialog, setShowListingDialog] = useState(false);
  const [showSubmissionDialog, setShowSubmissionDialog] = useState(false);

  const filteredListings = mockListings.filter((listing) => {
    const matchesSearch =
      listing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.trade.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || listing.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleApproveSubmission = (id) => {
    console.log(`Approving submission ${id}`);
  };

  const handleRejectSubmission = (id) => {
    console.log(`Rejecting submission ${id}`);
  };

  const handleSuspendListing = (id) => {
    console.log(`Suspending listing ${id}`);
  };

  const handleActivateListing = (id) => {
    console.log(`Activating listing ${id}`);
  };

  const openListingDialog = (listing) => {
    setSelectedListing(listing);
    setShowListingDialog(true);
  };

  const openSubmissionDialog = (submission) => {
    setSelectedSubmission(submission);
    setShowSubmissionDialog(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your trade directory platform</p>
        </div>

        {/* Tabs */}
        <div className="space-y-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "overview"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("listings")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "listings"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Manage Listings
              </button>
              <button
                onClick={() => setActiveTab("submissions")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "submissions"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Pending Submissions
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "analytics"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Analytics
              </button>
            </nav>
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium text-gray-600">Total Listings</h3>
                    <Users className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="text-2xl font-bold">{analyticsData.totalListings.toLocaleString()}</div>
                  <p className="text-xs text-gray-500 mt-1">+{analyticsData.monthlyGrowth}% from last month</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium text-gray-600">Active Listings</h3>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold">{analyticsData.activeListings.toLocaleString()}</div>
                  <p className="text-xs text-gray-500 mt-1">
                    {((analyticsData.activeListings / analyticsData.totalListings) * 100).toFixed(1)}% of total
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium text-gray-600">Pending Submissions</h3>
                    <Activity className="h-4 w-4 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold">{analyticsData.pendingSubmissions}</div>
                  <p className="text-xs text-gray-500 mt-1">Awaiting review</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium text-gray-600">Average Rating</h3>
                    <Star className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div className="text-2xl font-bold">{analyticsData.averageRating}</div>
                  <p className="text-xs text-gray-500 mt-1">
                    Across {analyticsData.totalReviews.toLocaleString()} reviews
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New listing approved: ABC Electrical</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Submission received: Elite Roofing</p>
                        <p className="text-xs text-gray-500">4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Review flagged for moderation</p>
                        <p className="text-xs text-gray-500">6 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-start px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Listing
                    </button>
                    <button className="w-full flex items-center justify-start px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                      <Eye className="w-4 h-4 mr-2" />
                      Review Submissions
                    </button>
                    <button className="w-full flex items-center justify-start px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View Analytics
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Manage Listings Tab */}
          {activeTab === "listings" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search listings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="suspended">Suspended</option>
                  <option value="pending">Pending</option>
                </select>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Business
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trade
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rating
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredListings.map((listing) => (
                      <tr key={listing.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{listing.name}</div>
                          <div className="text-sm text-gray-500">{listing.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{listing.trade}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{listing.location}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{listing.rating}</span>
                            <span className="text-gray-500">({listing.reviews})</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              listing.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {listing.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => openListingDialog(listing)}
                              className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            {listing.status === "active" ? (
                              <button
                                onClick={() => handleSuspendListing(listing.id)}
                                className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                              >
                                Suspend
                              </button>
                            ) : (
                              <button
                                onClick={() => handleActivateListing(listing.id)}
                                className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                              >
                                Activate
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Pending Submissions Tab */}
          {activeTab === "submissions" && (
            <div className="space-y-6">
              {mockPendingSubmissions.map((submission) => (
                <div key={submission.id} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{submission.businessName}</h3>
                      <p className="text-gray-600">
                        {submission.trade} • {submission.location}
                      </p>
                    </div>
                    <span className="px-2 py-1 text-xs font-semibold rounded-full border border-gray-300 text-gray-700">
                      Pending
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Contact Person</label>
                        <p>{submission.contactName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Submission Date</label>
                        <p>{new Date(submission.submissionDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Phone</label>
                        <p>{submission.phone}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <p>{submission.email}</p>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Business Description</label>
                      <p className="mt-1">{submission.description}</p>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Certifications</label>
                      <div className="flex gap-2 mt-1">
                        {submission.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <button
                        onClick={() => openSubmissionDialog(submission)}
                        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                      >
                        View Details
                      </button>

                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleRejectSubmission(submission.id)}
                          className="px-4 py-2 border border-red-200 text-red-600 rounded-md hover:bg-red-50 flex items-center"
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject
                        </button>
                        <button
                          onClick={() => handleApproveSubmission(submission.id)}
                          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium text-gray-600">Monthly Growth</h3>
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold">+{analyticsData.monthlyGrowth}%</div>
                  <p className="text-xs text-gray-500 mt-1">New listings this month</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium text-gray-600">Conversion Rate</h3>
                    <BarChart3 className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold">{analyticsData.conversionRate}%</div>
                  <p className="text-xs text-gray-500 mt-1">Submissions to listings</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium text-gray-600">Total Reviews</h3>
                    <Star className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div className="text-2xl font-bold">{analyticsData.totalReviews.toLocaleString()}</div>
                  <p className="text-xs text-gray-500 mt-1">Across all platforms</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium text-gray-600">Avg. Rating</h3>
                    <Star className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div className="text-2xl font-bold">{analyticsData.averageRating}/5.0</div>
                  <p className="text-xs text-gray-500 mt-1">Platform average</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Top Trades</h3>
                  <div className="space-y-4">
                    {analyticsData.topTrades.map((trade, index) => (
                      <div key={trade.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {index + 1}
                          </div>
                          <span className="font-medium">{trade.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{trade.count}</div>
                          <div className="text-sm text-gray-500">{trade.percentage}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Top Locations</h3>
                  <div className="space-y-4">
                    {analyticsData.topLocations.map((location, index) => (
                      <div key={location.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {index + 1}
                          </div>
                          <span className="font-medium">{location.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{location.count}</div>
                          <div className="text-sm text-gray-500">{location.percentage}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Monthly Trends</h3>
                <div className="grid grid-cols-6 gap-4 text-center">
                  {analyticsData.monthlyTrends.map((month) => (
                    <div key={month.month} className="space-y-2">
                      <div className="text-sm font-medium text-gray-600">{month.month}</div>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-500">Listings</div>
                        <div className="font-semibold text-blue-600">{month.listings}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-500">Reviews</div>
                        <div className="font-semibold text-green-600">{month.reviews}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-500">Searches</div>
                        <div className="font-semibold text-orange-600">{month.searches}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Listing Details Modal */}
      {showListingDialog && selectedListing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold">{selectedListing.name}</h2>
                <button
                  onClick={() => setShowListingDialog(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Trade</label>
                  <p>{selectedListing.trade}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Location</label>
                  <p>{selectedListing.location}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <p>{selectedListing.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <p>{selectedListing.email}</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <p className="mt-1">{selectedListing.description}</p>
              </div>
              <div>
                <label className="text-sm font-medium">Certifications</label>
                <div className="flex gap-2 mt-1">
                  {selectedListing.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Submission Details Modal */}
      {showSubmissionDialog && selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold">{selectedSubmission.businessName} - Full Details</h2>
                <button
                  onClick={() => setShowSubmissionDialog(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Business Address</label>
                  <p>{selectedSubmission.businessAddress}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Website</label>
                  <p>{selectedSubmission.website}</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Insurance Details</label>
                <p className="mt-1">{selectedSubmission.insuranceDetails}</p>
              </div>
              <div>
                <label className="text-sm font-medium">Admin Notes</label>
                <textarea
                  placeholder="Add internal notes..."
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPage;