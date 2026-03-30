import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import OurSystem from './pages/OurSystem'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'
import WorkWithUs from './pages/WorkWithUs'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-system" element={<OurSystem />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
