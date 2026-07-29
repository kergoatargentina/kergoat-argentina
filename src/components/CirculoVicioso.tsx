'use client'

const CX = 250
const CY = 250
const R = 145

const toRad = (deg: number) => (deg * Math.PI) / 180

const nodes = [
  { angle: -90, icon: 'error', label: ['Sistemas', 'insuficientes'], accent: true },
  { angle: 0,   icon: 'alarm', label: ['Jefaturas', 'gestionando urgencias'], accent: false },
  { angle: 90,  icon: 'sync_problem', label: ['Más', 'descoordinación'], accent: true },
  { angle: 180, icon: 'visibility_off', label: ['Pérdida de', 'anticipación'], accent: false },
]

function nodePos(angle: number, radius: number) {
  return {
    x: CX + radius * Math.cos(toRad(angle)),
    y: CY + radius * Math.sin(toRad(angle)),
  }
}

export default function CirculoVicioso() {
  const circumference = 2 * Math.PI * R

  return (
    <div className="relative w-full max-w-[500px] mx-auto select-none">
      <style>{`
        @keyframes spinRing {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: ${-circumference}; }
        }
        @keyframes spinArrows {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .vicious-ring {
          animation: spinRing 24s linear infinite;
        }
        .vicious-arrows {
          transform-origin: ${CX}px ${CY}px;
          animation: spinArrows 24s linear infinite;
        }
        .vicious-wrapper:hover .vicious-ring,
        .vicious-wrapper:hover .vicious-arrows {
          animation-play-state: paused;
        }
      `}</style>

      <svg
        viewBox="0 0 500 500"
        className="vicious-wrapper w-full h-auto"
        aria-label="Círculo vicioso de problemas organizacionales"
      >
        {/* Outer decorative ring — static */}
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(11,18,74,0.06)" strokeWidth="2" />

        {/* Animated dashed ring — conveys cycle flow */}
        <circle
          cx={CX} cy={CY} r={R}
          fill="none"
          stroke="#FF6B00"
          strokeWidth="2.5"
          strokeDasharray={`${circumference * 0.18} ${circumference * 0.07}`}
          strokeLinecap="round"
          className="vicious-ring"
          style={{ strokeDashoffset: 0 }}
        />

        {/* Animated arrow markers on the ring */}
        <g className="vicious-arrows">
          {[0, 90, 180, 270].map((a) => {
            const { x, y } = nodePos(a, R)
            return (
              <g key={a} transform={`translate(${x},${y}) rotate(${a + 90})`}>
                <polygon points="0,-6 4,2 -4,2" fill="#FF6B00" opacity="0.7" />
              </g>
            )
          })}
        </g>

        {/* Connector lines from center to each node */}
        {nodes.map(({ angle }, i) => {
          const outer = nodePos(angle, R - 36)
          const inner = nodePos(angle, 62)
          return (
            <line
              key={i}
              x1={inner.x} y1={inner.y}
              x2={outer.x} y2={outer.y}
              stroke="rgba(11,18,74,0.10)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          )
        })}

        {/* Problem nodes */}
        {nodes.map(({ angle, icon, label, accent }, i) => {
          const { x, y } = nodePos(angle, R + 72)
          const bg = accent ? '#FFF1E8' : '#EEF0F8'
          const border = accent ? '#FF6B00' : '#0B124A'
          const textColor = accent ? '#c44e00' : '#0B124A'
          return (
            <g key={i}>
              <rect
                x={x - 70} y={y - 42}
                width="140" height="84"
                rx="14" ry="14"
                fill={bg}
                stroke={border}
                strokeWidth="1.5"
                strokeOpacity="0.3"
              />
              {/* Material symbol via foreignObject */}
              <text
                x={x} y={y - 14}
                textAnchor="middle"
                fontSize="22"
                fontFamily="'Material Symbols Outlined'"
                fill={textColor}
              >
                {icon}
              </text>
              {label.map((line, li) => (
                <text
                  key={li}
                  x={x} y={y + 10 + li * 16}
                  textAnchor="middle"
                  fontSize="10.5"
                  fontWeight="700"
                  fontFamily="inherit"
                  fill={textColor}
                  letterSpacing="0.06em"
                >
                  {line.toUpperCase()}
                </text>
              ))}
            </g>
          )
        })}

        {/* Center hub */}
        <circle cx={CX} cy={CY} r={60} fill="#FF6B00" />
        <circle cx={CX} cy={CY} r={60} fill="url(#hubGrad)" />
        <defs>
          <radialGradient id="hubGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#ff8c2a" />
            <stop offset="100%" stopColor="#c44e00" />
          </radialGradient>
        </defs>
        <text x={CX} y={CY - 10} textAnchor="middle" fontSize="18" fontFamily="'Material Symbols Outlined'" fill="white">autorenew</text>
        <text x={CX} y={CY + 8} textAnchor="middle" fontSize="8.5" fontWeight="800" fontFamily="inherit" fill="white" letterSpacing="0.12em">CÍRCULO</text>
        <text x={CX} y={CY + 20} textAnchor="middle" fontSize="8.5" fontWeight="800" fontFamily="inherit" fill="white" letterSpacing="0.12em">VICIOSO</text>
      </svg>
    </div>
  )
}
