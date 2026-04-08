import React from 'react';
import { Activity, Bell } from 'lucide-react';

const MobileHeader = () => {
  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '16px',
      position: 'sticky',
      top: 0,
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(12px)',
      zIndex: 40,
      borderBottom: '1px solid var(--border-glass)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ padding: '6px', background: 'var(--accent-primary)', borderRadius: '10px' }}>
          <Activity color="white" size={20} />
        </div>
        <h1 style={{ fontSize: '1.2rem', margin: 0 }}>VetMonitor</h1>
      </div>
      
      <div style={{ position: 'relative' }}>
        <Bell size={24} color="var(--text-muted)" />
        <span style={{ 
          position: 'absolute',
          top: 0,
          right: 0,
          width: '10px',
          height: '10px',
          background: 'var(--danger)',
          borderRadius: '50%',
          border: '2px solid var(--bg-dark)'
        }}></span>
      </div>
    </header>
  );
};
export default MobileHeader;
