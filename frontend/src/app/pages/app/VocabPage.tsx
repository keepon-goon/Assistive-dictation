import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, Search, Plus, Play, BrainCircuit, 
  Network, BookOpen, SlidersHorizontal, ChevronRight, 
  Edit3, Trash2, Link2, AlertCircle, Sparkles, CheckCircle2, Activity
} from 'lucide-react';
import { Link } from 'react-router';

// Mock Data
const MOCK_WORDS = [
  { 
    id: 1, word: 'make', phonetic: '/meɪk/', meaning: '制作；使得', 
    textbook: 'PEP', grade: '三年级', unit: 'Unit 2', difficulty: 'medium',
    knowledgePoint: 'a_e 长元音规则', errorType: '元音组合不稳、发音混淆',
    transferWords: ['take', 'cake', 'name', 'game'],
    enabled: true, accuracy: 45, isWeakness: true
  },
  { 
    id: 2, word: 'take', phonetic: '/teɪk/', meaning: '拿取；花费', 
    textbook: 'PEP', grade: '三年级', unit: 'Unit 2', difficulty: 'easy',
    knowledgePoint: 'a_e 长元音规则', errorType: '辅音结尾发音吞音',
    transferWords: ['make', 'cake', 'wake'],
    enabled: true, accuracy: 60, isWeakness: false
  },
  { 
    id: 3, word: 'apple', phonetic: '/ˈæpl/', meaning: '苹果', 
    textbook: 'PEP', grade: '三年级', unit: 'Unit 1', difficulty: 'easy',
    knowledgePoint: '短元音 a 发音', errorType: '重音误读',
    transferWords: ['ant', 'cat'],
    enabled: true, accuracy: 92, isWeakness: false
  },
  { 
    id: 4, word: 'beautiful', phonetic: '/ˈbjuːtɪfl/', meaning: '美丽的', 
    textbook: 'PEP', grade: '三年级', unit: 'Unit 3', difficulty: 'hard',
    knowledgePoint: '多音节词汇拼写', errorType: '音节遗漏、元音组合(eau)混淆',
    transferWords: ['wonderful', 'colorful'],
    enabled: false, accuracy: 30, isWeakness: true
  },
  { 
    id: 5, word: 'cake', phonetic: '/keɪk/', meaning: '蛋糕', 
    textbook: 'PEP', grade: '三年级', unit: 'Unit 2', difficulty: 'easy',
    knowledgePoint: 'a_e 长元音规则', errorType: '元音组合不稳',
    transferWords: ['make', 'take', 'bake'],
    enabled: true, accuracy: 75, isWeakness: false
  }
];

