import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

type StatCounterProps = {
  value: number
  suffix?: string
  label: string
}

function StatCounter({ value, suffix = '', label }: StatCounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    if (!numberRef.current) return
    const counter = { val: 0 }

    gsap.to(counter, {
      val: value,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: numberRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent = Math.round(counter.val).toLocaleString()
        }
      },
    })
  }, [value])

  return (
    <div className="stat-counter">
      <div className="stat-number">
        <span ref={numberRef}>0</span>
        {suffix}
      </div>
      <p className="stat-label">{label}</p>
    </div>
  )
}

export default StatCounter
