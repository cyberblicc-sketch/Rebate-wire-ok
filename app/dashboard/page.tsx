'use client';

import { useState } from 'react';

const stages = ['Lead', 'Quoted', 'Approved', 'Installed', 'Submitted', 'Paid'];

interface StatCardProps {
  title: string;
  value: string | number;
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

export default function Dashboard() {
  const [stageFilter, setStageFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('OK');

  const totalQuoted = 0;
  const totalSavings = 0;
  const submittedCount = 0;

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Jobs Dashboard</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select
          className="border border-slate-300 rounded px-3 py-2 text-sm"
          value={stageFilter}
          onChange={(e) => setStageFilter(e.target.value)}
        >
          <option value="">All Stages</option>
          {stages.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          className="border border-slate-300 rounded px-3 py-2 text-sm"
          value={stateFilter}
          onChange={(e) => setStateFilter(e.target.value)}
        >
          <option value="OK">OK</option>
          <option value="CO">CO</option>
          <option value="NY">NY</option>
        </select>
      </div>

      {/* Stats Widget */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard title="Total Quoted" value={`$${totalQuoted}`} />
        <StatCard title="Est. Savings" value={`$${totalSavings}`} />
        <StatCard title="Submitted" value={submittedCount} />
      </div>

      {/* Jobs table placeholder */}
      <div className="bg-white rounded-lg shadow p-6 text-center text-slate-500">
        No jobs yet. Add your first job to get started.
      </div>
    </div>
  );
}

