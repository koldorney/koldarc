import { fail } from '@sveltejs/kit';
import { getSupabase } from '$lib/server/supabase';
import { business } from '$lib/config';
import type { Actions } from './$types';

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export const actions: Actions = {
	quote: async ({ request }) => {
		const form = await request.formData();

		const name = String(form.get('name') ?? '').trim();
		const phone = String(form.get('phone') ?? '').trim();
		const email = String(form.get('email') ?? '').trim();
		const job_location = String(form.get('job_location') ?? '').trim();
		const service = String(form.get('service') ?? '').trim();
		const message = String(form.get('message') ?? '').trim();
		// Honeypot — bots fill hidden fields, humans don't.
		const honeypot = String(form.get('company') ?? '').trim();

		const values = { name, phone, email, job_location, service, message };

		if (honeypot) {
			// Silently accept to not tip off bots; nothing is stored.
			return { success: true };
		}

		const errors: Record<string, string> = {};
		if (!name) errors.name = 'Please tell us your name.';
		if (!phone) errors.phone = 'A phone number lets us reach you fast.';
		if (!message) errors.message = 'Tell us a bit about the job.';
		if (email && !isEmail(email)) errors.email = 'That email looks off.';

		if (Object.keys(errors).length) {
			return fail(400, { errors, values });
		}

		const supabase = getSupabase();
		if (!supabase) {
			// Not connected yet — never silently drop a lead. Point them to the phone.
			return fail(503, {
				values,
				formError: `Our online form isn't live yet — please call or text us at ${business.phone} and we'll get right on it.`
			});
		}

		const { error } = await supabase.from('quote_requests').insert({
			name,
			phone,
			email: email || null,
			job_location: job_location || null,
			service: service || null,
			message,
			source: 'website',
			user_agent: request.headers.get('user-agent')
		});

		if (error) {
			console.error('quote_requests insert failed:', error.message);
			return fail(500, {
				values,
				formError: `Something went wrong saving your request. Please call or text ${business.phone}.`
			});
		}

		return { success: true };
	}
};
