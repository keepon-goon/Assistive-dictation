import { motion } from 'motion/react';
import { Construction } from 'lucide-react';
import { Link } from 'react-router';

interface PlaceholderPageProps {
  title: string;
  subtitle: string;
}

export function PlaceholderPage({ title, subtitle }: PlaceholderPageProps) {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '14px',
            background: 'rgba(59,130,246,0.1)',
            border: '1px solid rgba(59,130,246,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
          }}
        >
          <Construction size={24} color="#3b82f6" />
        </div>
        <h1
          style={{
            color: '#f1f5f9',
            fontSize: '28px',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            marginBottom: '8px',
          }}
        >
          {title}
        </h1>
        <p style={{ color: '#475569', fontSize: '13px', marginBottom: '4px' }}>{subtitle}</p>
        <p style={{ color: '#334155', fontSize: '12px', marginBottom: '28px' }}>
          该页面正在开发中，敬请期待
        </p>
        <Link
          to="/"
          style={{
            padding: '10px 22px',
            borderRadius: '10px',
            background: 'rgba(59,130,246,0.1)',
            border: '1px solid rgba(59,130,246,0.2)',
            color: '#60a5fa',
            fontSize: '13px',
            textDecoration: 'none',
            fontWeight: 500,
          }}
        >
          ← 返回学习驾驶舱
        </Link>
      </motion.div>
    </div>
  );
}
