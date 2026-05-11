import React from 'react';
import { motion } from 'motion/react';

export const HomeDarkSection = () => {
  return (
    <section className="bg-black text-white pt-24 pb-32">
      <div className="w-full max-w-[2000px] mx-auto">
        {/* Large Top Image */}
        <motion.div 
          className="w-full h-[60vh] md:h-[80vh] relative mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1531545514251-b159e3fa1553?q=80&w=2400" 
            alt="Collaborative learning" 
            className="w-full h-full object-cover"
          />
          {/* Top Gradient for smooth transition if needed */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="max-w-3xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight mb-8">
            <span className="text-[#DEFF00]">教学，创新，启发，<br />各得其法。</span>
          </h2>
          <p className="text-[17px] text-white/70 font-medium leading-relaxed max-w-2xl mx-auto">
            在这个时代，每个人都在以自成一格的方式来做事。而 MindLink 技术正是为突破思维、挑战极限的创新精神而生。强大的硬件配上直观易用的软件，能帮助教职员工打造一个出色的教学环境，激励学生们随时随地探索、学习，甚至是改变世界。
          </p>
        </motion.div>
      </div>
    </section>
  );
};
