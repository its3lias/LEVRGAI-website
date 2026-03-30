import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Check if element is already in viewport on mount
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin: '50px' }
    )

    observer.observe(el)

    // Also listen for scroll to catch any missed intersections
    const handleScroll = () => {
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight + 50 && r.bottom > -50) {
        setIsVisible(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return [ref, isVisible]
}
