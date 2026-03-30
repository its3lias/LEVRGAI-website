import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionLabel from '../components/SectionLabel'
import CTASection from '../components/CTASection'

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

function SystemSection({ number, title, subtitle, paragraphs, bullets, reverse = false }) {
  const [ref, isVisible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`py-20 md:py-28 border-t border-white/5 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className={`max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:direction-rtl' : ''}`}>
        {/* Number side */}
        <div className={`flex items-center justify-center ${reverse ? 'lg:order-2' : ''}`}>
          <div className="relative">
            <span className="text-[150px] md:text-[200px] font-black text-white/[0.03] leading-none">{number}</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 border border-brand-red/30 flex items-center justify-center">
                <span className="text-brand-red text-3xl font-black">{number}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className={reverse ? 'lg:order-1' : ''}>
          <span className="text-brand-red text-xs font-bold uppercase tracking-[0.3em] mb-3 block">{subtitle}</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-6">{title}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="text-white/50 text-sm leading-relaxed mb-4">{p}</p>
          ))}
          {bullets && (
            <ul className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-brand-red mt-2" />
                  <span className="text-white/60 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default function OurSystem() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 cyber-grid overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-red/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <SectionLabel text="Our System" />
            <h1 className="section-heading text-5xl md:text-6xl lg:text-7xl mb-6">
              The Complete System To{' '}
              <span className="text-brand-red">Scale Your Business</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              We do not just run ads. We build the entire client acquisition machine — from offer positioning to close — and manage it for you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      <SystemSection
        number="01"
        subtitle="Step One"
        title="Offer Positioning & Consulting"
        paragraphs={[
          "Before we ever run a single ad or build a single funnel, we start here. Because nothing else matters if your offer is not dialed in.",
          "Most coaches have a good offer but it is not positioned correctly. It does not speak directly to their dream client's deepest pain points. It does not make the decision to buy feel obvious. We fix that.",
          "We work with you to identify exactly who your ideal client is — what they want, what they fear, what their objections are, and what would make your offer feel like a no-brainer. Then we position your offer so compellingly that it would be stupid for your dream client not to buy.",
        ]}
        bullets={[
          "Deep-dive ideal client avatar research",
          "Offer messaging and positioning overhaul",
          "Objection mapping and pre-handling",
          "Pricing strategy alignment",
          "Competitive positioning analysis",
        ]}
      />

      <SystemSection
        number="02"
        subtitle="Step Two"
        title="Client Acquisition"
        paragraphs={[
          "Once your offer is dialed in, we deploy a proven done-for-you client acquisition system to get it in front of your ideal clients at scale.",
          "This is not a course on how to run ads. This is not a template you fill out yourself. We build and manage the entire system for you — so your pipeline fills up with qualified prospects who are ready to buy.",
          "We handle the strategy, the creative, the targeting, the funnels, and the optimization. You focus on delivering results for your clients.",
        ]}
        bullets={[
          "Full done-for-you ad campaign management",
          "Creative strategy and ad production",
          "Funnel build-out and optimization",
          "Audience targeting and scaling strategy",
          "Daily monitoring, testing, and iteration",
        ]}
        reverse
      />

      <SystemSection
        number="03"
        subtitle="Step Three"
        title="Backend Systems"
        paragraphs={[
          "Most coaches are leaking money and they do not even know it. Leads come in but there is no system to capture, nurture, and convert them. Leads fall through the cracks. Deals go cold. Revenue gets left on the table.",
          "We build out the full backend infrastructure so that every single lead is tracked, followed up with, and moved through your pipeline automatically.",
        ]}
        bullets={[
          "Full CRM setup and configuration",
          "Automated follow-up sequences (email + SMS)",
          "Pipeline management and lead tracking",
          "Booking system and calendar integration",
          "Automated nurture campaigns for cold leads",
        ]}
      />

      <SystemSection
        number="04"
        subtitle="Step Four"
        title="Maximize Lifetime Value"
        paragraphs={[
          "Getting a new client is only the beginning. The real money — and the real impact — comes from maximizing the lifetime value of every customer you close.",
          "Most coaches are leaving massive amounts of revenue on the table because they have no ascension strategy, no retention systems, and no way to continue delivering value after the first purchase.",
          "We help you build out ascension offers, retention systems, and backend automation so that every client you close becomes more valuable over time.",
        ]}
        bullets={[
          "Ascension offer strategy and creation",
          "Client retention and engagement systems",
          "Upsell and cross-sell automation",
          "Referral system implementation",
          "Lifetime value tracking and optimization",
        ]}
        reverse
      />

      {/* CTA */}
      <CTASection
        headline="Ready To Build Your System?"
        subheadline="Apply to work with us and we will build the entire client acquisition machine for your business."
      />
    </>
  )
}
