import React from 'react';
import { motion } from 'framer-motion';

const MetricCard = ({ title, value, unit, icon: Icon, color, trend, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="glass-panel"
      style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>{title}</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 600 }}>{value}</h3>
            <span style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{unit}</span>
          </div>
        </div>
        <div style={{ 
          padding: '12px', 
          background: `rgba(${color}, 0.1)`, 
          borderRadius: '12px',
          color: `rgb(${color})`
        }}>
          <Icon size={24} />
        </div>
      </div>
      
      {trend && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
          <span style={{ 
            color: trend > 0 ? 'var(--success)' : 'var(--danger)',
            background: trend > 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            padding: '2px 8px',
            borderRadius: '4px'
          }}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
          <span style={{ color: 'var(--text-muted)' }}>vs last week</span>
        </div>
      )}
    </motion.div>
  );
};

export default MetricCard;
