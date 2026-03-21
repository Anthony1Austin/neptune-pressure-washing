-- Run this in Neon / Postgres (Vercel Storage) after creating a database.
-- Env: DATABASE_URL (Neon provides this on Vercel)

CREATE TABLE IF NOT EXISTS booking_leads (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  address TEXT NOT NULL,
  preferred_date TEXT,
  preferred_time TEXT,
  message TEXT
);

CREATE INDEX IF NOT EXISTS idx_booking_leads_created_at ON booking_leads (created_at DESC);
