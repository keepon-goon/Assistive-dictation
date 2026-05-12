import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Users, ArrowRight } from 'lucide-react';

export const ContactFormArea = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Side: Info & Purposes */}
        <motion.div 
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[28px] font-bold text-[#1D1D1F] tracking-tight mb-8">
            期待与您的交流
          </h2>
          <p className="text-[16px] text-[#6E6E73] font-medium leading-relaxed mb-12">
            不论是申请体验演示、探讨教师试用场景、讨论设备端接入，还是参与后续的实验室项目合作，我们都非常欢迎。
          </p>

          <div className="space-y-6">
            <div className="bg-[#F5F5F7] p-6 rounded-[24px]">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-[#1D1D1F]" />
                <h4 className="font-bold text-[#1D1D1F] text-[15px]">ADC Research Lab</h4>
              </div>
              <p className="text-[14px] text-[#6E6E73] font-medium ml-8">
                MindLink 项目组<br />
                方向：儿童无屏自适应陪练 / 过程感知
              </p>
            </div>

            <div className="bg-[#F5F5F7] p-6 rounded-[24px] group cursor-pointer hover:bg-[#E5E1D8]/50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-[#1D1D1F]" />
                <h4 className="font-bold text-[#1D1D1F] text-[15px]">发送邮件</h4>
              </div>
              <p className="text-[14px] text-[#6E6E73] font-medium ml-8 flex items-center justify-between">
                mindlink@example.com
                <ArrowRight className="w-4 h-4 text-[#86868B] group-hover:text-[#1D1D1F] group-hover:translate-x-1 transition-all" />
              </p>
            </div>

            <div className="bg-[#F5F5F7] p-6 rounded-[24px] group cursor-pointer hover:bg-[#E5E1D8]/50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Github className="w-5 h-5 text-[#1D1D1F]" />
                <h4 className="font-bold text-[#1D1D1F] text-[15px]">开源与文档</h4>
              </div>
              <p className="text-[14px] text-[#6E6E73] font-medium ml-8 flex items-center justify-between">
                GitHub Repository
                <ArrowRight className="w-4 h-4 text-[#86868B] group-hover:text-[#1D1D1F] group-hover:translate-x-1 transition-all" />
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Clean Form */}
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#86868B] mb-2 uppercase tracking-wide">姓名 / 称呼</label>
                <input 
                  type="text" 
                  className="bg-transparent border-b border-[#E5E1D8] pb-3 text-[16px] text-[#1D1D1F] focus:outline-none focus:border-[#1D1D1F] transition-colors placeholder:text-[#D1D1D6]"
                  placeholder="如何称呼您？"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#86868B] mb-2 uppercase tracking-wide">您的身份</label>
                <select className="bg-transparent border-b border-[#E5E1D8] pb-3 text-[16px] text-[#1D1D1F] focus:outline-none focus:border-[#1D1D1F] transition-colors appearance-none cursor-pointer">
                  <option value="" disabled selected hidden>请选择</option>
                  <option value="teacher">教师</option>
                  <option value="reviewer">评审专家</option>
                  <option value="partner">合作方 / 开发者</option>
                  <option value="parent">家长 / 学生</option>
                  <option value="other">其他</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#86868B] mb-2 uppercase tracking-wide">联系方式</label>
                <input 
                  type="text" 
                  className="bg-transparent border-b border-[#E5E1D8] pb-3 text-[16px] text-[#1D1D1F] focus:outline-none focus:border-[#1D1D1F] transition-colors placeholder:text-[#D1D1D6]"
                  placeholder="邮箱或手机号"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-bold text-[#86868B] mb-2 uppercase tracking-wide">关注方向</label>
                <select className="bg-transparent border-b border-[#E5E1D8] pb-3 text-[16px] text-[#1D1D1F] focus:outline-none focus:border-[#1D1D1F] transition-colors appearance-none cursor-pointer">
                  <option value="" disabled selected hidden>您希望探讨的内容</option>
                  <option value="demo">申请体验演示</option>
                  <option value="trial">教师试用场景</option>
                  <option value="hardware">设备端接入 / 硬件</option>
                  <option value="feedback">反馈建议</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col pt-4">
              <label className="text-[13px] font-bold text-[#86868B] mb-4 uppercase tracking-wide">留言内容</label>
              <textarea 
                rows={4}
                className="bg-transparent border-b border-[#E5E1D8] pb-3 text-[16px] text-[#1D1D1F] focus:outline-none focus:border-[#1D1D1F] transition-colors placeholder:text-[#D1D1D6] resize-none"
                placeholder="简单描述您的需求或想法..."
              ></textarea>
            </div>

            <div className="pt-6">
              <button type="submit" className="px-10 py-4 bg-[#1D1D1F] text-white rounded-[100px] font-bold text-[15px] hover:bg-black hover:scale-105 transition-all shadow-md">
                提交留言
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
