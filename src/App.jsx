import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import BrowsePage from "./pages/BrowsePage"
import CityPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import SubmitPage from "./pages/SubmitPage"
import AdminPage from "./pages/AdminPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/:city" element={<CityPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
