import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';

/**
 * Returns a Supabase client if the project is configured, otherwise null.
 * We read from `$env/dynamic/public` so the app builds and runs fine before
 * any Supabase keys are added — the form simply falls back to "call us".
 */
export function getSupabase(): SupabaseClient | null {
	const url = env.PUBLIC_SUPABASE_URL;
	const key = env.PUBLIC_SUPABASE_ANON_KEY;
	if (!url || !key) return null;
	return createClient(url, key, { auth: { persistSession: false } });
}

export const isSupabaseConfigured = () =>
	Boolean(env.PUBLIC_SUPABASE_URL && env.PUBLIC_SUPABASE_ANON_KEY);
