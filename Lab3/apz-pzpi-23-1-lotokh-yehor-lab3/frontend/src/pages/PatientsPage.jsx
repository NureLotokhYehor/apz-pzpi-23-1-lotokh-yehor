import React from 'react';
import PatientsList from '../components/PatientsList';
import { PawPrint } from 'lucide-react';

const PatientsPage = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>Patients Directory</h1>
          <p style={{ color: 'var(--text-muted)' }}>Manage and monitor all registered animals</p>
        </div>
        <button className="glass-button" style={{ background: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}>+ Add Patient</button>
      </header>

      <div className="glass-panel" style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ padding: '12px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)', borderRadius: '12px' }}>
            <PawPrint size={24} />
          </div>
          <h2>All Patients Overview</h2>
        </div>
        <PatientsList />
      </div>
    </>
  );
};

export default PatientsPage;
