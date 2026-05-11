import React from 'react';
import { motion } from 'motion/react';
import { Eye, ShieldCheck, RefreshCw, ArrowRight } from 'lucide-react';

const features = [
  {
    step: "01",
    icon: Eye,
    title: "深度过程感知",
    desc: "系统不仅仅识别结果，更关注落笔前的犹豫、中途的修改以及思考的时长。这些“隐性数据”是诊断学习障碍的关键。",
    linkText: "探索技术详情",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200",
    reverse: false,
  },
  {
    step: "02",
    icon: ShieldCheck,
    title: "精准错因诊断",
    desc: "通过多维模式识别，区分“粗心”、“规则混淆”或“词汇量缺失”。每一个错题背后，都有一个清晰的认知画像。",
    linkText: "探索技术详情",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
    reverse: true,
  },
  {
    step: "03",
    icon: RefreshCw,
    title: "知识点迁移补救",
    desc: "跳出“哪里不会练哪里”的怪圈。系统会自动生成具有关联性的迁移练习，确保孩子真正掌握底层规则，而非机械记忆。",
    linkText: "探索技术详情",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200",
    reverse: false,
  }
];

export const HomeFeatures = () => {
  return (
    <section className="bg-white py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-[1300px] mx-auto text-center mb-24 md:mb-32">
        <motion.h2 
          className="text-[40px] md:text-[56px] font-bold text-[#1D1D1F] tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          智能闭环，从感知到超越
        </motion.h2>
        <motion.p 
          className="text-xl text-[#6E6E73] font-medium max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          我们不仅仅是在做听写工具，而是在构建一个能够实时“理解”学习状态的智能伙伴。
        </motion.p>
      </div>

      <div className="max-w-[1300px] mx-auto flex flex-col gap-32 md:gap-40">
        {features.map((feature, idx) => (
          <div key={idx} className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
            
            {/* Text Content */}
            <motion.div 
              className="flex-1 w-full lg:max-w-[500px]"
              initial={{ opacity: 0, x: feature.reverse ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#E5E1D8] mb-8 shadow-sm">
                <span className="text-[13px] font-bold text-[#3A6EA5] tracking-widest uppercase">STEP {feature.step}</span>
                <span className="w-1 h-1 rounded-full bg-[#E5E1D8]"></span>
                <feature.icon className="w-4 h-4 text-[#6E6E73]" />
              </div>
              
              <h3 className="text-[36px] md:text-[48px] font-bold text-[#1D1D1F] tracking-tight mb-6 leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-[18px] text-[#6E6E73] font-medium leading-relaxed mb-10">
                {feature.desc}
              </p>
              
              <a href="#" className="inline-flex items-center gap-2 text-[#3A6EA5] font-bold text-[16px] hover:opacity-80 transition-opacity group">
                {feature.linkText}
                <div className="w-6 h-6 rounded-full border border-[#3A6EA5] flex items-center justify-center group-hover:bg-[#3A6EA5] group-hover:text-white transition-colors">
                   <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </motion.div>

            {/* Image */}
            <motion.div 
              className="flex-1 w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full aspect-[4/3] rounded-[48px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] bg-[#F5F5F7]">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
};
