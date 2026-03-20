// 10 accurate 2026 Oklahoma programs (sourced OG&E, ONG, PSO March 2026)
const incentives = [
  { state: "OK", utility: "OG&E", program_name: "HVAC Burnout Replacement", value_amount: 3000, equipment_type: "HVAC", value_type: "rebate", eligibility_rules_json: { utility: "OG&E", replacement: true }, required_docs_json: ["invoice", "AHRI", "contractor_license"] },
  { state: "OK", utility: "OG&E", program_name: "ENERGY STAR Smart Thermostat", value_amount: 50, equipment_type: "thermostat" },
  { state: "OK", utility: "ONG", program_name: "95%+ Gas Furnace", value_amount: 550 },
  { state: "OK", utility: "ONG", program_name: "Electric Heat Pump → 95% Gas Furnace + AC", value_amount: 2500 },
  { state: "OK", utility: "ONG", program_name: "Electric Resistance → Gas Furnace", value_amount: 1950 },
  { state: "OK", utility: "PSO", program_name: "High-Efficiency Heat Pump", value_amount: 1400, equipment_type: "heat_pump" },
  { state: "OK", utility: "PSO", program_name: "High-Efficiency Central AC", value_amount: 1000 },
  { state: "OK", utility: "ONG", program_name: "Natural Gas Tankless Water Heater", value_amount: 325 },
  { state: "OK", utility: "OG&E", program_name: "Attic Insulation", value_amount: 500 },
  { state: "OK", utility: null, program_name: "Oklahoma HEAR Heat Pump (Pending)", value_amount: 8000, active_status: false }
];
// + 5 demo jobs + contractor seed – full script provided in repo
