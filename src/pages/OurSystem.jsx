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
      <div className={`max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
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
              We do not just run ads. We build the entire client acquisition machine from offer positioning to close and manage it for you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      <SystemSection
        number="01"
        subtitle="Step One"
        title="Offer Positioning And Consulting"
        paragraphs={[
          "Before we run a single ad or build a single funnel, we start here. Everything else is a waste if your offer is not dialed in.",
          "Most coaches have a decent offer. But decent is not enough. If your messaging is vague, if it does not speak directly to what your ideal client is lying awake thinking about at night, they scroll past. We fix that.",
          "We get inside the head of your ideal client. What do they want? What are they scared of? What have they already tried? What would make them say this is exactly what I need? Then we rebuild your positioning around that. By the time we are done, your offer is a no-brainer.",
        ]}
        bullets={[
          "Ideal client research and avatar build-out",
          "Offer messaging and positioning overhaul",
          "Objection mapping. We pre-handle every reason they would say no.",
          "Pricing strategy that makes sense for your market",
          "Competitive positioning so you stand out",
        ]}
      />

      <SystemSection
        number="02"
        subtitle="Step Two"
        title="Client Acquisition"
        paragraphs={[
          "With your offer locked in, we go get you clients. Done for you. We build the campaigns, write the ads, set up the funnels, and manage everything.",
          "This is not a course. This is not a template. We do the work. Your calendar fills up with qualified calls from people who actually want what you sell.",
          "We handle the strategy, the creative, the targeting, and the optimization. You focus on showing up to the calls and delivering results.",
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
          "Most coaches are leaking money on the backend and they do not even know it. Leads come in but there is no system to catch them. No CRM, no follow-up, no pipeline structure. Leads go cold and deals die on the vine.",
          "We build it all out. Every lead gets captured, tagged, and followed up with automatically. Nothing falls through the cracks.",
        ]}
        bullets={[
          "Full CRM setup and configuration",
          "Automated follow-up sequences via email and SMS",
          "Pipeline management and lead tracking",
          "Booking system and calendar integration",
          "Automated nurture campaigns for leads that go cold",
        ]}
      />

      <SystemSection
        number="04"
        subtitle="Step Four"
        title="Maximize Lifetime Value"
        paragraphs={[
          "Getting a client is great. Keeping them and getting them to buy more is where the real money is.",
          "Most coaches are so focused on getting new clients that they completely ignore the people already in their ecosystem. That is a massive mistake. One great client who stays for a year and buys your next offer is worth ten one-time buyers.",
          "We help you build the systems to retain clients, move them up to higher-ticket offers, and turn your existing base into a growth engine.",
        ]}
        bullets={[
          "Ascension offer strategy and creation",
          "Client retention and engagement systems",
          "Upsell and cross-sell automation",
          "Referral system implementation",
          "Lifetime value tracking and reporting",
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
