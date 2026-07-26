import { validateEmail } from '../utils/validation';

const DEFAULT_TIMEOUT = 15000;

function getWebhookUrl() {
  const url = import.meta.env.VITE_N8N_WEBHOOK_URL;
  if (!url) {
    return '/webhook/lead-profile';
  }
  return url;
}

function validatePayload({ name, email, company, query }) {
  const errors = [];

  if (!name || typeof name !== 'string' || !name.trim()) {
    errors.push('name is required');
  }
  if (!email || typeof email !== 'string' || !email.trim()) {
    errors.push('email is required');
  } else if (!validateEmail(email.trim())) {
    errors.push('email is invalid');
  }
  if (!company || typeof company !== 'string' || !company.trim()) {
    errors.push('company is required');
  }
  if (!query || typeof query !== 'string' || !query.trim()) {
    errors.push('query (message) is required');
  }

  if (errors.length > 0) {
    throw new Error(`Validation failed: ${errors.join('; ')}`);
  }
}

function fetchWithTimeout(resource, options = {}) {
  const { timeout = DEFAULT_TIMEOUT, ...fetchOptions } = options;

  return Promise.race([
    fetch(resource, fetchOptions),
    new Promise((_, reject) =>
      setTimeout(
        () => reject(new Error(`Request timed out after ${timeout}ms`)),
        timeout
      )
    ),
  ]);
}

export async function submitLead({
  name,
  email,
  company,
  query,
  visit_history = [],
}) {
  validatePayload({ name, email, company, query });

  const url = getWebhookUrl();

  let response;
  try {
    response = await fetchWithTimeout(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        query: query.trim(),
        visit_history,
      }),
      timeout: DEFAULT_TIMEOUT,
    });
  } catch (err) {
    if (
      err.name === 'TypeError' ||
      err.message.includes('Failed to fetch') ||
      err.message.includes('NetworkError')
    ) {
      throw new Error(
        'Network error. Please check your connection and try again.'
      );
    }
    if (err.message.includes('timed out')) {
      throw new Error(
        'Request timed out. The server took too long to respond.'
      );
    }
    throw err;
  }

  if (!response.ok) {
    let detail = '';
    try {
      detail = await response.text();
    } catch {
      // unreadable body
    }
    throw new Error(
      detail
        ? `Server error (${response.status}): ${detail}`
        : `Server error (${response.status}). Please try again later.`
    );
  }

  let result;
  try {
    result = await response.json();
  } catch {
    result = { success: true };
  }

  return result;
}
