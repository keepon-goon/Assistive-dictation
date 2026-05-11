import React from 'react';
import { motion } from 'motion/react';
import { Play, FileText, Activity, Brain, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';

export const HomeHero = () => {
  return (
    <section className="relative w-full h-[100vh] min-h-[800px] flex flex-col justify-between overflow-hidden bg-[#0A0A0A]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2400"
          className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          alt="Focused child studying"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-[1300px] mx-auto px-6 md:px-12 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-10">
             <span className="px-4 py-1.5 rounded-[100px] bg-white/10 border border-white/20 text-white/90 text-xs font-bold flex items-center gap-2 backdrop-blur-md">
               <Activity size={14} className="text-white/70" /> 过程感知
             </span>
             <span className="px-4 py-1.5 rounded-[100px] bg-white/10 border border-white/20 text-white/90 text-xs font-bold flex items-center gap-2 backdrop-blur-md">
               <Brain size={14} className="text-white/70" /> 错因诊断
             </span>
             <span className="px-4 py-1.5 rounded-[100px] bg-white/10 border border-white/20 text-white/90 text-xs font-bold flex items-center gap-2 backdrop-blur-md">
               <Zap size={14} className="text-white/70" /> 知识点迁移
             </span>
             <span className="px-4 py-1.5 rounded-[100px] bg-white/10 border border-white/20 text-white/90 text-xs font-bold flex items-center gap-2 backdrop-blur-md">
               <CheckCircle2 size={14} className="text-white/70" /> 补救策略
             </span>
          </div>

          <h1 className="text-[52px] md:text-[72px] lg:text-[88px] font-bold text-white leading-[1.05] tracking-tight mb-8">
            让听写陪练，<br />
            真正理解孩子的学习过程。
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-12 max-w-2xl font-medium">
            系统通过作答时长、重读次数、提示请求与连续错误模式，识别儿童真实掌握状态，并生成知识点级补救路径。
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link to="/app" className="px-8 py-4 bg-white text-[#1D1D1F] rounded-[16px] font-bold text-[16px] hover:bg-[#F5F5F7] transition-all flex items-center justify-center gap-2 shadow-lg">
              开始体验 <Play size={18} fill="currentColor" />
            </Link>
            <Link to="/app/reports" className="px-8 py-4 bg-white/5 text-white border border-white/20 rounded-[16px] font-bold text-[16px] hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-2">
              查看学习报告 <FileText size={18} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* System Status Bar - Lightweight & Live */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/40 backdrop-blur-2xl">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between text-[12px] font-medium tracking-widest text-white/50 uppercase">
          <div className="flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#86E789] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#86E789]"></span>
            </div>
            <span>MindLink 引擎运行中</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <span>正在分析诊断: <span className="text-white/90 font-bold ml-1">2,401 终端</span></span>
            <span>今日生成补救策略: <span className="text-white/90 font-bold ml-1">18,294 条</span></span>
            <span>平均感知延迟: <span className="text-white/90 font-bold ml-1">0.12S</span></span>
          </div>
        </div>
      </div>
    </section>
  );
};
