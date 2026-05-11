import React from 'react';
import { motion } from 'motion/react';
import { Play, Database, BrainCircuit, Terminal, History, FileBarChart, CheckCircle2, CircleDashed, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export const AppDashboard = () => {
  const pipelineSteps = [
    { name: "内容配置", status: "ready" },
    { name: "知识点标注", status: "ready" },
    { name: "练习任务", status: "pending" },
    { name: "终端作答", status: "pending" },
    { name: "过程采集", status: "pending" },
    { name: "错因诊断", status: "pending" },
    { name: "补救推荐", status: "pending" },
    { name: "学习报告", status: "pending" },
  ];

  const modules = [
    {
      title: "词表管理",
      desc: "维护单词、音标、释义、教材版本、单元、难度与迁移词组。",
      icon: <Database className="w-5 h-5" />,
      path: "/app/vocabulary"
    },
    {
      title: "知识点管理",
      desc: "维护发音规则、拼写规则、易混点、典型错误和补救策略。",
      icon: <BrainCircuit className="w-5 h-5" />,
      path: "/app/knowledge"
    },
    {
      title: "练习模拟",
      desc: "选择学生和单元，生成练习任务，模拟终端作答、重读、提示请求和提交答案。",
      icon: <Terminal className="w-5 h-5" />,
      path: "/app/simulation"
    },
    {
      title: "作答记录",
      desc: "查看每次作答的目标词、学生答案、正确性、响应时长、重读次数和提示请求。",
      icon: <History className="w-5 h-5" />,
      path: "/app/records"
    },
    {
      title: "诊断报告",
      desc: "查看错因诊断、证据链、薄弱知识点和迁移补救建议。",
      icon: <FileBarChart className="w-5 h-5" />,
      path: "/app/reports"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4 }}
    >
      {/* Header Area */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-[28px] md:text-[34px] font-bold text-[#1D1D1F] tracking-tight mb-3">
            MindLink 闭环演示台
          </h1>
          <p className="text-[14px] text-[#6E6E73] font-medium max-w-2xl leading-relaxed">
            从词表、知识点、练习任务到作答采集、错因诊断和补救推荐，<br className="hidden sm:block"/>
            在这里完成一次完整的儿童英语听写陪练闭环。
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/app/vocabulary" className="px-5 py-2.5 bg-white border border-[#E5E1D8] rounded-[8px] text-[13px] font-bold text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all shadow-sm">
            查看词表
          </Link>
          <button className="px-6 py-2.5 bg-[#1D1D1F] text-white rounded-[8px] text-[13px] font-bold hover:bg-black hover:shadow-md transition-all flex items-center gap-2 shadow-sm">
            <Play className="w-4 h-4 fill-current" />
            开始一次练习演示
          </button>
        </div>
      </div>

      {/* Context & Status Box */}
      <div className="bg-white rounded-[16px] border border-[#E5E1D8] shadow-sm mb-8 overflow-hidden">
        {/* Context Bar */}
        <div className="border-b border-[#E5E1D8] bg-[#FAFAFA] px-6 py-5 grid grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider">演示对象</span>
            <span className="text-[14px] font-bold text-[#1D1D1F]">小明 / 三年级</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider">演示单元</span>
            <span className="text-[14px] font-bold text-[#1D1D1F]">Unit 2</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider">练习模式</span>
            <span className="text-[14px] font-bold text-[#1D1D1F]">英语听写 / 口头拼写</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider">设备端状态</span>
            <div className="flex items-center gap-1.5 text-[14px] font-bold text-[#1D1D1F]">
              <span className="w-2 h-2 rounded-full bg-[#86E789]"></span>
              ESP32-模拟器 (可用)
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider">后端状态</span>
            <div className="flex items-center gap-1.5 text-[14px] font-bold text-[#1D1D1F]">
              <span className="w-2 h-2 rounded-full bg-[#F5A623]"></span>
              Mock 数据 (已启用)
            </div>
          </div>
        </div>

        {/* Pipeline / Progress Loop */}
        <div className="px-6 py-8 overflow-x-auto hide-scrollbar">
          <div className="flex items-center justify-between min-w-[800px] gap-2">
            {pipelineSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className={`flex flex-col items-center gap-3 ${step.status === 'ready' ? 'opacity-100' : 'opacity-40'}`}>
                  {step.status === 'ready' ? (
                    <div className="w-8 h-8 rounded-full bg-[#1D1D1F] flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full border border-[#D1D1D6] bg-white flex items-center justify-center">
                      <CircleDashed className="w-4 h-4 text-[#86868B]" />
                    </div>
                  )}
                  <span className={`text-[12px] font-bold ${step.status === 'ready' ? 'text-[#1D1D1F]' : 'text-[#86868B]'}`}>
                    {step.name}
                  </span>
                </div>
                {idx < pipelineSteps.length - 1 && (
                  <div className="flex-1 h-[1px] bg-[#E5E1D8] mx-2 relative top-[-12px]"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* 5 Core Entries Grid */}
      <h3 className="text-[16px] font-bold text-[#1D1D1F] mb-6">核心业务入口</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((mod, idx) => (
          <Link 
            to={mod.path} 
            key={idx}
            className="group bg-white border border-[#E5E1D8] rounded-[16px] p-6 hover:border-[#1D1D1F] hover:shadow-md transition-all flex flex-col h-full"
          >
            <div className="w-10 h-10 rounded-[10px] bg-[#F5F5F7] flex items-center justify-center text-[#1D1D1F] mb-5 group-hover:bg-[#1D1D1F] group-hover:text-white transition-colors">
              {mod.icon}
            </div>
            <h4 className="text-[16px] font-bold text-[#1D1D1F] mb-2">{mod.title}</h4>
            <p className="text-[13px] text-[#6E6E73] font-medium leading-relaxed flex-1 mb-6">
              {mod.desc}
            </p>
            <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#86868B] group-hover:text-[#1D1D1F] transition-colors mt-auto">
              进入模块 <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};
