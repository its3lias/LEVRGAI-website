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

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 cyber-grid overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-red/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <SectionLabel text="Our Mission" />
            <h1 className="section-heading text-5xl md:text-6xl lg:text-7xl mb-6">
              We Are On A Mission To{' '}
              <span className="text-brand-red">Make Info Great Again</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              The information industry is broken. We are here to fix it, one real business at a time.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* THE STORY */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <SectionLabel text="The Story" />
            <h2 className="section-heading text-center mb-10">
              Why <span className="text-brand-red">LEVRG AI</span> Exists
            </h2>
          </AnimatedSection>

          <div className="space-y-6 text-white/60 text-base leading-relaxed">
            <AnimatedSection>
              <p>
                There was a golden era in the information industry. Tony Robbins. Grant Cardone. Jim Rohn. Gary Vee. Russell Brunson. Real people with real results building real empires. They changed lives. They built movements. They proved that education and mentorship could be one of the most powerful forces on the planet.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p>
                Then the barrier to entry dropped. And the market got flooded.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p>
                Suddenly everyone was a guru. Screenshots got faked. Lambos got rented. Testimonials got manufactured. People with zero real results started selling courses on how to get results they never actually achieved. Buyers got burned. Trust collapsed. The whole industry got a bad name.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="text-white text-lg font-semibold">
                That is the problem LEVRG AI was built to solve.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* THE FOUNDER */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel text="The Founder" />
            <h2 className="section-heading mb-4">
              <span className="text-brand-red">Elias Chavez</span>
            </h2>
            <p className="text-white/40 text-sm uppercase tracking-[0.2em]">Founder and CEO of LEVRG AI</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card p-8 md:p-12 space-y-6 text-white/60 text-base leading-relaxed">
              <p>
                Elias Chavez is a 19-year-old entrepreneur who started LEVRG AI because he saw something rare being destroyed.
              </p>
              <p>
                He grew up watching the information industry go from a space where real mentors built real empires on real results, to a wasteland of rented Lambos, manufactured testimonials, and zero accountability. He got burned by it himself. More than once.
              </p>
              <p>
                He believes the world needs better education. Not a university system that cannot keep up with how fast things are changing. And not a guru industry selling dreams with nothing underneath.
              </p>
              <p className="text-white font-semibold text-lg">
                LEVRG AI exists to fix that.
              </p>
              <p>
                We work exclusively with coaches and educators who actually deliver. We help them scale. And we prove every day that integrity and impact are not mutually exclusive.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel text="Our Values" />
            <h2 className="section-heading">
              What We <span className="text-brand-red">Stand For</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Integrity Over Revenue',
                description: 'We turn down clients who do not deliver real results. We would rather make less money than contribute to the problem we are trying to fix.',
              },
              {
                title: 'Results Over Promises',
                description: 'We do not sell dreams. We build systems that produce real, measurable outcomes. Every decision we make is driven by what actually works.',
              },
              {
                title: 'Impact Over Ego',
                description: 'This is not about us. It is about building something bigger. An industry where real educators can thrive and buyers can trust again.',
              },
            ].map((item, i) => {
              const [ref, isVisible] = useScrollAnimation()
              return (
                <div
                  key={i}
                  ref={ref}
                  className={`card text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <h3 className="text-sm font-bold uppercase tracking-[0.15em] mb-3 text-brand-red">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH / WHO WE DON'T */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-heading">
              Who We Work With.{' '}
              <span className="text-brand-red">And Who We Don't.</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card border-brand-red/20 p-8">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] mb-6 text-brand-red">We Work With</h3>
                <ul className="space-y-4">
                  {[
                    "Coaches and educators with a proven offer",
                    "People who get real, measurable results for their clients",
                    "Business owners serious about scaling with integrity",
                    "People ready to invest in systems, not shortcuts",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-brand-red text-sm mt-0.5">&#10003;</span>
                      <span className="text-white/60 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card border-white/10 p-8">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] mb-6 text-white/40">We Do NOT Work With</h3>
                <ul className="space-y-4">
                  {[
                    "Anyone selling smoke and mirrors",
                    "People with no real results for their clients",
                    "Get-rich-quick promoters and fake gurus",
                    "Anyone not committed to delivering real value",
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
        headline="Join The Mission"
        subheadline="If you are a coach or educator who actually delivers, we want to help you scale."
      />
    </>
  )
}
