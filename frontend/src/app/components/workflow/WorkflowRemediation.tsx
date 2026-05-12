import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const WorkflowRemediation = () => {
  return (
    <section className="py-32 bg-[#F5F5F7] text-center overflow-hidden border-t border-[#E5E1D8]/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[40px] md:text-[56px] font-bold text-[#1D1D1F] tracking-tight mb-16">
          <span className="inline-block bg-[#B488FF] px-6 py-1.5 md:py-2 rounded-[100px] leading-tight mb-4 text-[#1D1D1F]">
            适应于各掌握度的迁移策略,
          </span>
          <br />
          回到知识点重新生长。
        </h2>
      </motion.div>

      {/* Carousel Container */}
      <motion.div 
        className="flex justify-center items-center gap-6 w-full max-w-[1800px] mx-auto px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Left Dimmed Card */}
        <div className="hidden md:flex w-[400px] xl:w-[500px] aspect-[4/3] bg-white rounded-[32px] shadow-sm opacity-40 shrink-0 items-center justify-center p-6 relative">
          <div className="w-full h-full bg-[#F5F5F7] rounded-2xl flex items-center justify-center border-4 border-[#1D1D1F] overflow-hidden">
             <div className="w-full h-full opacity-50 bg-[url('https://images.unsplash.com/photo-1705236265338-6a5e7eda7895?q=80&w=800')] bg-cover bg-center"></div>
          </div>
        </div>

        {/* Navigation Left */}
        <button className="hidden md:flex w-10 h-10 rounded-full bg-[#E5E1D8] items-center justify-center hover:bg-[#D1D1D6] transition-colors shrink-0 mx-2">
           <ChevronLeft className="w-5 h-5 text-[#1D1D1F]" />
        </button>

        {/* Center Card (Active) */}
        <div className="w-full max-w-[800px] aspect-[14/10] bg-white rounded-[40px] shadow-lg shrink-0 flex flex-col items-center justify-center p-8 relative z-10 border border-[#E5E1D8]/50">
          
          {/* Fake iPad Interface */}
          <div className="w-full h-full max-w-[640px] bg-[#1D1D1F] rounded-3xl border-[16px] border-[#1D1D1F] overflow-hidden flex flex-col relative shadow-inner">
            <div className="bg-gradient-to-br from-[#4A90E2] to-[#B488FF] flex-1 flex flex-col p-6">
              
              <div className="flex justify-between items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <ChevronLeft className="w-6 h-6 text-white" />
                </div>
                <div className="px-4 py-1.5 bg-white/20 rounded-full text-white font-bold text-sm">
                  a_e 长元音规则迁移
                </div>
              </div>

               {/* Mock Game/Exercise UI */}
              <div className="flex-1 bg-white/10 rounded-2xl border border-white/20 p-6 flex">
                 <div className="w-24 flex flex-col gap-3">
                   <div className="w-full h-12 bg-[#FF8E8B] rounded-xl flex items-center justify-center text-white font-bold">make</div>
                   <div className="w-full h-12 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold">cake</div>
                   <div className="w-full h-12 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold">take</div>
                 </div>
                 <div className="flex-1 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-white/30 rounded-full flex items-center justify-center">
                       <div className="text-white font-bold text-4xl">a_e</div>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </div>

        {/* Navigation Right */}
        <button className="hidden md:flex w-10 h-10 rounded-full bg-[#E5E1D8] items-center justify-center hover:bg-[#D1D1D6] transition-colors shrink-0 mx-2">
           <ChevronRight className="w-5 h-5 text-[#1D1D1F]" />
        </button>

        {/* Right Dimmed Card */}
        <div className="hidden md:flex w-[400px] xl:w-[500px] aspect-[4/3] bg-white rounded-[32px] shadow-sm opacity-40 shrink-0 items-center justify-center p-6 relative">
          <div className="w-full h-full bg-[#F5F5F7] rounded-2xl flex items-center justify-center border-4 border-[#1D1D1F] overflow-hidden">
            <div className="w-full h-full opacity-50 bg-[#8AC9FF] p-4">
              <div className="w-1/2 h-4 bg-white/50 rounded mb-4"></div>
              <div className="w-full h-32 bg-white/50 rounded-xl"></div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="mt-12 text-[#6E6E73] text-[15px] font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        错因诊断 / <span className="text-[#1D1D1F] font-bold underline underline-offset-8 decoration-2 decoration-[#1D1D1F] px-2">同规迁移练习</span> / 延迟复习池 / 规则切分
      </motion.div>

      <motion.button 
        className="mt-12 border-2 border-[#1D1D1F] text-[#1D1D1F] rounded-[100px] px-8 py-3 text-[15px] font-semibold hover:bg-[#1D1D1F] hover:text-white transition-colors"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        探索各种补救策略
      </motion.button>
    </section>
  );
};
