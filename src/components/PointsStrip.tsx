import Reveal from './Reveal'
import './PointsStrip.css'

function PointsStrip({ items }: { items: string[] }) {
  return (
    <Reveal as="div" className="points-strip" stagger>
      {items.map((point, index) => (
        <div className="points-strip-item" key={point}>
          <span className="points-strip-index">{String(index + 1).padStart(2, '0')}</span>
          <span>{point}</span>
        </div>
      ))}
    </Reveal>
  )
}

export default PointsStrip
