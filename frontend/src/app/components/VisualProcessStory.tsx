import React from 'react';
import { motion } from 'motion/react';
import { Eye, ShieldCheck, RefreshCcw, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const steps = [
  {
    id: '01',
    title: '深度过程感知',
    desc: '系统不仅仅识别结果，更关注落笔前的犹豫、中途的修改以及思考的时长。这些“隐性数据”是诊断学习障碍的关键。',
    icon: Eye,
    image: 'https://images.unsplash.com/photo-1553419096-efeafe17bbb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGhhbmQlMjB3cml0aW5nJTIwcGVuY2lsJTIwcGFwZXIlMjBjbG9zZSUyMHVwJTIwbWFjcm8lMjBzb2Z0JTIwbGlnaHRpbmd8ZW58MXx8fHwxNzc4MjQzODM2fDA&ixlib=rb-4.1.0&q=80&w=800',
    color: '#3A6EA5',
  },
  {
    id: '02',
    title: '精准错因诊断',
    desc: '通过多维模式识别，区分“粗心”、“规则混淆”或“词汇量缺失”。每一个错题背后，都有一个清晰的认知画像。',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1647252397326-1faae660c85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBhYnN0cmFjdCUyMGNsZWFuJTIwM2QlMjBzY3VscHR1cmV8ZW58MXx8fHwxNzc4MjQzODQwfDA&ixlib=rb-4.1.0&q=80&w=800',
    color: '#5F8D6A',
  },
  {
    id: '03',
    title: '知识点迁移补救',
    desc: '跳出“哪里不会练哪里”的怪圈。系统会自动生成具有关联性的迁移练习，确保孩子真正掌握底层规则，而非机械记忆。',
    icon: RefreshCcw,
    image: 'https://images.unsplash.com/photo-1719559519182-698f9bfc4e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBjaGlsZCUyMGxvb2tpbmclMjB0YWJsZXQlMjBzY3JlZW4lMjBoYXBweSUyMGxlYXJuaW5nJTIwaG9tZXxlbnwxfHx8fDE3NzgyNDM4Mzh8MA&ixlib=rb-4.1.0&q=80&w=800',
    color: '#B88746',
  },
];

export const VisualProcessStory = () => {
  return (
    <section className="py-32 px-8 bg-[#F1EEE7]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-semibold tracking-tight text-[#1D1D1F] mb-6">智能闭环，从感知到超越</h2>
          <p className="text-xl text-[#6E6E73] max-w-3xl mx-auto leading-relaxed">
            我们不仅仅是在做听写工具，而是在构建一个能够实时“理解”学习状态的智能伙伴。
          </p>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#E5E1D8] shadow-sm mb-8">
                  <span className="text-xs font-bold text-[#3A6EA5] tracking-widest uppercase">Step {step.id}</span>
                  <div className="w-1 h-1 rounded-full bg-[#E5E1D8]"></div>
                  <step.icon size={16} className="text-[#6E6E73]" />
                </div>
                <h3 className="text-4xl font-semibold text-[#1D1D1F] mb-6">{step.title}</h3>
                <p className="text-xl text-[#6E6E73] leading-relaxed mb-8">
                  {step.desc}
                </p>
                <button className="text-[#3A6EA5] font-semibold flex items-center gap-2 group">
                  探索技术详情 
                  <div className="w-6 h-6 rounded-full border border-[#3A6EA5] flex items-center justify-center group-hover:bg-[#3A6EA5] group-hover:text-white transition-all">
                    <ArrowRight size={12} />
                  </div>
                </button>
              </div>
              
              <div className="flex-1 w-full aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl relative border border-[#E5E1D8]">
                <ImageWithFallback 
                  src={step.image} 
                  className="w-full h-full object-cover" 
                  alt={step.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
