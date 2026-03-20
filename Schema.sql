-- RebateWire Oklahoma – Database Schema
-- Run this in your Supabase SQL editor

-- Contractors table
create table if not exists contractors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text unique not null,
  state text not null default 'OK',
  created_at timestamptz not null default now()
);

-- Incentive programs table
create table if not exists incentives (
  id uuid primary key default gen_random_uuid(),
  state text not null,
  utility text,
  program_name text not null,
  value_amount numeric not null default 0,
  value_type text not null default 'rebate',
  equipment_type text,
  eligibility_rules_json jsonb,
  required_docs_json jsonb,
  active_status boolean not null default true,
  created_at timestamptz not null default now()
);

-- Jobs table
create table if not exists jobs (
  id uuid primary key default gen_random_uuid(),
  contractor_id uuid references contractors(id) on delete cascade,
  customer_name text not null,
  city text not null default 'Oklahoma City',
  state text not null default 'OK',
  utility_name text,
  proposed_equipment text not null,
  quote_amount numeric not null default 0,
  stage text not null default 'Lead',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Job documents table
create table if not exists job_documents (
  id uuid primary key default gen_random_uuid(),
  job_id uuid references jobs(id) on delete cascade,
  doc_type text not null,
  file_url text not null,
  uploaded_at timestamptz not null default now()
);

-- Row-level security (enable after setup)
alter table contractors enable row level security;
alter table jobs enable row level security;
alter table job_documents enable row level security;
