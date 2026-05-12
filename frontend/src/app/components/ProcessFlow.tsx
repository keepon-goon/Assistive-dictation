import { motion } from 'motion/react';
import {
  FileText,
  Activity,
  BarChart2,
  Search,
  GitBranch,
  Zap,
  BookOpen,
} from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: FileText,
    label: '听写任务',
    sublabel: 'Dictation Task',
    color: '#3b82f6',
    status: 'done',
  },
  {
    id: 2,
    icon: Activity,
    label: '过程感知',
    sublabel: 'Process Sensing',
    color: '#06b6d4',
    status: 'done',
  },
  {
    id: 3,
    icon: BarChart2,
    label: '状态评估',
    sublabel: 'State Assessment',
    color: '#38bdf8',
    status: 'done',
  },
  {
    id: 4,
    icon: Search,
    label: '错因诊断',
    sublabel: 'Error Diagnosis',
    color: '#f59e0b',
    status: 'active',
  },
  {
    id: 5,
    icon: GitBranch,
    label: '知识点迁移',
    sublabel: 'Knowledge Transfer',
    color: '#818cf8',
    status: 'pending',
  },
  {
    id: 6,
    icon: Zap,
    label: '补救策略',
    sublabel: 'Remediation',
    color: '#a78bfa',
    status: 'pending',
  },
  {
    id: 7,
    icon: BookOpen,
    label: '学习报告',
    sublabel: 'Learning Report',
    color: '#6366f1',
    status: 'pending',
  },
];

export function ProcessFlow() {
  return (
    <section
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 48px 64px',
      }}
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}
      >
        <div style={{ width: '3px', height: '16px', borderRadius: '2px', background: 'linear-gradient(180deg, #f59e0b, #ef4444)' }} />
        <span style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em' }}>
          智能闭环诊断流程 · INTELLIGENT DIAGNOSTIC LOOP
        </span>
      </motion.div>

      {/* Flow container */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          padding: '32px 40px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '20px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle background gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 50%, rgba(245,158,11,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isDone = step.status === 'done';
            const isActive = step.status === 'active';
            const isPending = step.status === 'pending';

            return (
              <div key={step.id} style={{ display: 'flex', alignItems: 'center', flex: idx < steps.length - 1 ? 1 : 0 }}>
                {/* Node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flexShrink: 0 }}
                >
                  {/* Icon circle */}
                  <div
                    style={{
                      position: 'relative',
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: isActive
                        ? `rgba(245,158,11,0.15)`
                        : isDone
                        ? `rgba(${step.color === '#3b82f6' ? '59,130,246' : step.color === '#06b6d4' ? '6,182,212' : '56,189,248'},0.1)`
                        : 'rgba(255,255,255,0.03)',
                      border: isActive
                        ? `1.5px solid rgba(245,158,11,0.5)`
                        : isDone
                        ? `1px solid rgba(255,255,255,0.1)`
                        : '1px solid rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isActive
                        ? '0 0 20px rgba(245,158,11,0.25), 0 0 40px rgba(245,158,11,0.1)'
                        : isDone
                        ? '0 0 12px rgba(59,130,246,0.1)'
                        : 'none',
                    }}
                  >
                    {isActive && (
                      <div
                        style={{
                          position: 'absolute',
                          inset: '-4px',
                          borderRadius: '18px',
                          border: '1px solid rgba(245,158,11,0.2)',
                          animation: 'pulse-ring 2s ease-out infinite',
                        }}
                      />
                    )}
                    <Icon
                      size={20}
                      color={
                        isActive ? '#f59e0b' : isDone ? step.color : 'rgba(255,255,255,0.25)'
                      }
                      strokeWidth={1.8}
                    />

                    {/* Done check */}
                    {isDone && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '-4px',
                          right: '-4px',
                          width: '14px',
                          height: '14px',
                          borderRadius: '50%',
                          background: '#22c55e',
                          border: '2px solid #060c1a',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg width="7" height="6" viewBox="0 0 7 6">
                          <polyline
                            points="1,3 3,5 6,1"
                            stroke="#fff"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Active indicator */}
                    {isActive && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '-5px',
                          right: '-5px',
                          width: '14px',
                          height: '14px',
                          borderRadius: '50%',
                          background: '#f59e0b',
                          border: '2px solid #060c1a',
                          boxShadow: '0 0 8px rgba(245,158,11,0.8)',
                        }}
                      />
                    )}
                  </div>

                  {/* Step label */}
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        color: isActive ? '#fbbf24' : isDone ? '#e2e8f0' : '#334155',
                        fontSize: '12.5px',
                        fontWeight: isActive ? 600 : 400,
                        lineHeight: 1.3,
                      }}
                    >
                      {step.label}
                    </div>
                    <div
                      style={{
                        color: '#334155',
                        fontSize: '10px',
                        marginTop: '1px',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {step.sublabel}
                    </div>
                  </div>

                  {/* Active badge */}
                  {isActive && (
                    <div
                      style={{
                        padding: '2px 8px',
                        borderRadius: '20px',
                        background: 'rgba(245,158,11,0.15)',
                        border: '1px solid rgba(245,158,11,0.3)',
                      }}
                    >
                      <span style={{ color: '#f59e0b', fontSize: '9.5px', fontWeight: 600, letterSpacing: '0.04em' }}>
                        当前阶段
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      height: '1px',
                      margin: '0 8px',
                      marginBottom: '28px',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          isDone && steps[idx + 1].status !== 'pending'
                            ? `linear-gradient(90deg, ${step.color}60, ${steps[idx + 1].color}60)`
                            : isDone
                            ? `linear-gradient(90deg, ${step.color}60, rgba(255,255,255,0.05))`
                            : 'rgba(255,255,255,0.05)',
                      }}
                    />
                    {/* Flowing dot */}
                    {isDone && (
                      <motion.div
                        animate={{ x: ['0%', '100%'] }}
                        transition={{ duration: 2, ease: 'linear', repeat: Infinity, repeatDelay: 1 }}
                        style={{
                          position: 'absolute',
                          top: '-2px',
                          left: 0,
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: step.color,
                          boxShadow: `0 0 8px ${step.color}`,
                          opacity: 0.8,
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <style>{`
          @keyframes pulse-ring {
            0% { transform: scale(1); opacity: 0.6; }
            100% { transform: scale(1.3); opacity: 0; }
          }
        `}</style>
      </motion.div>
    </section>
  );
}
