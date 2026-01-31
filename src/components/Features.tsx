import React from "react";
import { motion } from "motion/react";
import { Clock, MapPin } from "lucide-react";

const Schedule = () => {
  const scheduleData = [
    { time: "22:00", act: "Giorgio's Ghost", line: "Italo Line", status: "On Time", color: "text-prism-red" },
    { time: "23:30", act: "Velvet Void", line: "Deep House JCT", status: "Boarding", color: "text-prism-blue" },
    { time: "01:00", act: "Neon Express", line: "Techno Line", status: "Scheduled", color: "text-white" },
    { time: "02:30", act: "Last Train Home", line: "Ambient Loop", status: "Delayed", color: "text-gray-400" },
  ];

  return (
    <section className="bg-white text-prism-velvet py-24 px-4 relative overflow-hidden">
      {/* Decorative Tube Circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-prism-blue rounded-bl-full opacity-10 transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-prism-velvet pb-4">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-2 font-display">
              Timetable
            </h2>
            <p className="text-xl font-medium tracking-wide text-prism-blue">
              Service updates for Friday Night
            </p>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-lg font-mono">STATION: JUBILEE PRISM</div>
            <div className="text-sm font-mono opacity-60">ZONE 1</div>
          </div>
        </div>

        <div className="grid gap-4">
          {scheduleData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-center justify-between bg-gray-100 hover:bg-prism-red hover:text-white transition-colors duration-300 p-6 rounded-lg border-l-8 border-prism-velvet"
            >
              <div className="flex items-center gap-6 w-full md:w-1/3">
                <Clock className="w-6 h-6 opacity-50" />
                <span className="text-3xl font-bold font-mono">{item.time}</span>
              </div>
              
              <div className="flex-1 w-full text-center md:text-left py-2 md:py-0">
                <h3 className="text-2xl font-bold uppercase tracking-wider">{item.act}</h3>
                <span className="text-sm font-mono opacity-75">{item.line}</span>
              </div>

              <div className="w-full md:w-auto text-right">
                <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white text-prism-velvet font-bold text-sm uppercase tracking-widest shadow-sm group-hover:bg-prism-velvet group-hover:text-white`}>
                  <div className={`w-2 h-2 rounded-full ${item.status === 'Boarding' ? 'bg-green-500 animate-pulse' : 'bg-prism-velvet group-hover:bg-white'} mr-2`}></div>
                  {item.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
