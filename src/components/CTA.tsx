import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TicketBooth = () => {
  return (
    <section className="bg-prism-velvet text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-prism-blue opacity-5 mix-blend-screen"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="inline-block mb-6 rounded-full border border-prism-chrome/30 bg-white/5 backdrop-blur px-4 py-1">
          <span className="text-prism-chrome text-xs font-mono tracking-[0.2em] uppercase">Box Office Open</span>
        </div>

        <h2 className="text-5xl md:text-8xl font-display font-bold uppercase mb-8 leading-none">
          Secure <span className="text-prism-red">Passage</span>
        </h2>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl max-w-lg mx-auto shadow-2xl shadow-prism-red/20">
          <div className="space-y-6">
            <div className="text-left space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-400 pl-1">Destination</label>
              <div className="h-12 w-full bg-white/10 rounded-xl flex items-center px-4 font-mono text-lg border border-white/10 text-white">
                THE JUBILEE PRISM
              </div>
            </div>

            <div className="text-left space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-400 pl-1">Passenger Email</label>
              <Input 
                type="email" 
                placeholder="name@example.com" 
                className="h-12 bg-white text-prism-velvet placeholder:text-gray-400 border-none rounded-xl text-lg"
              />
            </div>

            <Button className="w-full h-14 bg-gradient-to-r from-prism-red to-red-600 hover:from-red-600 hover:to-prism-red text-white text-xl font-bold uppercase tracking-widest rounded-xl transition-all hover:scale-[1.02] shadow-lg">
              Confirm Booking
            </Button>

            <p className="text-xs text-gray-500 font-mono text-center">
              *Mind the gap between reality and rhythm.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background Graphic */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-prism-red/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default TicketBooth;
