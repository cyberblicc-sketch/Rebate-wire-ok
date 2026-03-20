export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Rebates Made Simple for Oklahoma HVAC Contractors
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Find and track utility rebates from OG&E, ONG, and PSO for every job.
        </p>
        <a
          href="/dashboard"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

