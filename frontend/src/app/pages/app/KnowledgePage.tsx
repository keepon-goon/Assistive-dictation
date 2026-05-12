import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BrainCircuit, Database, Play, Plus, Search, 
  Network, AlertTriangle, Sparkles, Edit3, Trash2, 
  Link2, CheckCircle2, SlidersHorizontal, BookOpen, 
  Activity, ArrowRight, Zap, Target
} from 'lucide-react';
import { Link } from 'react-router';

// Mock Data
const MOCK_KNOWLEDGE = [
  {
    id: 'kp1',
    name: 'a_e 长元音规则',
    type: 'phonics',
    desc: '识别并掌握 make、take、cake 等单词中的 a_e 长元音发音与拼写规则',
    errors: ['漏写结尾 e', '将 make 误拼写为 mak', '将 cake 误拼写为 cak', '无法将 take 的发音迁移至 name'],
    strategies: ['transfer_words', 'phonics_split', 'first_letter_hint'],
    words: ['make', 'take', 'cake', 'name', 'game', 'lake'],
    enabled: true,
    isWeakness: true,
    wordCount: 8
  },
  {
    id: 'kp2',
    name: '辅音双写规则 (短元音后)',
    type: 'spelling',
    desc: '单音节词且以一个元音加一个辅音结尾时，双写词尾辅音字母再加后缀',
    errors: ['漏双写辅音 (如 running 写为 runing)', '不该双写时误双写 (如 looking 写为 lookking)'],
    strategies: ['retry_original', 'delayed_review', 'confidence_practice'],
    words: ['running', 'swimming', 'sitting', 'getting'],
    enabled: true,
    isWeakness: false,
    wordCount: 12
  },
  {
    id: 'kp3',
    name: '近音词听辨 (th vs s/z)',
    type: 'confusion',
    desc: '区分咬舌音 /θ/ /ð/ 与齿龈音 /s/ /z/ 的听辨与拼写',
    errors: ['听辨不稳定', '近音单词互相替换 (如 think 听成 sink)', '需要多次重读才能勉强判断'],
    strategies: ['phonics_split', 'difficulty_down', 'transfer_words'],
    words: ['think', 'sink', 'mouth', 'mouse', 'thick', 'sick'],
    enabled: true,
    isWeakness: true,
    wordCount: 15
  },
  {
    id: 'kp4',
    name: '第三人称单数 (s/es/ies)',
    type: 'meaning',
    desc: '动词第三人称单数变化规则及读音规则',
    errors: ['主语为三单时动词未加 s', '以 ch/sh/s/x/o 结尾未加 es', '辅音+y 结尾未改 y 为 ies'],
    strategies: ['first_letter_hint', 'retry_original', 'delayed_review'],
    words: ['watches', 'washes', 'goes', 'does', 'studies'],
    enabled: true,
    isWeakness: false,
    wordCount: 22
  },
  {
    id: 'kp5',
    name: '复合词前缀/后缀迁移',
    type: 'transfer',
    desc: '掌握 un-, re-, -ful, -ly 等常见词缀的含义并能迁移推导',
    errors: ['无法通过词根推导词义', '词缀拼写错误 (如 beautifull)'],
    strategies: ['transfer_words', 'confidence_practice'],
    words: ['beautiful', 'careful', 'unhappy', 'rewrite'],
    enabled: false,
    isWeakness: false,
    wordCount: 39
  }
];

