import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const WorkflowCTA = () => {
  return (
    <section className="py-32 px-8 bg-white text-center border-t border-[#E5E1D8]/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[40px] md:text-[56px] font-bold text-[#1D1D1F] tracking-tight mb-8">
            开启个性化学习的新篇章。
          </h2>
          <p className="text-xl text-[#6E6E73] font-medium max-w-2xl mx-auto mb-12">
            深入探索 MindLink 如何通过内容建模与多维感知，让每一次作答都成为下一次进步的起点。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="border-2 border-[#1D1D1F] rounded-[100px] px-8 py-3 text-[#1D1D1F] font-semibold text-[15px] hover:bg-[#1D1D1F] hover:text-white transition-all duration-300">
              访问 MindLink 体验中心
            </button>
            <a href="#" className="text-[#0066CC] font-medium hover:underline flex items-center text-[17px]">
              查看教育工作者案例 <ChevronRight className="w-4 h-4 ml-0.5 mt-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
