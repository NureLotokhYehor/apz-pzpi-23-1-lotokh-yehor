import React from 'react';
import PatientsList from '../components/PatientsList';
import { PawPrint } from 'lucide-react';

const MobilePatients = () => {
  return (
    <>
      <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ padding: '10px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)', borderRadius: '10px' }}>
            <PawPrint size={20} />
          </div>
          <h2 style={{ fontSize: '1.2rem' }}>All Patients</h2>
        </div>
        <button className="glass-button" style={{ background: 'var(--accent-primary)', borderColor: 'var(--accent-primary)', marginBottom: '16px' }}>+ Add Patient</button>
        <PatientsList />
      </div>
    </>
  );
};
export default MobilePatients;
