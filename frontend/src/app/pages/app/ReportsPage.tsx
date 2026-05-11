import React from 'react';
import { motion } from 'motion/react';
import { 
  User, Calendar, Hash, Target, CheckCircle2, 
  Clock, Volume2, HelpCircle, BrainCircuit, 
  AlertTriangle, ArrowRight, Zap, RefreshCw, 
  FileText, Sparkles, MessageSquare, ShieldCheck,
  LayoutDashboard, BookOpen, ChevronRight, Share2,
  Printer
} from 'lucide-react';
import { Link } from 'react-router';

// Mock Data for the Diagnosis Report
const REPORT_DATA = {
  student: '小明',
  grade: '三年级',
  unit: 'Unit 2',
  mode: '英语听写',
  sessionId: 'PS202604270001',
  timestamp: '2026-04-27 20:10:00',
  stats: {
    total: 5,
    completed: 5,
    correct: 3,
    accuracy: 60,
    avgDuration: 8.2,
    totalReplays: 7,
    totalHints: 3,
    weakConcepts: 1,
    diagnosticRules: 3,
    remediationStrategies: 2
  },
  conclusion: "本次练习整体完成度正常，但学生在 a_e 长元音规则相关单词中出现连续错误，同时伴随响应时长偏高、重读次数较多和提示依赖现象。系统判断该知识点处于不稳定掌握阶段，建议优先进行同知识点迁移练习。",
  weakConcepts: [
    {
      name: 'a_e 长元音规则',
      type: 'Phonics / 发音拼写规则',
      severity: 'high',
      errorWords: ['make', 'take', 'cake'],
      status: '知识点掌握不稳定',
      trigger: '同一知识点下连续错误，且平均响应时长偏高 (8.2s)。'
    }
  ],
  anomalies: [
    { id: 'knowledge_unstable', label: '知识点掌握不稳定', desc: '规律性错误，规则映射不稳' },
    { id: 'slow_response', label: '响应过慢', desc: '平均耗时超过正常范围 40%' },
    { id: 'hint_dependency', label: '提示依赖', desc: '在拼写关键位置请求系统提示' }
  ],
  evidenceChain: [
    { type: 'seq', content: 'make, take, cake 连续拼写错误' },
    { type: 'pattern', content: 'make 被写成 mak，漏写结尾不发音 e' },
    { type: 'signal', content: '响应时长 8.2s，伴随 3 次重读行为' },
    { type: 'dependency', content: '在 cake 的拼写过程中请求了首字母提示' }
  ],
  errorSample: {
    word: 'make',
    studentAnswer: 'mak',
    correctAnswer: 'make',
    concept: 'a_e 长元音规则',
    signals: '响应 8.2s / 重读 3 次 / 请求提示',
    diagnostic: '拼写规则错误 / 知识点掌握不稳定',
    interpretation: '学生可能未稳定掌握 a_e 长元音规则，出现漏写结尾 e 的规则性错误。'
  },
  remediation: [
    {
      type: '同知识点迁移练习',
      concept: 'a_e 长元音规则',
      words: ['name', 'game', 'lake'],
      reason: 'make, take, cake 连续错误，说明对该拼写规则迁移不稳定。',
      priority: 1,
      status: '待执行'
    },
    {
      type: '稳定性强化练习',
      concept: '基础发音辨析',
      words: ['make', 'take'],
      reason: '针对已错单词进行“去提示化”复练习。',
      priority: 2,
      status: '建议执行'
    }
  ],
  humanSummary: "孩子不是完全不会这些单词，而是在 a_e 长元音规则上掌握不稳定。建议下一轮练习减少新词数量，优先围绕 make、take、cake、name、game、lake 等同规则词进行迁移练习，并逐步减少提示强度。"
};

