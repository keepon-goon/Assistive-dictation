import { motion } from 'motion/react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

const days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

const trendData = [
  { day: '周一', accuracy: 68, responseTime: 6.2, weakPoints: 7 },
  { day: '周二', accuracy: 71, responseTime: 5.8, weakPoints: 7 },
  { day: '周三', accuracy: 70, responseTime: 5.5, weakPoints: 6 },
  { day: '周四', accuracy: 74, responseTime: 5.2, weakPoints: 6 },
  { day: '周五', accuracy: 73, responseTime: 4.8, weakPoints: 5 },
  { day: '周六', accuracy: 76, responseTime: 4.5, weakPoints: 5 },
  { day: '周日', accuracy: 78, responseTime: 4.2, weakPoints: 4 },
];

const chartConfigs = [
  {
    key: 'accuracy',
    title: '正确率趋势',
    subtitle: 'Accuracy Rate',
    unit: '%',
    color: '#3b82f6',
    gradientId: 'accuracyGrad',
    trend: '+10%',
    trendUp: true,
    description: '7 天整体上升',
    min: 60,
    max: 90,
    tooltipLabel: '正确率',
  },
  {
    key: 'responseTime',
    title: '平均响应时长',
    subtitle: 'Response Time',
    unit: 's',
    color: '#06b6d4',
    gradientId: 'responseGrad',
    trend: '-2.0s',
    trendUp: true,
    description: '响应速度持续加快',
    min: 3,
    max: 8,
    tooltipLabel: '响应时长',
  },
  {
    key: 'weakPoints',
    title: '薄弱知识点数量',
    subtitle: 'Weak Knowledge Points',
    unit: '个',
    color: '#f59e0b',
    gradientId: 'weakGrad',
    trend: '-3个',
    trendUp: true,
    description: '知识点逐步突破',
    min: 2,
    max: 10,
    tooltipLabel: '薄弱点',
  },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
  unit?: string;
  tooltipLabel?: string;
  color?: string;
}

function CustomTooltip({ active, payload, label, unit, tooltipLabel, color }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          padding: '10px 14px',
          background: 'rgba(10, 16, 32, 0.95)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '10px',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
        }}
      >
        <div style={{ color: '#64748b', fontSize: '11px', marginBottom: '4px' }}>{label}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
          <span style={{ color: color, fontSize: '18px', fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>
            {payload[0].value}
          </span>
          <span style={{ color: '#64748b', fontSize: '12px' }}>{unit}</span>
        </div>
        <div style={{ color: '#475569', fontSize: '10.5px', marginTop: '2px' }}>{tooltipLabel}</div>
      </div>
    );
  }
  return null;
}

export function TrendSection() {
  return (
    <section
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 48px 80px',
      }}
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '3px', height: '16px', borderRadius: '2px', background: 'linear-gradient(180deg, #3b82f6, #818cf8)' }} />
          <span style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em' }}>
            最近 7 天学习趋势 · 7-DAY LEARNING TRENDS
          </span>
        </div>
        <span style={{ color: '#334155', fontSize: '11.5px' }}>
          2026年04月21日 — 04月27日
        </span>
      </motion.div>

      {/* Charts grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {chartConfigs.map((cfg, idx) => (
          <motion.div
            key={cfg.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: '22px 22px 16px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '18px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top glow line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '20%',
                right: '20%',
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${cfg.color}60, transparent)`,
              }}
            />

            {/* Header */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: '#e2e8f0', fontSize: '13.5px', fontWeight: 500, lineHeight: 1.3 }}>
                    {cfg.title}
                  </div>
                  <div style={{ color: '#475569', fontSize: '10px', marginTop: '2px', letterSpacing: '0.03em' }}>
                    {cfg.subtitle}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      justifyContent: 'flex-end',
                      marginBottom: '2px',
                    }}
                  >
                    {cfg.trendUp ? (
                      <TrendingUp size={12} color={cfg.color} />
                    ) : (
                      <TrendingDown size={12} color="#ef4444" />
                    )}
                    <span
                      style={{
                        color: cfg.color,
                        fontSize: '12px',
                        fontWeight: 600,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {cfg.trend}
                    </span>
                  </div>
                  <div style={{ color: '#475569', fontSize: '10px' }}>{cfg.description}</div>
                </div>
              </div>

              {/* Current value */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginTop: '10px' }}>
                <span
                  style={{
                    color: '#f1f5f9',
                    fontSize: '28px',
                    fontWeight: 700,
                    letterSpacing: '-0.04em',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {trendData[trendData.length - 1][cfg.key as keyof typeof trendData[0]]}
                </span>
                <span style={{ color: '#64748b', fontSize: '14px' }}>{cfg.unit}</span>
                <span style={{ color: '#334155', fontSize: '11px', marginLeft: '4px' }}>今日</span>
              </div>
            </div>

            {/* Chart */}
            <div style={{ height: '100px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                  <defs>
                    <linearGradient id={cfg.gradientId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={cfg.color} stopOpacity={0.25} />
                      <stop offset="100%" stopColor={cfg.color} stopOpacity={0.01} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.04)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="day"
                    tick={{ fill: '#334155', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={6}
                  />
                  <YAxis
                    domain={[cfg.min, cfg.max]}
                    tick={{ fill: '#334155', fontSize: 9 }}
                    axisLine={false}
                    tickLine={false}
                    tickCount={3}
                  />
                  <Tooltip
                    content={
                      <CustomTooltip
                        unit={cfg.unit}
                        tooltipLabel={cfg.tooltipLabel}
                        color={cfg.color}
                      />
                    }
                    cursor={{ stroke: cfg.color, strokeWidth: 1, strokeOpacity: 0.3 }}
                  />
                  <Area
                    type="monotone"
                    dataKey={cfg.key}
                    stroke={cfg.color}
                    strokeWidth={2}
                    fill={`url(#${cfg.gradientId})`}
                    dot={false}
                    activeDot={{
                      r: 4,
                      fill: cfg.color,
                      stroke: 'rgba(6,12,26,0.8)',
                      strokeWidth: 2,
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}