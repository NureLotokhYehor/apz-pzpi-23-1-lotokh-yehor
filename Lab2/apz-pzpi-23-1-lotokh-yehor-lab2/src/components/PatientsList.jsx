import React from 'react';
import { motion } from 'framer-motion';

const patients = [
  { id: 1, name: 'Bella (Cow)', status: 'Healthy', temp: '38.5°C' },
  { id: 2, name: 'Max (Dog)', status: 'Critical', temp: '40.2°C' },
  { id: 3, name: 'Charlie (Horse)', status: 'Warning', temp: '39.0°C' },
];

const PatientsList = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel" 
      style={{ padding: '16px', display: 'flex', flexDirection: 'column' }}
    >
      <h3 style={{ marginBottom: '16px', fontSize: '1rem', fontWeight: 500 }}>Recent Patients</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {patients.map((patient) => (
          <div 
            key={patient.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              borderLeft: `3px solid ${patient.status === 'Critical' ? 'var(--danger)' : patient.status === 'Warning' ? 'var(--warning)' : 'var(--success)'}`
            }}
          >
            <div>
              <h4 style={{ fontWeight: 600, fontSize: '0.95rem' }}>{patient.name}</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                Temp: {patient.temp}
              </p>
            </div>
            <span style={{ 
              fontSize: '0.75rem',
              padding: '2px 8px', 
              borderRadius: '20px',
              background: patient.status === 'Critical' ? 'rgba(239, 68, 68, 0.1)' : patient.status === 'Warning' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(16, 185, 129, 0.1)',
              color: patient.status === 'Critical' ? 'var(--danger)' : patient.status === 'Warning' ? 'var(--warning)' : 'var(--success)'
            }}>
              {patient.status}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default PatientsList;
