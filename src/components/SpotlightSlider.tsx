import { useRef, useState, type ReactNode } from 'react'
import './SpotlightSlider.css'

function SpotlightSlider({ children }: { children: ReactNode[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  function handleScroll() {
    const track = trackRef.current
    if (!track) return
    const cardWidth = track.scrollWidth / children.length
    const index = Math.round(track.scrollLeft / cardWidth)
    setActive(Math.max(0, Math.min(children.length - 1, index)))
  }

  function goTo(index: number) {
    const track = trackRef.current
    if (!track) return
    const cardWidth = track.scrollWidth / children.length
    track.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
    setActive(index)
  }

  return (
    <div className="spotlight-slider">
      <div className="spotlight-track" ref={trackRef} onScroll={handleScroll}>
        {children}
      </div>
      <div className="spotlight-dots" role="tablist" aria-label="Featured work slides">
        {children.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Go to slide ${index + 1}`}
            className={index === active ? 'spotlight-dot active' : 'spotlight-dot'}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default SpotlightSlider
