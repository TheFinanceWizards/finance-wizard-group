import { neon } from '@neondatabase/serverless';
import { z } from 'zod';

const schema = z.object({
  fullName: z
    .string({ required_error: 'Full name is required' })
    .min(2, 'Name must be at least 2 characters')
    .max(100)
    .transform((s) => s.trim()),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address')
    .transform((s) => s.toLowerCase().trim()),
  phone: z
    .string({ required_error: 'Phone number is required' })
    .min(7, 'Phone number is too short')
    .max(20)
    .transform((s) => s.trim()),
  state: z
    .string({ required_error: 'State is required' })
    .min(2)
    .transform((s) => s.trim()),
  licensed: z.string({ required_error: 'License status is required' }).min(1),
  experience: z.string({ required_error: 'Experience level is required' }).min(1),
  instagram: z.string().max(50).optional().default(''),
  message: z.string().max(2000).optional().default(''),
});

const ALLOWED_ORIGIN =
  process.env.NODE_ENV === 'production'
    ? 'https://thefinancewizardgroup.com'
    : '*';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // --- Validate ---
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    const issues = parsed.error.issues.map((i) => ({
      field: i.path[0] ?? 'unknown',
      message: i.message,
    }));
    return res.status(400).json({ error: 'Validation failed', issues });
  }

  const { fullName, email, phone, state, licensed, experience, instagram, message } =
    parsed.data;

  // --- Persist ---
  if (!process.env.DATABASE_URL) {
    console.warn('DATABASE_URL not set — skipping DB save');
    return res.status(200).json({ success: true, warning: 'Database not configured' });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);

    await sql`
      INSERT INTO applications
        (full_name, email, phone, state, licensed, experience, instagram, message)
      VALUES
        (${fullName}, ${email}, ${phone}, ${state}, ${licensed}, ${experience}, ${instagram}, ${message})
    `;

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[submit-application] DB error:', err);
    return res.status(500).json({ error: 'Failed to save application. Please try again.' });
  }
}
