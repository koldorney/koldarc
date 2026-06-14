-- Koldarc — quote request capture
-- Stores leads submitted from the website's "Get a Quote" form.

create table if not exists public.quote_requests (
	id           uuid primary key default gen_random_uuid(),
	created_at   timestamptz not null default now(),
	name         text not null,
	phone        text not null,
	email        text,
	job_location text,
	service      text,
	message      text not null,
	-- light spam/audit fields
	source       text default 'website',
	user_agent   text
);

-- Row Level Security: the public site uses the anon key, which should ONLY be
-- able to insert new leads — never read, update, or delete them. You read the
-- leads from the Supabase dashboard (Table Editor) or an authenticated app.
alter table public.quote_requests enable row level security;

drop policy if exists "anon can submit a quote request" on public.quote_requests;
create policy "anon can submit a quote request"
	on public.quote_requests
	for insert
	to anon
	with check (true);

-- Handy index for reviewing newest leads first.
create index if not exists quote_requests_created_at_idx
	on public.quote_requests (created_at desc);
