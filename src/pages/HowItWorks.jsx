import { Link } from 'react-router-dom'
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

function ProcessStep({ number, title, subtitle, description, details, isLast = false }) {
  const [ref, isVisible] = useScrollAnimation()
  return (
    <div ref={ref} className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="relative flex gap-8 md:gap-12">
        {/* Timeline */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-red flex items-center justify-center font-black text-xl md:text-2xl relative z-10">
            {number}
          </div>
          {!isLast && (
            <div className="w-px flex-1 bg-gradient-to-b from-brand-red/50 to-brand-red/0 mt-2" />
          )}
        </div>

        {/* Content */}
        <div className="pb-16 md:pb-24">
          <span className="text-brand-red text-xs font-bold uppercase tracking-[0.3em] mb-2 block">{subtitle}</span>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider mb-4">{title}</h2>
          <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xl">{description}</p>
          <div className="card">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-4">What This Looks Like</h4>
            <ul className="space-y-3">
              {details.map((d, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-brand-red mt-2" />
                  <span className="text-white/60 text-sm">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 cyber-grid overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-red/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <SectionLabel text="The Process" />
            <h1 className="section-heading text-5xl md:text-6xl lg:text-7xl mb-6">
              How It <span className="text-brand-red">Works</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Three phases. No guesswork. No chaos. Just a proven system that takes you from stuck to scaling.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <ProcessStep
            number="1"
            subtitle="Phase One"
            title="Identify And Position"
            description="We start by going deep on your offer and your market. We find out exactly who your ideal client is, what they want, and why they are not buying yet. Then we make your offer so clear and compelling that not buying feels like the wrong move."
            details={[
              "Deep-dive research into your ideal client",
              "Full offer audit and positioning overhaul",
              "Objection mapping. We pre-handle every reason they would say no.",
              "Messaging framework that speaks directly to your dream client",
              "Pricing strategy that makes sense for your market and your goals",
            ]}
          />

          <ProcessStep
            number="2"
            subtitle="Phase Two"
            title="Deploy And Acquire"
            description="Once your offer is locked in, we deploy a client acquisition system to get it in front of your dream clients at scale. We build the funnels, run the ads, and fill your pipeline with qualified calls. All done for you."
            details={[
              "Full ad campaign strategy, build-out, and launch",
              "Creative production. Ads that stop the scroll and actually convert.",
              "Funnel design and build, optimized for your specific offer",
              "Targeting strategy to reach your dream clients",
              "Daily monitoring, split-testing, and optimization",
              "Qualified prospects showing up on your calendar ready to buy",
            ]}
          />

          <ProcessStep
            number="3"
            subtitle="Phase Three"
            title="Nurture, Close, And Scale"
            description="Getting leads is just the start. We help you close more of them, then build out the backend so your clients stay longer, spend more, and refer others. You grow without burning out."
            details={[
              "CRM and pipeline management. Every lead is tracked and followed up with.",
              "Automated follow-up sequences so no lead goes cold",
              "Sales process refinement to increase your close rate",
              "Ascension offer strategy to increase lifetime value",
              "Retention systems to keep clients longer",
              "Backend automation so you scale without the chaos",
            ]}
            isLast
          />
        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel text="The Difference" />
            <h2 className="section-heading mb-6">
              This Is Not Another <span className="text-brand-red">Course Or Program</span>
            </h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto">
              This is a done-for-you system. We do not hand you a playbook and wish you luck. We build it, deploy it, and manage it so you can focus on what you do best.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card border-brand-red/20">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] mb-4 text-brand-red">What You Get</h3>
                <ul className="space-y-3">
                  {[
                    "A done-for-you client acquisition system",
                    "Offer positioning and consulting",
                    "Full backend build-out and automation",
                    "A pipeline filled with qualified calls",
                    "Ongoing optimization as you scale",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-brand-red text-sm mt-0.5">&#10003;</span>
                      <span className="text-white/60 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card border-white/10">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] mb-4 text-white/40">What This Is NOT</h3>
                <ul className="space-y-3">
                  {[
                    "A course you watch and figure out yourself",
                    "A template pack with no support",
                    "A generic agency that takes anyone who applies",
                    "A get-rich-quick scheme",
                    "Another guru selling dreams with nothing behind them",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-white/30 text-sm mt-0.5">&#10007;</span>
                      <span className="text-white/40 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        headline="Ready To Get Started?"
        subheadline="Apply now and we will show you exactly how we can build this system for your business."
      />
    </>
  )
}
