import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, TrendingUp, BookCopy, ChevronRight } from 'lucide-react';

export const IntelligentInsights = () => {
  return (
    <section className="py-32 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl font-semibold tracking-tight text-[#1D1D1F] mb-8 leading-[1.1]">
              不仅仅是报告，<br />更是行动指南。
            </h2>
            <p className="text-xl text-[#6E6E73] leading-relaxed mb-12">
              通过对海量作答轨迹的分析，我们能比孩子自己更早发现潜藏的薄弱点，并直接给出可执行的补救策略。
            </p>
            
            <div className="space-y-6">
              <div className="group p-6 rounded-[32px] hover:bg-[#F7F5EF] transition-all cursor-pointer border border-transparent hover:border-[#E5E1D8]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#5F8D6A]/10 flex items-center justify-center text-[#5F8D6A]">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">优势知识点</h4>
                      <p className="text-sm text-[#6E6E73]">累计掌握 124 个，本周新增 12 个</p>
                    </div>
                  </div>
                  <ChevronRight className="text-[#E5E1D8] group-hover:text-[#3A6EA5] transition-colors" />
                </div>
              </div>

              <div className="group p-6 rounded-[32px] hover:bg-[#F7F5EF] transition-all cursor-pointer border border-transparent hover:border-[#E5E1D8]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#B88746]/10 flex items-center justify-center text-[#B88746]">
                      <AlertCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">待强化预警</h4>
                      <p className="text-sm text-[#6E6E73]">感知到后鼻音识别停顿，建议补救</p>
                    </div>
                  </div>
                  <ChevronRight className="text-[#E5E1D8] group-hover:text-[#3A6EA5] transition-colors" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Mock Report Card UI */}
            <motion.div 
              initial={{ rotate: 2, y: 20 }}
              whileInView={{ rotate: 0, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F7F5EF] p-8 rounded-[48px] border border-[#E5E1D8] shadow-2xl relative z-10"
            >
              <div className="bg-white rounded-[32px] p-8 shadow-sm border border-[#E5E1D8]">
                 <div className="flex justify-between items-center mb-8">
                   <span className="text-xs font-bold uppercase tracking-widest text-[#6E6E73]">诊断摘要 · 今日</span>
                   <div className="px-3 py-1 bg-[#5F8D6A]/10 text-[#5F8D6A] rounded-full text-[10px] font-bold uppercase">实时更新</div>
                 </div>
                 
                 <div className="space-y-8">
                   <div className="flex items-center gap-6">
                     <div className="w-16 h-16 rounded-full border-4 border-[#3A6EA5] border-t-transparent flex items-center justify-center">
                       <span className="text-sm font-bold">82%</span>
                     </div>
                     <div>
                       <p className="text-sm font-semibold">总体认知负荷</p>
                       <p className="text-xs text-[#6E6E73]">处于最佳学习区（Flow State）</p>
                     </div>
                   </div>

                   <div className="p-5 bg-[#F1EEE7] rounded-2xl">
                     <div className="flex items-center gap-3 mb-3">
                       <BookCopy size={16} className="text-[#3A6EA5]" />
                       <span className="text-sm font-semibold">推荐补救练习</span>
                     </div>
                     <p className="text-xs text-[#6E6E73] leading-relaxed mb-4">针对“ing”与“in”的区分练习，系统已根据感知到的重写行为为您生成了 5 道同类迁移题。</p>
                     <button className="w-full py-2.5 bg-[#1D1D1F] text-white rounded-xl text-xs font-semibold hover:opacity-90 transition-opacity">
                       立即生成练习
                     </button>
                   </div>
                 </div>
              </div>
            </motion.div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#3A6EA5]/5 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#B88746]/5 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
