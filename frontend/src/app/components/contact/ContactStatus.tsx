import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, CircleDashed } from 'lucide-react';

export const ContactStatus = () => {
  return (
    <section className="py-24 bg-[#F5F5F7] px-6 md:px-12 border-t border-[#E5E1D8]/50">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[12px] font-bold tracking-[0.2em] text-[#86868B] uppercase mb-4 block">Project Status</span>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#1D1D1F] tracking-tight">
            当前阶段：一期原型设计与前后端联调
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Completed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#E5E1D8]">
              <CheckCircle2 className="w-5 h-5 text-[#1D1D1F]" />
              <h3 className="text-[20px] font-bold text-[#1D1D1F]">已完成</h3>
            </div>
            <ul className="space-y-6">
              {[
                "展示官网首页重构与视觉规范",
                "产品能力与工作原理说明",
                "接口定义与需求文档",
                "前端业务系统整体规划"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F] mt-2.5 shrink-0"></span>
                  <span className="text-[16px] text-[#6E6E73] font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#E5E1D8]">
              <CircleDashed className="w-5 h-5 text-[#86868B]" />
              <h3 className="text-[20px] font-bold text-[#86868B]">下一步</h3>
            </div>
            <ul className="space-y-6">
              {[
                "业务演示台接入与数据联调",
                "练习模拟与作答记录持久化",
                "诊断报告生成与可视化图表",
                "设备模拟器联调 (ESP32)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 opacity-80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#86868B] mt-2.5 shrink-0"></span>
                  <span className="text-[16px] text-[#6E6E73] font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
