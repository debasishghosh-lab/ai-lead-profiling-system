import { useState, useCallback } from 'react';
import { readVisitStorage, writeVisitStorage } from '../utils/storage';

const VALID_SECTIONS = [
  'homepage',
  'sales_bots',
  'organizational_development',
  'pricing',
  'contact',
];

export function useVisitHistory() {
  const [visitHistory, setVisitHistory] = useState(readVisitStorage);

  const addVisit = useCallback((section) => {
    if (!VALID_SECTIONS.includes(section)) return;

    const current = readVisitStorage();
    if (current.some((entry) => entry.page === section)) return;

    const updated = [
      ...current,
      { page: section, timestamp: new Date().toISOString() },
    ];

    writeVisitStorage(updated);
    setVisitHistory(updated);
  }, []);

  const clearHistory = useCallback(() => {
    writeVisitStorage([]);
    setVisitHistory([]);
  }, []);

  return { visitHistory, addVisit, clearHistory };
}
