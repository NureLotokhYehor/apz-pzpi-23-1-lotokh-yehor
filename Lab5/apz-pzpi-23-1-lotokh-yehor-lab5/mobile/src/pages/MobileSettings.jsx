import React from 'react';
import { Settings } from 'lucide-react';

const MobileSettings = () => {
  return (
    <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, minHeight: '60vh' }}>
      <Settings size={48} color="var(--text-muted)" style={{ marginBottom: '16px' }} />
      <h2 style={{ color: 'var(--text-main)', marginBottom: '8px', fontSize: '1.2rem' }}>Settings</h2>
      <button className="glass-button" style={{ marginTop: '20px', width: '100%' }}>Edit Profile</button>
      <button className="glass-button" style={{ marginTop: '10px', width: '100%', color: 'var(--danger)', borderColor: 'var(--danger)' }}>Logout</button>
    </div>
  );
};
export default MobileSettings;
