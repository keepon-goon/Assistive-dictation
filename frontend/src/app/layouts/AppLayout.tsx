import React from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { ArrowLeft, User } from 'lucide-react';

export const AppLayout = () => {
  const location = useLocation();
  const navItems = [
    { path: '/app', label: '闭环演示台' },
    { path: '/app/vocabulary', label: '词表管理' },
    { path: '/app/knowledge', label: '知识点管理' },
    { path: '/app/simulation', label: '练习模拟' },
    { path: '/app/records', label: '作答记录' },
    { path: '/app/reports', label: '诊断报告' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans selection:bg-[#1D1D1F]/10 selection:text-[#1D1D1F]">
      {/* Top Navbar for SaaS Application */}
      <header className="h-14 bg-white border-b border-[#E5E1D8] px-4 md:px-6 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#1D1D1F] rounded-md flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-[#86E789] rounded-[2px] transform rotate-45"></div>
            </div>
            <span className="font-bold text-[15px] tracking-tight">MindLink</span>
            <span className="hidden sm:inline-block text-[11px] font-bold text-[#86868B] ml-2 px-2 py-0.5 bg-[#F5F5F7] rounded-[4px] border border-[#E5E1D8]">演示环境</span>
          </div>

          {/* Business Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 rounded-md text-[13px] font-bold transition-colors ${
                    isActive 
                      ? 'bg-[#F5F5F7] text-[#1D1D1F]' 
                      : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Status */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/" className="flex items-center gap-1.5 text-[12px] font-bold text-[#6E6E73] hover:text-[#1D1D1F] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            返回官网
          </Link>
          <div className="h-4 w-[1px] bg-[#E5E1D8]"></div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[12px] font-bold text-[#1D1D1F]">管理员 / 教师</span>
              <span className="text-[10px] font-bold text-[#86868B]">当前演示: 小明</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#F5F5F7] border border-[#E5E1D8] flex items-center justify-center cursor-pointer hover:bg-[#E5E1D8] transition-colors">
              <User className="w-4 h-4 text-[#1D1D1F]" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="p-4 md:p-8 lg:p-10 max-w-[1300px] mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
