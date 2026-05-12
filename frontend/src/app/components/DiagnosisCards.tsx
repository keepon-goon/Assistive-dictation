import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, TrendingUp, BookCopy } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Mon', score: 65 },
  { name: 'Tue', score: 72 },
  { name: 'Wed', score: 68 },
  { name: 'Thu', score: 85 },
  { name: 'Fri', score: 92 },
  { name: 'Sat', score: 88 },
  { name: 'Sun', score: 94 },
];

export const DiagnosisCards = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Progress Graph */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-[#E5E1D8] shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1D1D1F]">能力成长曲线</h3>
              <p className="text-sm text-[#6E6E73]">近 7 日感知到的核心知识点掌握情况</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#5F8D6A]/10 text-[#5F8D6A] rounded-full text-xs font-medium">
              <TrendingUp size={14} /> 增长 18%
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3A6EA5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3A6EA5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E1D8" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6E6E73', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6E6E73', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E5E1D8', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                />
                <Area type="monotone" dataKey="score" stroke="#3A6EA5" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Column: Remediation Actions */}
        <div className="space-y-6">
          <div className="bg-[#5F8D6A]/5 p-6 rounded-3xl border border-[#5F8D6A]/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#5F8D6A] rounded-xl text-white">
                <CheckCircle2 size={20} />
              </div>
              <h4 className="font-semibold text-[#1D1D1F]">优势诊断</h4>
            </div>
            <p className="text-sm text-[#6E6E73] mb-4 leading-relaxed">
              孩子的书写速度与准确率在过去三天内表现非常稳定，建议开启“高阶词汇挑战”。
            </p>
            <button className="w-full py-2.5 bg-white text-[#5F8D6A] border border-[#5F8D6A]/20 rounded-xl text-sm font-medium hover:bg-[#5F8D6A]/10 transition-colors">
              查看详细优势报告
            </button>
          </div>

          <div className="bg-[#B88746]/5 p-6 rounded-3xl border border-[#B88746]/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#B88746] rounded-xl text-white">
                <AlertCircle size={20} />
              </div>
              <h4 className="font-semibold text-[#1D1D1F]">薄弱预警</h4>
            </div>
            <p className="text-sm text-[#6E6E73] mb-4 leading-relaxed">
              感知到在“后鼻音”听写中存在 3 次较长停顿，判定为音准识别薄弱点。
            </p>
            <div className="flex gap-2">
              <button className="flex-1 py-2.5 bg-[#1D1D1F] text-white rounded-xl text-sm font-medium hover:bg-black transition-colors flex items-center justify-center gap-2">
                <BookCopy size={14} /> 生成补救练习
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
