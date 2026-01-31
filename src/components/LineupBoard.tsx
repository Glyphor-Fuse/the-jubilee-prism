import { Badge } from "@/components/ui/badge";

const EVENTS = [
  { id: "001", time: "22:00", artist: "DJ NEBULA", dest: "MAIN PLATFORM", status: "ON TIME" },
  { id: "002", time: "23:30", artist: "CHROMATIC DUO", dest: "BLUE LINE", status: "BOARDING" },
  { id: "003", time: "01:00", artist: "VELVET UNDERGROUND", dest: "RED LINE", status: "SCHEDULED" },
  { id: "004", time: "02:45", artist: "THE CONDUCTOR", dest: "CENTRAL HUB", status: "SCHEDULED" },
  { id: "005", time: "04:00", artist: "MORNING GLORY", dest: "TERMINAL 5", status: "DELAYED" },
];

export default function LineupBoard() {
  return (
    <section className="py-20 bg-prism-red text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-white pb-6">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase leading-none">
            Departures
          </h2>
          <span className="font-mono text-xl md:text-2xl mt-4 md:mt-0 tracking-widest">
            FRIDAY NIGHT SERVICE
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-2 font-mono text-sm opacity-80 uppercase tracking-widest border-b border-white/20">
            <div className="col-span-2">Time</div>
            <div className="col-span-4">Artist / Sound System</div>
            <div className="col-span-4">Platform / Destination</div>
            <div className="col-span-2 text-right">Status</div>
          </div>

          {/* Rows */}
          {EVENTS.map((event) => (
            <div 
              key={event.id}
              className="group relative overflow-hidden bg-black/20 hover:bg-black/40 transition-colors duration-300 border border-white/10 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center font-mono relative z-10">
                <div className="col-span-2 text-2xl md:text-3xl text-prism-chrome font-bold">
                  {event.time}
                </div>
                <div className="col-span-4 text-xl md:text-2xl font-bold tracking-tighter uppercase">
                  {event.artist}
                </div>
                <div className="col-span-4 flex items-center gap-2 text-sm md:text-base opacity-90 uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  {event.dest}
                </div>
                <div className="col-span-2 flex justify-start md:justify-end">
                  <Badge variant="outline" className={`
                    border-white/50 text-white tracking-widest uppercase rounded-sm px-2 py-1
                    ${event.status === "BOARDING" ? "bg-prism-blue border-transparent animate-pulse" : ""}
                    ${event.status === "DELAYED" ? "text-prism-red bg-white border-white" : ""}
                  `}>
                    {event.status}
                  </Badge>
                </div>
              </div>
              
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-mono text-sm opacity-60 uppercase tracking-widest">
            * Warning: Strobe lighting is in effect on all lines.
          </p>
        </div>
      </div>
    </section>
  );
}
