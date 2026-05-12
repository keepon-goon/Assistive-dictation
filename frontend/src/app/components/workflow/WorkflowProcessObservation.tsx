import React from 'react';
import { motion } from 'motion/react';
import { Activity, Clock, RotateCcw } from 'lucide-react';

export const WorkflowProcessObservation = () => {
  return (
    <section className="py-32 bg-white text-center overflow-hidden border-t border-[#E5E1D8]/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[40px] md:text-[56px] font-bold text-[#1D1D1F] tracking-tight mb-6">
          <span className="inline-block bg-[#86E789] px-6 py-1.5 md:py-2 rounded-[100px] leading-tight mb-2">
            MindLink 过程感知引擎,
          </span>
          <br />
          记录真实的思考轨迹。
        </h2>
      </motion.div>

      {/* 3 Devices Layout */}
      <motion.div 
        className="flex justify-center items-center gap-6 md:gap-12 relative w-full max-w-[1400px] mx-auto px-4 mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Left Device (iPad vertical/scaled) */}
        <div className="hidden lg:flex w-[300px] h-[420px] bg-white rounded-3xl border-[10px] border-[#1D1D1F] shadow-xl shrink-0 opacity-70 scale-90 translate-x-8 flex-col overflow-hidden">
          <div className="bg-[#F5F5F7] h-12 w-full flex items-center px-4 border-b border-[#E5E1D8]">
            <div className="w-16 h-3 bg-[#E5E1D8] rounded-full"></div>
          </div>
          <div className="p-6 flex-1 bg-white">
             <div className="w-full h-8 bg-red-100 rounded-lg mb-4"></div>
             <div className="w-2/3 h-4 bg-[#F5F5F7] rounded mb-2"></div>
             <div className="w-full h-4 bg-[#F5F5F7] rounded mb-2"></div>
          </div>
        </div>

        {/* Center Device (Laptop/Mac screen) */}
        <div className="w-full max-w-[760px] aspect-[16/10] bg-white rounded-t-2xl border-t-[12px] border-l-[12px] border-r-[12px] border-[#1D1D1F] shadow-2xl relative z-10 flex flex-col overflow-hidden">
          {/* Mock Browser Header */}
          <div className="bg-[#1D1D1F] h-8 w-full flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="mx-auto w-48 h-4 bg-white/10 rounded text-[10px] text-center text-white/50 leading-4">mindlink.education</div>
          </div>
          
          {/* Dashboard Content */}
          <div className="flex-1 bg-[#F5F5F7] p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <h3 className="text-3xl font-bold text-[#1D1D1F] mb-2 z-10">
              Your space <br />
              to <span className="text-[#0066CC]">track</span>, <span className="text-[#0066CC]">analyze</span>,<br />
              and <span className="text-[#0066CC]">be inspired</span>.
            </h3>
            <p className="text-sm text-[#6E6E73] max-w-sm mb-8 z-10 font-medium leading-relaxed mt-4">
              Welcome to the MindLink Observation Hub. 
              Find real-time signals from student responses — from response time to replay counts.
            </p>

            {/* Dashboard Mock UI Overlays */}
            <div className="absolute right-8 bottom-8 w-48 bg-white rounded-xl shadow-lg border border-[#E5E1D8] p-4 text-left z-10">
               <div className="flex items-center gap-2 mb-2">
                 <Clock className="w-4 h-4 text-orange-500" />
                 <span className="text-xs font-bold text-[#1D1D1F]">Response Time</span>
               </div>
               <div className="text-xl font-bold">8.2s</div>
            </div>

            <div className="absolute left-8 bottom-16 w-40 bg-white rounded-xl shadow-lg border border-[#E5E1D8] p-4 text-left z-10">
               <div className="flex items-center gap-2 mb-2">
                 <RotateCcw className="w-4 h-4 text-blue-500" />
                 <span className="text-xs font-bold text-[#1D1D1F]">Replays</span>
               </div>
               <div className="text-xl font-bold">3 Times</div>
            </div>
          </div>

          {/* Laptop Base */}
          <div className="absolute bottom-0 left-0 w-full h-4 bg-[#D1D1D6]"></div>
        </div>

        {/* Right Device */}
        <div className="hidden lg:flex w-[300px] h-[420px] bg-white rounded-3xl border-[10px] border-[#1D1D1F] shadow-xl shrink-0 opacity-70 scale-90 -translate-x-8 flex-col overflow-hidden">
          <div className="bg-[#F5F5F7] h-12 w-full flex justify-between items-center px-4 border-b border-[#E5E1D8]">
            <div className="w-16 h-3 bg-[#E5E1D8] rounded-full"></div>
            <div className="w-6 h-6 bg-[#E5E1D8] rounded-full"></div>
          </div>
          <div className="p-6 flex-1 bg-white">
             <div className="w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto"></div>
             <h4 className="text-center font-bold text-lg mb-2">Real-time</h4>
             <div className="w-full h-24 bg-[#F5F5F7] rounded-lg"></div>
          </div>
        </div>
      </motion.div>
      
      {/* Laptop Bottom Lip (Stylistic) */}
      <div className="w-full max-w-[900px] h-3 bg-[#E5E1D8] mx-auto rounded-b-xl mb-20 shadow-md"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center"
      >
        <p className="text-xl text-[#1D1D1F] font-bold max-w-xl mx-auto mb-8">
          全新的作答过程追踪面板，<br />
          是每一位教育工作者洞察学习的在线资源库。
        </p>
        
        <button className="border-2 border-[#1D1D1F] rounded-[100px] px-8 py-3 text-[#1D1D1F] font-semibold text-[15px] hover:bg-[#1D1D1F] hover:text-white transition-all duration-300">
          访问 MindLink 追踪引擎
        </button>
      </motion.div>
    </section>
  );
};
