import React from 'react';
import { motion } from 'motion/react';
import { Database, Link2 } from 'lucide-react';

export const WorkflowContentMapping = () => {
  return (
    <section className="py-32 px-8 bg-white border-t border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[#F7F5EF] text-[#1D1D1F] text-[11px] font-bold tracking-[0.2em] uppercase">
            <Database className="w-3 h-3" />
            <span>结构化输入</span>
          </div>
          <h2 className="text-[40px] md:text-[56px] leading-[1.1] font-semibold text-[#1D1D1F] tracking-tight mb-6">
            不是录入单词，<br />
            而是建立可诊断的<br />
            <span className="text-[#8E8E93]">知识结构</span>。
          </h2>
          <p className="text-xl text-[#6E6E73] leading-relaxed font-medium max-w-lg">
            每个单词都会被标注音标、释义、单元、难度和知识点，并与发音规则、拼写规则、易混点和补救策略建立映射关系。
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Card UI */}
          <div className="bg-[#F7F5EF] p-8 md:p-12 rounded-[32px] md:rounded-[48px] border border-[#E5E1D8] shadow-sm relative z-10">
            <div className="flex justify-between items-start mb-12">
              <div>
                <span className="text-xs font-bold text-[#6E6E73] uppercase tracking-wider mb-2 block">Target Word</span>
                <h3 className="text-[56px] font-semibold leading-none tracking-tight">make</h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-[#6E6E73] uppercase tracking-wider mb-2 block">Phonetic</span>
                <span className="text-2xl font-medium text-[#8E8E93]">/meɪk/</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="w-[120px] text-xs font-bold text-[#6E6E73] uppercase tracking-wider">Meaning</div>
                <div className="flex-1 bg-white border border-[#E5E1D8] rounded-xl px-4 py-3 text-sm font-medium">制作；使得</div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-[120px] text-xs font-bold text-[#6E6E73] uppercase tracking-wider">Properties</div>
                <div className="flex-1 flex gap-2">
                  <span className="bg-white border border-[#E5E1D8] rounded-lg px-3 py-1.5 text-xs font-medium">Unit 2</span>
                  <span className="bg-white border border-[#E5E1D8] rounded-lg px-3 py-1.5 text-xs font-medium text-orange-600">Medium</span>
                </div>
              </div>
              
              <div className="my-6 border-t border-[#E5E1D8]/50"></div>

              <div className="flex gap-4 items-start">
                <div className="w-[120px] text-xs font-bold text-[#6E6E73] uppercase tracking-wider mt-3">Knowledge Pt.</div>
                <div className="flex-1">
                  <div className="bg-[#1D1D1F] text-white rounded-xl px-4 py-3 text-sm font-medium mb-2 flex items-center justify-between">
                    <span>a_e 长元音规则</span>
                    <Link2 className="w-4 h-4 text-white/50" />
                  </div>
                  <div className="bg-white border border-[#E5E1D8] rounded-xl p-4">
                    <span className="text-[10px] font-bold text-[#6E6E73] uppercase tracking-wider mb-3 block">Transfer Group</span>
                    <div className="flex flex-wrap gap-2">
                      {['take', 'cake', 'name', 'game'].map((word) => (
                        <span key={word} className="bg-[#F7F5EF] text-[#1D1D1F] rounded-md px-2.5 py-1 text-xs font-semibold">
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative blur behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-100/40 rounded-full blur-[80px] -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};
