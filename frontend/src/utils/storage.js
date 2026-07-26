const TRACKING_KEY = 'ai_lead_visits';

export function readVisitStorage() {
  try {
    const raw = localStorage.getItem(TRACKING_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeVisitStorage(history) {
  try {
    localStorage.setItem(TRACKING_KEY, JSON.stringify(history));
  } catch {
    // storage full or unavailable
  }
}
