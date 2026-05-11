import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, SlidersHorizontal, ChevronRight, 
  History, Clock, Volume2, HelpCircle, 
  AlertTriangle, CheckCircle2, XCircle, 
  Calendar, User, Fingerprint, Activity,
  FileText, ExternalLink, ArrowRight, MousePointer2,
  Filter, Download, MoreHorizontal
} from 'lucide-react';
import { Link } from 'react-router';

// Mock Data for Records
const MOCK_RECORDS = [
  { 
    id: 'rec_001',
    student: '小明',
    sessionId: 'PS202604270001',
    word: 'make',
    answer: 'mak',
    isCorrect: false,
    duration: 8.2,
    replays: 3,
    hintRequested: true,
    concept: 'a_e 长元音规则',
    timestamp: '2026-04-27 20:12:00',
    unit: 'Unit 2',
    anomalies: ['响应过慢', '提示依赖'],
    timeline: [
      { time: '20:11:10', event: '系统播放语音', icon: 'Volume2' },
      { time: '20:11:15', event: '请求重读', icon: 'Volume2' },
      { time: '20:11:25', event: '再次请求重读', icon: 'Volume2' },
      { time: '20:11:40', event: '请求首字母提示 (m)', icon: 'HelpCircle' },
      { time: '20:11:55', event: '最后一次重读', icon: 'Volume2' },
      { time: '20:12:00', event: '提交答案: mak', icon: 'Fingerprint' },
    ]
  },
  { 
    id: 'rec_002',
    student: '小明',
    sessionId: 'PS202604270001',
    word: 'take',
    answer: 'take',
    isCorrect: true,
    duration: 3.1,
    replays: 0,
    hintRequested: false,
    concept: 'a_e 长元音规则',
    timestamp: '2026-04-27 20:14:22',
    unit: 'Unit 2',
    anomalies: [],
    timeline: [
      { time: '20:14:15', event: '系统播放语音', icon: 'Volume2' },
      { time: '20:14:22', event: '提交答案: take', icon: 'Fingerprint' },
    ]
  },
  { 
    id: 'rec_003',
    student: '小明',
    sessionId: 'PS202604270001',
    word: 'cake',
    answer: 'kake',
    isCorrect: false,
    duration: 12.5,
    replays: 5,
    hintRequested: true,
    concept: 'a_e 长元音规则',
    timestamp: '2026-04-27 20:17:10',
    unit: 'Unit 2',
    anomalies: ['重读次数过多', '同一知识点反复错误'],
    timeline: [
      { time: '20:16:10', event: '系统播放语音', icon: 'Volume2' },
      { time: '20:16:20', event: '请求重读 x5', icon: 'Volume2' },
      { time: '20:16:50', event: '请求提示', icon: 'HelpCircle' },
      { time: '20:17:10', event: '提交答案: kake', icon: 'Fingerprint' },
    ]
  },
  { 
    id: 'rec_004',
    student: '小明',
    sessionId: 'PS202604280002',
    word: 'apple',
    answer: 'apple',
    isCorrect: true,
    duration: 5.8,
    replays: 2,
    hintRequested: false,
    concept: '短元音 a 发音',
    timestamp: '2026-04-28 10:05:30',
    unit: 'Unit 1',
    anomalies: ['答对但过程不稳定'],
    timeline: [
      { time: '10:05:10', event: '系统播放语音', icon: 'Volume2' },
      { time: '10:05:15', event: '请求重读', icon: 'Volume2' },
      { time: '10:05:22', event: '请求重读', icon: 'Volume2' },
      { time: '10:05:30', event: '提交答案: apple', icon: 'Fingerprint' },
    ]
  },
  { 
    id: 'rec_005',
    student: '小明',
    sessionId: 'PS202604280002',
    word: 'beautiful',
    answer: 'beatful',
    isCorrect: false,
    duration: 15.2,
    replays: 4,
    hintRequested: true,
    concept: '多音节词汇拼写',
    timestamp: '2026-04-28 10:08:45',
    unit: 'Unit 3',
    anomalies: ['响应过慢', '多音节遗漏'],
    timeline: [
      { time: '10:07:30', event: '系统播放语音', icon: 'Volume2' },
      { time: '10:07:50', event: '请求重读', icon: 'Volume2' },
      { time: '10:08:10', event: '请求提示', icon: 'HelpCircle' },
      { time: '10:08:45', event: '提交答案: beatful', icon: 'Fingerprint' },
    ]
  }
];

