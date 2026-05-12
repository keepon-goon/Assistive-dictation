import { motion } from 'motion/react';
import {
  AlertCircle,
  Clock,
  RefreshCw,
  Mic,
  ArrowRight,
  ChevronRight,
  RotateCcw,
  GitMerge,
  CalendarClock,
  Star,
  Flame,
  Zap,
} from 'lucide-react';

const diagnosisData = {
  knowledgePoint: 'a_e 长元音拼写规则',
  knowledgeCode: 'PHO-AE-002',
  confidence: 28,
  evidence: [
    {
      icon: <RefreshCw size={13} color="#ef4444" />,
      text: 'make / take / cake 同类词连续错误',
      detail: '3 次连续错误，错误率 100%',
      severity: 'high',
    },
    {
      icon: <Clock size={13} color="#f59e0b" />,
      text: '平均响应时长偏高',
      detail: '6.8s，超阈值 4.0s 约 70%',
      severity: 'medium',
    },
    {
      icon: <Mic size={13} color="#f59e0b" />,
      text: '重读次数超过阈值',
      detail: '单词平均重播 2.3 次（正常 ≤ 1.2）',
      severity: 'medium',
    },
  ],
  judgment:
    '该知识点掌握处于不稳定状态，儿童对 a_e 拼写模式尚未形成稳固记忆，需要通过同规则迁移词进行强化补救。',
  remediation: ['name', 'game', 'lake', 'plane'],
};

const remediationTasks = [
  {
    id: 1,
    type: '重练原词',
    typeEn: 'Re-practice',
    icon: <RotateCcw size={16} color="#3b82f6" />,
    goal: '巩固原错误词汇的正确拼写',
    words: ['make', 'take', 'cake'],
    duration: '约 5 分钟',
    difficulty: 2,
    reason: '三个 a_e 规则同类词均出现错误，需原词强化',
    color: '#3b82f6',
    badge: '高优先级',
    badgeColor: '#3b82f6',
  },
  {
    id: 2,
    type: '同规则迁移练习',
    typeEn: 'Transfer Practice',
    icon: <GitMerge size={16} color="#818cf8" />,
    goal: '通过新词巩固 a_e 拼写规则的泛化能力',
    words: ['name', 'game', 'lake', 'plane'],
    duration: '约 8 分钟',
    difficulty: 3,
    reason: '迁移练习帮助将规则从具体词扩展为抽象认知',
    color: '#818cf8',
    badge: '核心任务',
    badgeColor: '#818cf8',
  },
  {
    id: 3,
    type: '延迟复习任务',
    typeEn: 'Spaced Review',
    icon: <CalendarClock size={16} color="#06b6d4" />,
    goal: '24 小时后进行间隔复习，强化长期记忆',
    words: ['make', 'take', 'name', 'plane'],
    duration: '约 4 分钟',
    difficulty: 2,
    reason: '基于间隔重复原理，24h 后复习显著提升记忆保留',
    color: '#06b6d4',
    badge: '明日安排',
    badgeColor: '#06b6d4',
  },
];

function DifficultyDots({ level }: { level: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map((d) => (
        <div
          key={d}
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: d <= level ? '#f59e0b' : 'rgba(255,255,255,0.1)',
          }}
        />
      ))}
    </div>
  );
}

