import React from 'react';
import { motion } from 'motion/react';

export const WorkflowHero = () => {
  return (
    <section className="pt-40 pb-32 px-8 bg-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-[56px] md:text-[80px] font-bold text-[#1D1D1F] tracking-tight leading-[1.05] mb-8">
          一次听写，<br />
          变成真正的学习闭环。
        </h1>
        <p className="text-xl md:text-[22px] text-[#6E6E73] font-medium max-w-3xl mx-auto mb-16 leading-relaxed">
          MindLink 将词表、知识点、终端作答、过程信号、错因诊断与补救推荐连接起来，让每一次练习都留下可解释、可追踪的学习证据。
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative max-w-5xl mx-auto"
      >
        <div className="w-full aspect-[16/9] bg-[#F5F5F7] rounded-[40px] md:rounded-[64px] border-[16px] border-[#1D1D1F] shadow-2xl overflow-hidden relative">
           <img 
             src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000" 
             alt="Dashboard" 
             className="w-full h-full object-cover opacity-80"
           />
           {/* Center Logo/Icon overlaid */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-6 border border-[#E5E1D8]">
              <div className="w-full h-full bg-[#1D1D1F] rounded-xl flex items-center justify-center">
                 <div className="w-5 h-5 bg-[#86E789] rounded-sm transform rotate-45"></div>
              </div>
           </div>
        </div>
      </motion.div>
    </section>
  );
};