export const ReportsPage = () => {
  return (
    <div className="max-w-[1300px] mx-auto pb-20">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#1D1D1F] text-white text-[10px] font-bold rounded-[4px] uppercase tracking-widest">Diagnostic Report</span>
            <span className="text-[12px] font-bold text-[#86868B]">ID: {REPORT_DATA.sessionId}</span>
          </div>
          <h1 className="text-[32px] font-bold text-[#1D1D1F] tracking-tight">智能学习诊断报告</h1>
          <p className="text-[14px] text-[#6E6E73] font-medium mt-1">从行为过程到认知归因，还原真实学习状态。</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-[#E5E1D8] rounded-[10px] text-[13px] font-bold text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all flex items-center gap-2 shadow-sm">
            <Share2 className="w-4 h-4" /> 分享
          </button>
          <button className="px-4 py-2.5 bg-white border border-[#E5E1D8] rounded-[10px] text-[13px] font-bold text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all flex items-center gap-2 shadow-sm">
            <Printer className="w-4 h-4" /> 导出 PDF
          </button>
          <button className="px-6 py-2.5 bg-[#1D1D1F] text-white rounded-[10px] text-[13px] font-bold hover:bg-black transition-all flex items-center gap-2 shadow-sm">
            <Zap className="w-4 h-4" /> 生成补救练习
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Main Analysis (8/12) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* 1. Report Cover / Header Card */}
          <div className="bg-white border border-[#E5E1D8] rounded-[24px] shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-[#FAFAFA] to-white p-8 border-b border-[#E5E1D8]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <InfoItem icon={<User className="w-3.5 h-3.5" />} label="学生" value={REPORT_DATA.student} />
                <InfoItem icon={<Target className="w-3.5 h-3.5" />} label="年级" value={REPORT_DATA.grade} />
                <InfoItem icon={<BookOpen className="w-3.5 h-3.5" />} label="练习单元" value={REPORT_DATA.unit} />
                <InfoItem icon={<Clock className="w-3.5 h-3.5" />} label="练习时间" value={REPORT_DATA.timestamp} />
              </div>
            </div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-[#F5F5F7]" />
                    <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray={364.4} strokeDashoffset={364.4 * (1 - REPORT_DATA.stats.accuracy / 100)} className="text-[#34C759] transition-all duration-1000" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[28px] font-bold text-[#1D1D1F] leading-none">{REPORT_DATA.stats.accuracy}%</span>
                    <span className="text-[10px] font-bold text-[#86868B] uppercase mt-1">正确率</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#EBF5FF] flex items-center justify-center text-[#007AFF]">
                      <BrainCircuit className="w-5 h-5" />
                    </div>
                    <h3 className="text-[18px] font-bold text-[#1D1D1F]">智能诊断结论</h3>
                  </div>
                  <p className="text-[15px] text-[#1D1D1F] font-medium leading-relaxed bg-[#F5F5F7] p-5 rounded-[16px] border border-[#E5E1D8]/50">
                    {REPORT_DATA.conclusion}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard label="平均响应时长" value={`${REPORT_DATA.stats.avgDuration}s`} trend="偏慢 40%" trendColor="text-[#E58A00]" />
            <MetricCard label="重读次数" value={REPORT_DATA.stats.totalReplays} trend="频率较高" trendColor="text-[#E58A00]" />
            <MetricCard label="提示请求" value={REPORT_DATA.stats.totalHints} trend="存在依赖" trendColor="text-[#E58A00]" />
            <MetricCard label="触发诊断" value={REPORT_DATA.stats.diagnosticRules} trend="认知归因" trendColor="text-[#007AFF]" />
          </div>

          {/* 3. Weak Concept Focus */}
          <div className="bg-white border border-[#E5E1D8] rounded-[24px] shadow-sm p-8">
            <h3 className="text-[18px] font-bold text-[#1D1D1F] mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#E58A00]" /> 薄弱知识点诊断
            </h3>
            {REPORT_DATA.weakConcepts.map((concept, idx) => (
              <div key={idx} className="bg-[#FAFAFA] border border-[#E5E1D8] rounded-[20px] p-6 space-y-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider mb-1 block">{concept.type}</span>
                    <h4 className="text-[20px] font-bold text-[#1D1D1F]">{concept.name}</h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-[12px] font-bold border ${
                      concept.severity === 'high' ? 'bg-[#FFEBEE] text-[#D84315] border-[#FFCDD2]' : 'bg-[#FFF3E0] text-[#E58A00] border-[#FFE082]'
                    }`}>
                      优先级: {concept.severity.toUpperCase()}
                    </span>
                    <span className="px-3 py-1 bg-white border border-[#E5E1D8] rounded-full text-[12px] font-bold text-[#1D1D1F]">
                      {concept.status}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[12px] font-bold text-[#86868B] block mb-2">关联错误词</span>
                      <div className="flex flex-wrap gap-2">
                        {concept.errorWords.map(word => (
                          <span key={word} className="px-3 py-1.5 bg-white border border-[#E5E1D8] rounded-[8px] text-[14px] font-bold text-[#1D1D1F] shadow-sm">{word}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-[12px] font-bold text-[#86868B] block mb-2">触发原因</span>
                      <p className="text-[14px] font-medium text-[#1D1D1F]">{concept.trigger}</p>
                    </div>
                  </div>

                  {/* Evidence Chain inside the concept card */}
                  <div className="bg-white/50 border border-[#E5E1D8] rounded-[16px] p-4">
                    <span className="text-[12px] font-bold text-[#86868B] block mb-3 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" /> 诊断证据链
                    </span>
                    <div className="space-y-3">
                      {REPORT_DATA.evidenceChain.map((ev, i) => (
                        <div key={i} className="flex gap-2 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E58A00] mt-1.5 shrink-0"></div>
                          <span className="text-[13px] font-medium text-[#6E6E73]">{ev.content}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 4. Typical Error Sample Interpretation */}
          <div className="bg-white border border-[#E5E1D8] rounded-[24px] shadow-sm p-8">
            <h3 className="text-[18px] font-bold text-[#1D1D1F] mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#007AFF]" /> 典型错误案例解读
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 space-y-4">
                <div className="p-4 bg-[#F5F5F7] rounded-[16px] border border-[#E5E1D8]">
                  <span className="text-[11px] font-bold text-[#86868B] uppercase block mb-1">目标单词</span>
                  <span className="text-[20px] font-bold text-[#1D1D1F]">{REPORT_DATA.errorSample.word}</span>
                </div>
                <div className="p-4 bg-white border border-[#E5E1D8] rounded-[16px]">
                  <span className="text-[11px] font-bold text-[#86868B] uppercase block mb-1">学生作答</span>
                  <span className="text-[20px] font-bold text-[#D84315] underline decoration-wavy decoration-red-200">{REPORT_DATA.errorSample.studentAnswer}</span>
                </div>
                <div className="p-4 bg-white border border-[#E5E1D8] rounded-[16px]">
                  <span className="text-[11px] font-bold text-[#86868B] uppercase block mb-1">正确答案</span>
                  <span className="text-[20px] font-bold text-[#34C759]">{REPORT_DATA.errorSample.correctAnswer}</span>
                </div>
              </div>
              <div className="md:col-span-2 flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-4 text-[13px] font-bold text-[#6E6E73]">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {REPORT_DATA.errorSample.signals.split(' / ')[0]}</span>
                  <span className="w-[1px] h-4 bg-[#E5E1D8]"></span>
                  <span className="flex items-center gap-1"><Volume2 className="w-3.5 h-3.5" /> {REPORT_DATA.errorSample.signals.split(' / ')[1]}</span>
                  <span className="w-[1px] h-4 bg-[#E5E1D8]"></span>
                  <span className="flex items-center gap-1"><HelpCircle className="w-3.5 h-3.5" /> {REPORT_DATA.errorSample.signals.split(' / ')[2]}</span>
                </div>
                <div className="p-5 bg-[#F5F5F7] rounded-[20px] border-l-[4px] border-l-[#007AFF]">
                  <span className="text-[12px] font-bold text-[#007AFF] block mb-2 tracking-wide uppercase">AI 专家点评</span>
                  <p className="text-[15px] font-medium text-[#1D1D1F] leading-relaxed italic">
                    “{REPORT_DATA.errorSample.interpretation}”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Remediation & Summary (4/12) */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
          
          {/* 5. Parent Summary Card */}
          <div className="bg-[#1D1D1F] rounded-[24px] p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-[-20px] right-[-20px] opacity-10">
              <MessageSquare className="w-32 h-32" />
            </div>
            <h3 className="text-[18px] font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#86E789]" /> 家长 / 教师导读
            </h3>
            <p className="text-[15px] text-white/90 font-medium leading-relaxed mb-6">
              {REPORT_DATA.humanSummary}
            </p>
            <div className="flex items-center gap-3 p-4 bg-white/10 rounded-[16px] backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-[#86E789] flex items-center justify-center text-[#1D1D1F]">
                <Zap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-[12px] font-bold block">推荐下一步行动</span>
                <span className="text-[14px] font-medium text-white/80">生成 a_e 迁移练习</span>
              </div>
            </div>
          </div>

          {/* 6. Remediation Roadmap */}
          <div className="bg-white border border-[#E5E1D8] rounded-[24px] shadow-sm p-8">
            <h3 className="text-[18px] font-bold text-[#1D1D1F] mb-6 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-[#34C759]" /> 补救练习路线
            </h3>
            <div className="space-y-6">
              {REPORT_DATA.remediation.map((strategy, i) => (
                <div key={i} className="relative pl-6">
                  {/* Stepper line */}
                  {i !== REPORT_DATA.remediation.length - 1 && (
                    <div className="absolute left-[8px] top-6 bottom-[-24px] w-[2px] bg-[#E5E1D8]"></div>
                  )}
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-[#34C759] bg-white z-10"></div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] font-bold text-[#1D1D1F]">{strategy.type}</span>
                      <span className="text-[10px] font-bold text-[#86868B] uppercase tracking-wider">Priority {strategy.priority}</span>
                    </div>
                    <p className="text-[12px] text-[#6E6E73] font-medium leading-normal">{strategy.reason}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {strategy.words.map(w => (
                        <span key={w} className="px-2 py-0.5 bg-[#F5F5F7] text-[11px] font-bold text-[#1D1D1F] rounded-[4px] border border-[#E5E1D8]">{w}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-8 py-3 bg-[#F5F5F7] border border-[#E5E1D8] rounded-[12px] text-[13px] font-bold text-[#1D1D1F] hover:bg-[#E5E1D8] transition-colors flex items-center justify-center gap-2">
              使用推荐词生成练习 <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* 7. Bottom Navigation Link */}
          <div className="flex flex-col gap-3">
            <Link to="/app/records" className="w-full py-4 bg-white border border-[#E5E1D8] rounded-[16px] text-[14px] font-bold text-[#6E6E73] hover:text-[#1D1D1F] transition-all text-center flex items-center justify-center gap-2 group shadow-sm">
              <FileText className="w-4 h-4" /> 查看完整作答过程记录
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
            <Link to="/app/simulation" className="w-full py-4 bg-white border border-[#E5E1D8] rounded-[16px] text-[14px] font-bold text-[#6E6E73] hover:text-[#1D1D1F] transition-all text-center shadow-sm">
              返回练习模拟
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

// Internal Components
const InfoItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-1.5 mb-1 text-[#86868B]">
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </div>
    <span className="text-[15px] font-bold text-[#1D1D1F]">{value}</span>
  </div>
);

const MetricCard = ({ label, value, trend, trendColor }: { label: string, value: string | number, trend: string, trendColor: string }) => (
  <div className="bg-white border border-[#E5E1D8] rounded-[20px] p-5 shadow-sm hover:shadow-md transition-shadow">
    <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider block mb-2">{label}</span>
    <div className="flex items-baseline gap-2">
      <span className="text-[24px] font-bold text-[#1D1D1F] tracking-tight">{value}</span>
      <span className={`text-[11px] font-bold ${trendColor}`}>{trend}</span>
    </div>
  </div>
);
