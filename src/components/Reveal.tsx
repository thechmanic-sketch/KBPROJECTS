import { useRef, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'

type RevealProps = {
  children: ReactNode
  as?: 'div' | 'section'
  className?: string
  delay?: number
  y?: number
  stagger?: boolean
}

function Reveal({ children, as = 'div', className, delay = 0, y = 40, stagger = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const Tag = as

  useGSAP(
    () => {
      if (!ref.current) return
      const targets = stagger ? ref.current.children : ref.current

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: 'power3.out',
          stagger: stagger ? 0.12 : 0,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}

export default Reveal
