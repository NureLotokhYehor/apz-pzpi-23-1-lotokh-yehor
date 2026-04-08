import React from 'react';
import { motion } from 'framer-motion';

const MetricCard = ({ title, value, unit, icon: Icon, color, trend, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="glass-panel"
      style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '4px' }}>{title}</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{value}</h3>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{unit}</span>
          </div>
        </div>
        <div style={{ 
          padding: '10px', 
          background: `rgba(${color}, 0.1)`, 
          borderRadius: '10px',
          color: `rgb(${color})`
        }}>
          <Icon size={20} />
        </div>
      </div>
    </motion.div>
  );
};
export default MetricCard;
