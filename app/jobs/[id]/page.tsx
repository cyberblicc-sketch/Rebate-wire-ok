interface JobPageProps {
  params: Promise<{ id: string }>;
}

export default async function JobPage({ params }: JobPageProps) {
  const { id } = await params;
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <h1 className="text-2xl font-bold text-slate-900 mb-4">Job Details</h1>
      <p className="text-slate-600">Job ID: {id}</p>
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <p className="text-slate-500">Job details and rebate matches will appear here.</p>
      </div>
    </div>
  );
}