export const RecordsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState('all'); // all, wrong, correct, anomaly

  const selectedRecord = useMemo(() => 
    MOCK_RECORDS.find(r => r.id === selectedRecordId), 
  [selectedRecordId]);

  const filteredRecords = useMemo(() => {
    return MOCK_RECORDS.filter(r => {
      const matchesSearch = r.word.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            r.concept.includes(searchQuery) ||
                            r.sessionId.includes(searchQuery);
      
      const matchesFilter = 
        filterType === 'all' || 
        (filterType === 'wrong' && !r.isCorrect) ||
        (filterType === 'correct' && r.isCorrect) ||
        (filterType === 'anomaly' && r.anomalies.length > 0);
        
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filterType]);

  return (
    <div className="max-w-[1300px] mx-auto pb-20">
      {/* Header Area */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-[#1D1D1F] tracking-tight mb-2">作答记录</h1>
          <p className="text-[14px] text-[#6E6E73] font-medium max-w-2xl">
            记录每一次作答，让学习过程有迹可循。从答案到过程信号，沉淀可解释的诊断证据，为补救推荐提供支撑。
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/app/reports" className="px-5 py-2.5 bg-[#1D1D1F] text-white rounded-[10px] text-[13px] font-bold hover:bg-black transition-all flex items-center gap-2 shadow-sm">
            <Activity className="w-4 h-4" /> 查看诊断报告
          </Link>
          <button className="px-4 py-2.5 bg-white border border-[#E5E1D8] rounded-[10px] text-[13px] font-bold text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all flex items-center gap-2">
            <Download className="w-4 h-4" /> 导出
          </button>
        </div>
      </div>

      {/* Learning Behavior Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-10">
        <StatCard label="作答总数" value="86" icon={<FileText className="w-3.5 h-3.5" />} />
        <StatCard label="平均正确率" value="78%" icon={<CheckCircle2 className="w-3.5 h-3.5" />} color="text-green-600" />
        <StatCard label="Avg 响应时长" value="5.2s" icon={<Clock className="w-3.5 h-3.5" />} />
        <StatCard label="重读次数总计" value="24" icon={<Volume2 className="w-3.5 h-3.5" />} />
        <StatCard label="提示请求" value="11" icon={<HelpCircle className="w-3.5 h-3.5" />} />
        <StatCard label="异常记录" value="8" icon={<AlertTriangle className="w-3.5 h-3.5" />} color="text-orange-500" />
        <StatCard label="涉及知识点" value="18" icon={<Fingerprint className="w-3.5 h-3.5" />} />
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Left Side: Filter & List */}
        <div className="flex-1 w-full bg-white border border-[#E5E1D8] rounded-[20px] shadow-sm overflow-hidden flex flex-col">
          
          {/* Enhanced Filter Bar */}
          <div className="px-6 py-4 bg-[#FAFAFA] border-b border-[#E5E1D8] flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative w-full sm:w-[320px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868B]" />
              <input 
                type="text" 
                placeholder="搜索单词、会话 ID 或知识点..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5E1D8] rounded-[12px] text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/5 focus:border-[#1D1D1F] transition-all"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="flex bg-[#F5F5F7] p-1 rounded-[10px] border border-[#E5E1D8]">
                {['all', 'wrong', 'anomaly'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-3 py-1.5 rounded-[7px] text-[12px] font-bold capitalize transition-all ${
                      filterType === type 
                        ? 'bg-white text-[#1D1D1F] shadow-sm' 
                        : 'text-[#86868B] hover:text-[#1D1D1F]'
                    }`}
                  >
                    {type === 'all' ? '全部' : type === 'wrong' ? '错误' : '异常'}
                  </button>
                ))}
              </div>
              <button className="p-2.5 bg-white border border-[#E5E1D8] rounded-[10px] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors">
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* List Headers */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-4 border-b border-[#E5E1D8] bg-[#FAFAFA]/50 text-[11px] font-bold text-[#86868B] uppercase tracking-wider">
            <div className="col-span-3">目标单词 / 会话</div>
            <div className="col-span-2">学生作答</div>
            <div className="col-span-2 text-center">过程信号 (时长/重读)</div>
            <div className="col-span-3">知识点 / 异常模式</div>
            <div className="col-span-2 text-right">提交时间</div>
          </div>

          {/* Records List */}
          <div className="divide-y divide-[#E5E1D8]">
            {filteredRecords.length > 0 ? (
              filteredRecords.map(record => (
                <RecordRow 
                  key={record.id} 
                  record={record} 
                  isSelected={selectedRecordId === record.id}
                  onClick={() => setSelectedRecordId(record.id)}
                />
              ))
            ) : (
              <div className="py-20 flex flex-col items-center justify-center text-[#86868B]">
                <History className="w-12 h-12 mb-4 opacity-20" />
                <p className="text-[14px] font-medium">未找到相关作答记录</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Evidence Panel (Sticky) */}
        <AnimatePresence mode="wait">
          {selectedRecord ? (
            <motion.div 
              key={selectedRecord.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="w-full lg:w-[420px] bg-white border border-[#E5E1D8] rounded-[24px] shadow-lg flex flex-col sticky top-24 max-h-[calc(100vh-140px)]"
            >
              <div className="p-6 border-b border-[#E5E1D8] flex items-center justify-between">
                <div>
                  <h3 className="text-[16px] font-bold text-[#1D1D1F]">学习行为证据卡片</h3>
                  <p className="text-[12px] text-[#86868B] font-medium uppercase tracking-wider mt-1">记录 ID: {selectedRecord.id}</p>
                </div>
                <button 
                  onClick={() => setSelectedRecordId(null)}
                  className="w-8 h-8 flex items-center justify-center bg-[#F5F5F7] rounded-full text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                {/* Visual Summary */}
                <div className="bg-[#FAFAFA] border border-[#E5E1D8] rounded-[20px] p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-[#86868B] uppercase mb-1">目标单词</span>
                      <span className="text-[24px] font-bold text-[#1D1D1F] leading-tight">{selectedRecord.word}</span>
                    </div>
                    <div className={`px-4 py-1.5 rounded-full text-[13px] font-bold border ${
                      selectedRecord.isCorrect 
                        ? 'bg-[#E7F6E7] text-[#1E7E1E] border-[#C2E9C2]' 
                        : 'bg-[#FFEBEE] text-[#D84315] border-[#FFCDD2]'
                    }`}>
                      {selectedRecord.isCorrect ? '作答正确' : '作答错误'}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E5E1D8]">
                    <div>
                      <span className="block text-[11px] font-bold text-[#86868B] uppercase mb-1">学生输入</span>
                      <span className={`text-[15px] font-bold ${selectedRecord.isCorrect ? 'text-[#1D1D1F]' : 'text-[#D84315] underline decoration-wavy decoration-red-300'}`}>
                        {selectedRecord.answer}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-[#86868B] uppercase mb-1">关联知识点</span>
                      <span className="text-[13px] font-bold text-[#1D1D1F]">{selectedRecord.concept}</span>
                    </div>
                  </div>
                </div>

                {/* Event Timeline */}
                <div>
                  <h4 className="text-[13px] font-bold text-[#1D1D1F] mb-4 flex items-center gap-2">
                    <History className="w-4 h-4 text-[#86868B]" /> 过程行为序列
                  </h4>
                  <div className="space-y-4 pl-2">
                    {selectedRecord.timeline.map((event, idx) => (
                      <div key={idx} className="relative flex gap-4">
                        {/* Vertical line */}
                        {idx !== selectedRecord.timeline.length - 1 && (
                          <div className="absolute left-[11px] top-6 bottom-[-16px] w-[2px] bg-[#E5E1D8]"></div>
                        )}
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 z-10 ${
                          event.icon === 'Fingerprint' ? 'bg-[#1D1D1F] text-white' : 'bg-white border-2 border-[#E5E1D8] text-[#86868B]'
                        }`}>
                          {event.icon === 'Volume2' && <Volume2 className="w-3 h-3" />}
                          {event.icon === 'HelpCircle' && <HelpCircle className="w-3 h-3" />}
                          {event.icon === 'Fingerprint' && <Fingerprint className="w-3 h-3" />}
                        </div>
                        <div className="flex-1 pb-4">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-[13px] font-bold text-[#1D1D1F]">{event.event}</span>
                            <span className="text-[11px] font-medium text-[#86868B] font-mono">{event.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Diagnostics */}
                <div>
                  <h4 className="text-[13px] font-bold text-[#1D1D1F] mb-4 flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4 text-[#86868B]" /> 诊断评估预判
                  </h4>
                  <div className="bg-[#FFF8E1] border border-[#FFE082] rounded-[16px] p-4">
                    <div className="flex gap-3">
                      <AlertTriangle className="w-5 h-5 text-[#E58A00] shrink-0" />
                      <div className="space-y-2">
                        <p className="text-[13px] font-bold text-[#855B00]">
                          {selectedRecord.isCorrect 
                            ? '作答结果虽然正确，但由于过程重读次数较多且响应时长偏长，标记为“不稳定掌握”。' 
                            : '作答错误且伴随明显的提示依赖（m），表明对 a_e 长元音规则的拼写映射尚不清晰。'}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedRecord.anomalies.map(tag => (
                            <span key={tag} className="px-2 py-0.5 bg-[#E58A00]/10 rounded-full text-[10px] font-bold text-[#E58A00] uppercase">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-[#E5E1D8] bg-[#FAFAFA]">
                <Link 
                  to="/app/reports" 
                  className="w-full py-3 bg-[#1D1D1F] text-white rounded-[12px] text-[14px] font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors"
                >
                  生成完整诊断报告 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="hidden lg:flex w-full lg:w-[420px] bg-[#F5F5F7] border border-[#E5E1D8] rounded-[24px] border-dashed items-center justify-center p-12 text-center sticky top-24 h-[400px]">
              <div>
                <MousePointer2 className="w-10 h-10 text-[#C7C7CC] mx-auto mb-4" />
                <h4 className="text-[16px] font-bold text-[#86868B]">选择记录查看行为证据</h4>
                <p className="text-[13px] text-[#A1A1A6] mt-2">点击左侧列表中的作答记录，系统将还原该过程的信号行为序列。</p>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

// Sub-components
const StatCard = ({ label, value, icon, color = 'text-[#1D1D1F]' }: { label: string, value: string, icon: React.ReactNode, color?: string }) => (
  <div className="bg-white border border-[#E5E1D8] rounded-[16px] p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-1.5 mb-2">
      <div className="w-6 h-6 rounded-full bg-[#F5F5F7] flex items-center justify-center text-[#86868B]">
        {icon}
      </div>
      <span className="text-[10px] font-bold text-[#86868B] uppercase tracking-tight">{label}</span>
    </div>
    <span className={`text-[22px] font-bold ${color} tracking-tight`}>{value}</span>
  </div>
);

const RecordRow = ({ record, isSelected, onClick }: { record: any, isSelected: boolean, onClick: () => void }) => (
  <div 
    onClick={onClick}
    className={`group px-8 py-5 flex flex-col md:grid md:grid-cols-12 gap-4 cursor-pointer transition-all ${
      isSelected 
        ? 'bg-[#F5F5F7] border-l-[4px] border-l-[#1D1D1F] -ml-[4px]' 
        : 'bg-white hover:bg-[#FAFAFA] border-l-[4px] border-l-transparent'
    }`}
  >
    {/* Word & Session */}
    <div className="col-span-3 flex flex-col justify-center">
      <div className="flex items-center gap-2">
        <span className="text-[16px] font-bold text-[#1D1D1F]">{record.word}</span>
        {record.anomalies.length > 0 && (
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></div>
        )}
      </div>
      <span className="text-[12px] font-bold text-[#86868B] mt-0.5">{record.sessionId}</span>
    </div>

    {/* Student Answer */}
    <div className="col-span-2 flex flex-col justify-center">
      <div className="flex items-center gap-2">
        <span className={`text-[14px] font-bold ${record.isCorrect ? 'text-[#34C759]' : 'text-[#D84315]'}`}>
          {record.answer}
        </span>
        {record.isCorrect ? (
          <CheckCircle2 className="w-3.5 h-3.5 text-[#34C759]" />
        ) : (
          <XCircle className="w-3.5 h-3.5 text-[#D84315]" />
        )}
      </div>
      <span className="text-[11px] text-[#86868B] font-medium">{record.student}</span>
    </div>

    {/* Signals */}
    <div className="col-span-2 flex items-center justify-center gap-4">
      <div className="flex flex-col items-center">
        <span className={`text-[13px] font-bold ${record.duration > 8 ? 'text-orange-500' : 'text-[#1D1D1F]'}`}>{record.duration}s</span>
        <span className="text-[9px] font-bold text-[#86868B] uppercase">时长</span>
      </div>
      <div className="w-[1px] h-6 bg-[#E5E1D8]"></div>
      <div className="flex flex-col items-center">
        <span className={`text-[13px] font-bold ${record.replays > 3 ? 'text-orange-500' : 'text-[#1D1D1F]'}`}>{record.replays}</span>
        <span className="text-[9px] font-bold text-[#86868B] uppercase">重读</span>
      </div>
      <div className="w-[1px] h-6 bg-[#E5E1D8]"></div>
      <div className="flex flex-col items-center">
        <span className={`text-[13px] font-bold ${record.hintRequested ? 'text-orange-500' : 'text-[#86868B]'}`}>
          {record.hintRequested ? '是' : '否'}
        </span>
        <span className="text-[9px] font-bold text-[#86868B] uppercase">提示</span>
      </div>
    </div>

    {/* Concept & Tags */}
    <div className="col-span-3 flex flex-col justify-center gap-1.5">
      <span className="text-[12px] font-bold text-[#1D1D1F] line-clamp-1">{record.concept}</span>
      <div className="flex flex-wrap gap-1">
        {record.anomalies.map((tag: string) => (
          <span key={tag} className="px-1.5 py-0.5 bg-[#FFF3E0] text-[#E58A00] text-[9px] font-bold rounded-[4px] border border-[#FFE082]">
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Time */}
    <div className="col-span-2 flex items-center justify-end">
      <div className="flex flex-col items-end">
        <span className="text-[12px] font-bold text-[#1D1D1F]">{record.timestamp.split(' ')[0]}</span>
        <span className="text-[11px] font-medium text-[#86868B]">{record.timestamp.split(' ')[1]}</span>
      </div>
    </div>
  </div>
);

// Lucide icon components wrapper for the timeline icons
const BrainCircuit = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 5V3a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1"/><path d="M9 12a3 3 0 0 0-3-3H3"/><path d="M15 12a3 3 0 0 1 3-3h3"/><path d="M12 17v2a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1"/><path d="M9 12a3 3 0 0 1-3 3H3"/><path d="M15 12a3 3 0 0 0 3 3h3"/><circle cx="12" cy="12" r="3"/></svg>
);
