import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, PawPrint, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomNav = () => {
  const tabs = [
    { icon: LayoutDashboard, label: 'Home', path: '/' },
    { icon: PawPrint, label: 'Patients', path: '/patients' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="glass-panel"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-around',
        padding: '12px 0 20px 0',
        borderRadius: '24px 24px 0 0',
        borderBottom: 'none',
        zIndex: 50
      }}
    >
      {tabs.map((tab, idx) => (
        <NavLink 
          key={idx}
          to={tab.path}
          style={({ isActive }) => ({ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            textDecoration: 'none',
            color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
            transition: 'color 0.2s',
          })}
        >
          {({ isActive }) => (
            <>
              <tab.icon size={24} />
              <span style={{ fontSize: '0.75rem', fontWeight: isActive ? 600 : 400 }}>{tab.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </motion.div>
  );
};
export default BottomNav;
