
import { motion } from "motion/react";

const EVENTS = [
  { id: "01", time: "22:00", line: "JUBILEE NORTH", destination: "DISCO INFERNO", platform: "1", status: "ON TIME" },
  { id: "02", time: "23:30", line: "PICCADILLY DEEP", destination: "ITALO EXPRESS", platform: "3", status: "BOARDING" },
  { id: "03", time: "01:00", line: "CENTRAL BASS", destination: "COSMIC GATE", platform: "2", status: "DELAYED" },
  { id: "04", time: "02:45", line: "VICTORIA ACID", destination: "THE VOID", platform: "1", status: "SCHEDULED" },
];

export default function Timetable() {
  return (
    <section className="py-24 bg-velvet text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-800 pb-6">
          <div>
            <h2 className="font-display text-4xl font-bold mb-2">DEPARTURES</h2>
            <p className="text-zinc-500 font-mono uppercase tracking-widest">Station: Jubilee Prism Central</p>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-tubeRed text-xl">
            {new Date().toLocaleDateString()}
          </div>
        </div>

        <div className="grid gap-4">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-zinc-900/50 rounded-lg text-zinc-500 font-mono text-sm uppercase tracking-widest">
            <div className="col-span-2">Time</div>
            <div className="col-span-4">Line</div>
            <div className="col-span-3">Destination</div>
            <div className="col-span-1 text-center">Plat</div>
            <div className="col-span-2 text-right">Status</div>
          </div>

          {/* Event Rows */}
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-5 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-tubeBlue/50 hover:bg-zinc-800/80 transition-all cursor-pointer items-center"
            >
              <div className="col-span-2 font-display text-2xl md:text-xl text-tubeRed font-bold">
                {event.time}
              </div>
              <div className="col-span-4 flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${index % 2 === 0 ? 'bg-tubeRed' : 'bg-tubeBlue'}`} />
                <span className="font-bold tracking-wide">{event.line}</span>
              </div>
              <div className="col-span-3 text-zinc-300 font-medium tracking-wide">
                {event.destination}
              </div>
              <div className="col-span-1 text-center font-mono text-zinc-500 group-hover:text-white">
                {event.platform}
              </div>
              <div className="col-span-2 text-right">
                <span className={`
                  inline-block px-3 py-1 rounded-sm text-xs font-bold font-mono animate-pulse
                  ${event.status === 'BOARDING' ? 'bg-yellow-500/20 text-yellow-500' : ''}
                  ${event.status === 'ON TIME' ? 'bg-green-500/20 text-green-500' : ''}
                  ${event.status === 'DELAYED' ? 'bg-red-500/20 text-red-500' : ''}
                  ${event.status === 'SCHEDULED' ? 'bg-zinc-500/20 text-zinc-500' : ''}
                `}>
                  {event.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
