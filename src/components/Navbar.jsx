import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/our-system', label: 'Our System' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/about', label: 'About' },
  { to: '/work-with-us', label: 'Work With Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="LEVRG AI" className="h-8 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                pathname === link.to ? 'text-brand-red' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/work-with-us"
          className="hidden lg:block btn-primary text-xs py-3 px-6 pulse-glow"
        >
          Apply Now
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 py-6 flex flex-col gap-4 border-t border-white/5 bg-black">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`text-sm font-bold uppercase tracking-[0.2em] ${
                pathname === link.to ? 'text-brand-red' : 'text-white/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/work-with-us"
            onClick={() => setOpen(false)}
            className="btn-primary text-center text-xs py-3 mt-2"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
