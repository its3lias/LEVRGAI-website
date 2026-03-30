import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let done = false
    const show = () => {
      if (done) return
      done = true
      setIsVisible(true)
    }

    // Check immediately — element may already be in view on mount
    const check = () => {
      const rect = el.getBoundingClientRect()
      return rect.top < window.innerHeight + 120 && rect.bottom > -120
    }

    if (check()) {
      show()
      return
    }

    // Intersection Observer (primary trigger)
    let observer = null
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) show()
        },
        { threshold: 0, rootMargin: '120px 0px 120px 0px' }
      )
      observer.observe(el)
    }

    // Scroll listener (secondary fallback — catches IO misses)
    const onScroll = () => {
      if (check()) show()
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Hard timeout — nothing stays invisible forever
    const timer = setTimeout(show, 1200)

    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [])

  return [ref, isVisible]
}
