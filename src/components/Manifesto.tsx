import React from "react";

const Manifesto = () => {
  return (
    <section className="py-24 bg-prism-chrome text-prism-velvet">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[3/4] rounded-t-full bg-black overflow-hidden relative border-4 border-prism-velvet shadow-[20px_20px_0px_0px_rgba(225,38,28,1)]">
             <img 
               src="https://raw.githubusercontent.com/Glyphor-Fuse/the-jubilee-prism/main/public/images/manifesto-portrait.jpg" 
               alt="The Curator" 
               className="object-cover w-full h-full opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             <div className="absolute bottom-6 left-6 text-white">
               <div className="text-4xl font-display font-bold">The Curator</div>
               <div className="font-mono text-sm tracking-widest opacity-80">STATION MASTER</div>
             </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold font-display leading-[0.9] tracking-tighter uppercase">
            London Logic.<br/>
            Milanese <span className="text-prism-red">Soul.</span>
          </h2>
          
          <div className="h-1 w-24 bg-prism-blue"></div>

          <p className="text-xl md:text-2xl font-light leading-relaxed">
            "Imagine a London Tube station designed by Verner Panton and curated by an Italo-disco obsessed occultist."
          </p>

          <p className="text-lg opacity-70 leading-relaxed font-sans">
            The Jubilee Prism is not just a club; it is a transit hub for frequencies. 
            We combine the rigid, typographic discipline of the Johnston typeface with the fluid, 
            psychedelic curves of 1970s Italian lounges. Primary red and blue tones rendered in 
            liquid chrome and velvet textures.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-8">
            <div className="border border-prism-velvet p-4 rounded-lg hover:bg-prism-velvet hover:text-white transition-colors">
              <div className="text-3xl font-bold font-display mb-1">128</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Global BPM</div>
            </div>
            <div className="border border-prism-velvet p-4 rounded-lg hover:bg-prism-blue hover:text-white hover:border-prism-blue transition-colors">
              <div className="text-3xl font-bold font-display mb-1">3AM</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Terminal Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
