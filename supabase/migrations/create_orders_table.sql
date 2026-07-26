-- Run this in your Supabase SQL Editor
-- https://supabase.com/dashboard/project/verqhtsmuebvggtkmyrz/sql

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  
  -- Template info
  template_id text NOT NULL,
  template_title text NOT NULL,
  
  -- Client info
  full_name text NOT NULL,
  email text NOT NULL,
  whatsapp text NOT NULL,
  company text,
  
  -- Project brief
  domain_plan text,
  content_status text NOT NULL DEFAULT 'need_dummy',
  
  -- Add-ons (stored as JSON array)
  addons jsonb DEFAULT '[]',
  
  -- Extra notes
  notes text,
  
  -- Status tracking
  status text NOT NULL DEFAULT 'new' -- new | contacted | in_progress | done
);

-- Enable Row Level Security
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous insert" ON orders
  FOR INSERT TO anon WITH CHECK (true);

-- Allow authenticated users to insert too
CREATE POLICY "Allow authenticated insert" ON orders
  FOR INSERT TO authenticated WITH CHECK (true);

-- Allow service role to read all (for your dashboard)
CREATE POLICY "Allow service role full access" ON orders
  FOR ALL TO service_role USING (true);
