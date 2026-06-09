-- ============================================================
-- KERGOAT ARGENTINA — Schema de base de datos
-- Ejecutar en Supabase SQL Editor
-- ============================================================

-- Métricas del dashboard (editables manualmente desde el admin)
create table if not exists public.metrics (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,          -- ej: 'asesorias_agendadas'
  label text not null,               -- ej: 'Asesorías Agendadas'
  value text not null,               -- ej: '24'
  trend text,                        -- ej: '+12% vs mes anterior'
  updated_at timestamptz default now()
);

-- Contenido editable de cada página
create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  page text not null,                -- ej: 'home', 'foundation', 'casos'
  field text not null,               -- ej: 'hero_title', 'hero_subtitle'
  value text not null,
  updated_at timestamptz default now(),
  unique(page, field)
);

-- Casos de éxito (editables desde el admin)
create table if not exists public.casos (
  id uuid primary key default gen_random_uuid(),
  sector text not null,
  title text not null,
  description text not null,
  metric_value text not null,
  metric_label text not null,
  featured boolean default false,
  orden integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================================
-- Datos iniciales — Métricas
-- ============================================================
insert into public.metrics (key, label, value, trend) values
  ('asesorias_agendadas', 'Asesorías Agendadas', '24', '+12% vs mes anterior'),
  ('madurez_clientes', 'Madurez de Clientes', '7.4', 'Estabilidad sistémica'),
  ('proyectos_growth', 'Proyectos en Etapa Growth', '09', null)
on conflict (key) do nothing;

-- ============================================================
-- Datos iniciales — Casos de éxito
-- ============================================================
insert into public.casos (sector, title, description, metric_value, metric_label, featured, orden) values
  ('LOGÍSTICA INTEGRAL', 'Optimización Estructural 180°', 'De un caos operativo a un sistema de gestión automatizado. Logramos una reducción del 40% en tiempos de entrega mediante el rediseño de flujos sistémicos.', '+45%', 'Eficiencia', true, 1),
  ('AGROINDUSTRIA', 'Expansión Multiregional', 'Escalamiento de operaciones desde Buenos Aires a 3 provincias adicionales bajo el Método Impulso 90.', '3.2x', 'ROI Estimado', false, 2),
  ('RETAIL MODA', 'Saneamiento Financiero', 'Reestructuración de pasivos y optimización de márgenes de contribución para cadena de 15 sucursales.', '-22%', 'Costos Fijos', false, 3),
  ('TECH STARTUP', 'Cultura del Orden', 'Implementación de KPIs sistémicos y protocolos de comunicación interna en equipo de 50+ personas.', '100%', 'Fidelización', false, 4)
on conflict do nothing;

-- ============================================================
-- RLS — Solo usuarios autenticados pueden editar
-- ============================================================
alter table public.metrics enable row level security;
alter table public.site_content enable row level security;
alter table public.casos enable row level security;

-- Lectura pública (el sitio público lee las métricas y casos)
create policy "Lectura pública de métricas" on public.metrics for select using (true);
create policy "Lectura pública de contenido" on public.site_content for select using (true);
create policy "Lectura pública de casos" on public.casos for select using (true);

-- Escritura solo para usuarios autenticados (admin)
create policy "Admin puede modificar métricas" on public.metrics for all using (auth.role() = 'authenticated');
create policy "Admin puede modificar contenido" on public.site_content for all using (auth.role() = 'authenticated');
create policy "Admin puede modificar casos" on public.casos for all using (auth.role() = 'authenticated');
