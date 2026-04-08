import React from 'react';
import { Settings } from 'lucide-react';

const SettingsPage = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>Settings</h1>
          <p style={{ color: 'var(--text-muted)' }}>Configure your VetMonitor application preferences</p>
        </div>
      </header>

      <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, minHeight: '400px' }}>
        <Settings size={48} color="var(--text-muted)" style={{ marginBottom: '16px' }} />
        <h2 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>Settings Module</h2>
        <p style={{ color: 'var(--text-muted)' }}>This section is under construction.</p>
      </div>
    </>
  );
};

export default SettingsPage;
