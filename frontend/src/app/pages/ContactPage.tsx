import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactStatus } from '../components/contact/ContactStatus';
import { ContactFormArea } from '../components/contact/ContactFormArea';
import { ContactCTA } from '../components/contact/ContactCTA';
import { Github, Twitter } from 'lucide-react';

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1D1D1F] selection:bg-[#1D1D1F]/10 selection:text-[#1D1D1F]">
      <Navbar />

      <main>
        <ContactHero />
        <ContactStatus />
        <ContactFormArea />
        <ContactCTA />
      </main>

      {/* Footer */}
      <footer className="py-16 md:py-24 border-t border-[#F5F5F7] px-6 md:px-12 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
            
            {/* Brand Column */}
            <div className="md:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-[#1D1D1F] rounded-xl flex items-center justify-center">
                   <div className="w-5 h-5 bg-[#3A6EA5] rounded-sm transform rotate-45"></div>
                </div>
                <span className="font-bold text-[22px] tracking-tight text-[#1D1D1F]">MindLink</span>
              </div>
              <p className="text-[#6E6E73] text-[15px] max-w-[340px] leading-relaxed font-medium mb-8">
                不仅仅是听写工具，更是孩子的智能学习陪练。<br />
                通过多维感知技术实现精准的个性化教学。
              </p>
              <div className="flex items-center gap-6">
                <Twitter size={20} className="text-[#6E6E73] hover:text-[#1D1D1F] cursor-pointer transition-colors" strokeWidth={1.5} />
                <Github size={20} className="text-[#6E6E73] hover:text-[#1D1D1F] cursor-pointer transition-colors" strokeWidth={1.5} />
              </div>
            </div>

            {/* Links Column 1 */}
            <div className="md:col-span-3 flex flex-col">
              <h4 className="font-bold mb-8 text-[13px] text-[#86868B] uppercase">产品探索</h4>
              <ul className="space-y-5 text-[14px] font-semibold text-[#6E6E73]">
                <li><a href="#" className="hover:text-[#1D1D1F] transition-colors">感知技术</a></li>
                <li><a href="#" className="hover:text-[#1D1D1F] transition-colors">诊断算法</a></li>
                <li><a href="#" className="hover:text-[#1D1D1F] transition-colors">补救体系</a></li>
                <li><a href="#" className="hover:text-[#1D1D1F] transition-colors">硬件规格</a></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="md:col-span-3 flex flex-col">
              <h4 className="font-bold mb-8 text-[13px] text-[#86868B] uppercase">关于我们</h4>
              <ul className="space-y-5 text-[14px] font-semibold text-[#6E6E73]">
                <li><a href="#" className="hover:text-[#1D1D1F] transition-colors">我们的使命</a></li>
                <li><a href="#" className="hover:text-[#1D1D1F] transition-colors">隐私与安全</a></li>
                <li><a href="#" className="hover:text-[#1D1D1F] transition-colors">学术支持</a></li>
                <li><a href="#" className="hover:text-[#1D1D1F] transition-colors">联系合作</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#F5F5F7] flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[13px] text-[#86868B] font-semibold">© 2026 MindLink Education Tech. Inspired by pure education.</p>
            <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-[#86868B]">
              <a href="#" className="hover:text-[#1D1D1F] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#1D1D1F] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#1D1D1F] transition-colors">Cookie Prefs</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
