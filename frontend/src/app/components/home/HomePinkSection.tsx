import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Users } from 'lucide-react';

export const HomePinkSection = () => {
  return (
    <section className="bg-[#F5F5F7] py-32 px-4 md:px-8">
      <div className="max-w-[1000px] mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] font-bold text-[#1D1D1F] tracking-tight mb-6">
            MindLink 师资培训专家，<br />
            <span className="inline-block bg-[#FFB359] px-4 py-1.5 md:py-2 rounded-[100px] leading-tight text-[#1D1D1F]">直达校园，</span>或直接连线。
          </h2>
          <p className="text-[19px] text-[#1D1D1F] font-medium max-w-2xl mx-auto leading-relaxed">
            与 MindLink 师资培训 Specialist 专家对接时，无论是当面进行，还是线上交流，都可以根据校内师生的需求获得个性化辅导、指导和支持。
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Top Wide Pink Card */}
          <div className="md:col-span-2 bg-[#FF8EB3] rounded-[40px] p-12 md:p-20 relative overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
             <div className="flex flex-col items-center justify-center relative z-10">
               {/* Decorative Arrow Graphic */}
               <div className="w-32 h-16 mb-4 opacity-80">
                 <svg viewBox="0 0 100 40" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <path d="M10 30 Q 50 10 90 30" />
                    <path d="M80 20 L 90 30 L 80 40" />
                    <path d="M90 30 Q 50 50 10 30" />
                 </svg>
               </div>
               <h3 className="text-[32px] md:text-[40px] font-bold text-[#1D1D1F] text-center">
                 把专家<span className="inline-block px-2">请进学校。</span>
               </h3>
             </div>
             {/* Plus Button */}
             <div className="absolute right-8 bottom-8 w-10 h-10 bg-[#1D1D1F] rounded-full flex items-center justify-center text-white">
                <span className="text-xl leading-none -mt-0.5">+</span>
             </div>
          </div>

          {/* Left White Card */}
          <div className="bg-white border-2 border-[#1D1D1F] rounded-[40px] p-12 text-left flex flex-col justify-end min-h-[360px] group cursor-pointer">
             <div className="mb-auto">
               <div className="w-24 h-24 mb-6">
                 <svg viewBox="0 0 100 100" fill="none" stroke="#1D1D1F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="35" cy="40" r="15" fill="white" />
                    <circle cx="65" cy="40" r="15" fill="#FF8EB3" />
                    <path d="M10 90 Q 35 60 60 90" fill="white" />
                    <path d="M40 90 Q 65 60 90 90" fill="#FF8EB3" />
                 </svg>
               </div>
             </div>
             <h3 className="text-[32px] font-bold text-[#1D1D1F] leading-tight mb-2">从部署开始，</h3>
             <div className="inline-block bg-[#FF8EB3] px-3 py-1 rounded-[100px]">
               <h3 className="text-[32px] font-bold text-[#1D1D1F] leading-tight">IT 步步有后盾。</h3>
             </div>
          </div>

          {/* Right Pink Card */}
          <div className="bg-[#FF8EB3] rounded-[40px] p-12 text-left flex flex-col justify-end min-h-[360px] group cursor-pointer shadow-sm">
             <div className="mb-auto">
               <div className="w-24 h-24 rounded-full border-4 border-[#1D1D1F] bg-white flex items-center justify-center mb-6">
                 <ArrowUp className="w-12 h-12 text-[#1D1D1F]" strokeWidth={2.5} />
               </div>
             </div>
             <div className="inline-block bg-white px-3 py-1 rounded-[100px] mb-2 w-fit">
               <h3 className="text-[32px] font-bold text-[#1D1D1F] leading-tight">领导能力</h3>
             </div>
             <h3 className="text-[32px] font-bold text-[#1D1D1F] leading-tight px-1">再上一层。</h3>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
