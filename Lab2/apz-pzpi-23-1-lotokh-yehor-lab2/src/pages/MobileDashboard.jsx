import React from 'react';
import { HeartPulse, Thermometer, ActivitySquare, AlertCircle } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import VitalsChart from '../components/VitalsChart';
import PatientsList from '../components/PatientsList';

const MobileDashboard = () => {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <MetricCard title="Monitored" value="124" icon={ActivitySquare} color="59, 130, 246" delay={0.1} />
        <MetricCard title="Alerts" value="3" icon={AlertCircle} color="239, 68, 68" delay={0.2} />
        <MetricCard title="Avg HR" value="75" unit="bpm" icon={HeartPulse} color="16, 185, 129" delay={0.3} />
        <MetricCard title="Avg Temp" value="38.5" unit="°C" icon={Thermometer} color="245, 158, 11" delay={0.4} />
      </div>
      <VitalsChart />
      <PatientsList />
    </>
  );
}
export default MobileDashboard;
