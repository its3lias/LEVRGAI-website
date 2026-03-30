import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function CTASection({
  headline = 'Ready To Scale?',
  subheadline = 'We only work with a limited number of clients. Apply to see if you qualify.',
}) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px]" />
      </div>

      <div className={`relative max-w-3xl mx-auto px-6 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="section-heading mb-6">{headline}</h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">{subheadline}</p>
        <Link to="/work-with-us" className="btn-primary text-sm pulse-glow">
          Apply Now
        </Link>
      </div>
    </section>
  )
}
