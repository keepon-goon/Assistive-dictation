import React from 'react';
import { motion } from 'motion/react';

export const HomeCTA = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#F5F5F7] flex justify-center">
      <div className="w-full max-w-[1300px] bg-[#1D1D1F] rounded-[48px] md:rounded-[64px] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
        {/* Subtle Glows */}
        <div className="absolute top-[-50%] left-[-10%] w-[60%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="absolute bottom-[-50%] right-[-10%] w-[60%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-[44px] md:text-[64px] font-bold text-white tracking-tight leading-tight mb-16">
            听懂孩子的每一个瞬间。
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-[#1D1D1F] rounded-2xl font-bold text-[17px] hover:bg-[#F5F5F7] transition-all shadow-lg">
              立即申请试用
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white border border-white/20 rounded-2xl font-bold text-[17px] hover:bg-white/10 transition-all backdrop-blur-sm">
              观看产品演示
            </button>
          </div>

          <p className="text-white/30 text-[13px] font-bold tracking-[0.2em] uppercase">
            MindLink Terminal · 无屏自适应教育终端
          </p>
        </motion.div>
      </div>
    </section>
  );
};
