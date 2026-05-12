import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { Link } from 'react-router';

export const ContactCTA = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white flex justify-center border-t border-[#E5E1D8]">
      <div className="w-full max-w-[1100px] bg-[#F5F5F7] rounded-[48px] p-16 md:p-24 text-center relative overflow-hidden">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-[36px] md:text-[48px] font-bold text-[#1D1D1F] tracking-tight leading-tight mb-6">
            准备体验一次完整学习闭环？
          </h2>
          <p className="text-[18px] text-[#6E6E73] font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            从词表配置到错因诊断，进入 MindLink 业务演示台，<br className="hidden sm:block" />
            查看一次听写如何转化为可解释的学习证据。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/app" className="w-full sm:w-auto px-10 py-4 bg-[#1D1D1F] text-white rounded-[100px] font-bold text-[16px] hover:scale-105 transition-all shadow-md flex items-center justify-center gap-2">
              开始体验 <Play size={18} fill="currentColor" />
            </Link>
            <Link to="/workflow" className="w-full sm:w-auto px-10 py-4 bg-white text-[#1D1D1F] border border-[#E5E1D8] rounded-[100px] font-bold text-[16px] hover:bg-[#F5F5F7] transition-all">
              查看产品能力
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
