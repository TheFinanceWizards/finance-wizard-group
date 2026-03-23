-- Run this once in your Neon dashboard (SQL Editor) before going live.
-- Neon: https://console.neon.tech → your project → SQL Editor

CREATE TABLE IF NOT EXISTS applications (
  id           SERIAL PRIMARY KEY,
  full_name    TEXT        NOT NULL,
  email        TEXT        NOT NULL,
  phone        TEXT        NOT NULL,
  state        TEXT        NOT NULL,
  licensed     TEXT        NOT NULL,
  experience   TEXT        NOT NULL,
  instagram    TEXT        NOT NULL DEFAULT '',
  message      TEXT        NOT NULL DEFAULT '',
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for quick lookup by email (duplicate detection)
CREATE INDEX IF NOT EXISTS idx_applications_email
  ON applications (email);

-- Index for dashboard queries sorted by newest first
CREATE INDEX IF NOT EXISTS idx_applications_submitted_at
  ON applications (submitted_at DESC);
