import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { WorkflowHero } from '../components/workflow/WorkflowHero';
import { WorkflowContentMapping } from '../components/workflow/WorkflowContentMapping';
import { WorkflowProcessObservation } from '../components/workflow/WorkflowProcessObservation';
import { WorkflowDiagnosis } from '../components/workflow/WorkflowDiagnosis';
import { WorkflowRemediation } from '../components/workflow/WorkflowRemediation';
import { WorkflowCTA } from '../components/workflow/WorkflowCTA';
import { Github, Twitter } from 'lucide-react';

export const WorkflowPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1D1D1F] selection:bg-[#1D1D1F]/10 selection:text-[#1D1D1F]">
      <Navbar dark={false} />

      <main>
        <WorkflowHero />
        {/* Let's remove ContentMapping for a cleaner flow, or keep it if needed. For now I'm leaving it out to emphasize the 3 Apple-like sections. */}
        <WorkflowProcessObservation />
        <WorkflowRemediation />
        <WorkflowDiagnosis />
        <WorkflowCTA />
      </main>

      {/* Footer */}
      <footer className="py-24 border-t border-[#E5E1D8] px-8 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#1D1D1F] rounded-xl flex items-center justify-center">
                   <div className="w-5 h-5 bg-[#86E789] rounded-sm transform rotate-45"></div>
                </div>
                <span className="font-bold text-2xl tracking-tighter">MindLink</span>
              </div>
              <p className="text-[#6E6E73] text-[15px] max-w-sm leading-relaxed mb-8">
                不仅仅是听写工具，更是孩子的智能学习陪练。通过多维感知技术实现精准的个性化教学。
              </p>
              <div className="flex items-center gap-6">
                <Twitter size={20} className="text-[#6E6E73] hover:text-[#1D1D1F] cursor-pointer transition-colors" />
                <Github size={20} className="text-[#6E6E73] hover:text-[#1D1D1F] cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-[#1D1D1F]/50">产品探索</h4>
              <ul className="space-y-4 text-sm font-semibold text-[#1D1D1F]">
                <li><a href="#" className="hover:underline transition-all">感知技术</a></li>
                <li><a href="#" className="hover:underline transition-all">诊断算法</a></li>
                <li><a href="#" className="hover:underline transition-all">补救体系</a></li>
                <li><a href="#" className="hover:underline transition-all">硬件规格</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-[#1D1D1F]/50">关于我们</h4>
              <ul className="space-y-4 text-sm font-semibold text-[#1D1D1F]">
                <li><a href="#" className="hover:underline transition-all">我们的使命</a></li>
                <li><a href="#" className="hover:underline transition-all">隐私与安全</a></li>
                <li><a href="#" className="hover:underline transition-all">学术支持</a></li>
                <li><a href="#" className="hover:underline transition-all">联系合作</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#E5E1D8] flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-xs text-[#6E6E73] font-medium tracking-wide">© 2026 MindLink Education Tech. Inspired by pure education.</p>
            <div className="flex gap-6 text-[11px] font-bold uppercase tracking-widest text-[#6E6E73]">
              <a href="#" className="hover:text-[#1D1D1F] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#1D1D1F] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
