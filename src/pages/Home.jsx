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

function ProblemCard({ number, title, description, delay }) {
  const [ref, isVisible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`card relative group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute -top-px -left-px -right-px h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="text-brand-red text-5xl font-black opacity-20 absolute top-4 right-6">{number}</span>
      <h3 className="text-lg font-bold uppercase tracking-wider mb-3 pr-12">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function ServiceCard({ icon, title, description, delay }) {
  const [ref, isVisible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`card text-center group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border border-brand-red/30 text-brand-red group-hover:bg-brand-red/10 transition-all duration-500">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-sm font-bold uppercase tracking-[0.15em] mb-3">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description, delay }) {
  const [ref, isVisible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`flex gap-5 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-12 h-12 bg-brand-red flex items-center justify-center font-black text-lg">
        {number}
      </div>
      <div>
        <h3 className="text-base font-bold uppercase tracking-wider mb-2">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center cyber-grid overflow-hidden">
        {/* Red glow orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-red/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center pt-32 pb-20">
          <div className="animate-fade-in-up">
            <SectionLabel text="Client Acquisition Agency" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.05] mb-6">
              We Help Online Coaches And Consultants{' '}
              <span className="text-brand-red">Scale Past $25k/Month</span>
            </h1>
            <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              LEVRG AI is a done-for-you client acquisition and consulting agency. We position your offer, fill your pipeline, and build the backend systems to scale — so you can focus on delivering results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/work-with-us" className="btn-primary pulse-glow">
                Apply Now
              </Link>
              <Link to="/how-it-works" className="btn-outline">
                See How It Works
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* MARQUEE */}
      <div className="border-y border-white/5 py-4 overflow-hidden bg-brand-red/5">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mx-12">
              Done-For-You Client Acquisition
              <span className="inline-block w-2 h-2 bg-brand-red mx-8 align-middle" />
            </span>
          ))}
        </div>
      </div>

      {/* PROBLEM SECTION */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel text="The Problem" />
            <h2 className="section-heading">
              Most Coaches Are Stuck.{' '}
              <span className="text-brand-red">Here Is Why.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProblemCard
              number="01"
              title="Your Offer Is Good But Nobody Knows About It"
              description="You have a great offer that gets real results for your clients. But you are invisible. No consistent system to get it in front of the right people at scale."
              delay={0}
            />
            <ProblemCard
              number="02"
              title="Your Pipeline Is Leaking — Leads Fall Through The Cracks"
              description="You are generating interest but your backend is a mess. No CRM, no follow-up system, no automations. Leads go cold and money walks out the door."
              delay={150}
            />
            <ProblemCard
              number="03"
              title="You Have No System — Just Chaos, Guesswork, And Inconsistency"
              description="Some months are great. Some are terrifying. Without a repeatable, scalable system you are stuck on a revenue rollercoaster with no way off."
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* SOLUTION / SERVICES */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel text="The Solution" />
            <h2 className="section-heading">
              The <span className="text-brand-red">LEVRG AI</span> System
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="Offer Positioning"
              description="We dial in your offer so it speaks directly to your dream client and makes it stupid for them not to buy."
              delay={0}
            />
            <ServiceCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
              title="Client Acquisition"
              description="We deploy a proven done-for-you system to fill your pipeline with qualified calls from your ideal clients at scale."
              delay={150}
            />
            <ServiceCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
              title="Backend Systems"
              description="CRM, automations, follow-up sequences, pipeline management — built out so no lead ever falls through the cracks."
              delay={300}
            />
            <ServiceCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
              title="Maximize LTV"
              description="We help you keep clients longer, ascend them to higher offers, and maximize the lifetime value of every customer."
              delay={450}
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS PREVIEW */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel text="The Process" />
            <h2 className="section-heading">
              How It <span className="text-brand-red">Works</span>
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-10">
            <StepCard
              number="1"
              title="Identify & Position"
              description="We find your ideal client, understand their objections, and position your offer so compellingly it would be stupid for them not to buy."
              delay={0}
            />
            <StepCard
              number="2"
              title="Deploy & Acquire"
              description="We deploy a proven client acquisition system to get your offer in front of your dream clients at scale and fill your pipeline with qualified calls."
              delay={150}
            />
            <StepCard
              number="3"
              title="Nurture, Close & Scale"
              description="We help you close your dream clients, maximize their lifetime value through ascension offers, retention systems, and backend automation. You scale without chaos."
              delay={300}
            />
          </div>

          <AnimatedSection className="text-center mt-12" delay={400}>
            <Link to="/how-it-works" className="btn-outline text-xs">
              See The Full Process
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel text="Who This Is For" />
            <h2 className="section-heading mb-6">
              Who We <span className="text-brand-red">Work With</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card p-8 md:p-12">
              <ul className="space-y-5">
                {[
                  'Online coaches, consultants, and high-ticket educators',
                  'You have a proven offer that gets real results for your clients',
                  'You are doing at least some revenue but are stuck and want to break past your current ceiling',
                  'You want a done-for-you system — not another course or DIY program',
                  'You are ready to invest in scaling your business the right way',
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-red/20 flex items-center justify-center mt-0.5">
                      <span className="w-2 h-2 bg-brand-red" />
                    </span>
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY WE ARE DIFFERENT */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel text="Why Us" />
            <h2 className="section-heading mb-6">
              Why We Are <span className="text-brand-red">Different</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'We Are Selective',
                  description: 'We do not take on every client with a credit card. We only work with people who actually deliver real value and get real results for their clients.',
                },
                {
                  title: 'Integrity First',
                  description: 'We care about making the information industry better. Our clients have to be part of that mission. If you are selling smoke and mirrors, we are not for you.',
                },
                {
                  title: 'Make Info Great Again',
                  description: 'The info industry had a golden era. Then it got flooded with fakes. We are on a mission to bring it back by working exclusively with people who deliver.',
                },
              ].map((item, i) => (
                <div key={i} className="card text-center">
                  <h3 className="text-sm font-bold uppercase tracking-[0.15em] mb-3 text-brand-red">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection />
    </>
  )
}
