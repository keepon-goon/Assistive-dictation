import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, Square, Volume2, HelpCircle, Send, CheckCircle2, 
  XCircle, Clock, Activity, BrainCircuit, Sparkles, Terminal, ArrowRight
} from 'lucide-react';

// Mock Data
const MOCK_QUESTIONS = [
  { id: 1, word: 'make', meaning: '制作；使得', phonetic: '/meɪk/', rule: 'a_e 长元音规则' },
  { id: 2, word: 'take', meaning: '拿取；花费', phonetic: '/teɪk/', rule: 'a_e 长元音规则' },
  { id: 3, word: 'cake', meaning: '蛋糕', phonetic: '/keɪk/', rule: 'a_e 长元音规则' },
  { id: 4, word: 'name', meaning: '名字', phonetic: '/neɪm/', rule: 'a_e 长元音规则' },
  { id: 5, word: 'game', meaning: '游戏', phonetic: '/ɡeɪm/', rule: 'a_e 长元音规则' }
];

export const SimulationPage = () => {
  // Session State
  const [status, setStatus] = useState<'idle' | 'running' | 'finished'>('idle');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState<any[]>([]);
  
  // Current Interaction State
  const [inputValue, setInputValue] = useState('');
  const [replays, setReplays] = useState(0);
  const [hinted, setHinted] = useState(false);
  const [timeMs, setTimeMs] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // Timer logic for response time simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive) {
      interval = setInterval(() => {
        setTimeMs((prev) => prev + 100);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  const currentQ = MOCK_QUESTIONS[currentIndex];

  const handleStart = () => {
    setStatus('running');
    setCurrentIndex(0);
    setHistory([]);
    resetInteraction();
    setTimerActive(true);
  };

  const resetInteraction = () => {
    setInputValue('');
    setReplays(0);
    setHinted(false);
    setTimeMs(0);
  };

  const handleReplay = () => setReplays(r => r + 1);
  const handleHint = () => setHinted(true);

  const handleSubmit = () => {
    setTimerActive(false);
    const isCorrect = inputValue.trim().toLowerCase() === currentQ.word.toLowerCase();
    
    // Generate process flags
    const flags = [];
    if (timeMs > 5000) flags.push('slow_response');
    if (replays >= 2) flags.push('frequent_replay');
    if (hinted) flags.push('hint_dependency');

    const record = {
      ...currentQ,
      answer: inputValue,
      isCorrect,
      timeMs,
      replays,
      hinted,
      flags,
      submittedAt: new Date().toLocaleTimeString('zh-CN', { hour12: false })
    };

    setHistory(prev => [...prev, record]);

    setTimeout(() => {
      if (currentIndex < MOCK_QUESTIONS.length - 1) {
        setCurrentIndex(c => c + 1);
        resetInteraction();
        setTimerActive(true);
      } else {
        setStatus('finished');
      }
    }, 1500); // 1.5s delay to show instant feedback
  };

  const correctCount = history.filter(h => h.isCorrect).length;
  const accuracy = history.length > 0 ? Math.round((correctCount / history.length) * 100) : 0;

  return (
    <div className="max-w-[1200px] mx-auto pb-20">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-[#1D1D1F] tracking-tight mb-2">练习模拟</h1>
        <p className="text-[14px] text-[#6E6E73] font-medium">
          创建并下发一次听写任务，模拟终端行为并观察系统如何采集过程信号、生成实时诊断。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Main Flow */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Configuration Card */}
          <div className="bg-white rounded-[16px] border border-[#E5E1D8] shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-[#E5E1D8] flex items-center justify-between bg-[#FAFAFA]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#86868B]" />
                <span className="text-[14px] font-bold text-[#1D1D1F]">当前练习会话</span>
                {status !== 'idle' && (
                  <span className="ml-2 text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#1D1D1F] text-white tracking-widest uppercase">
                    PS202604270001
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${status === 'running' ? 'bg-[#86E789] animate-pulse' : status === 'finished' ? 'bg-[#1D1D1F]' : 'bg-[#D1D1D6]'}`}></span>
                <span className="text-[12px] font-bold text-[#86868B]">
                  {status === 'idle' ? '未开始' : status === 'running' ? '进行中' : '已完成'}
                </span>
              </div>
            </div>
            
            <div className="p-6 grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider">演示对象</span>
                <span className="text-[14px] font-bold text-[#1D1D1F]">小明 / 三年级</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider">练习单元</span>
                <span className="text-[14px] font-bold text-[#1D1D1F]">Unit 2 (5题)</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider">练习模式</span>
                <span className="text-[14px] font-bold text-[#1D1D1F]">英语听写 / 口头拼写</span>
              </div>
            </div>

            {status === 'idle' && (
              <div className="px-6 pb-6 pt-2">
                <button 
                  onClick={handleStart}
                  className="w-full py-3.5 bg-[#1D1D1F] text-white rounded-[12px] text-[14px] font-bold hover:bg-black transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" /> 下发任务并开始练习
                </button>
              </div>
            )}
          </div>

          {/* Running State: Active Question & Terminal Simulator */}
          <AnimatePresence mode="wait">
            {status === 'running' && currentQ && (
              <motion.div 
                key="running"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col gap-6"
              >
                {/* Current Question Info (Server Side View) */}
                <div className="bg-white rounded-[16px] border border-[#E5E1D8] shadow-sm p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5F5F7] rounded-bl-full -z-10 opacity-50"></div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[12px] font-bold text-[#86868B] tracking-widest uppercase">Target Word</span>
                    <span className="text-[12px] font-bold px-2.5 py-1 bg-[#F5F5F7] rounded-md text-[#1D1D1F]">
                      进度: {currentIndex + 1} / {MOCK_QUESTIONS.length}
                    </span>
                  </div>
                  <div className="flex items-end gap-4 mb-2">
                    <h2 className="text-[40px] font-bold text-[#1D1D1F] leading-none tracking-tight">{currentQ.word}</h2>
                    <span className="text-[18px] text-[#6E6E73] font-medium pb-1">{currentQ.phonetic}</span>
                  </div>
                  <p className="text-[15px] text-[#6E6E73] font-medium mb-6">{currentQ.meaning}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F5F5F7] border border-[#E5E1D8] rounded-[8px] text-[12px] font-bold text-[#1D1D1F]">
                    <BrainCircuit className="w-3.5 h-3.5" />
                    关联知识点: {currentQ.rule}
                  </div>
                </div>

                {/* Terminal Input Simulator */}
                <div className="bg-[#1D1D1F] rounded-[16px] shadow-lg p-1">
                  <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-white/50" />
                      <span className="text-[13px] font-bold text-white/80">设备端模拟器 (ESP32-DEMO)</span>
                    </div>
                    <span className="text-[12px] font-mono text-[#86E789]">Awaiting Input_</span>
                  </div>
                  
                  <div className="p-5">
                    {/* Simulated Controls */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <button onClick={handleReplay} className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-[8px] text-[13px] font-bold transition-colors flex items-center gap-2">
                        <Volume2 className="w-4 h-4" /> 模拟重读 ({replays})
                      </button>
                      <button onClick={handleHint} className={`px-4 py-2 ${hinted ? 'bg-[#3A6EA5] text-white' : 'bg-white/10 hover:bg-white/20 text-white'} rounded-[8px] text-[13px] font-bold transition-colors flex items-center gap-2`}>
                        <HelpCircle className="w-4 h-4" /> {hinted ? '已请求提示' : '请求提示'}
                      </button>
                    </div>

                    {/* Text Input */}
                    <div className="flex items-center gap-3">
                      <input 
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="输入模拟作答 (如: mak)..."
                        className="flex-1 bg-white/5 border border-white/20 rounded-[10px] px-4 py-3 text-white text-[15px] font-mono focus:outline-none focus:border-white/50 transition-colors placeholder:text-white/30"
                        autoFocus
                        onKeyDown={(e) => e.key === 'Enter' && inputValue && handleSubmit()}
                      />
                      <button 
                        onClick={handleSubmit}
                        disabled={!inputValue || !timerActive}
                        className="px-6 py-3 bg-white text-[#1D1D1F] rounded-[10px] text-[14px] font-bold hover:bg-[#F5F5F7] transition-all disabled:opacity-50 flex items-center gap-2"
                      >
                        提交 <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Instant Feedback Overlay (shows briefly during transition) */}
                {!timerActive && history.length > currentIndex && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-5 rounded-[12px] border ${history[currentIndex].isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {history[currentIndex].isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                      <span className="text-[14px] font-bold text-[#1D1D1F]">
                        {history[currentIndex].isCorrect ? '作答正确' : '作答错误'}
                      </span>
                    </div>
                    {!history[currentIndex].isCorrect && history[currentIndex].flags.length > 0 && (
                      <p className="text-[13px] text-[#6E6E73] font-medium mt-2">
                        过程异常标记：{history[currentIndex].flags.map((f: string) => f === 'slow_response' ? '响应迟缓' : f === 'frequent_replay' ? '频繁重读' : '过度依赖提示').join('、')}。
                      </p>
                    )}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Finished State: Summary & Diagnosis Preview */}
          <AnimatePresence>
            {status === 'finished' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-6"
              >
                {/* Summary Card */}
                <div className="bg-white rounded-[16px] border border-[#E5E1D8] shadow-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-[20px] font-bold text-[#1D1D1F] mb-2">练习已完成</h3>
                    <p className="text-[14px] text-[#6E6E73] font-medium">系统已成功采集 5 道题目的完整过程数据。</p>
                  </div>
                  <div className="flex gap-8">
                    <div className="flex flex-col items-center">
                      <span className="text-[32px] font-bold text-[#1D1D1F] leading-none">{accuracy}%</span>
                      <span className="text-[12px] font-bold text-[#86868B] uppercase tracking-wider mt-1">正确率</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[32px] font-bold text-[#1D1D1F] leading-none">{correctCount}/5</span>
                      <span className="text-[12px] font-bold text-[#86868B] uppercase tracking-wider mt-1">正确题数</span>
                    </div>
                  </div>
                </div>

                {/* Auto-Diagnosis Card */}
                <div className="bg-white rounded-[16px] border border-[#E5E1D8] shadow-sm overflow-hidden border-l-[6px] border-l-[#F5A623]">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <BrainCircuit className="w-5 h-5 text-[#F5A623]" />
                      <h3 className="text-[16px] font-bold text-[#1D1D1F]">实时错因诊断预览</h3>
                      <span className="ml-auto text-[11px] font-bold px-2 py-1 bg-red-50 text-red-600 rounded-md">
                        优先级：高 (High)
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-[#F5F5F7] p-4 rounded-[12px]">
                          <span className="block text-[11px] font-bold text-[#86868B] uppercase mb-1">诊断类型</span>
                          <span className="text-[14px] font-bold text-[#1D1D1F]">Knowledge Unstable (知识点掌握不稳定)</span>
                        </div>
                        <div className="bg-[#F5F5F7] p-4 rounded-[12px]">
                          <span className="block text-[11px] font-bold text-[#86868B] uppercase mb-1">关联规则</span>
                          <span className="text-[14px] font-bold text-[#1D1D1F]">a_e 长元音规则</span>
                        </div>
                      </div>
                      
                      <div className="bg-[#F5F5F7] p-4 rounded-[12px]">
                        <span className="block text-[11px] font-bold text-[#86868B] uppercase mb-2">证据链提取 (Evidence)</span>
                        <p className="text-[14px] text-[#6E6E73] leading-relaxed font-medium">
                          学生在包含 a_e 规则的词汇中多次出现拼写错误（如 mak, tak, cak），且在这些词汇上的<strong className="text-[#1D1D1F]">平均响应时长较长，伴随频繁的重读与提示请求</strong>。这表明学生尚未内化该发音规则，而非单纯的粗心错误。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Remediation Preview */}
                <div className="bg-white rounded-[16px] border border-[#E5E1D8] shadow-sm overflow-hidden border-l-[6px] border-l-[#86E789]">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-[#34C759]" />
                      <h3 className="text-[16px] font-bold text-[#1D1D1F]">推荐迁移补救</h3>
                    </div>
                    <p className="text-[14px] text-[#6E6E73] font-medium mb-4">系统已自动生成针对该薄弱点的迁移练习策略：</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1.5 bg-white border border-[#E5E1D8] rounded-[8px] text-[13px] font-bold text-[#1D1D1F]">🎯 重练原错词</span>
                      <span className="px-3 py-1.5 bg-[#F5F5F7] border border-[#E5E1D8] rounded-[8px] text-[13px] font-bold text-[#1D1D1F]">🔄 同规则迁移: name, game, lake</span>
                      <span className="px-3 py-1.5 bg-[#F5F5F7] border border-[#E5E1D8] rounded-[8px] text-[13px] font-bold text-[#1D1D1F]">🗣️ 启用发音拆分提示</span>
                    </div>
                    <div className="flex gap-4">
                      <button className="px-6 py-2.5 bg-[#1D1D1F] text-white rounded-[8px] text-[13px] font-bold hover:bg-black transition-all flex items-center gap-2">
                        查看完整诊断报告 <ArrowRight className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="px-6 py-2.5 bg-white border border-[#E5E1D8] text-[#1D1D1F] rounded-[8px] text-[13px] font-bold hover:bg-[#F5F5F7] transition-all"
                      >
                        重新演示
                      </button>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Right Column: Telemetry & Progress */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Signal Monitor (Real-time) */}
          <div className="bg-white rounded-[16px] border border-[#E5E1D8] shadow-sm overflow-hidden flex flex-col">
            <div className="px-5 py-4 border-b border-[#E5E1D8] bg-[#FAFAFA] flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#86868B]" />
              <span className="text-[14px] font-bold text-[#1D1D1F]">实时过程信号</span>
            </div>
            
            <div className="p-5 flex-1 bg-[#F5F5F7]/50 font-mono text-[13px]">
              {status === 'idle' ? (
                <div className="text-[#86868B] h-full flex items-center justify-center py-10">
                  Waiting for session...
                </div>
              ) : status === 'running' ? (
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center border-b border-[#E5E1D8] pb-2">
                    <span className="text-[#86868B]">responseTimeMs</span>
                    <span className="font-bold text-[#1D1D1F]">{(timeMs / 1000).toFixed(1)}s</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#E5E1D8] pb-2">
                    <span className="text-[#86868B]">replayCount</span>
                    <span className="font-bold text-[#1D1D1F]">{replays}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#E5E1D8] pb-2">
                    <span className="text-[#86868B]">hintRequested</span>
                    <span className={`font-bold ${hinted ? 'text-[#F5A623]' : 'text-[#1D1D1F]'}`}>{hinted.toString()}</span>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-[#86868B]">processFlags (Live):</span>
                    <div className="flex flex-wrap gap-2">
                      {timeMs > 5000 && <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-[11px] font-bold">slow_response</span>}
                      {replays >= 2 && <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-[11px] font-bold">frequent_replay</span>}
                      {hinted && <span className="px-2 py-0.5 bg-orange-100 text-orange-800 rounded text-[11px] font-bold">hint_dependency</span>}
                      {timeMs <= 5000 && replays < 2 && !hinted && <span className="text-[#86868B] italic">[]</span>}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-[#86868B] h-full flex items-center justify-center py-10">
                  Session ended. Signals saved.
                </div>
              )}
            </div>
          </div>

          {/* History Progress */}
          <div className="bg-white rounded-[16px] border border-[#E5E1D8] shadow-sm p-5">
            <h3 className="text-[14px] font-bold text-[#1D1D1F] mb-4">作答历史 & 进度</h3>
            <div className="flex flex-col gap-4">
              {MOCK_QUESTIONS.map((q, idx) => {
                const record = history[idx];
                const isCurrent = idx === currentIndex && status === 'running';
                const isUpcoming = idx > currentIndex || status === 'idle';

                return (
                  <div key={q.id} className={`flex items-start gap-3 ${isUpcoming ? 'opacity-40' : 'opacity-100'}`}>
                    <div className="mt-0.5">
                      {record ? (
                        record.isCorrect ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-500" />
                      ) : isCurrent ? (
                        <div className="w-4 h-4 rounded-full border-2 border-[#1D1D1F] border-t-transparent animate-spin"></div>
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-[#D1D1D6]"></div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold text-[#1D1D1F]">
                        {q.word}
                        {record && <span className="text-[#86868B] font-normal ml-2">→ {record.answer || '(空)'}</span>}
                      </span>
                      {record && record.flags.length > 0 && (
                        <span className="text-[11px] text-[#F5A623] font-bold mt-1">
                          {record.flags.join(', ')}
                        </span>
                      )}
                      {isCurrent && (
                        <span className="text-[11px] text-[#86868B] font-medium mt-1">待作答...</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
