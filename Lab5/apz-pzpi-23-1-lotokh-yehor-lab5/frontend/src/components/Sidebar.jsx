import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, LayoutDashboard, PawPrint, Bell, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: PawPrint, label: 'Patients', path: '/patients' },
    { icon: Activity, label: 'Analytics', path: '/analytics' },
    { icon: Bell, label: 'Alerts', path: '/alerts' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <motion.div 
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="glass-panel"
      style={{
        width: '250px',
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0 24px 24px 0',
        borderLeft: 'none',
        borderTop: 'none',
        borderBottom: 'none'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', padding: '0 8px' }}>
        <div style={{ padding: '8px', background: 'var(--accent-primary)', borderRadius: '12px', boxShadow: '0 0 15px var(--accent-glow)' }}>
          <Activity color="white" size={24} />
        </div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>VetMonitor</h2>
      </div>

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {menuItems.map((item, index) => (
          <NavLink 
            key={index}
            to={item.path}
            style={({ isActive }) => ({ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              padding: '12px 16px',
              borderRadius: '12px',
              textDecoration: 'none',
              color: isActive ? 'white' : 'var(--text-muted)',
              background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
              transition: 'all 0.2s',
            })}
            className="sidebar-link"
          >
            <item.icon size={20} />
            <span style={{ fontWeight: 500 }}>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div style={{
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          padding: '12px 16px',
          borderRadius: '12px',
          cursor: 'pointer',
          color: 'var(--danger)',
          transition: 'background 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'}
        onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
      >
        <LogOut size={20} />
        <span style={{ fontWeight: 500 }}>Logout</span>
      </div>
    </motion.div>
  );
};

export default Sidebar;
