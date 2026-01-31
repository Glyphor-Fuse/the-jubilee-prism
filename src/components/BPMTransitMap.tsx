import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const TRANSIT_NODES = [
  { id: 1, name: "Italo Disco", x: 20, y: 30, color: "#FF0033", bpm: 124 },
  { id: 2, name: "Space Synth", x: 50, y: 20, color: "#0033FF", bpm: 130 },
  { id: 3, name: "Cosmic House", x: 80, y: 30, color: "#E0E0E0", bpm: 120 },
  { id: 4, name: "Deep Techno", x: 50, y: 60, color: "#9900FF", bpm: 128 },
  { id: 5, name: "Acid Lounge", x: 30, y: 70, color: "#00FF99", bpm: 110 },
];

export default function BPMTransitMap() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section className="py-24 bg-prism-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-prism-chrome mb-4">BPM TRANSIT MAP</h2>
          <p className="text-prism-silver font-sans max-w-2xl mx-auto">
            Navigate the sonic frequencies. Lines represent genres. Nodes represent active dancefloors.
            Click a station to inspect the current frequency.
          </p>
        </div>

        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-prism-dark/50 border border-prism-chrome/20 rounded-3xl backdrop-blur-sm shadow-2xl p-4 overflow-hidden">
          
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.path
              d="M 20% 30% Q 50% 10% 80% 30%"
              stroke="#E0E0E0"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10 10"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="opacity-50"
            />
             <motion.path
              d="M 20% 30% C 20% 60%, 50% 60%, 50% 60%"
              stroke="#FF0033"
              strokeWidth="6"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
            <motion.path
              d="M 80% 30% C 80% 60%, 50% 60%, 50% 60%"
              stroke="#0033FF"
              strokeWidth="6"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>

          {/* Interactive Nodes */}
          {TRANSIT_NODES.map((node) => (
            <div
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Pulse Effect */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ repeat: Infinity, duration: 60 / node.bpm, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: node.color }}
              />
              
              {/* Node Core */}
              <div 
                className="relative w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-prism-dark z-10 transition-transform duration-300 group-hover:scale-125"
                style={{ backgroundColor: node.color }}
              />

              {/* Label */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="font-mono text-xs md:text-sm font-bold text-prism-silver bg-prism-dark/80 px-2 py-1 rounded backdrop-blur-md border border-white/10">
                  {node.name}
                </span>
              </div>

              {/* Tooltip Card */}
              {activeNode === node.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 w-48"
                >
                  <Card className="bg-prism-dark border-prism-chrome text-prism-silver p-3 shadow-xl backdrop-blur-xl bg-opacity-90">
                    <h4 className="font-bold text-sm" style={{ color: node.color }}>{node.name}</h4>
                    <div className="text-xs mt-1 space-y-1">
                      <div className="flex justify-between"><span>BPM:</span> <span>{node.bpm}</span></div>
                      <div className="flex justify-between"><span>Crowd:</span> <span>High</span></div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
