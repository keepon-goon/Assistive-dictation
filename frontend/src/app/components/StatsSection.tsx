import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, CheckCircle, Clock, AlertTriangle, Target } from 'lucide-react';

function Sparkline({
  data,
  color,
  height = 32,
}: {
  data: number[];
  color: string;
  height?: number;
}) {
  const width = 88;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const pad = 2;

  const points = data
    .map((val, i) => {
      const x = pad + (i / (data.length - 1)) * (width - pad * 2);
      const y = pad + ((1 - (val - min) / range) * (height - pad * 2));
      return `${x},${y}`;
    })
    .join(' ');

  const areaPoints = `${pad},${height - pad} ${points} ${width - pad},${height - pad}`;

  return (
    <svg width={width} height={height} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`grad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0.01" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#grad-${color.replace('#', '')})`} />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Last point dot */}
      {(() => {
        const lastIdx = data.length - 1;
        const lx = pad + (lastIdx / (data.length - 1)) * (width - pad * 2);
        const ly = pad + ((1 - (data[lastIdx] - min) / range) * (height - pad * 2));
        return (
          <circle cx={lx} cy={ly} r="3" fill={color} stroke="rgba(6,12,26,0.8)" strokeWidth="1.5" />
        );
      })()}
    </svg>
  );
}

const stats = [
  {
    id: 1,
    title: '今日练习完成度',
    subtitle: 'Daily Completion',
    value: '85',
    unit: '%',
    trend: '+12%',
    trendUp: true,
    description: '较昨日提升 12%',
    icon: <CheckCircle size={16} color="#22c55e" />,
    accentColor: '#22c55e',
    sparkData: [60, 65, 58, 72, 68, 78, 85],
    statusLabel: '目标达成',
    statusColor: '#22c55e',
  },
  {
    id: 2,
    title: '平均正确率',
    subtitle: 'Accuracy Rate',
    value: '78',
    unit: '%',
    trend: '+3.2%',
    trendUp: true,
    description: '本周持续改善',
    icon: <Target size={16} color="#3b82f6" />,
    accentColor: '#3b82f6',
    sparkData: [68, 70, 72, 69, 73, 75, 78],
    statusLabel: '稳步提升',
    statusColor: '#3b82f6',
  },
  {
    id: 3,
    title: '薄弱知识点',
    subtitle: 'Weak Knowledge Points',
    value: '4',
    unit: '个',
    trend: '-2',
    trendUp: true,
    description: '本周减少 2 个',
    icon: <AlertTriangle size={16} color="#f59e0b" />,
    accentColor: '#f59e0b',
    sparkData: [8, 7, 6, 7, 5, 6, 4],
    statusLabel: '需持续关注',
    statusColor: '#f59e0b',
  },
  {
    id: 4,
    title: '平均响应时长',
    subtitle: 'Avg Response Time',
    value: '4.2',
    unit: 's',
    trend: '-0.8s',
    trendUp: true,
    description: '响应速度加快',
    icon: <Clock size={16} color="#06b6d4" />,
    accentColor: '#06b6d4',
    sparkData: [6.2, 5.8, 5.5, 5.2, 4.8, 4.5, 4.2],
    statusLabel: '正常范围',
    statusColor: '#06b6d4',
  },
];

export function StatsSection() {
  return (
    <section
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 48px 56px',
      }}
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}
      >
        <div style={{ width: '3px', height: '16px', borderRadius: '2px', background: 'linear-gradient(180deg, #3b82f6, #06b6d4)' }} />
        <span style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em' }}>
          学习状态概览 · LEARNING STATUS
        </span>
      </motion.div>

      {/* Cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
        }}
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: '24px',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'default',
            }}
          >
            {/* Accent glow top */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${stat.accentColor}50, transparent)`,
              }}
            />

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div>
                <div style={{ color: '#94a3b8', fontSize: '12.5px', fontWeight: 400, lineHeight: 1.4 }}>
                  {stat.title}
                </div>
                <div style={{ color: '#334155', fontSize: '10px', marginTop: '1px', letterSpacing: '0.04em' }}>
                  {stat.subtitle}
                </div>
              </div>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: `rgba(${
                    stat.accentColor === '#22c55e' ? '34,197,94' :
                    stat.accentColor === '#3b82f6' ? '59,130,246' :
                    stat.accentColor === '#f59e0b' ? '245,158,11' :
                    '6,182,212'
                  },0.12)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {stat.icon}
              </div>
            </div>

            {/* Value */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px', marginBottom: '12px' }}>
              <span
                style={{
                  color: '#f1f5f9',
                  fontSize: '40px',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {stat.value}
              </span>
              <span style={{ color: '#94a3b8', fontSize: '16px', fontWeight: 400 }}>{stat.unit}</span>
            </div>

            {/* Trend + Sparkline */}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px' }}>
                  {stat.trendUp ? (
                    <TrendingUp size={12} color={stat.accentColor} />
                  ) : (
                    <TrendingDown size={12} color="#ef4444" />
                  )}
                  <span style={{ color: stat.accentColor, fontSize: '12px', fontWeight: 500, fontFamily: "'JetBrains Mono', monospace" }}>
                    {stat.trend}
                  </span>
                </div>
                <div style={{ color: '#475569', fontSize: '11px' }}>{stat.description}</div>

                {/* Status badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    marginTop: '10px',
                    padding: '3px 8px',
                    borderRadius: '20px',
                    background: `rgba(${
                      stat.accentColor === '#22c55e' ? '34,197,94' :
                      stat.accentColor === '#3b82f6' ? '59,130,246' :
                      stat.accentColor === '#f59e0b' ? '245,158,11' :
                      '6,182,212'
                    },0.1)`,
                    border: `1px solid ${stat.accentColor}25`,
                  }}
                >
                  <span style={{ color: stat.accentColor, fontSize: '10.5px', fontWeight: 500 }}>
                    {stat.statusLabel}
                  </span>
                </div>
              </div>
              <Sparkline data={stat.sparkData} color={stat.accentColor} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
