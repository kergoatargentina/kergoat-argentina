'use client'

// viewBox 660×660, center at 330,330
const CX = 330
const CY = 330
const R = 135        // connecting ring radius
const NODE_R = 215   // distance from center to node cards

const toRad = (deg: number) => (deg * Math.PI) / 180

const nodes = [
  { angle: -90, icon: 'error',          label: ['Sistemas', 'insuficientes'],           accent: true  },
  { angle:   0, icon: 'alarm',          label: ['Jefaturas', 'gestionando', 'urgencias'], accent: false },
  { angle:  90, icon: 'sync_problem',   label: ['Más', 'descoordinación'],               accent: true  },
  { angle: 180, icon: 'visibility_off', label: ['Pérdida de', 'anticipación'],           accent: false },
]

function pos(angle: number, radius: number) {
  return {
    x: CX + radius * Math.cos(toRad(angle)),
    y: CY + radius * Math.sin(toRad(angle)),
  }
}

const CARD_W = 76   // half-width of card rect
const CARD_H = 50   // half-height of card rect

export default function CirculoVicioso() {
  const circumference = 2 * Math.PI * R

  return (
    <div className="relative w-full max-w-[560px] mx-auto select-none">
      <style>{`
        @keyframes spinRing {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: ${-circumference.toFixed(1)}; }
        }
        @keyframes spinArrows {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .vc-ring     { animation: spinRing 26s linear infinite; }
        .vc-arrows   { transform-origin: ${CX}px ${CY}px; animation: spinArrows 26s linear infinite; }
        .vc-wrapper:hover .vc-ring,
        .vc-wrapper:hover .vc-arrows { animation-play-state: paused; }
      `}</style>

      <svg
        viewBox="0 0 660 660"
        className="vc-wrapper w-full h-auto"
        aria-label="Círculo vicioso de problemas organizacionales"
      >
        {/* Static background ring */}
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(11,18,74,0.07)" strokeWidth="2" />

        {/* Animated dashed ring */}
        <circle
          cx={CX} cy={CY} r={R}
          fill="none"
          stroke="#FF6B00"
          strokeWidth="2.5"
          strokeDasharray={`${(circumference * 0.20).toFixed(1)} ${(circumference * 0.055).toFixed(1)}`}
          strokeLinecap="round"
          className="vc-ring"
        />

        {/* Rotating arrowheads */}
        <g className="vc-arrows">
          {[0, 90, 180, 270].map((a) => {
            const { x, y } = pos(a, R)
            return (
              <g key={a} transform={`translate(${x},${y}) rotate(${a + 90})`}>
                <polygon points="0,-6 4.5,3 -4.5,3" fill="#FF6B00" opacity="0.75" />
              </g>
            )
          })}
        </g>

        {/* Dashed connector lines center → nodes */}
        {nodes.map(({ angle }, i) => {
          const outer = pos(angle, NODE_R - CARD_H - 6)
          const inner = pos(angle, 70)
          return (
            <line
              key={i}
              x1={inner.x} y1={inner.y}
              x2={outer.x} y2={outer.y}
              stroke="rgba(11,18,74,0.12)"
              strokeWidth="1"
              strokeDasharray="4 5"
            />
          )
        })}

        {/* Problem node cards */}
        {nodes.map(({ angle, icon, label, accent }, i) => {
          const { x, y } = pos(angle, NODE_R)
          const bg     = accent ? '#FFF1E8' : '#EEF0F8'
          const border = accent ? '#FF6B00' : '#0B124A'
          const tc     = accent ? '#c44e00' : '#0B124A'
          const cardH  = CARD_H + (label.length - 2) * 8  // extra height for 3-line labels

          return (
            <g key={i}>
              <rect
                x={x - CARD_W} y={y - cardH}
                width={CARD_W * 2} height={cardH * 2}
                rx="12" ry="12"
                fill={bg}
                stroke={border}
                strokeWidth="1.4"
                strokeOpacity="0.28"
              />
              {/* Icon */}
              <text
                x={x} y={y - cardH + 28}
                textAnchor="middle"
                fontSize="20"
                fontFamily="'Material Symbols Outlined', sans-serif"
                fill={tc}
              >
                {icon}
              </text>
              {/* Label lines */}
              {label.map((line, li) => (
                <text
                  key={li}
                  x={x}
                  y={y - cardH + 50 + li * 15}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fontFamily="inherit"
                  fill={tc}
                  letterSpacing="0.07em"
                >
                  {line.toUpperCase()}
                </text>
              ))}
            </g>
          )
        })}

        {/* Center hub */}
        <defs>
          <radialGradient id="hubG" cx="38%" cy="32%">
            <stop offset="0%" stopColor="#ff9040" />
            <stop offset="100%" stopColor="#c44e00" />
          </radialGradient>
        </defs>
        <circle cx={CX} cy={CY} r={62} fill="url(#hubG)" />
        {/* Outer glow ring on hub */}
        <circle cx={CX} cy={CY} r={62} fill="none" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.4" />

        <text
          x={CX} y={CY - 10}
          textAnchor="middle"
          fontSize="20"
          fontFamily="'Material Symbols Outlined', sans-serif"
          fill="white"
        >autorenew</text>
        <text x={CX} y={CY + 9}  textAnchor="middle" fontSize="8" fontWeight="800" fontFamily="inherit" fill="white" letterSpacing="0.13em">CÍRCULO</text>
        <text x={CX} y={CY + 21} textAnchor="middle" fontSize="8" fontWeight="800" fontFamily="inherit" fill="white" letterSpacing="0.13em">VICIOSO</text>
      </svg>
    </div>
  )
}
