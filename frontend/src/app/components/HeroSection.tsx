import React from 'react';
import { motion } from 'motion/react';
import { Play, FileText, CheckCircle2, Zap, Brain, Activity } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const abilities = [
  { icon: Activity, text: '过程感知' },
  { icon: Brain, text: '错因诊断' },
  { icon: Zap, text: '知识点迁移' },
  { icon: CheckCircle2, text: '补救策略' },
];

const metrics = [
  { label: '今日练习完成度', value: '85%' },
  { label: '平均正确率', value: '78%' },
  { label: '薄弱知识点', value: '4 个' },
  { label: '平均响应时长', value: '4.2s' },
];

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-black">
      {/* Background Image with Apple-style Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1699866956581-a9dd615efdb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHN0dWR5aW5nJTIwZm9jdXNlZCUyMGRlc2slMjBob21lJTIwd2FybSUyMGxpZ2h0aW5nJTIwcHJlbWl1bSUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzcyOTU4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1440"
          className="w-full h-full object-cover opacity-80"
          alt="Focused child studying"
        />
        {/* Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-wrap gap-3 mb-8">
              {abilities.map((item, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-xs font-medium flex items-center gap-2"
                >
                  <item.icon size={12} className="text-white/60" />
                  {item.text}
                </span>
              ))}
            </div>

            <h1 className="text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-8">
              让听写陪练，<br />
              <span className="text-white/100">真正理解孩子的<span className="text-[#E5E1D8]/80">学习过程</span>。</span>
            </h1>

            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl font-light">
              系统通过作答时长、重读次数、提示请求与连续错误模式，识别儿童真实掌握状态，并生成知识点级补救路径。
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="px-10 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-[#F1EEE7] transition-all flex items-center gap-2">
                开始今日练习 <Play size={18} fill="black" />
              </button>
              <button className="px-10 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-semibold hover:bg-white/20 transition-all backdrop-blur-md flex items-center gap-2">
                查看学习报告 <FileText size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold mb-1">{metric.label}</span>
              <span className="text-xl font-semibold text-white">{metric.value}</span>
            </div>
          ))}
          <div className="hidden md:block h-10 w-[1px] bg-white/10"></div>
          <div className="flex items-center gap-4">
             <div className="flex -space-x-3">
               {[1,2,3].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-[#E5E1D8] flex items-center justify-center text-[10px] font-bold text-black">
                   {String.fromCharCode(64 + i)}
                 </div>
               ))}
             </div>
             <p className="text-xs text-white/60 font-medium">1.2k+ 家长今日已加入</p>
          </div>
        </div>
      </div>
    </section>
  );
};
