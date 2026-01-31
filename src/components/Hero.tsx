import { useEffect, useState } from 'react';
import { motion } from "motion/react";
import { ArrowRight, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BPMTransitMap = () => {
  const [beat, setBeat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBeat((prev) => (prev + 1) % 4);
    }, 468); // ~128 BPM
    return () => clearInterval(interval);
  }, []);

  // Station Nodes Data
  const stations = [
    { id: "kings-cross", x: 20, y: 30, color: "bg-prism-red", label: "Italo Central", pulse: true },
    { id: "victoria", x: 50, y: 50, color: "bg-prism-blue", label: "Deep House JCT", pulse: true },
    { id: "waterloo", x: 80, y: 30, color: "bg-prism-chrome", label: "Disco Terminal", pulse: false },
    { id: "shoreditch", x: 50, y: 80, color: "bg-prism-red", label: "Techno Line", pulse: true },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-prism-velvet text-prism-chrome flex flex-col items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #E8E8E8 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Transit Lines (SVG Layer) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-80">
        {/* Red Line */}
        <path d="M 20% 30% Q 50% 10% 80% 30%" fill="none" stroke="#E1261C" strokeWidth="8" strokeLinecap="round" />
        {/* Blue Line */}
        <path d="M 20% 30% L 50% 50% L 50% 80%" fill="none" stroke="#0019A8" strokeWidth="8" strokeLinecap="round" />
        {/* Chrome Line */}
        <path d="M 80% 30% L 50% 50%" fill="none" stroke="#E8E8E8" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10" />
      </svg>

      {/* Map Content */}
      <div className="z-10 text-center space-y-6 max-w-4xl px-4 mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block border-2 border-prism-chrome/50 rounded-full px-6 py-2 bg-black/50 backdrop-blur-md"
        >
          <span className="font-mono text-sm tracking-widest text-prism-red">ZONE 1 • NIGHTLIFE UNDERGROUND</span>
        </motion.div>

        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
          The Jubilee <br /> Prism
        </h1>

        <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto text-gray-300">
          Where the geometry of London meets the rhythm of Milan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
           <Button size="lg" className="bg-prism-red hover:bg-red-700 text-white rounded-full px-8 text-lg h-14 font-bold tracking-wider uppercase border-2 border-transparent hover:border-prism-chrome transition-all">
             Buy Tickets
             <ArrowRight className="ml-2 w-5 h-5" />
           </Button>
           <Button size="lg" variant="outline" className="border-prism-blue text-prism-blue hover:bg-prism-blue hover:text-white rounded-full px-8 text-lg h-14 font-bold tracking-wider uppercase">
             View Timetable
           </Button>
        </div>
      </div>

      {/* Interactive Stations */}
      {stations.map((station) => (
        <motion.div
          key={station.id}
          className="absolute hidden md:flex flex-col items-center gap-2"
          style={{ left: `${station.x}%`, top: `${station.y}%`, transform: 'translate(-50%, -50%)' }}
          animate={station.pulse ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.468, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className={`w-8 h-8 rounded-full border-4 border-white ${station.color} shadow-[0_0_20px_currentColor]`} />
          <span className="bg-black/80 px-2 py-1 text-xs uppercase tracking-widest rounded border border-white/20">
            {station.label}
          </span>
        </motion.div>
      ))}
      
      {/* Overlay Noise/Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>
    </div>
  );
};

export default BPMTransitMap;