export const VocabPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWord, setSelectedWord] = useState(MOCK_WORDS[0]);
  const [isEditing, setIsEditing] = useState(false);

  // Difficulty badge colors
  const diffColors = {
    easy: 'bg-[#E7F6E7] text-[#1E7E1E]',
    medium: 'bg-[#FFF3E0] text-[#E58A00]',
    hard: 'bg-[#FFEBEE] text-[#D84315]'
  };

  return (
    <div className="max-w-[1300px] mx-auto pb-20 h-full flex flex-col">
      {/* Header Area */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-[#1D1D1F] tracking-tight mb-2">学习内容资产 / 词表管理</h1>
          <p className="text-[14px] text-[#6E6E73] font-medium max-w-2xl">
            在这里维护英语听写的基础内容，将每个单词与知识点、易错模式及迁移词组建立映射。<br className="hidden sm:block"/>
            它们将作为后续诊断分析和动态补救练习的底层依据。
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/app/knowledge" className="px-5 py-2.5 bg-white border border-[#E5E1D8] rounded-[8px] text-[13px] font-bold text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all flex items-center gap-2">
            <BrainCircuit className="w-4 h-4" /> 管理知识点
          </Link>
          <Link to="/app/simulation" className="px-6 py-2.5 bg-[#1D1D1F] text-white rounded-[8px] text-[13px] font-bold hover:bg-black transition-all flex items-center gap-2 shadow-sm">
            <Play className="w-4 h-4 fill-current" /> 使用当前词表生成练习
          </Link>
        </div>
      </div>

      {/* Asset Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-[#FAFAFA] border border-[#E5E1D8] rounded-[12px] p-4 flex flex-col justify-center">
          <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider mb-1">单词总数</span>
          <span className="text-[24px] font-bold text-[#1D1D1F]">120</span>
        </div>
        <div className="bg-[#FAFAFA] border border-[#E5E1D8] rounded-[12px] p-4 flex flex-col justify-center">
          <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider mb-1">已启用并配置</span>
          <span className="text-[24px] font-bold text-[#1D1D1F]">108</span>
        </div>
        <div className="bg-[#FAFAFA] border border-[#E5E1D8] rounded-[12px] p-4 flex flex-col justify-center">
          <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider mb-1">已映射知识点</span>
          <span className="text-[24px] font-bold text-[#1D1D1F]">96</span>
        </div>
        <div className="bg-[#FAFAFA] border border-[#E5E1D8] rounded-[12px] p-4 flex flex-col justify-center">
          <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider mb-1">待完善内容</span>
          <span className="text-[24px] font-bold text-[#F5A623]">12</span>
        </div>
        <div className="col-span-2 bg-[#FAFAFA] border border-[#E5E1D8] rounded-[12px] p-4 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute right-[-10px] bottom-[-10px] opacity-5">
            <BookOpen className="w-24 h-24" />
          </div>
          <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider mb-1">当前主要教案</span>
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-bold text-[#1D1D1F]">PEP 三年级 / Unit 2</span>
          </div>
        </div>
      </div>

      {/* Main Content Area: Split View (List + Details) */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-[600px]">
        
        {/* Left: Vocabulary List */}
        <div className="flex-1 bg-white border border-[#E5E1D8] rounded-[16px] shadow-sm flex flex-col overflow-hidden">
          {/* Toolbar */}
          <div className="px-5 py-4 border-b border-[#E5E1D8] flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#FAFAFA]">
            <div className="relative w-full sm:w-[300px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868B]" />
              <input 
                type="text" 
                placeholder="搜索单词、释义或知识点..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-[#E5E1D8] rounded-[8px] text-[13px] focus:outline-none focus:border-[#1D1D1F] transition-colors"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button className="px-3 py-2 bg-white border border-[#E5E1D8] rounded-[8px] text-[13px] font-bold text-[#6E6E73] hover:text-[#1D1D1F] transition-colors flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" /> 筛选
              </button>
              <button 
                onClick={() => setIsEditing(true)}
                className="px-3 py-2 bg-[#1D1D1F] text-white rounded-[8px] text-[13px] font-bold hover:bg-black transition-colors flex items-center gap-2 ml-auto sm:ml-0"
              >
                <Plus className="w-4 h-4" /> 新增单词
              </button>
            </div>
          </div>

          {/* List Headers */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-[#E5E1D8] bg-white text-[12px] font-bold text-[#86868B] uppercase tracking-wider">
            <div className="col-span-4">单词与释义</div>
            <div className="col-span-3">教材与单元</div>
            <div className="col-span-4">关联知识点</div>
            <div className="col-span-1 text-right">状态</div>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto hide-scrollbar bg-[#FAFAFA]/30">
            {MOCK_WORDS.map(item => (
              <div 
                key={item.id}
                onClick={() => { setSelectedWord(item); setIsEditing(false); }}
                className={`grid grid-cols-12 gap-4 px-6 py-4 border-b border-[#E5E1D8] cursor-pointer transition-all group ${
                  selectedWord?.id === item.id 
                    ? 'bg-[#F5F5F7] border-l-4 border-l-[#1D1D1F] pl-5' 
                    : 'bg-white hover:bg-[#FAFAFA] border-l-4 border-l-transparent'
                }`}
              >
                <div className="col-span-4 flex flex-col gap-1">
                  <div className="flex items-end gap-2">
                    <span className="text-[15px] font-bold text-[#1D1D1F]">{item.word}</span>
                    <span className="text-[13px] text-[#86868B]">{item.phonetic}</span>
                  </div>
                  <span className="text-[13px] text-[#6E6E73]">{item.meaning}</span>
                </div>
                
                <div className="col-span-3 flex flex-col items-start justify-center gap-1.5">
                  <span className="text-[13px] font-medium text-[#1D1D1F]">{item.unit}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${diffColors[item.difficulty as keyof typeof diffColors]}`}>
                    {item.difficulty}
                  </span>
                </div>

                <div className="col-span-4 flex items-center">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#F5F5F7] border border-[#E5E1D8] rounded-[6px]">
                    <Network className="w-3.5 h-3.5 text-[#1D1D1F]" />
                    <span className="text-[12px] font-bold text-[#1D1D1F] truncate max-w-[140px]">{item.knowledgePoint}</span>
                  </div>
                </div>

                <div className="col-span-1 flex items-center justify-end">
                  <div className={`w-8 h-5 rounded-full p-0.5 transition-colors ${item.enabled ? 'bg-[#34C759]' : 'bg-[#E5E1D8]'}`}>
                    <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${item.enabled ? 'translate-x-3' : 'translate-x-0'}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Asset Detail / Edit Panel */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedWord?.id || 'empty'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="w-full lg:w-[420px] bg-white border border-[#E5E1D8] rounded-[16px] shadow-sm flex flex-col overflow-hidden flex-shrink-0"
          >
            {isEditing ? (
              // Edit/New Form State
              <div className="flex-1 flex flex-col">
                <div className="px-6 py-5 border-b border-[#E5E1D8] flex items-center justify-between bg-[#FAFAFA]">
                  <h3 className="text-[16px] font-bold text-[#1D1D1F]">编辑内容资产</h3>
                  <button onClick={() => setIsEditing(false)} className="text-[13px] font-bold text-[#86868B] hover:text-[#1D1D1F]">取消</button>
                </div>
                <div className="flex-1 p-6 overflow-y-auto space-y-6">
                  {/* Form fields mockup */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[12px] font-bold text-[#86868B] mb-1.5">英文单词</label>
                      <input type="text" defaultValue={selectedWord.word} className="w-full px-3 py-2 bg-[#FAFAFA] border border-[#E5E1D8] rounded-[8px] text-[14px] font-medium" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold text-[#86868B] mb-1.5">音标</label>
                        <input type="text" defaultValue={selectedWord.phonetic} className="w-full px-3 py-2 bg-[#FAFAFA] border border-[#E5E1D8] rounded-[8px] text-[14px] font-medium" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-[#86868B] mb-1.5">难度</label>
                        <select className="w-full px-3 py-2 bg-[#FAFAFA] border border-[#E5E1D8] rounded-[8px] text-[14px] font-medium outline-none">
                          <option>easy</option>
                          <option>medium</option>
                          <option>hard</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-[#86868B] mb-1.5">中文释义</label>
                      <input type="text" defaultValue={selectedWord.meaning} className="w-full px-3 py-2 bg-[#FAFAFA] border border-[#E5E1D8] rounded-[8px] text-[14px] font-medium" />
                    </div>
                  </div>
                  
                  <div className="h-[1px] bg-[#E5E1D8]"></div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[12px] font-bold text-[#86868B] mb-1.5 flex items-center gap-1"><BrainCircuit className="w-3.5 h-3.5"/> 知识点映射</label>
                      <input type="text" defaultValue={selectedWord.knowledgePoint} className="w-full px-3 py-2 bg-[#FAFAFA] border border-[#E5E1D8] rounded-[8px] text-[14px] font-medium text-[#1D1D1F]" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-[#86868B] mb-1.5 flex items-center gap-1"><Link2 className="w-3.5 h-3.5"/> 迁移词组 (用逗号分隔)</label>
                      <input type="text" defaultValue={selectedWord.transferWords.join(', ')} className="w-full px-3 py-2 bg-[#FAFAFA] border border-[#E5E1D8] rounded-[8px] text-[14px] font-medium" />
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-[#E5E1D8] bg-[#FAFAFA] flex items-center justify-end gap-3">
                  <button className="px-5 py-2.5 bg-[#1D1D1F] text-white rounded-[8px] text-[13px] font-bold hover:bg-black transition-colors" onClick={() => setIsEditing(false)}>保存资产</button>
                </div>
              </div>
            ) : (
              // View State
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

                <div className="px-6 pt-10 pb-6 border-b border-[#E5E1D8] bg-gradient-to-b from-[#FAFAFA] to-white">
                  <div className="flex items-end gap-3 mb-3">
                    <h2 className="text-[32px] font-bold text-[#1D1D1F] leading-none tracking-tight">{selectedWord.word}</h2>
                    <span className="text-[16px] text-[#6E6E73] font-medium pb-0.5">{selectedWord.phonetic}</span>
                  </div>
                  <p className="text-[15px] font-bold text-[#1D1D1F] mb-4">{selectedWord.meaning}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-[#F5F5F7] border border-[#E5E1D8] rounded-[6px] text-[11px] font-bold text-[#6E6E73]">
                      {selectedWord.textbook} {selectedWord.grade}
                    </span>
                    <span className="px-2 py-1 bg-[#F5F5F7] border border-[#E5E1D8] rounded-[6px] text-[11px] font-bold text-[#6E6E73]">
                      {selectedWord.unit}
                    </span>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                  {/* Knowledge Point Association */}
                  <div>
                    <h4 className="text-[13px] font-bold text-[#1D1D1F] mb-3 flex items-center gap-1.5">
                      <Network className="w-4 h-4 text-[#86868B]" /> 诊断映射结构
                    </h4>
                    <div className="bg-[#F5F5F7] rounded-[12px] p-4 border border-[#E5E1D8]">
                      <div className="mb-3">
                        <span className="block text-[11px] font-bold text-[#86868B] uppercase mb-1">主控知识点</span>
                        <div className="flex items-center justify-between">
                          <span className="text-[14px] font-bold text-[#1D1D1F]">{selectedWord.knowledgePoint}</span>
                          <ChevronRight className="w-4 h-4 text-[#86868B]" />
                        </div>
                      </div>
                      <div className="h-[1px] bg-[#E5E1D8] mb-3"></div>
                      <div>
                        <span className="block text-[11px] font-bold text-[#86868B] uppercase mb-1">典型错因预判</span>
                        <span className="text-[13px] text-[#6E6E73] font-medium">{selectedWord.errorType}</span>
                      </div>
                    </div>
                  </div>

                  {/* Transfer Strategy */}
                  <div>
                    <h4 className="text-[13px] font-bold text-[#1D1D1F] mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#86868B]" /> 迁移补救网络
                    </h4>
                    <p className="text-[12px] text-[#86868B] font-medium mb-3">
                      当该单词作答异常时，系统将推荐以下同源词进行补救练习。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedWord.transferWords.map(tw => (
                        <div key={tw} className="px-3 py-1.5 bg-white border border-[#1D1D1F]/20 rounded-[8px] flex items-center gap-1.5 text-[13px] font-bold text-[#1D1D1F] shadow-sm">
                          <Link2 className="w-3 h-3 text-[#6E6E73]" /> {tw}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Context Status */}
                  <div>
                    <h4 className="text-[13px] font-bold text-[#1D1D1F] mb-3 flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-[#86868B]" /> 练习上下文
                    </h4>
                    <div className="flex items-center gap-4 bg-white border border-[#E5E1D8] rounded-[12px] p-4">
                      <div className="flex flex-col items-center">
                        <span className={`text-[20px] font-bold leading-none ${selectedWord.accuracy < 50 ? 'text-[#D84315]' : 'text-[#1D1D1F]'}`}>
                          {selectedWord.accuracy}%
                        </span>
                        <span className="text-[10px] font-bold text-[#86868B] uppercase tracking-wider mt-1">全局正确率</span>
                      </div>
                      <div className="w-[1px] h-8 bg-[#E5E1D8]"></div>
                      <div className="flex-1 flex items-center gap-2">
                        {selectedWord.isWeakness ? (
                          <>
                            <AlertCircle className="w-4 h-4 text-[#F5A623]" />
                            <span className="text-[12px] font-bold text-[#1D1D1F]">已标记为薄弱词，适合纳入下一轮听写生成。</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-[#34C759]" />
                            <span className="text-[12px] font-bold text-[#1D1D1F]">掌握良好，暂不建议立即重复。</span>
                          </>
                        )}
                      </div>
                    </div>
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