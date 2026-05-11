import React from 'react';
import { motion } from 'motion/react';

const stories = [
  {
    location: "日本\n枚方市教育委员会",
    title: "课堂里的自信，\n由 iPad 推动。",
    desc: "了解枚方市如何通过为小学生和初中生 1:1 配发 iPad, 实现创造力和课堂参与感的提升。",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200"
  },
  {
    location: "美国\nStowe 早教中心",
    title: "iPad 助小学员育出大才智。",
    desc: "探索康涅狄格州的一家早教中心如何利用 iPad 启发学龄前学生，并与家长保持联络。",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200"
  },
  {
    location: "法国\n圣皮埃尔德梅尔学校",
    title: "激发每一个潜能，\n让学习成为乐趣。",
    desc: "了解 MindLink 如何通过个性化分析帮助不同起点的孩子找回学习自信。",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200"
  },
  {
    location: "加拿大\n安大略东北区教育局",
    title: "看见学习的轨迹，\n赋能全纳教育。",
    desc: "安大略东北区教育局借力终端设备，为特殊教育需求的孩子带来平等的数字学习体验。",
    image: "https://images.unsplash.com/photo-1427504494785-319ce66915f0?q=80&w=1200"
  }
];

export const HomeGrid = () => {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-white border-t border-[#E5E1D8]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {stories.map((story, idx) => (
          <motion.div 
            key={idx}
            className="flex flex-col group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
          >
            <div className="w-full aspect-[4/3] rounded-[40px] overflow-hidden mb-8 shadow-sm">
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="px-4">
              <p className="text-[15px] font-bold text-[#1D1D1F] mb-6 whitespace-pre-line leading-relaxed">
                {story.location}
              </p>
              <h3 className="text-[32px] font-bold text-[#1D1D1F] mb-6 whitespace-pre-line leading-tight">
                {story.title}
              </h3>
              <p className="text-[15px] text-[#6E6E73] font-medium leading-relaxed mb-8 max-w-sm">
                {story.desc}
              </p>
              <button className="border-2 border-[#1D1D1F] rounded-[100px] px-8 py-2.5 text-[15px] font-bold text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white transition-colors duration-300">
                阅读故事
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
