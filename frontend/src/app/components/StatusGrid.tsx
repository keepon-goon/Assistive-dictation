import React from 'react';
import { motion } from 'motion/react';
import { Target, Clock, Zap, BarChart3 } from 'lucide-react';

const stats = [
  {
    label: '今日练习总时长',
    value: '42 min',
    trend: '+12% 较昨日',
    icon: Clock,
    color: '#3A6EA5',
  },
  {
    label: '正确率波动',
    value: '88.5%',
    trend: '稳定增长',
    icon: Target,
    color: '#5F8D6A',
  },
  {
    label: '知识点覆盖',
    value: '24 / 30',
    trend: '本周新增 3',
    icon: Zap,
    color: '#B88746',
  },
  {
    label: '感知交互次数',
    value: '1,280',
    trend: '全程无断连',
    icon: BarChart3,
    color: '#1D1D1F',
  },
];

export const StatusGrid = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-[#E5E1D8] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#E5E1D8] bg-[#F7F5EF]">
                  <item.icon size={20} className="text-[#1D1D1F]" />
                </div>
                <span className="text-xs font-medium text-[#6E6E73] px-2 py-1 bg-[#F1EEE7] rounded-md">
                  {item.trend}
                </span>
              </div>
              <p className="text-sm text-[#6E6E73] font-medium mb-1">{item.label}</p>
              <h3 className="text-2xl font-semibold text-[#1D1D1F]">{item.value}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
