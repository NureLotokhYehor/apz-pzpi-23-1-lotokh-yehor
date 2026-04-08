import React from 'react';
import { HeartPulse, Thermometer, ActivitySquare, AlertCircle } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import VitalsChart from '../components/VitalsChart';
import PatientsList from '../components/PatientsList';

const DashboardPage = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>Overview</h1>
          <p style={{ color: 'var(--text-muted)' }}>Real-time animal health monitoring Dashboard</p>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button className="glass-button">Generate Report</button>
          <button className="glass-button" style={{ background: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}>+ Add Patient</button>
        </div>
      </header>

      <div className="dashboard-grid">
        <MetricCard 
          title="Total Monitored" 
          value="124" 
          unit="" 
          icon={ActivitySquare} 
          color="59, 130, 246" 
          trend={12} 
          delay={0.1}
        />
        <MetricCard 
          title="Avg Heart Rate" 
          value="75" 
          unit="bpm" 
          icon={HeartPulse} 
          color="16, 185, 129" 
          trend={-2} 
          delay={0.2}
        />
        <MetricCard 
          title="Avg Temperature" 
          value="38.5" 
          unit="°C" 
          icon={Thermometer} 
          color="245, 158, 11" 
          trend={0} 
          delay={0.3}
        />
        <MetricCard 
          title="Active Alerts" 
          value="3" 
          unit="" 
          icon={AlertCircle} 
          color="239, 68, 68" 
          delay={0.4}
        />
      </div>

      <div className="charts-grid">
        <VitalsChart />
        <PatientsList />
      </div>
    </>
  );
};

export default DashboardPage;
