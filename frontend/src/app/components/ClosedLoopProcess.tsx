import React from 'react';
import { motion } from 'motion/react';
import { Eye, ShieldCheck, RefreshCcw, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: '过程感知',
    desc: '捕捉落笔力度、修改痕迹、思考停顿',
    icon: Eye,
    color: '#3A6EA5',
  },
  {
    id: '02',
    title: '错因诊断',
    desc: '识别是粗心、遗忘还是知识点缺失',
    icon: ShieldCheck,
    color: '#5F8D6A',
  },
  {
    id: '03',
    title: '迁移补救',
    desc: '生成针对性的补救练习与同类强化',
    icon: RefreshCcw,
    color: '#B88746',
  },
];

export const ClosedLoopProcess = () => {
  return (
    <section className="py-24 px-6 bg-[#F1EEE7]/50 border-y border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-[#1D1D1F] mb-4">智能闭环核心流程</h2>
          <p className="text-[#6E6E73] max-w-2xl mx-auto">
            从作答过程的感知到最后的闭环补救，每一秒的练习数据都在为精准教学提供支撑。
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-[#E5E1D8] -translate-y-1/2 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3A6EA5]/20 to-transparent"></div>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white w-full lg:w-72 p-8 rounded-3xl border border-[#E5E1D8] shadow-sm z-10 text-center"
            >
              <div 
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-[#E5E1D8]"
                style={{ backgroundColor: `${step.color}10`, color: step.color }}
              >
                <step.icon size={32} />
              </div>
              
              <div className="text-[10px] font-bold text-[#6E6E73]/40 tracking-widest uppercase mb-2">Step {step.id}</div>
              <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">{step.title}</h3>
              <p className="text-sm text-[#6E6E73] leading-relaxed">{step.desc}</p>
              
              {index < steps.length - 1 && (
                <div className="lg:hidden mt-8 flex justify-center">
                  <ArrowRight size={24} className="text-[#E5E1D8] rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
