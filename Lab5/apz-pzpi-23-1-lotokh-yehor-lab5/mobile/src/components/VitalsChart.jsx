import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { time: '00:00', value: 65 },
  { time: '08:00', value: 80 },
  { time: '16:00', value: 56 },
  { time: '24:00', value: 60 },
];

const VitalsChart = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-panel" 
      style={{ padding: '16px', height: '250px', display: 'flex', flexDirection: 'column' }}
    >
      <h3 style={{ marginBottom: '16px', fontSize: '1rem', fontWeight: 500 }}>Heart Rate Trend</h3>
      <div style={{ width: '100%', flex: 1 }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-glass)" vertical={false} />
            <XAxis dataKey="time" stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)', fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)', fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: 'var(--bg-glass)', border: 'none', borderRadius: '8px' }} />
            <Area type="monotone" dataKey="value" stroke="var(--accent-primary)" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default VitalsChart;
