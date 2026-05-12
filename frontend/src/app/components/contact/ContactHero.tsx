import React from 'react';
import { motion } from 'motion/react';

export const ContactHero = () => {
  return (
    <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 bg-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-[44px] md:text-[64px] font-bold text-[#1D1D1F] tracking-tight leading-[1.1] mb-8">
          欢迎了解 MindLink，<br />
          一起探索儿童无屏自适应陪练。
        </h1>
        <p className="text-[18px] md:text-[22px] text-[#6E6E73] font-medium max-w-2xl mx-auto leading-relaxed">
          让一次听写练习，成为可解释的学习证据。<br className="hidden md:block" />
          本项目目前已完成一期原型设计，欢迎随时与团队取得联系。
        </p>
      </motion.div>
    </section>
  );
};
