import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Define if the current page starts with a dark hero section
  const isHome = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On the home page, the navbar is dark when at the top, and light when scrolled down.
  // On other pages, it's always light.
  const isDark = isHome && !isScrolled;

  const textColor = isDark ? 'text-white' : 'text-[#1D1D1F]';
  const subTextColor = isDark ? 'text-white/50' : 'text-[#86868B]';
  const activeColor = isDark ? 'text-white' : 'text-[#1D1D1F]';
  const bgColor = isDark ? 'bg-transparent' : 'bg-white/80 backdrop-blur-xl';
  const borderColor = isDark ? 'border-transparent' : 'border-[#E5E1D8]';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${bgColor} ${borderColor}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
        
        {/* Left Branding */}
        <Link to="/" className="flex flex-col justify-center mt-1">
          <span className={`font-bold ${textColor} text-[18px] tracking-tight leading-none mb-1 transition-colors duration-300`}>
            无屏自适应陪练终端
          </span>
          <span className={`text-[9px] ${subTextColor} tracking-[0.25em] font-bold uppercase leading-none transition-colors duration-300`}>
            Adaptive Dictation Companion
          </span>
        </Link>
        
        {/* Center Navigation */}
        <div className="hidden lg:flex items-center gap-12 text-[14px] font-bold">
          <Link to="/" className={`${location.pathname === '/' ? activeColor : subTextColor} hover:${textColor} transition-colors duration-300`}>首页</Link>
          <Link to="/workflow" className={`${location.pathname === '/workflow' ? activeColor : subTextColor} hover:${textColor} transition-colors duration-300`}>产品能力</Link>
          <Link to="/contact" className={`${location.pathname === '/contact' ? activeColor : subTextColor} hover:${textColor} transition-colors duration-300`}>联系我们</Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-8">
          <Link to="/app" className={`px-6 py-2 ${isDark ? 'bg-white text-[#1D1D1F]' : 'bg-[#1D1D1F] text-white'} rounded-[100px] text-[14px] font-bold hover:scale-105 transition-all shadow-sm`}>
            开始体验
          </Link>
        </div>
      </div>
    </nav>
  );
};
