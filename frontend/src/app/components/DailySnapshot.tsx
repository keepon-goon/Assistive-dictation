import React from 'react';
import { motion } from 'motion/react';
import { Clock, Target, Zap, Activity, ArrowRight } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { time: '08:00', value: 30 },
  { time: '09:00', value: 45 },
  { time: '10:00', value: 75 },
  { time: '11:00', value: 60 },
  { time: '12:00', value: 85 },
  { time: '13:00', value: 92 },
];

export const DailySnapshot = () => {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-[#1D1D1F] mb-4">今日练习概览</h2>
          <p className="text-xl text-[#6E6E73] max-w-2xl">从练习时长到认知负荷，每一项指标都在讲述孩子的成长故事。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Large Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-[#F7F5EF] rounded-[40px] p-10 flex flex-col justify-between border border-[#E5E1D8] shadow-sm overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Activity className="text-[#3A6EA5]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">专注度曲线</h3>
                  <p className="text-sm text-[#6E6E73]">今日 08:00 - 13:00</p>
                </div>
              </div>
              <div className="h-48 w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3A6EA5" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="#3A6EA5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="#3A6EA5" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-[#E5E1D8] flex items-center justify-between relative z-10">
              <div className="flex gap-12">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#6E6E73] font-bold mb-1">峰值专注度</p>
                  <p className="text-3xl font-semibold text-[#1D1D1F]">94%</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#6E6E73] font-bold mb-1">平均时长</p>
                  <p className="text-3xl font-semibold text-[#1D1D1F]">42min</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-sm font-semibold text-[#3A6EA5] hover:gap-3 transition-all">
                详细分析 <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Smaller Cards Stack */}
          <div className="grid grid-cols-1 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-[40px] p-8 border border-[#E5E1D8] shadow-sm flex flex-col justify-center"
            >
              <div className="w-10 h-10 bg-[#5F8D6A]/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="text-[#5F8D6A]" size={20} />
              </div>
              <p className="text-sm text-[#6E6E73] font-medium mb-1">今日正确率</p>
              <h4 className="text-3xl font-semibold text-[#1D1D1F]">88.5%</h4>
              <p className="text-xs text-[#5F8D6A] mt-2 font-medium">↑ 较昨日提升 4.2%</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-[40px] p-8 border border-[#E5E1D8] shadow-sm flex flex-col justify-center"
            >
              <div className="w-10 h-10 bg-[#B88746]/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="text-[#B88746]" size={20} />
              </div>
              <p className="text-sm text-[#6E6E73] font-medium mb-1">感知交互次数</p>
              <h4 className="text-3xl font-semibold text-[#1D1D1F]">1,280</h4>
              <p className="text-xs text-[#6E6E73] mt-2 font-medium">全程低延迟稳定感知</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
