import React from 'react';
import { Bell } from 'lucide-react';

const AlertsPage = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>Alerts & Notifications</h1>
          <p style={{ color: 'var(--text-muted)' }}>Review recent critical health alerts</p>
        </div>
      </header>
      <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, minHeight: '400px' }}>
        <Bell size={48} color="var(--text-muted)" style={{ marginBottom: '16px' }} />
        <h2 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>Alerts Module</h2>
        <p style={{ color: 'var(--text-muted)' }}>This section is under construction.</p>
      </div>
    </>
  );
};

export default AlertsPage;
