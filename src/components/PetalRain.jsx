import { useMemo } from 'react';

const PETAL_SHAPES = [
  'M10,2 C14,2 18,6 18,10 C18,16 10,22 10,22 C10,22 2,16 2,10 C2,6 6,2 10,2Z',
  'M10,1 C10,1 18,8 18,14 C18,18 14,22 10,22 C6,22 2,18 2,14 C2,8 10,1 10,1Z',
  'M10,2 C16,2 20,6 18,12 C16,18 10,22 10,22 C10,22 4,18 2,12 C0,6 4,2 10,2Z',
];

function Petal({ style, shapeIndex }) {
  const path = PETAL_SHAPES[shapeIndex % PETAL_SHAPES.length];
  const colors = ['#F4B8C8', '#E8A0B8', '#F9D0DA', '#D4AF6A', '#C8718A'];
  const color = colors[shapeIndex % colors.length];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: `${style.left}%`,
        pointerEvents: 'none',
        zIndex: 0,
        animation: `petalFall ${style.duration}s ${style.delay}s linear infinite,
                    petalSway ${style.sway}s ${style.delay}s ease-in-out infinite`,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 20 24" style={{ opacity: style.opacity, transform: `rotate(${style.rotate}deg)` }}>
        <path d={path} fill={color} />
      </svg>
    </div>
  );
}

export default function PetalRain({ count = 12 }) {
  const petals = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: (i * 7.9 + 3) % 95,
      duration: 6 + (i * 1.3) % 5,
      delay: (i * 0.8) % 8,
      sway: 2.5 + (i * 0.4) % 2,
      opacity: 0.5 + (i * 0.06) % 0.4,
      rotate: (i * 37) % 180,
      shapeIndex: i % 3,
    }))
  , [count]);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
      {petals.map(p => <Petal key={p.id} style={p} shapeIndex={p.shapeIndex} />)}
    </div>
  );
}
