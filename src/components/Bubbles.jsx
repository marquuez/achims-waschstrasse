const BUBBLES = [
  { left: '6%', top: '14%', size: 36, tone: 'blue' },
  { left: '18%', top: '62%', size: 52, tone: 'white' },
  { left: '28%', top: '28%', size: 22, tone: 'blue' },
  { left: '12%', top: '78%', size: 28, tone: 'blue' },
  { left: '42%', top: '8%', size: 20, tone: 'white' },
  { left: '48%', top: '88%', size: 34, tone: 'blue' },
  { left: '54%', top: '22%', size: 26, tone: 'blue' },
  { left: '58%', top: '72%', size: 18, tone: 'white' },
  { left: '88%', top: '12%', size: 30, tone: 'blue' },
  { left: '92%', top: '82%', size: 24, tone: 'white' },
  { left: '76%', top: '8%', size: 16, tone: 'blue' },
  { left: '82%', top: '88%', size: 20, tone: 'blue' },
]

export default function Bubbles({ className = '' }) {
  return (
    <div className={`bubbles ${className}`.trim()} aria-hidden="true">
      {BUBBLES.map((bubble, index) => (
        <span
          key={index}
          className={`bubble bubble--${bubble.tone}`}
          style={{
            left: bubble.left,
            top: bubble.top,
            width: bubble.size,
            height: bubble.size,
          }}
        />
      ))}
    </div>
  )
}
