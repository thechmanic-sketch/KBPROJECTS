import { useEffect, useRef } from 'react'
import './CustomCursor.css'

const INTERACTIVE_SELECTOR = 'a, button, .btn, .service-card, .gallery-item, .spotlight-card'

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    if (!dotRef.current || !ringRef.current) return
    const dot: HTMLDivElement = dotRef.current
    const ring: HTMLDivElement = ringRef.current

    let ringX = 0
    let ringY = 0
    let targetX = 0
    let targetY = 0
    let raf = 0

    function onMove(event: MouseEvent) {
      targetX = event.clientX
      targetY = event.clientY
      dot.style.transform = `translate(${targetX}px, ${targetY}px)`
    }

    function onOver(event: MouseEvent) {
      const target = (event.target as HTMLElement)?.closest?.(INTERACTIVE_SELECTOR)
      ring.classList.toggle('is-active', Boolean(target))
    }

    function tick() {
      ringX += (targetX - ringX) * 0.18
      ringY += (targetY - ringY) * 0.18
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      raf = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    raf = requestAnimationFrame(tick)
    document.body.classList.add('has-custom-cursor')

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}

export default CustomCursor
