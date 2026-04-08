import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { time: '00:00', value: 65 },
  { time: '04:00', value: 59 },
  { time: '08:00', value: 80 },
  { time: '12:00', value: 81 },
  { time: '16:00', value: 56 },
  { time: '20:00', value: 55 },
  { time: '24:00', value: 60 },
];

const VitalsChart = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="glass-panel" 
      style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <h3 style={{ marginBottom: '24px', fontSize: '1.2rem', fontWeight: 500 }}>Average Heart Rate (BPM)</h3>
      <div style={{ width: '100%', flex: 1, minHeight: '300px' }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-glass)" vertical={false} />
            <XAxis dataKey="time" stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
            <YAxis stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ 
                background: 'var(--bg-glass)', 
                border: '1px solid var(--border-glass)',
                borderRadius: '8px',
                backdropFilter: 'blur(12px)',
                color: 'var(--text-main)'
              }} 
            />
            <Area type="monotone" dataKey="value" stroke="var(--accent-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default VitalsChart;
