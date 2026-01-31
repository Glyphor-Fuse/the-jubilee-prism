
import { motion } from "motion/react";
import { useState, useEffect } from "react";

// Mock Data for the transit map
const STATIONS = [
  { id: 1, name: "Italo Central", x: 20, y: 30, color: "tubeRed", pulse: "fast" },
  { id: 2, name: "Gioroder Circus", x: 40, y: 60, color: "tubeBlue", pulse: "medium" },
  { id: 3, name: "Synthwave Sq", x: 60, y: 25, color: "tubeRed", pulse: "slow" },
  { id: 4, name: "Bassline Park", x: 80, y: 50, color: "tubeBlue", pulse: "fast" },
  { id: 5, name: "Cosmic Grove", x: 50, y: 80, color: "gold", pulse: "medium" },
];

export default function BpmTransitMap() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            BPM TRANSIT <span className="text-tubeBlue">NETWORK</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Interactive sound topology. Each line represents a genre, each station a DJ. 
            Watch the network pulse in real-time.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-zinc-900/50 rounded-3xl border border-zinc-800 backdrop-blur-sm overflow-hidden shadow-2xl">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* Connecting Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Red Line */}
            <motion.path
              d="M100,200 C300,200 400,100 600,150 S900,100 1200,300"
              fill="none"
              stroke="#EE2E24"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Blue Line */}
            <motion.path
              d="M100,400 C300,400 500,500 700,300 S1000,200 1300,250"
              fill="none"
              stroke="#0039A6"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>

          {/* Stations Nodes */}
          {STATIONS.map((station) => (
            <div
              key={station.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${station.x}%`, top: `${station.y}%` }}
              onMouseEnter={() => setActiveNode(station.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Pulse Effect */}
              <div 
                className={`absolute inset-0 rounded-full animate-ping opacity-75 
                  ${station.color === 'tubeRed' ? 'bg-tubeRed' : station.color === 'tubeBlue' ? 'bg-tubeBlue' : 'bg-yellow-500'}
                `}
              />
              
              {/* Core Node */}
              <div 
                className={`relative w-6 h-6 rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-125
                  ${station.color === 'tubeRed' ? 'bg-tubeRed' : station.color === 'tubeBlue' ? 'bg-tubeBlue' : 'bg-yellow-500'}
                `}
              />

              {/* Station Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: activeNode === station.id ? 1 : 0.7, 
                  y: activeNode === station.id ? -10 : 0,
                  scale: activeNode === station.id ? 1.1 : 1
                }}
                className={`absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded bg-black/80 text-white text-xs font-bold uppercase tracking-widest border border-zinc-700
                  ${activeNode === station.id ? 'z-50 border-white' : 'z-10'}
                `}
              >
                {station.name}
              </motion.div>
            </div>
          ))}
          
          {/* Live Data Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-black/60 rounded-full border border-zinc-700 text-xs text-green-400 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            LIVE SIGNAL
          </div>
        </div>
      </div>
    </section>
  );
}