// Dictionary for types and strategies
const TYPE_MAP = {
  phonics: { label: '发音规则', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  spelling: { label: '拼写规则', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  confusion: { label: '易混点', color: 'bg-orange-50 text-orange-700 border-orange-200' },
  meaning: { label: '语义理解', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  transfer: { label: '迁移规则', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
};

const STRATEGY_MAP = {
  retry_original: { label: '重练原词', icon: '🎯' },
  transfer_words: { label: '同规则迁移练习', icon: '🔄' },
  first_letter_hint: { label: '首字母提示', icon: '🔤' },
  phonics_split: { label: '发音拆分', icon: '🗣️' },
  delayed_review: { label: '延迟复习', icon: '⏳' },
  difficulty_down: { label: '降低难度', icon: '📉' },
  confidence_practice: { label: '稳定性强化', icon: '🛡️' },
};

export const KnowledgePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNode, setSelectedNode] = useState(MOCK_KNOWLEDGE[0]);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-[1300px] mx-auto pb-20 h-full flex flex-col">
      {/* Header Area */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-[#1D1D1F] tracking-tight mb-2">诊断规则基础 / 知识点管理</h1>
          <p className="text-[14px] text-[#6E6E73] font-medium max-w-2xl leading-relaxed">
            把单词背后的规则沉淀下来。知识点连接着“单词内容、作答错误与补救策略”，<br className="hidden sm:block"/>
            它是系统进行错因诊断并生成迁移补救任务的核心引擎。
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/app/vocabulary" className="px-5 py-2.5 bg-white border border-[#E5E1D8] rounded-[8px] text-[13px] font-bold text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all flex items-center gap-2">
            <Database className="w-4 h-4" /> 维护词表
          </Link>
          <Link to="/app/simulation" className="px-6 py-2.5 bg-[#1D1D1F] text-white rounded-[8px] text-[13px] font-bold hover:bg-black transition-all flex items-center gap-2 shadow-sm">
            <Play className="w-4 h-4 fill-current" /> 使用该知识点生成练习
          </Link>
        </div>
      </div>

      {/* Asset Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-[#FAFAFA] border border-[#E5E1D8] rounded-[12px] p-5 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <Network className="w-4 h-4 text-[#86868B]" />
            <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider">知识点总数</span>
          </div>
          <span className="text-[28px] font-bold text-[#1D1D1F] leading-none">18</span>
        </div>
        <div className="bg-[#FAFAFA] border border-[#E5E1D8] rounded-[12px] p-5 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-[#34C759]" />
            <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider">已启用诊断规则</span>
          </div>
          <span className="text-[28px] font-bold text-[#1D1D1F] leading-none">16</span>
        </div>
        <div className="bg-[#FAFAFA] border border-[#E5E1D8] rounded-[12px] p-5 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <Link2 className="w-4 h-4 text-[#86868B]" />
            <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider">已关联词汇网</span>
          </div>
          <span className="text-[28px] font-bold text-[#1D1D1F] leading-none">96<span className="text-[14px] text-[#86868B] ml-1">词</span></span>
        </div>
        <div className="bg-[#FFF5F5] border border-[#FFDCE0] rounded-[12px] p-5 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute right-[-15px] bottom-[-15px] opacity-10">
            <Activity className="w-24 h-24 text-red-500" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-[#D84315]" />
            <span className="text-[11px] font-bold text-[#D84315] uppercase tracking-wider">高频薄弱点</span>
          </div>
          <span className="text-[28px] font-bold text-[#D84315] leading-none">3</span>
        </div>
        <div className="bg-[#FFF8E6] border border-[#FFE1CD] rounded-[12px] p-5 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute right-[-10px] bottom-[-10px] opacity-10">
            <Target className="w-24 h-24 text-orange-500" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-[#E58A00]" />
            <span className="text-[11px] font-bold text-[#E58A00] uppercase tracking-wider">待完善策略</span>
          </div>
          <span className="text-[28px] font-bold text-[#E58A00] leading-none">2</span>
        </div>
      </div>

      {/* Main Content Area: Split View (List + Details) */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-[700px]">
        
        {/* Left: Knowledge Point List */}
        <div className="flex-1 bg-white border border-[#E5E1D8] rounded-[16px] shadow-sm flex flex-col overflow-hidden">
          {/* Toolbar */}
          <div className="px-5 py-4 border-b border-[#E5E1D8] flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#FAFAFA]">
            <div className="relative w-full sm:w-[320px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868B]" />
              <input 
                type="text" 
                placeholder="搜索知识点、规则描述..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-[#E5E1D8] rounded-[8px] text-[13px] focus:outline-none focus:border-[#1D1D1F] transition-colors"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button className="px-3 py-2 bg-white border border-[#E5E1D8] rounded-[8px] text-[13px] font-bold text-[#6E6E73] hover:text-[#1D1D1F] transition-colors flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" /> 类型筛选
              </button>
              <button 
                onClick={() => setIsEditing(true)}
                className="px-3 py-2 bg-[#1D1D1F] text-white rounded-[8px] text-[13px] font-bold hover:bg-black transition-colors flex items-center gap-2 ml-auto sm:ml-0"
              >
                <Plus className="w-4 h-4" /> 新增规则
              </button>
            </div>
          </div>

          {/* List Headers */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-[#E5E1D8] bg-white text-[12px] font-bold text-[#86868B] uppercase tracking-wider">
            <div className="col-span-6">诊断节点 & 描述</div>
            <div className="col-span-3">节点类型</div>
            <div className="col-span-2 text-center">映射词汇</div>
            <div className="col-span-1 text-right">状态</div>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto hide-scrollbar bg-[#FAFAFA]/30 p-3 space-y-2">
            {MOCK_KNOWLEDGE.map(item => (
              <div 
                key={item.id}
                onClick={() => { setSelectedNode(item); setIsEditing(false); }}
                className={`grid grid-cols-12 gap-4 px-4 py-4 rounded-[12px] border cursor-pointer transition-all ${
                  selectedNode?.id === item.id 
                    ? 'bg-white border-[#1D1D1F] shadow-[0_2px_12px_rgba(0,0,0,0.06)]' 
                    : 'bg-white border-[#E5E1D8] hover:border-[#1D1D1F]/30 hover:shadow-sm'
                }`}
              >
                <div className="col-span-6 flex flex-col gap-1.5 pr-4">
                  <div className="flex items-center gap-2">
                    {item.isWeakness && <Activity className="w-4 h-4 text-red-500" />}
                    <span className="text-[15px] font-bold text-[#1D1D1F] leading-tight">{item.name}</span>
                  </div>
                  <span className="text-[13px] text-[#6E6E73] font-medium line-clamp-2 leading-relaxed">
                    {item.desc}
                  </span>
                </div>
                
                <div className="col-span-3 flex items-start pt-0.5">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-[6px] border ${TYPE_MAP[item.type as keyof typeof TYPE_MAP].color}`}>
                    {TYPE_MAP[item.type as keyof typeof TYPE_MAP].label}
                  </span>
                </div>

                <div className="col-span-2 flex items-start justify-center pt-0.5">
                  <div className="flex items-center gap-1.5 text-[13px] font-bold text-[#1D1D1F] bg-[#F5F5F7] px-2.5 py-1 rounded-[6px]">
                    <Link2 className="w-3.5 h-3.5 text-[#86868B]" />
                    {item.wordCount}
                  </div>
                </div>

                <div className="col-span-1 flex items-start justify-end pt-1">
                  <div className={`w-8 h-5 rounded-full p-0.5 transition-colors ${item.enabled ? 'bg-[#34C759]' : 'bg-[#E5E1D8]'}`}>
                    <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${item.enabled ? 'translate-x-3' : 'translate-x-0'}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Knowledge Structure Details / Edit Panel */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedNode?.id || 'empty'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="w-full lg:w-[480px] bg-white border border-[#E5E1D8] rounded-[16px] shadow-sm flex flex-col overflow-hidden flex-shrink-0"
          >
            {isEditing ? (
              // Form State
              <div className="flex-1 flex flex-col">
                <div className="px-6 py-5 border-b border-[#E5E1D8] flex items-center justify-between bg-[#FAFAFA]">
                  <h3 className="text-[16px] font-bold text-[#1D1D1F]">编辑诊断规则</h3>
                  <button onClick={() => setIsEditing(false)} className="text-[13px] font-bold text-[#86868B] hover:text-[#1D1D1F]">取消</button>
                </div>
                <div className="flex-1 p-6 overflow-y-auto space-y-6">
                  {/* Basic Info */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[12px] font-bold text-[#86868B] mb-1.5">规则名称</label>
                      <input type="text" defaultValue={selectedNode.name} className="w-full px-3 py-2.5 bg-[#FAFAFA] border border-[#E5E1D8] rounded-[8px] text-[14px] font-bold text-[#1D1D1F]" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-[#86868B] mb-1.5">节点类型</label>
                      <select defaultValue={selectedNode.type} className="w-full px-3 py-2.5 bg-[#FAFAFA] border border-[#E5E1D8] rounded-[8px] text-[14px] font-medium outline-none">
                        <option value="phonics">发音规则</option>
                        <option value="spelling">拼写规则</option>
                        <option value="confusion">易混点</option>
                        <option value="meaning">语义理解</option>
                        <option value="transfer">迁移规则</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-[#86868B] mb-1.5">规则描述</label>
                      <textarea defaultValue={selectedNode.desc} className="w-full px-3 py-2.5 bg-[#FAFAFA] border border-[#E5E1D8] rounded-[8px] text-[14px] font-medium min-h-[80px] resize-none" />
                    </div>
                  </div>
                  
                  <div className="h-[1px] bg-[#E5E1D8]"></div>
                  
                  {/* Logic config */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[12px] font-bold text-[#86868B] mb-1.5">典型��因预判 (用回车分隔)</label>
                      <textarea defaultValue={selectedNode.errors.join('\n')} className="w-full px-3 py-2.5 bg-[#FAFAFA] border border-[#E5E1D8] rounded-[8px] text-[14px] font-medium min-h-[100px] resize-none" />
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-[#E5E1D8] bg-[#FAFAFA] flex items-center justify-end gap-3">
                  <button className="px-5 py-2.5 bg-[#1D1D1F] text-white rounded-[8px] text-[13px] font-bold hover:bg-black transition-colors" onClick={() => setIsEditing(false)}>保存规则</button>
                </div>
              </div>
            ) : (
              // Detail View
              <div className="flex-1 flex flex-col relative">
                {/* Actions Toolbar */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <button onClick={() => setIsEditing(true)} className="w-8 h-8 flex items-center justify-center bg-white border border-[#E5E1D8] rounded-[8px] text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors shadow-sm">
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center bg-white border border-[#E5E1D8] rounded-[8px] text-[#6E6E73] hover:text-red-600 hover:bg-red-50 hover:border-red-200 transition-colors shadow-sm">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Header */}
                <div className="px-6 pt-10 pb-6 border-b border-[#E5E1D8] bg-gradient-to-b from-[#FAFAFA] to-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-[4px] border ${TYPE_MAP[selectedNode.type as keyof typeof TYPE_MAP].color}`}>
                      {TYPE_MAP[selectedNode.type as keyof typeof TYPE_MAP].label}
                    </span>
                    {selectedNode.isWeakness && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-[4px] bg-red-50 text-red-600 border border-red-100 flex items-center gap-1">
                        <Activity className="w-3 h-3" /> 高频薄弱点
                      </span>
                    )}
                  </div>
                  <h2 className="text-[24px] font-bold text-[#1D1D1F] leading-tight mb-3">
                    {selectedNode.name}
                  </h2>
                  <p className="text-[14px] text-[#6E6E73] font-medium leading-relaxed bg-[#FAFAFA] p-3 rounded-[8px] border border-[#E5E1D8]">
                    {selectedNode.desc}
                  </p>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-white">
                  
                  {/* The Mapping Connection */}
                  <div>
                    <h4 className="text-[13px] font-bold text-[#1D1D1F] mb-3 flex items-center gap-1.5">
                      <Network className="w-4 h-4 text-[#86868B]" /> 知识点 ↔ 词汇映射网
                    </h4>
                    <div className="bg-[#F5F5F7] rounded-[12px] p-4 border border-[#E5E1D8]">
                      <p className="text-[12px] text-[#6E6E73] font-medium mb-3">
                        如果学生在以下词汇中连续出现错误，系统将归因到该规则掌握不稳定。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedNode.words.map(w => (
                          <div key={w} className="px-3 py-1.5 bg-white border border-[#E5E1D8] rounded-[6px] text-[13px] font-bold text-[#1D1D1F] flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-[#86868B]" /> {w}
                          </div>
                        ))}
                        <div className="px-3 py-1.5 bg-transparent border border-dashed border-[#86868B] rounded-[6px] text-[13px] font-medium text-[#86868B] flex items-center gap-1 cursor-pointer hover:text-[#1D1D1F] hover:border-[#1D1D1F]">
                          <Plus className="w-3 h-3" /> 更多 ({selectedNode.wordCount - selectedNode.words.length})
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Diagnostic Rules - Errors */}
                  <div>
                    <h4 className="text-[13px] font-bold text-[#1D1D1F] mb-3 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-[#D84315]" /> 典型错因预判 (诊断依据)
                    </h4>
                    <div className="bg-[#FFF5F5] border border-[#FFDCE0] rounded-[12px] overflow-hidden">
                      <div className="px-4 py-3 border-b border-[#FFDCE0]/50 bg-[#FFF0F2]">
                        <span className="text-[12px] text-[#D84315] font-medium">当触发以下作答表现时，命中该诊断：</span>
                      </div>
                      <ul className="p-4 space-y-3">
                        {selectedNode.errors.map((err, i) => (
                          <li key={i} className="flex items-start gap-2 text-[13px] font-medium text-[#1D1D1F]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D84315] mt-1.5 flex-shrink-0"></div>
                            {err}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Remediation Strategies */}
                  <div>
                    <h4 className="text-[13px] font-bold text-[#1D1D1F] mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#34C759]" /> 默认补救策略
                    </h4>
                    <div className="bg-[#F0FAF0] border border-[#CDEBCE] rounded-[12px] p-4">
                      <p className="text-[12px] text-[#1E7E1E] font-medium mb-3">
                        命中诊断后，系统将自动采用以下动作生成下一轮任务：
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {selectedNode.strategies.map(sId => {
                          const s = STRATEGY_MAP[sId as keyof typeof STRATEGY_MAP];
                          return (
                            <div key={sId} className="px-3 py-1.5 bg-white border border-[#34C759]/30 rounded-[8px] flex items-center gap-2 shadow-sm">
                              <span>{s.icon}</span>
                              <span className="text-[13px] font-bold text-[#1E7E1E]">{s.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-4 border-t border-[#E5E1D8]">
                    <button className="w-full py-3 bg-white border border-[#1D1D1F] text-[#1D1D1F] rounded-[10px] text-[14px] font-bold hover:bg-[#F5F5F7] transition-colors flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" /> 使用此知识点生成专项练习
                    </button>
                  </div>

                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};