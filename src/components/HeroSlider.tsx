import { useEffect, useRef, useState } from 'react'
import { asset } from '../lib/asset'
import './HeroSlider.css'

type Slide = { src: string; alt: string }

function HeroSlider({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, 4200)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [slides.length])

  function goTo(index: number) {
    setActive(index)
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, 4200)
  }

  return (
    <div className="hero-slider">
      <div className="hero-slider-stage">
        {slides.map((slide, index) => {
          const rawOffset = index - active
          const half = slides.length / 2
          let offset = rawOffset
          if (offset > half) offset -= slides.length
          if (offset < -half) offset += slides.length

          const clamped = Math.max(-3, Math.min(3, offset))
          const translateX = clamped * 58
          const translateZ = -Math.abs(clamped) * 220
          const rotateY = clamped * -30
          const scale = 1 - Math.min(Math.abs(clamped), 3) * 0.14
          const opacity = Math.abs(offset) > 2 ? 0 : 1
          const zIndex = 100 - Math.abs(clamped)

          return (
            <button
              key={slide.src}
              type="button"
              className="hero-slide"
              style={{
                transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex,
                opacity,
                pointerEvents: offset === 0 ? 'none' : 'auto',
              }}
              onClick={() => goTo(index)}
              aria-label={`Show slide: ${slide.alt}`}
            >
              <img
                src={asset(slide.src)}
                alt={slide.alt}
                style={{ animationPlayState: offset === 0 ? 'running' : 'paused' }}
              />
            </button>
          )
        })}
      </div>
      <div className="hero-slider-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={index === active ? 'hero-slider-dot active' : 'hero-slider-dot'}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider
