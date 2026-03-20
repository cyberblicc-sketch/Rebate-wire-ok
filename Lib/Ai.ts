export function generateAIExplanation(job: Job, matches: any[]) {
  const total = matches.reduce((sum, m) => sum + m.estimated_value, 0);
  return `For your ${job.proposed_equipment} job in ${job.city}, OK with ${job.utility_name || 'your utility'}, you could save up to $${total} through OG&E and ONG programs right now. Your net cost drops from $${job.quote_amount} to about $${Math.max(0, job.quote_amount - total)}. Always verify income/utility details with the utility before promising – funds are first-come, first-served.`;
  // TODO: Replace with real Grok API call for even better copy
}
