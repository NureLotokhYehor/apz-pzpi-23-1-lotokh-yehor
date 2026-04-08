import React from 'react';
import { motion } from 'framer-motion';

const patients = [
  { id: 1, name: 'Bella (Cow)', status: 'Healthy', temp: '38.5°C', heartRate: '60 bpm', alert: false },
  { id: 2, name: 'Max (Dog)', status: 'Critical', temp: '40.2°C', heartRate: '120 bpm', alert: true },
  { id: 3, name: 'Charlie (Horse)', status: 'Warning', temp: '39.0°C', heartRate: '45 bpm', alert: true },
  { id: 4, name: 'Luna (Cat)', status: 'Healthy', temp: '38.1°C', heartRate: '130 bpm', alert: false },
];

const PatientsList = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-panel" 
      style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}
    >
      <h3 style={{ marginBottom: '24px', fontSize: '1.2rem', fontWeight: 500 }}>Recent Patients</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto' }}>
        {patients.map((patient) => (
          <div 
            key={patient.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              borderLeft: `4px solid ${patient.alert ? (patient.status === 'Critical' ? 'var(--danger)' : 'var(--warning)') : 'var(--success)'}`
            }}
          >
            <div>
              <h4 style={{ fontWeight: 600 }}>{patient.name}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Temp: {patient.temp} | HR: {patient.heartRate}
              </p>
            </div>
            <span style={{ 
              fontSize: '0.8rem',
              padding: '4px 12px', 
              borderRadius: '20px',
              background: patient.alert ? (patient.status === 'Critical' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)') : 'rgba(16, 185, 129, 0.1)',
              color: patient.alert ? (patient.status === 'Critical' ? 'var(--danger)' : 'var(--warning)') : 'var(--success)'
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
