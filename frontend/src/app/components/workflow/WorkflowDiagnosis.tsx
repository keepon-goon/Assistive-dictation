import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const WorkflowDiagnosis = () => {
  return (
    <section className="py-32 bg-[#F5F5F7] text-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[40px] md:text-[56px] font-bold text-[#1D1D1F] tracking-tight mb-8">
          聚合多维行为证据，携手 MindLink<br />
          <span className="inline-block bg-[#86E789] px-6 py-1.5 md:py-2 rounded-[100px] leading-tight mt-2">
            成就精准诊断。
          </span>
        </h2>
        <p className="text-xl text-[#1D1D1F] font-medium max-w-2xl mx-auto mb-20 leading-relaxed">
          看看富有创新精神的教育工作者如何利用 MindLink 科技，将微观行为转化为可解释的诊断报告，拓展个性化学习的可能性。
        </p>
      </motion.div>

      <motion.div 
        className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Icon 1: Diagnosis Report */}
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-32 h-32 mb-6 transition-transform duration-300 group-hover:-translate-y-2">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
              <rect x="20" y="20" width="60" height="65" rx="8" fill="#E8F1FF" stroke="#1D1D1F" strokeWidth="4" />
              <path d="M35 40h30 M35 55h20" stroke="#1D1D1F" strokeWidth="4" strokeLinecap="round" />
              <circle cx="65" cy="70" r="12" fill="#FFA500" stroke="#1D1D1F" strokeWidth="4" />
              <path d="M60 70l4 4 6-6" stroke="#1D1D1F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <rect x="25" y="10" width="50" height="15" rx="4" fill="#FFC870" stroke="#1D1D1F" strokeWidth="4" />
            </svg>
          </div>
          <h3 className="text-[22px] font-bold text-[#1D1D1F] mb-3">MindLink 杰出诊断系统</h3>
          <a href="#" className="text-[#0066CC] font-medium hover:underline flex items-center text-[17px]">
            进一步了解 <ChevronRight className="w-4 h-4 ml-0.5 mt-0.5" />
          </a>
        </div>

        {/* Icon 2: Knowledge Graph */}
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="w-32 h-32 mb-6 transition-transform duration-300 group-hover:-translate-y-2">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
              <rect x="15" y="25" width="20" height="60" rx="4" fill="#8AC9FF" stroke="#1D1D1F" strokeWidth="4" />
              <rect x="40" y="35" width="20" height="50" rx="4" fill="#FF8E8B" stroke="#1D1D1F" strokeWidth="4" />
              <rect x="65" y="15" width="20" height="70" rx="4" fill="#86E789" stroke="#1D1D1F" strokeWidth="4" />
              <line x1="15" y1="90" x2="85" y2="90" stroke="#1D1D1F" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="text-[22px] font-bold text-[#1D1D1F] mb-3">MindLink 能力图谱</h3>
          <a href="#" className="text-[#0066CC] font-medium hover:underline flex items-center text-[17px]">
            进一步了解 <ChevronRight className="w-4 h-4 ml-0.5 mt-0.5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
