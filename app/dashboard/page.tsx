// Filters
<select onChange={setStageFilter}> {stages} </select>
<select defaultValue="OK" onChange={setStateFilter}> OK, CO, NY </select>

// Stats Widget (Upgrade 3)
<div className="grid grid-cols-3 gap-4">
  <StatCard title="Total Quoted" value={`$${totalQuoted}`} />
  <StatCard title="Est. Savings" value={`$${totalSavings}`} />
  <StatCard title="Submitted" value={submittedCount} />
</div>

// Recent jobs table with filters applied
