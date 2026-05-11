import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play, Focus, BrainCircuit } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const LearningCockpitHero = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5F8D6A]/10 border border-[#5F8D6A]/20 text-[#5F8D6A] text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5F8D6A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5F8D6A]"></span>
            </span>
            实时感知中 · 专注度优
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-semibold text-[#1D1D1F] leading-[1.1] tracking-tight mb-6">
            感知学习的<br />
            <span className="text-[#3A6EA5]">每一个瞬间</span>
          </h1>
          
          <p className="text-xl text-[#6E6E73] max-w-xl leading-relaxed mb-8">
            无屏自适应终端通过多维传感器捕捉作答过程，不仅仅是听写工具，更是孩子的智能学习陪练。
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3.5 bg-[#1D1D1F] text-white rounded-xl font-medium hover:bg-black transition-all flex items-center gap-2">
              开始今日练习 <Play size={16} fill="white" />
            </button>
            <button className="px-8 py-3.5 bg-white text-[#1D1D1F] border border-[#E5E1D8] rounded-xl font-medium hover:bg-[#F7F5EF] transition-all flex items-center gap-2">
              查看诊断报告 <ArrowUpRight size={16} />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Subtle Product Visualization Placeholder */}
          <div className="relative aspect-square w-full max-w-[500px] mx-auto bg-gradient-to-br from-white to-[#F1EEE7] rounded-[40px] border border-[#E5E1D8] shadow-2xl flex items-center justify-center p-12">
            <div className="absolute inset-0 overflow-hidden rounded-[40px]">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(58,110,165,0.05)_0%,transparent_50%)]"></div>
            </div>
            
            {/* Mock device visual */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-8">
               <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-[#E5E1D8]">
                  <BrainCircuit className="w-12 h-12 text-[#3A6EA5]" />
               </div>
               <div className="w-full flex flex-col gap-4">
                  <div className="h-2 w-3/4 bg-[#E5E1D8] rounded-full mx-auto"></div>
                  <div className="h-2 w-1/2 bg-[#E5E1D8] rounded-full mx-auto opacity-50"></div>
               </div>
               
               {/* Data Tags */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl border border-[#E5E1D8] shadow-xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-[#5F8D6A]/10 flex items-center justify-center">
                     <Focus className="text-[#5F8D6A] w-5 h-5" />
                   </div>
                   <div>
                     <p className="text-[10px] text-[#6E6E73] font-medium uppercase tracking-wider">专注指数</p>
                     <p className="text-lg font-semibold text-[#1D1D1F]">94%</p>
                   </div>
                 </div>
               </motion.div>
               
               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-12 -left-8 bg-white p-4 rounded-2xl border border-[#E5E1D8] shadow-xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-[#3A6EA5]/10 flex items-center justify-center">
                     <Play className="text-[#3A6EA5] w-5 h-5" />
                   </div>
                   <div>
                     <p className="text-[10px] text-[#6E6E73] font-medium uppercase tracking-wider">进行中</p>
                     <p className="text-lg font-semibold text-[#1D1D1F]">听写练习 L5</p>
                   </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