export function DiagnosisSection() {
  return (
    <section
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 48px 64px',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Left: Diagnosis Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label */}
          <div style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '3px', height: '16px', borderRadius: '2px', background: 'linear-gradient(180deg, #f59e0b, #ef4444)' }} />
            <span style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em' }}>
              今日智能诊断 · AI DIAGNOSIS
            </span>
          </div>

          <div
            style={{
              padding: '28px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden',
              height: 'fit-content',
            }}
          >
            {/* Top accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #f59e0b80, #ef444460, transparent)',
              }}
            />

            {/* Subtle inner glow */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle at 100% 0%, rgba(245,158,11,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* Knowledge point header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: '5px',
                      background: 'rgba(245,158,11,0.12)',
                      border: '1px solid rgba(245,158,11,0.25)',
                      color: '#fbbf24',
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {diagnosisData.knowledgeCode}
                  </span>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: '5px',
                      background: 'rgba(239,68,68,0.1)',
                      border: '1px solid rgba(239,68,68,0.2)',
                      color: '#f87171',
                      fontSize: '10px',
                      fontWeight: 500,
                    }}
                  >
                    掌握薄弱
                  </span>
                </div>
                <h3
                  style={{
                    color: '#f1f5f9',
                    fontSize: '20px',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.3,
                  }}
                >
                  {diagnosisData.knowledgePoint}
                </h3>
              </div>

              {/* Confidence ring */}
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <svg width="56" height="56" viewBox="0 0 56 56">
                  <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                  <circle
                    cx="28"
                    cy="28"
                    r="22"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 22}`}
                    strokeDashoffset={`${2 * Math.PI * 22 * (1 - diagnosisData.confidence / 100)}`}
                    transform="rotate(-90 28 28)"
                    style={{ transition: 'stroke-dashoffset 1s ease' }}
                  />
                  <text
                    x="28"
                    y="28"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#ef4444"
                    fontSize="12"
                    fontWeight="700"
                    fontFamily="'JetBrains Mono', monospace"
                  >
                    {diagnosisData.confidence}%
                  </text>
                </svg>
                <div style={{ color: '#475569', fontSize: '9.5px', marginTop: '2px' }}>掌握度</div>
              </div>
            </div>

            {/* Evidence */}
            <div style={{ marginBottom: '20px' }}>
              <div
                style={{
                  color: '#64748b',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  marginBottom: '10px',
                }}
              >
                诊断依据
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {diagnosisData.evidence.map((ev, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      background:
                        ev.severity === 'high'
                          ? 'rgba(239,68,68,0.06)'
                          : 'rgba(245,158,11,0.05)',
                      border: `1px solid ${ev.severity === 'high' ? 'rgba(239,68,68,0.12)' : 'rgba(245,158,11,0.1)'}`,
                    }}
                  >
                    <div style={{ marginTop: '1px', flexShrink: 0 }}>{ev.icon}</div>
                    <div>
                      <div style={{ color: '#e2e8f0', fontSize: '13px', lineHeight: 1.4 }}>
                        {ev.text}
                      </div>
                      <div style={{ color: '#64748b', fontSize: '11px', marginTop: '3px', fontFamily: "'JetBrains Mono', monospace" }}>
                        {ev.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Judgment */}
            <div
              style={{
                padding: '14px 16px',
                borderRadius: '12px',
                background: 'rgba(59,130,246,0.06)',
                border: '1px solid rgba(59,130,246,0.12)',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '7px',
                }}
              >
                <AlertCircle size={13} color="#3b82f6" />
                <span style={{ color: '#60a5fa', fontSize: '11px', fontWeight: 500, letterSpacing: '0.04em' }}>
                  系统判断
                </span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                {diagnosisData.judgment}
              </p>
            </div>

            {/* Recommended words */}
            <div>
              <div
                style={{
                  color: '#64748b',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <ArrowRight size={11} color="#64748b" />
                推荐补救词汇
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {diagnosisData.remediation.map((word) => (
                  <span
                    key={word}
                    style={{
                      padding: '5px 14px',
                      borderRadius: '8px',
                      background: 'rgba(129,140,248,0.1)',
                      border: '1px solid rgba(129,140,248,0.2)',
                      color: '#a5b4fc',
                      fontSize: '13px',
                      fontWeight: 500,
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: '0.02em',
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Remediation Plan */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label */}
          <div style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '3px', height: '16px', borderRadius: '2px', background: 'linear-gradient(180deg, #818cf8, #6366f1)' }} />
            <span style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em' }}>
              补救计划预览 · REMEDIATION PLAN
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {remediationTasks.map((task, idx) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  padding: '20px 22px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                {/* Left border accent */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '16px',
                    bottom: '16px',
                    width: '3px',
                    borderRadius: '2px',
                    background: task.color,
                    boxShadow: `0 0 8px ${task.color}60`,
                  }}
                />

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '9px',
                        background: `rgba(${
                          task.color === '#3b82f6' ? '59,130,246' :
                          task.color === '#818cf8' ? '129,140,248' :
                          '6,182,212'
                        },0.12)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {task.icon}
                    </div>
                    <div>
                      <div style={{ color: '#e2e8f0', fontSize: '14px', fontWeight: 500, lineHeight: 1.3 }}>
                        {task.type}
                      </div>
                      <div style={{ color: '#475569', fontSize: '10.5px', marginTop: '2px' }}>
                        {task.typeEn}
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      padding: '3px 9px',
                      borderRadius: '6px',
                      background: `rgba(${
                        task.color === '#3b82f6' ? '59,130,246' :
                        task.color === '#818cf8' ? '129,140,248' :
                        '6,182,212'
                      },0.12)`,
                      border: `1px solid ${task.color}30`,
                      color: task.color,
                      fontSize: '10.5px',
                      fontWeight: 500,
                    }}
                  >
                    {task.badge}
                  </span>
                </div>

                {/* Goal */}
                <p style={{ color: '#94a3b8', fontSize: '12.5px', lineHeight: 1.55, margin: '0 0 12px 0' }}>
                  {task.goal}
                </p>

                {/* Words */}
                <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', flexWrap: 'wrap' }}>
                  {task.words.map((w) => (
                    <span
                      key={w}
                      style={{
                        padding: '3px 10px',
                        borderRadius: '6px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#cbd5e1',
                        fontSize: '12px',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {w}
                    </span>
                  ))}
                </div>

                {/* Meta row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={11} color="#475569" />
                      <span style={{ color: '#475569', fontSize: '11px' }}>{task.duration}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Star size={11} color="#475569" />
                      <DifficultyDots level={task.difficulty} />
                    </div>
                  </div>
                  <button
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '5px 12px',
                      borderRadius: '7px',
                      border: `1px solid ${task.color}30`,
                      background: `rgba(${
                        task.color === '#3b82f6' ? '59,130,246' :
                        task.color === '#818cf8' ? '129,140,248' :
                        '6,182,212'
                      },0.08)`,
                      color: task.color,
                      fontSize: '11.5px',
                      cursor: 'pointer',
                      fontWeight: 500,
                    }}
                  >
                    开始练习
                    <ChevronRight size={11} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}