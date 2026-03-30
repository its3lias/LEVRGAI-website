import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="/logo.png" alt="LEVRG AI" className="h-8 w-auto" />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              Done-for-you client acquisition and consulting for online coaches, consultants, and high-ticket educators.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link to="/our-system" className="text-sm text-white/50 hover:text-white transition-colors">Our System</Link>
              <Link to="/how-it-works" className="text-sm text-white/50 hover:text-white transition-colors">How It Works</Link>
              <Link to="/about" className="text-sm text-white/50 hover:text-white transition-colors">About</Link>
              <Link to="/work-with-us" className="text-sm text-white/50 hover:text-white transition-colors">Work With Us</Link>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-4">Ready To Scale?</h4>
            <p className="text-sm text-white/50 mb-4">We only work with a limited number of clients at a time.</p>
            <Link to="/work-with-us" className="btn-primary text-xs py-3 px-6 inline-block">
              Apply Now
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-white/20 text-[11px] leading-relaxed max-w-4xl">
            <span className="font-bold text-white/30">Earnings Disclaimer:</span> The results and figures stated on this site are our personal results and the results of our clients. We do not guarantee that you will achieve similar results. Your results will vary based on many factors including but not limited to your background, experience, and work ethic. All business entails risk as well as massive and consistent effort and action. If you are not willing to accept that, this is not for you.
          </p>
          <p className="text-white/20 text-xs mt-4">
            &copy; {new Date().getFullYear()} LEVRG AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
