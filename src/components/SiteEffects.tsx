import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { setLenis } from '../lib/lenis'

const TILT_SELECTOR =
  '.service-card, .gallery-item, .spotlight-card, .showcase-card, .news-card, .about-photo-strip img'

function SiteEffects() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1 - Math.pow(2, -10 * t)),
    })

    lenis.on('scroll', ScrollTrigger.update)
    setLenis(lenis)

    function raf(time: number) {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      setLenis(null)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    function onMove(event: MouseEvent) {
      const target = (event.target as HTMLElement)?.closest?.(
        '.btn',
      ) as HTMLElement | null
      if (!target) return
      const rect = target.getBoundingClientRect()
      const x = event.clientX - rect.left - rect.width / 2
      const y = event.clientY - rect.top - rect.height / 2
      target.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`
    }
    function onLeave(event: MouseEvent) {
      const target = (event.target as HTMLElement)?.closest?.('.btn') as HTMLElement | null
      if (target) target.style.transform = ''
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseout', onLeave)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    function onMove(event: MouseEvent) {
      const target = (event.target as HTMLElement)?.closest?.(TILT_SELECTOR) as HTMLElement | null
      if (!target) return
      const rect = target.getBoundingClientRect()
      const px = (event.clientX - rect.left) / rect.width - 0.5
      const py = (event.clientY - rect.top) / rect.height - 0.5
      target.style.transform = `perspective(800px) rotateX(${py * -8}deg) rotateY(${px * 8}deg) scale3d(1.02, 1.02, 1.02)`
    }
    function onLeave(event: MouseEvent) {
      const target = (event.target as HTMLElement)?.closest?.(TILT_SELECTOR) as HTMLElement | null
      if (target) target.style.transform = ''
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseout', onLeave)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return null
}

export default SiteEffects
