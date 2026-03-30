import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionLabel from '../components/SectionLabel'

function AnimatedSection({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const revenueOptions = [
  'Under $5k',
  '$5k - $10k',
  '$10k - $25k',
  '$25k - $50k',
  '$50k+',
]

export default function WorkWithUs() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whatYouTeach: '',
    revenue: '',
    biggestChallenge: '',
    whatMakesYouDifferent: '',
    howDidYouHear: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 cyber-grid overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-red/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <SectionLabel text="Apply Now" />
            <h1 className="section-heading text-4xl md:text-5xl lg:text-6xl mb-6">
              Apply To Work With{' '}
              <span className="text-brand-red">LEVRG AI</span>
            </h1>
            <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              We are selective. We only work with coaches and educators who actually deliver real results for their clients. If that is you, fill out the form below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6">
          {submitted ? (
            <AnimatedSection>
              <div className="card p-10 md:p-14 text-center border-brand-red/30">
                <div className="w-16 h-16 bg-brand-red/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-brand-red text-3xl">&#10003;</span>
                </div>
                <h2 className="text-2xl font-black uppercase tracking-wider mb-4">Application Received</h2>
                <p className="text-white/50 text-sm leading-relaxed max-w-md mx-auto">
                  We received your application. If you are a good fit we will be in touch within 24 hours.
                </p>
                <p className="text-white/30 text-xs mt-6 uppercase tracking-wider">
                  We only take on clients we are confident we can get results for.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-card border border-card-border px-5 py-4 text-sm text-white placeholder-white/20 focus:border-brand-red/50 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-card border border-card-border px-5 py-4 text-sm text-white placeholder-white/20 focus:border-brand-red/50 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-card border border-card-border px-5 py-4 text-sm text-white placeholder-white/20 focus:border-brand-red/50 focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* What do you coach/teach */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-2">
                    What Do You Coach Or Teach? *
                  </label>
                  <input
                    type="text"
                    name="whatYouTeach"
                    required
                    value={formData.whatYouTeach}
                    onChange={handleChange}
                    className="w-full bg-card border border-card-border px-5 py-4 text-sm text-white placeholder-white/20 focus:border-brand-red/50 focus:outline-none transition-colors"
                    placeholder="e.g. Business coaching, fitness, real estate education..."
                  />
                </div>

                {/* Revenue dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-2">
                    Current Monthly Revenue *
                  </label>
                  <select
                    name="revenue"
                    required
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full bg-card border border-card-border px-5 py-4 text-sm text-white focus:border-brand-red/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select your revenue range</option>
                    {revenueOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Biggest challenge */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-2">
                    What Is Your Biggest Challenge Right Now? *
                  </label>
                  <textarea
                    name="biggestChallenge"
                    required
                    value={formData.biggestChallenge}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-card border border-card-border px-5 py-4 text-sm text-white placeholder-white/20 focus:border-brand-red/50 focus:outline-none transition-colors resize-none"
                    placeholder="What is the #1 thing holding you back from scaling?"
                  />
                </div>

                {/* What makes your offer different */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-2">
                    What Makes Your Offer Different? *
                  </label>
                  <textarea
                    name="whatMakesYouDifferent"
                    required
                    value={formData.whatMakesYouDifferent}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-card border border-card-border px-5 py-4 text-sm text-white placeholder-white/20 focus:border-brand-red/50 focus:outline-none transition-colors resize-none"
                    placeholder="What results do your clients get? Why should someone choose you?"
                  />
                </div>

                {/* How did you hear about us */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-2">
                    How Did You Hear About Us?
                  </label>
                  <input
                    type="text"
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleChange}
                    className="w-full bg-card border border-card-border px-5 py-4 text-sm text-white placeholder-white/20 focus:border-brand-red/50 focus:outline-none transition-colors"
                    placeholder="Social media, referral, ad, etc."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full btn-primary text-sm py-5 pulse-glow mt-4"
                >
                  Submit Application
                </button>

                <p className="text-white/20 text-xs text-center mt-4">
                  We only take on clients we are confident we can get results for.
                </p>
              </form>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  )
}
