interface PrintPageProps {
  params: { id: string };
}

export default function PrintPage({ params }: PrintPageProps) {
  return (
    <div className="min-h-screen bg-white p-8 print:p-0">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Rebate Proposal</h1>
        <p className="text-slate-600 mb-6">Job ID: {params.id}</p>
        <div className="border border-slate-200 rounded-lg p-6">
          <p className="text-slate-500">
            Contractor branding, incentives table, net cost, and disclaimer will appear here.
          </p>
        </div>
        <p className="text-xs text-slate-400 mt-8">
          Always verify income/utility details with the utility before promising – funds are
          first-come, first-served.
        </p>
      </div>
    </div>
  );
}
