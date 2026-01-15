# NavajasVIP - Sitio web

Estructura inicial del proyecto Next.js + Tailwind para la barbería e indumentaria NavajasVIP.

Comandos:
- npm install
- npm run dev

Environment variables (create a `.env.local` from `.env.local.example`):
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY
- SERVER_ADMIN_TOKEN
- (optional) GOOGLE_PRIVATE_KEY, GOOGLE_SERVICE_ACCOUNT_EMAIL, G_CALENDAR_ID

SQL para crear la tabla bookings (ejemplo para Postgres / Supabase):

CREATE TABLE public.bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service_id text NOT NULL,
  service_name text NOT NULL,
  start timestamptz NOT NULL,
  end timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);