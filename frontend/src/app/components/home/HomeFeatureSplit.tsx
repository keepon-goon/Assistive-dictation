import React from 'react';
import { motion } from 'motion/react';

export const HomeFeatureSplit = () => {
  return (
    <section className="bg-[#B4A5FF] py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Text Content */}
        <motion.div 
          className="flex-1 text-[#1D1D1F] max-w-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-bold mb-4">
            新加坡<br />
            国际管理学院实验中学
          </p>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-tight mb-8">
            MindLink 师资培训资源，<br />
            为课程注入活力，<br />
            给求学者提供支持。
          </h2>
          <button className="border-2 border-[#1D1D1F] rounded-[100px] px-8 py-2.5 text-[15px] font-bold hover:bg-[#1D1D1F] hover:text-white transition-colors duration-300">
            阅读故事
          </button>
        </motion.div>

        {/* Image */}
        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full aspect-[4/5] max-w-[500px] mx-auto rounded-[40px] overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200" 
              alt="Teachers looking at tablet" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
