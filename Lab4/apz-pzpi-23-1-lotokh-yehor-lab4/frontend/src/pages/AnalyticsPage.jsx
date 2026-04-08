import React from 'react';
import { Activity } from 'lucide-react';

const AnalyticsPage = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>Analytics</h1>
          <p style={{ color: 'var(--text-muted)' }}>Deep dive into animal health metrics and trends</p>
        </div>
      </header>
      <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, minHeight: '400px' }}>
        <Activity size={48} color="var(--text-muted)" style={{ marginBottom: '16px' }} />
        <h2 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>Analytics Module</h2>
        <p style={{ color: 'var(--text-muted)' }}>This section is under construction.</p>
      </div>
    </>
  );
};

export default AnalyticsPage;
